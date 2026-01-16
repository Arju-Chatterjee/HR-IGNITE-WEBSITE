import { useState, useRef, useEffect } from 'react';
import { HfInference } from '@huggingface/inference';
import { solarKnowledgeBase, getContextualAnswer, buildPromptContext, defaultResponse } from '../utils/solarKnowledgeBase';

const AIChatbot = () => {
    type Message = {
        role: string;
        content: string;
        timestamp: Date;
        isWhatsAppPrompt?: boolean;
    };

    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'bot',
            content: 'Hello! I\'m your solar assistant. Ask me anything about solar installations, subsidies, or our services. You have 10 questions for this session.',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [questionCount, setQuestionCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const textareaRef = useRef(null);
    const MAX_QUESTIONS = 10;
    const MAX_CHARACTERS = 500;

    const HF_TOKEN = import.meta.env.VITE_HF_TOKEN;
    const hf = new HfInference(HF_TOKEN);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
        }
    }, [inputValue]);

    const handleClose = () => {
        setIsOpen(false);
        setTimeout(() => {
            setMessages([
                {
                    role: 'bot',
                    content: 'Hello! I\'m your solar assistant. Ask me anything about solar installations, subsidies, or our services. You have 10 questions for this session.',
                    timestamp: new Date()
                }
            ]);
            setQuestionCount(0);
            setInputValue('');
        }, 300);
    };

    const getAIResponse = async (userQuestion: string): Promise<string> => {
        const contextualAnswer = getContextualAnswer(userQuestion);

        if (contextualAnswer) {
            return contextualAnswer;
        }

        try {
            const knowledgeContext = buildPromptContext();
            const prompt = `${solarKnowledgeBase.systemPrompt}

Knowledge Base:
${knowledgeContext}

User Question: ${userQuestion}

Provide a concise answer (max 80 words) based on the knowledge base. If the question is outside solar installation topics, politely redirect:`;

            const response = await hf.textGeneration({
                model: 'mistralai/Mistral-7B-Instruct-v0.2',
                inputs: prompt,
                parameters: {
                    max_new_tokens: 150,
                    temperature: 0.7,
                    top_p: 0.95,
                    return_full_text: false
                }
            });

            return response.generated_text.trim();
        } catch (error) {
            console.error('AI Error:', error);
            return defaultResponse;
        }
    };

    const handleSend = async () => {
        if (!inputValue.trim() || questionCount >= MAX_QUESTIONS || isLoading) return;

        const userMessage: Message = {
            role: 'user',
            content: inputValue,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const userQuestion = inputValue;
        setInputValue('');
        const newQuestionCount = questionCount + 1;
        setQuestionCount(newQuestionCount);
        setIsLoading(true);

        const aiResponse = await getAIResponse(userQuestion);

        const botResponse: Message = {
            role: 'bot',
            content: aiResponse,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
        setIsLoading(false);

        if (newQuestionCount >= MAX_QUESTIONS) {
            setTimeout(() => {
                const whatsappPrompt: Message = {
                    role: 'bot',
                    content: '',
                    timestamp: new Date(),
                    isWhatsAppPrompt: true
                };
                setMessages(prev => [...prev, whatsappPrompt]);
            }, 1000);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value.length <= MAX_CHARACTERS) {
            setInputValue(value);
        }
    };

    const handleWhatsAppClick = () => {
        setTimeout(() => {
            handleClose();
        }, 500);
    };

    const remainingQuestions = MAX_QUESTIONS - questionCount;
    const remainingChars = MAX_CHARACTERS - inputValue.length;

    const whatsappMessage = encodeURIComponent(
        "Hi, I need help with my query regarding solar installation. I've been chatting with your AI assistant but need further assistance. Please connect with me as soon as possible. Thank you!"
    );

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center z-50 group hover:scale-110 animate-pulse hover:animate-none cursor-pointer"
                aria-label="Open AI chat"
            >
                <svg className="w-7 h-7 mb-0.5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span className="text-[9px] font-semibold group-hover:text-blue-100 transition-colors duration-300">AI Help</span>
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-50 transition-opacity duration-300"
                    onClick={handleClose}
                />
            )}

            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[440px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-blue-600 text-white">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-base">AI Solar Assistant</h3>
                            <p className="text-xs text-blue-100">
                                <span className="font-bold text-green-400">Online</span> • Instant replies
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleClose}
                        className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Close chat"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="px-5 py-2 bg-amber-50 border-b border-amber-100">
                    <p className="text-xs text-amber-800">
                        {remainingQuestions > 0 ? (
                            <>
                                <span className="font-semibold">{remainingQuestions}</span> question{remainingQuestions !== 1 ? 's' : ''} remaining this session
                            </>
                        ) : (
                            <span className="font-semibold text-red-600">Question limit reached. Close and reopen to continue.</span>
                        )}
                    </p>
                </div>

                <div className="flex-1 overflow-y-auto px-5 py-4 h-[calc(100vh-220px)] bg-gray-50">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex mb-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`flex gap-2 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 ${message.role === 'bot' ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'
                                    }`}>
                                    {message.role === 'bot' ? '🤖' : '👤'}
                                </div>

                                <div className="flex-1">
                                    {message.isWhatsAppPrompt ? (
                                        <div className="bg-white border-2 border-blue-200 rounded-2xl p-4 shadow-sm">
                                            <div className="flex items-start gap-3 mb-3">
                                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                                                        Problem/Query Not Resolved Yet?
                                                    </h4>
                                                    <p className="text-xs text-gray-600 leading-relaxed">
                                                        Our team is here to help! Connect with us directly on WhatsApp for personalized assistance.
                                                    </p>
                                                </div>
                                            </div>
                                            <a
                                                href={`https://wa.me/919714533858?text=${whatsappMessage}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={handleWhatsAppClick}
                                                className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl text-center text-sm transition-all duration-200 shadow-md hover:shadow-lg"
                                            >
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                    </svg>
                                                    Send WhatsApp Message
                                                </span>
                                            </a>
                                        </div>
                                    ) : (
                                        <>
                                            <div className={`px-4 py-2 rounded-2xl ${message.role === 'bot'
                                                ? 'bg-white text-gray-800 border border-gray-200'
                                                : 'bg-blue-600 text-white'
                                                }`}>
                                                <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                                            </div>
                                            <p className={`text-xs text-gray-400 mt-1 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                                                {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="flex justify-start mb-4">
                            <div className="flex gap-2 max-w-[85%]">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 bg-blue-100 text-blue-600">
                                    🤖
                                </div>
                                <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-2xl">
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                <div className="border-t border-gray-200 px-5 py-4 bg-white">
                    <div className="flex justify-end mb-1">
                        <span className={`text-xs ${remainingChars < 50 ? 'text-red-500' : 'text-gray-400'}`}>
                            {remainingChars}/{MAX_CHARACTERS}
                        </span>
                    </div>

                    <div className="flex items-end gap-3">
                        <div className="flex-1">
                            <textarea
                                ref={textareaRef}
                                value={inputValue}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                                placeholder={remainingQuestions > 0 ? "Type your question..." : "Question limit reached"}
                                disabled={questionCount >= MAX_QUESTIONS || isLoading}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                                rows={2}
                                style={{ minHeight: '56px', maxHeight: '120px' }}
                            />
                        </div>
                        <button
                            onClick={handleSend}
                            disabled={!inputValue.trim() || questionCount >= MAX_QUESTIONS || isLoading}
                            className="w-12 h-12 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
                            aria-label="Send message"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AIChatbot;
