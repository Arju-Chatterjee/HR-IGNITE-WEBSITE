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
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center z-50 group hover:scale-110 animate-pulse hover:animate-none cursor-pointer"
                aria-label="Open AI chat"
            >
                <svg className="w-7 h-7 mb-0.5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span className="text-[9px] font-semibold group-hover:text-green-100 transition-colors duration-300">AI Help</span>
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-50 transition-opacity duration-300"
                    onClick={handleClose}
                />
            )}

            {/* Chat Window */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[440px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-orange-200 bg-green-600 text-white">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-base">AI Solar Assistant</h3>
                            <p className="text-xs text-green-100">
                                <span className="font-bold text-orange-400">Online</span> • Instant replies
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

                {/* Question Count */}
                <div className="px-5 py-2 bg-orange-50 border-b border-orange-100">
                    <p className="text-xs text-orange-800">
                        {remainingQuestions > 0 ? (
                            <>
                                <span className="font-semibold">{remainingQuestions}</span> question{remainingQuestions !== 1 ? 's' : ''} remaining this session
                            </>
                        ) : (
                            <span className="font-semibold text-red-600">Question limit reached. Close and reopen to continue.</span>
                        )}
                    </p>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-5 py-4 h-[calc(100vh-220px)] bg-orange-50">
                    {messages.map((message, index) => (
                        <div key={index} className={`flex mb-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`flex gap-2 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 ${message.role === 'bot' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                                    {message.role === 'bot' ? '🤖' : '👤'}
                                </div>
                                <div className="flex-1">
                                    {message.isWhatsAppPrompt ? (
                                        <div className="bg-white border-2 border-green-200 rounded-2xl p-4 shadow-sm">
                                            <div className="flex items-start gap-3 mb-3">
                                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..."/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Problem/Query Not Resolved Yet?</h4>
                                                    <p className="text-xs text-gray-600 leading-relaxed">Our team is here to help! Connect with us directly on WhatsApp for personalized assistance.</p>
                                                </div>
                                            </div>
                                            <a
                                                href={`https://wa.me/919714533858?text=${whatsappMessage}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={handleWhatsAppClick}
                                                className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl text-center text-sm transition-all duration-200 shadow-md hover:shadow-lg"
                                            >
                                                Send WhatsApp Message
                                            </a>
                                        </div>
                                    ) : (
                                        <>
                                            <div className={`px-4 py-2 rounded-2xl ${message.role === 'bot'
                                                ? 'bg-white text-green-800 border border-green-200'
                                                : 'bg-orange-500 text-white'
                                                }`}>
                                                <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                                            </div>
                                            <p className={`text-xs mt-1 ${message.role === 'user' ? 'text-right text-orange-600' : 'text-left text-green-400'}`}>
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
                                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 bg-green-100 text-green-600">
                                    🤖
                                </div>
                                <div className="bg-white text-green-800 border border-green-200 px-4 py-2 rounded-2xl">
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="border-t border-orange-200 px-5 py-4 bg-white">
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
                                className="w-full px-4 py-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                                rows={2}
                                style={{ minHeight: '56px', maxHeight: '120px' }}
                            />
                        </div>
                        <button
                            onClick={handleSend}
                            disabled={!inputValue.trim() || questionCount >= MAX_QUESTIONS || isLoading}
                            className="w-12 h-12 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
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
