export const solarKnowledgeBase = {
  systemPrompt: `You are Surya, a friendly solar energy assistant for HR Ignite Innovative India Pvt. Ltd., based in Agartala, Tripura. 
Your role is to help customers understand solar energy, answer queries, and guide them toward solar adoption.

Guidelines:
- Keep responses conversational and under 60 words
- Use emojis sparingly (1-2 per response)
- Be warm, helpful, and professional
- If uncertain, recommend calling +91 70056 82736
- Always offer next steps (call, WhatsApp, site visit)
- Use customer's context from conversation
- Speak like a helpful friend, not a robot`,

  qaData: [
    {
      question: "Hello / Hi / Hey",
      answer:
        "Hi there! 👋 I'm Surya, your solar assistant. I'm here to help you save money with clean energy! What would you like to know - subsidy benefits, system costs, or installation process?",
      keywords: [
        "hello",
        "hi there",
        "hey there",
        "namaste",
        "good morning",
        "good afternoon",
        "good evening",
        "hii",
        "helo",
      ],
    },
    {
      question: "How are you?",
      answer:
        "I'm doing great, thanks! ☀️ Ready to help you explore solar energy. Are you looking to reduce your electricity bills or curious about government subsidies?",
      keywords: [
        "how are you",
        "what's up",
        "whats up",
        "wassup",
        "kaise ho",
        "how r u",
        "how do you do",
        "howdy",
        "what up",
        "how's it going",
      ],
    },
    {
      question: "Who are you?",
      answer:
        "I'm Surya, your AI solar assistant from HR Ignite! 🌞 I help people in Tripura go solar. I can answer questions about costs, subsidies, installation - or connect you with our experts!",
      keywords: [
        "who are you",
        "what are you",
        "your name",
        "introduce yourself",
        "who r u",
        "what is your name",
        "tell about yourself",
      ],
    },
    {
      question: "Thank you",
      answer:
        "You're most welcome! 🙏 Happy to help. Need anything else - subsidy info, pricing, or a free site visit? I'm here anytime!",
      keywords: [
        "thank you",
        "thanks",
        "thank u",
        "thanku",
        "thnx",
        "ty",
        "dhanyavaad",
        "shukriya",
        "appreciate",
        "grateful",
      ],
    },
    {
      question: "I want to talk to someone",
      answer:
        "Sure! Our solar experts are available 24x7. Call +91 70056 82736 or WhatsApp +91 9714533858. Want me to arrange a callback? Share your number!",
      keywords: [
        "talk to someone",
        "speak to expert",
        "human support",
        "real person",
        "customer service",
        "representative",
        "agent",
      ],
    },
    {
      question: "Can you arrange a callback?",
      answer:
        "Absolutely! Call us directly at +91 70056 82736 (faster!) or share your number here and we'll call within 30 minutes. Which works better for you?",
      keywords: [
        "callback",
        "call back",
        "call me",
        "phone me",
        "contact me",
        "reach out",
        "ring me",
        "get back to me",
      ],
    },
    {
      question: "What is your contact number?",
      answer:
        "📞 Call: +91 70056 82736\n💬 WhatsApp: +91 9714533858\n\nWe're available 24x7! What questions can I help with before you call?",
      keywords: [
        "contact",
        "phone",
        "number",
        "call",
        "whatsapp",
        "mobile",
        "telephone",
        "reach you",
        "contact details",
        "phone number",
      ],
    },
    {
      question: "What are your working hours?",
      answer:
        "We're available 24x7 for queries! 🕐 Site visits are Mon-Sat, 9 AM - 6 PM. Call +91 70056 82736 anytime or schedule a FREE site survey!",
      keywords: [
        "working hours",
        "timing",
        "when open",
        "office time",
        "available when",
        "open hours",
        "schedule",
        "business hours",
      ],
    },
    {
      question: "Where is your office?",
      answer:
        "We're based in Agartala and serve all of Tripura! 📍 For exact office address or FREE home visit anywhere in Tripura, call +91 70056 82736.",
      keywords: [
        "office location",
        "address",
        "where are you",
        "office address",
        "location",
        "where located",
        "based where",
      ],
    },
    {
      question: "What areas do you serve?",
      answer:
        "We cover entire Tripura - from Agartala to remote villages! 🚗 FREE site surveys anywhere. Cities, towns, rural areas - we reach everywhere. Where are you located?",
      keywords: [
        "service area",
        "coverage",
        "location",
        "agartala",
        "tripura",
        "where",
        "serve where",
        "areas covered",
        "villages",
      ],
    },
    {
      question: "What is PM Surya Ghar Yojana?",
      answer:
        "PM Surya Ghar is India's biggest rooftop solar scheme! 🏠 Get up to ₹78,000 subsidy + free electricity (300 units/month). Launched 2024, targets 1 crore homes by 2027. We handle everything!",
      keywords: [
        "pm surya ghar",
        "muft bijli",
        "surya ghar yojana",
        "government scheme",
        "modi scheme",
        "solar scheme",
        "free electricity scheme",
      ],
    },
    {
      question: "How much subsidy for 1kW?",
      answer:
        "₹30,000 subsidy for 1kW! 💰 System costs ~₹70,000, you pay only ~₹40,000 after subsidy. Saves ₹1,000/month. We handle all paperwork!",
      keywords: ["1kw subsidy", "1 kw", "one kw subsidy", "subsidy 1kw"],
    },
    {
      question: "How much subsidy for 2kW?",
      answer:
        "₹60,000 subsidy for 2kW! 💰 Net cost ~₹80,000 after subsidy. Saves ₹2,000/month. Perfect for medium homes. Want free site assessment?",
      keywords: ["2kw subsidy", "2 kw", "two kw subsidy", "subsidy 2kw"],
    },
    {
      question: "How much subsidy for 3kW?",
      answer:
        "₹78,000 subsidy for 3kW (maximum for residential)! 🎯 Our most popular size. Net cost ~₹1.4L, saves ₹3,000/month. ROI in 4 years!",
      keywords: [
        "3kw subsidy",
        "3 kw",
        "three kw subsidy",
        "subsidy 3kw",
        "maximum subsidy",
      ],
    },
    {
      question: "Subsidy for systems above 3kW?",
      answer:
        "₹78,000 subsidy for 4kW, 5kW, 10kW (capped at 3kW level). Higher systems = more savings but same subsidy. Still highly profitable! Let's calculate your ROI?",
      keywords: [
        "4kw subsidy",
        "5kw subsidy",
        "10kw subsidy",
        "above 3kw",
        "more than 3kw",
      ],
    },
    {
      question: "Am I eligible for subsidy?",
      answer:
        "You're eligible if: Indian citizen ✅ Own house ✅ Valid electricity connection ✅ Haven't taken solar subsidy before ✅. We verify during FREE site visit!",
      keywords: [
        "eligible",
        "eligibility",
        "can i get",
        "qualify",
        "who can apply",
        "eligible for subsidy",
        "subsidy eligibility",
      ],
    },
    {
      question: "How to apply for subsidy?",
      answer:
        "Don't worry - WE HANDLE IT ALL! 📝 Registration → Documentation → Installation → Subsidy application → Follow-up. You just sign papers. Money comes directly to your bank in 30-60 days!",
      keywords: [
        "apply subsidy",
        "subsidy application",
        "how to apply",
        "subsidy process",
        "apply for subsidy",
        "get subsidy",
      ],
    },
    {
      question: "What is 1kW system cost?",
      answer:
        "1kW costs ₹70,000 before subsidy, ₹40,000 after ₹30k subsidy. Generates 4-5 units daily, saves ₹1,000/month. Call +91 70056 82736 for exact quote!",
      keywords: [
        "1kw cost",
        "1kw price",
        "1 kw price",
        "how much 1kw",
        "1kw system cost",
      ],
    },
    {
      question: "What is 3kW system cost?",
      answer:
        "3kW costs ₹2.1L before subsidy, ₹1.3L after ₹78k subsidy. 🏆 Most popular! Generates 12-15 units daily, saves ₹3,000/month. Want detailed breakdown?",
      keywords: [
        "3kw cost",
        "3kw price",
        "3 kw price",
        "how much 3kw",
        "3kw system cost",
      ],
    },
    {
      question: "What is 5kW system cost?",
      answer:
        "5kW costs ₹3.1L before subsidy, ₹2.3L after ₹78k subsidy. Perfect for large homes with AC. Saves ₹5,000/month. FREE site survey to confirm sizing!",
      keywords: [
        "5kw cost",
        "5kw price",
        "5 kw price",
        "how much 5kw",
        "5kw system cost",
      ],
    },
    {
      question: "Do you offer EMI?",
      answer:
        "Yes! Banks offer solar loans at 8-11% interest. 💳 We assist with applications. Monthly EMI often LESS than electricity bill savings. Smart investment!",
      keywords: [
        "emi",
        "loan",
        "finance",
        "installment",
        "payment plan",
        "easy payment",
        "financing",
        "pay in installments",
      ],
    },
    {
      question: "Any hidden costs?",
      answer:
        "NO hidden costs! 💯 Our quote includes: panels, inverter, mounting, wiring, installation, net metering, subsidy processing. Completely transparent pricing!",
      keywords: [
        "hidden cost",
        "extra charge",
        "additional cost",
        "total cost",
        "hidden charges",
        "other costs",
      ],
    },
    {
      question: "How much can I save monthly?",
      answer:
        "1kW saves ₹1k, 3kW saves ₹3k, 5kW saves ₹5k monthly! 💰 Annual savings: ₹36k to ₹96k. After 3-5 years, enjoy FREE electricity for 20+ years!",
      keywords: [
        "save",
        "savings",
        "monthly savings",
        "electricity bill",
        "bill reduction",
        "how much save",
        "save money",
      ],
    },
    {
      question: "What is the ROI?",
      answer:
        "Systems pay back in 3-5 years through electricity savings! 📈 After that, 20+ years of FREE power. ROI better than FD/SIP (18-22% annually). Smart investment!",
      keywords: [
        "roi",
        "return",
        "payback",
        "investment",
        "break even",
        "return on investment",
        "payback period",
      ],
    },
    {
      question: "Will solar increase property value?",
      answer:
        "Yes! Solar homes sell 3-4% higher and 20% faster. 🏡 Buyers love lower bills. It's a premium amenity. Your investment saves money AND increases property value!",
      keywords: [
        "property value",
        "home value",
        "resale value",
        "increase value",
        "house value",
        "property price",
      ],
    },
    {
      question: "How does net metering work?",
      answer:
        "Excess solar power goes to grid → you get credits. At night, use grid power → credits offset cost. 🔄 Result: Dramatically lower bills! We handle all net metering paperwork.",
      keywords: [
        "net metering",
        "metering",
        "excess electricity",
        "grid connection",
        "export power",
        "sell electricity",
        "grid tied",
      ],
    },
    {
      question: "How much roof space needed?",
      answer:
        "~100 sq ft per kW. So 3kW needs 300 sq ft, 5kW needs 500 sq ft. 📏 Our FREE site survey measures and optimizes your available space!",
      keywords: [
        "roof space",
        "area needed",
        "space required",
        "how much space",
        "roof area",
        "space requirement",
      ],
    },
    {
      question: "What about cloudy or rainy days?",
      answer:
        "Panels work at 10-25% efficiency on cloudy days. ☁️ You stay grid-connected, so power never stops. Plus, excess sunny-day generation balances through net metering!",
      keywords: [
        "cloudy",
        "rain",
        "weather",
        "monsoon",
        "overcast",
        "rainy days",
        "bad weather",
      ],
    },
    {
      question: "Do panels work at night?",
      answer:
        "No, panels need sunlight. 🌙 At night you use grid power, offset by day's excess via net metering. Want backup? We can add battery storage!",
      keywords: [
        "night",
        "nighttime",
        "after sunset",
        "evening",
        "dark",
        "night time",
        "work at night",
      ],
    },
    {
      question: "Will it work during power cuts?",
      answer:
        "Standard systems shut off during cuts (safety). For backup, we offer hybrid systems with batteries. 🔋 Discuss your needs - we'll recommend best solution!",
      keywords: [
        "power cut",
        "outage",
        "load shedding",
        "blackout",
        "no electricity",
        "power failure",
        "electricity cut",
      ],
    },
    {
      question: "What is panel lifespan?",
      answer:
        "Panels last 25-30 years! After 25 years, still produce 80-85% power. ⏳ Our 27-year warranty (longest in industry) covers everything. Worry-free for decades!",
      keywords: [
        "lifespan",
        "life",
        "duration",
        "how long last",
        "durability",
        "panel life",
        "last how long",
      ],
    },
    {
      question: "What maintenance required?",
      answer:
        "Minimal! Just occasional cleaning (2-3 times/year) to remove dust. 🧹 We provide maintenance throughout 27-year warranty. Very low effort, high rewards!",
      keywords: [
        "maintenance",
        "care",
        "cleaning",
        "upkeep",
        "service",
        "maintain",
        "clean panels",
      ],
    },
    {
      question: "How long does installation take?",
      answer:
        "Installation completes in 15 days after approval! ⚡ Includes: panel mounting, inverter setup, wiring, net metering application. Quick and professional!",
      keywords: [
        "installation time",
        "how long",
        "duration",
        "days",
        "time taken",
        "how many days",
        "installation duration",
      ],
    },
    {
      question: "Do you offer free site survey?",
      answer:
        "Yes! Completely FREE site surveys with zero obligation, anywhere in Tripura! 🚗 We assess roof, check shading, provide customized recommendations. Book now: +91 70056 82736",
      keywords: [
        "site survey",
        "free survey",
        "visit",
        "inspection",
        "roof check",
        "site visit",
        "free visit",
      ],
    },
    {
      question: "What documents needed?",
      answer:
        "Aadhaar, electricity bill, property docs, bank details, photos. 📄 Don't worry - we guide you through everything and handle all submissions!",
      keywords: [
        "documents",
        "papers",
        "requirement",
        "needed documents",
        "documents required",
        "what documents",
        "document list",
      ],
    },
    {
      question: "What warranty do you provide?",
      answer:
        "27-year comprehensive warranty! 🛡️ Covers: panels (27yr), inverter (10yr), structure (lifetime), workmanship. Longest in the industry. Complete peace of mind!",
      keywords: [
        "warranty",
        "guarantee",
        "coverage",
        "protection",
        "warrantee",
      ],
    },
    {
      question: "Do you have after-sales service?",
      answer:
        "Absolutely! 24x7 support, remote monitoring, annual maintenance, quick issue resolution. 🔧 We're with you for entire 27-year warranty period!",
      keywords: [
        "after sales",
        "service",
        "support",
        "customer care",
        "help after",
        "after sales service",
        "post installation",
      ],
    },
    {
      question: "Why choose you over others?",
      answer:
        "✅ 27yr warranty (longest) ✅ MNRE approved ✅ FREE surveys ✅ 15-day install ✅ Complete subsidy handling ✅ 24x7 support ✅ 500+ installations ✅ 5.0 rating ✅ Tripura's #1!",
      keywords: [
        "why choose",
        "why you",
        "advantage",
        "better than",
        "difference",
        "why your company",
        "what makes you better",
      ],
    },
    {
      question: "Are you MNRE approved?",
      answer:
        "Yes! Officially MNRE-approved and PM Surya Ghar authorized. ✅ This guarantees genuine products, confirmed subsidies, and full government benefits!",
      keywords: [
        "mnre",
        "approved",
        "certified",
        "authorized",
        "registered",
        "mnre approved",
        "government approved",
      ],
    },
    {
      question: "What brands do you use?",
      answer:
        "Premium MNRE-certified Tier-1 brands only! 🏆 High-efficiency panels, reliable inverters, galvanized structures. 25+ year guaranteed performance. Quality guaranteed!",
      keywords: [
        "brands",
        "components",
        "quality",
        "equipment",
        "products",
        "which brands",
        "panel brands",
      ],
    },
    {
      question: "Can I run AC on solar?",
      answer:
        "Yes! 3kW runs 1 AC + appliances. 5kW easily powers 2-3 ACs. ❄️ We size system based on AC usage. FREE calculation during site survey!",
      keywords: [
        "air conditioner",
        "ac",
        "cooling",
        "run ac",
        "air conditioning",
        "ac on solar",
        "solar for ac",
      ],
    },
    {
      question: "Will panels damage my roof?",
      answer:
        "No! Panels actually PROTECT your roof from weather. 🏠 Professional mounting on rafters (not roof surface), zero leaks. Lightweight, safe, secure!",
      keywords: [
        "damage roof",
        "roof damage",
        "harm roof",
        "roof leak",
        "roof protection",
        "will damage",
        "safe for roof",
      ],
    },
    {
      question: "Can I install on tin/metal roof?",
      answer:
        "Absolutely! We install on ALL roof types: RCC, tin, asbestos, tile, metal. 🔧 Custom mounting solutions for each. FREE structural assessment included!",
      keywords: [
        "tin roof",
        "metal roof",
        "sheet roof",
        "asbestos roof",
        "roof type",
        "different roof",
        "tin sheet",
      ],
    },
    {
      question: "Is solar worth it in Tripura?",
      answer:
        "100% YES! ☀️ Tripura gets excellent sunlight (4.5-5.5 hrs daily). With ₹78k subsidy + rising electricity rates, solar is highly profitable. 3-5 year payback!",
      keywords: [
        "worth it",
        "tripura",
        "profitable",
        "good investment",
        "should i install",
        "worth in tripura",
        "solar in tripura",
      ],
    },
    {
      question: "Do you have reviews?",
      answer:
        "5.0 ⭐ Google rating with 353+ happy customers! 500+ successful installations. Our customers love our service, transparency, and support. Check Google or call for references!",
      keywords: [
        "reviews",
        "rating",
        "testimonial",
        "customer feedback",
        "google review",
        "ratings",
        "customer reviews",
      ],
    },
    {
      question: "I'm confused",
      answer:
        "No worries! 😊 Let's simplify: Call +91 70056 82736. Our expert visits FREE, assesses your home, explains clearly, provides customized solution. Zero confusion, zero obligation!",
      keywords: [
        "confused",
        "don't know",
        "not sure",
        "help me decide",
        "what to do",
        "don't understand",
        "unclear",
      ],
    },
    {
      question: "How do I get started?",
      answer:
        "Easy! 📞 Call +91 70056 82736 or WhatsApp +91 9714533858 → FREE site visit → Customized quote → We handle paperwork → Installation in 15 days. Simple!",
      keywords: [
        "get started",
        "begin",
        "start",
        "how to",
        "process",
        "steps",
        "starting process",
        "how to start",
      ],
    },
    {
      question: "What happens in storms?",
      answer:
        "Our panels withstand 25mm hail at 80 km/h + 150 km/h winds! 🌪️ Built for all weather. Tempered glass, engineered mounting. Your system is storm-proof!",
      keywords: [
        "storm",
        "hail",
        "cyclone",
        "strong wind",
        "weather proof",
        "durability",
        "storm damage",
      ],
    },
    {
      question: "Need battery backup?",
      answer:
        "Optional! Grid acts as your 'battery' via net metering. 🔋 Batteries needed only if frequent power cuts. We assess needs during site visit!",
      keywords: [
        "battery",
        "backup",
        "storage",
        "power backup",
        "need battery",
        "battery required",
      ],
    },
    {
      question: "Can I monitor system?",
      answer:
        "Yes! Mobile app shows real-time generation, consumption, savings, system health. 📱 Track from anywhere! Get alerts for issues. 24x7 remote monitoring!",
      keywords: [
        "monitor",
        "app",
        "tracking",
        "check generation",
        "performance",
        "mobile app",
        "monitoring system",
      ],
    },
    {
      question: "Bye / Goodbye",
      answer:
        "Take care! 👋 Remember: +91 70056 82736 for any questions. We're here 24x7. Ready to help you go solar anytime. Have a bright day! ☀️",
      keywords: [
        "bye",
        "goodbye",
        "see you",
        "later",
        "take care",
        "gotta go",
        "talk later",
      ],
    },
    {
      question: "What is the subsidy structure?",
      answer:
        "₹30,000/kW for first 2kW + ₹18,000/kW beyond 2kW. 💰 Max ₹78,000 (capped at 3kW). Example: 1kW=₹30k, 2kW=₹60k, 3kW+=₹78k. We maximize your benefit!",
      keywords: [
        "subsidy structure",
        "how much subsidy",
        "subsidy breakdown",
        "subsidy calculation",
        "subsidy per kw",
        "subsidy details",
        "how is subsidy calculated",
      ],
    },
    {
      question: "When will I receive the subsidy?",
      answer:
        "Subsidy credited within 30-60 days after installation inspection and commissioning certificate! 🏦 Direct Benefit Transfer (DBT) to your bank account. We track entire process!",
      keywords: [
        "when subsidy",
        "subsidy time",
        "how long subsidy",
        "subsidy disbursement",
        "receive subsidy",
        "subsidy payment",
        "subsidy transfer time",
      ],
    },
    {
      question: "Is subsidy available for commercial properties?",
      answer:
        "No, PM Surya Ghar subsidy is ONLY for residential consumers. 🏠 Commercial/industrial get tax benefits instead. Housing societies up to 500kW eligible. Discuss your property type!",
      keywords: [
        "commercial subsidy",
        "business subsidy",
        "shop subsidy",
        "office subsidy",
        "commercial property",
        "non residential",
      ],
    },
    {
      question: "What is CFA Central Financial Assistance?",
      answer:
        "CFA = Central Financial Assistance = Government Subsidy! 💵 MNRE provides this directly. It's 60% for first 2kW, 40% beyond, capped at ₹78k. Same as PM Surya Ghar subsidy!",
      keywords: [
        "cfa",
        "central financial assistance",
        "what is cfa",
        "cfa subsidy",
        "central assistance",
        "government assistance",
      ],
    },
    {
      question: "Can housing societies get subsidy?",
      answer:
        "Yes! Housing societies/group housing can apply for up to 500kW capacity! 🏢 Individual homes in society also get subsidy. Both options available. We handle society installations!",
      keywords: [
        "housing society",
        "apartment subsidy",
        "society subsidy",
        "group housing",
        "flats",
        "apartment complex",
        "residential complex",
      ],
    },
    {
      question: "What is the target of PM Surya Ghar scheme?",
      answer:
        "1 crore households by March 2027! 🎯 Free electricity (300 units/month), 1,000 billion units renewable power, reduce 720 million tons CO2. Tripura targets 50,000 homes, 150 MW!",
      keywords: [
        "target",
        "scheme target",
        "goal",
        "pm surya ghar target",
        "how many homes",
        "national target",
        "scheme goal",
      ],
    },
    {
      question: "What is Tripura's solar target?",
      answer:
        "150 MW solar by March 2027! ⚡ 50,000 families targeted. So far 13,500+ registered, 266 installations done. 70 families already earning from selling surplus power! Join now!",
      keywords: [
        "tripura target",
        "tripura solar",
        "tripura goal",
        "state target",
        "tripura scheme",
        "local target",
      ],
    },
    {
      question: "Can I earn by selling surplus electricity?",
      answer:
        "YES! Via net metering, surplus power sold to grid at APPC rate. 💸 70 families in Tripura already earned ₹30,902 avg! Your electricity bill can be ZERO + extra income!",
      keywords: [
        "sell electricity",
        "earn from solar",
        "surplus power",
        "sell power",
        "make money",
        "income from solar",
        "selling units",
      ],
    },
    {
      question: "What is APPC rate?",
      answer:
        "APPC = Average Power Purchase Cost. Rate at which DISCOM buys your surplus solar power. 💡 Varies yearly, typically ₹4-6/unit in Tripura. Net metering credits balance your bills!",
      keywords: [
        "appc",
        "average power purchase cost",
        "appc rate",
        "selling rate",
        "power purchase",
        "unit rate",
      ],
    },
    {
      question: "What is TREDA?",
      answer:
        "TREDA = Tripura Renewable Energy Development Agency. 🏛️ State nodal agency implementing PM Surya Ghar in Tripura. They approve applications, coordinate with DISCOM. We work directly with TREDA!",
      keywords: [
        "treda",
        "tripura renewable energy",
        "what is treda",
        "state agency",
        "tripura agency",
        "nodal agency",
      ],
    },
    {
      question: "What is DISCOM?",
      answer:
        "DISCOM = Distribution Company (TSECL in Tripura). ⚡ They supply electricity, approve net metering, inspect installations. We coordinate all DISCOM processes for you!",
      keywords: [
        "discom",
        "distribution company",
        "what is discom",
        "tsecl",
        "electricity company",
        "power company",
      ],
    },
    {
      question: "Is there separate state subsidy in Tripura?",
      answer:
        "Currently, Tripura follows Central scheme (₹78k max). Some states like UP give extra state subsidy. 💰 Check with us - policies update! Central subsidy alone is excellent value!",
      keywords: [
        "state subsidy",
        "tripura subsidy",
        "additional subsidy",
        "extra subsidy",
        "state government subsidy",
        "local subsidy",
      ],
    },
    {
      question: "What documents prove I received subsidy?",
      answer:
        "You get: Commissioning Certificate from DISCOM, Subsidy Credit Intimation, Bank Transfer Receipt. 📄 Keep these safe for records. We help with all documentation!",
      keywords: [
        "subsidy proof",
        "documents",
        "certificate",
        "subsidy documents",
        "proof of subsidy",
        "commissioning certificate",
      ],
    },
    {
      question: "Can I apply subsidy myself without vendor?",
      answer:
        "No! Installation MUST be done by MNRE-empanelled vendors only. ❌ Self-installation not eligible for subsidy. Good news: We're approved vendors, handle everything A-Z!",
      keywords: [
        "self apply",
        "apply myself",
        "without vendor",
        "diy installation",
        "install myself",
        "self installation",
      ],
    },
    {
      question: "What if my subsidy application is rejected?",
      answer:
        "Rare with us! Common reasons: wrong vendor, incomplete docs, ineligible property. 🔍 We PRE-VERIFY everything to prevent rejections. 500+ successful applications prove our expertise!",
      keywords: [
        "subsidy rejected",
        "rejection",
        "application rejected",
        "denied subsidy",
        "not approved",
        "subsidy denied",
      ],
    },
    {
      question: "Is GST extra on subsidy amount?",
      answer:
        "GST applies on TOTAL system cost, but subsidy is POST-GST adjustment! 📊 Example: ₹2.1L system (with GST) - ₹78k subsidy = ₹1.32L net. We provide transparent pricing!",
      keywords: [
        "gst",
        "tax",
        "gst on subsidy",
        "taxes",
        "additional tax",
        "gst extra",
        "including gst",
      ],
    },
    {
      question: "Can I transfer my subsidy to someone else?",
      answer:
        "No! Subsidy is consumer-specific, linked to your electricity connection + Aadhaar. 🔒 Non-transferable. It goes to YOUR bank account only. Prevents misuse!",
      keywords: [
        "transfer subsidy",
        "give subsidy",
        "subsidy transfer",
        "someone else",
        "can transfer",
        "transferable",
      ],
    },
    {
      question: "What is benchmark cost for subsidy?",
      answer:
        "Govt sets benchmark costs (₹50-60k/kW) to calculate subsidy. 💼 Your actual cost may vary based on quality/brand. Subsidy fixed regardless. We offer competitive pricing!",
      keywords: [
        "benchmark cost",
        "benchmark",
        "standard cost",
        "base cost",
        "reference cost",
        "subsidy benchmark",
      ],
    },
    {
      question: "Is subsidy taxable income?",
      answer:
        "No! Solar subsidy is NOT taxable as per current Income Tax rules. 🎉 It's capital subsidy, not revenue. Enjoy full ₹78k benefit tax-free! (Consult CA for latest rules)",
      keywords: [
        "taxable",
        "income tax",
        "tax on subsidy",
        "subsidy tax",
        "pay tax",
        "taxable subsidy",
      ],
    },
    {
      question: "What happens if I've already installed solar?",
      answer:
        "Past installations NOT eligible if done before scheme! ⏰ Only NEW installations post-registration qualify. Plan now to maximize benefits. Upgrading existing? Call us!",
      keywords: [
        "already installed",
        "existing solar",
        "old installation",
        "past installation",
        "already have",
        "previously installed",
      ],
    },
    {
      question: "Can NRI apply for solar subsidy?",
      answer:
        "Yes, if property in your name + valid Indian electricity connection + Aadhaar. 🛂 Residential use only. We handle applications for NRIs. Remote coordination possible!",
      keywords: [
        "nri",
        "non resident indian",
        "overseas",
        "foreign",
        "abroad",
        "nri subsidy",
      ],
    },
    {
      question: "Group net metering vs individual?",
      answer:
        "Individual: Each home separate system + meter. Group: Shared system (society/apartment) + distributed benefit. 🏘️ Both subsidy-eligible! We design optimal solution for you!",
      keywords: [
        "group net metering",
        "individual metering",
        "virtual net metering",
        "shared solar",
        "community solar",
      ],
    },
    {
      question: "What is virtual net metering?",
      answer:
        "Allows shared solar for apartments where individual rooftops not feasible! 🏢 Common rooftop system, benefits distributed. Subsidy eligible. Perfect for multi-story buildings!",
      keywords: [
        "virtual net metering",
        "vnm",
        "virtual metering",
        "shared metering",
        "apartment solar",
        "common rooftop",
      ],
    },
    {
      question: "Is there a scheme deadline?",
      answer:
        "PM Surya Ghar extended till March 2026, may extend further! ⏳ But don't wait - limited approved vendors, rising demand. Apply NOW to lock benefits. First come, first served!",
      keywords: [
        "deadline",
        "last date",
        "scheme end",
        "expiry",
        "till when",
        "time limit",
        "validity",
      ],
    },
    {
      question: "What is the National Solar Portal?",
      answer:
        "pmsuryaghar.gov.in - Official portal for applications! 🌐 Single-window system for registration, vendor selection, tracking, subsidy. We guide you through entire portal process!",
      keywords: [
        "national portal",
        "solar portal",
        "pmsuryaghar",
        "official website",
        "government portal",
        "online portal",
      ],
    },
    {
      question: "Can I check subsidy status online?",
      answer:
        "Yes! Login to pmsuryaghar.gov.in with consumer number. 📱 Track: Application → Feasibility → Installation → Inspection → Subsidy disbursed. Real-time updates. We monitor for you too!",
      keywords: [
        "check status",
        "track subsidy",
        "subsidy status",
        "application status",
        "track application",
        "check online",
      ],
    },
    {
      question: "What is feasibility approval?",
      answer:
        "DISCOM checks if your location suitable for solar + grid connection. ✅ Usually approved within 7-15 days if connection valid. We ensure your application gets fast approval!",
      keywords: [
        "feasibility",
        "feasibility approval",
        "technical feasibility",
        "discom approval",
        "initial approval",
      ],
    },
    {
      question: "What if my electricity bill is in someone else's name?",
      answer:
        "Subsidy goes to electricity connection holder! 📋 If you own property but bill in tenant/previous owner name, transfer connection first. We guide through DISCOM procedures!",
      keywords: [
        "different name",
        "someone else name",
        "bill name",
        "connection name",
        "not my name",
        "name mismatch",
      ],
    },
    {
      question: "Can I get subsidy for off-grid system?",
      answer:
        "No! Subsidy ONLY for grid-connected systems with net metering. 🔌 Off-grid (standalone) not eligible. Need backup? We recommend grid-tied + battery hybrid!",
      keywords: [
        "off grid",
        "standalone",
        "off grid subsidy",
        "without grid",
        "independent system",
        "not connected",
      ],
    },
    {
      question: "What is the PM Surya Ghar helpline?",
      answer:
        "National Helpline: 1800-180-3333 or 1555 📞 For Tripura-specific help, call us directly: +91 70056 82736. We provide faster, personalized support than generic helpline!",
      keywords: [
        "helpline",
        "toll free",
        "customer care",
        "pm surya ghar helpline",
        "support number",
        "help number",
      ],
    },
    {
      question: "Explain PM Surya Ghar in simple language",
      answer:
        "PM Surya Ghar: Muft Bijli Yojana is a central government scheme that helps homeowners install rooftop solar at a discounted price. You get a big subsidy directly in your bank and can cut your electricity bill close to zero while using clean energy for 25+ years.",
      keywords: [
        "explain pm surya ghar",
        "surya ghar simple",
        "muft bijli explain",
        "scheme in simple language",
        "surya ghar details",
        "surya ghar info",
      ],
    },
    {
      question: "What are the main benefits of PM Surya Ghar?",
      answer:
        "Main benefits: big upfront subsidy on solar system, up to 300 units/month effectively free power, protection from future tariff hikes, direct subsidy credit in your bank, and increase in your property value. You also help reduce pollution and India’s dependence on fossil fuels.",
      keywords: [
        "benefits pm surya ghar",
        "pm surya ghar advantages",
        "why pm surya ghar",
        "muft bijli benefits",
        "scheme benefits",
      ],
    },
    {
      question: "Is PM Surya Ghar available in Tripura?",
      answer:
        "Yes, PM Surya Ghar applies across India, including Tripura. Homeowners in Tripura can register on the national portal, select an approved vendor like us, install rooftop solar, and receive central subsidy directly. State-level policies may refine implementation, but the core subsidy remains the same.",
      keywords: [
        "tripura pm surya ghar",
        "tripura surya ghar",
        "tripura muft bijli",
        "is scheme in tripura",
        "surya ghar in tripura",
        "tripura subsidy scheme",
      ],
    },
    {
      question: "Difference between old rooftop subsidy and PM Surya Ghar?",
      answer:
        "Earlier rooftop subsidies were routed through DISCOMs and state agencies with different rates and caps. PM Surya Ghar standardizes the structure across India, uses a central online portal, gives direct benefit transfer to your bank, and clearly defines slab-wise subsidy per kW up to a fixed limit.",
      keywords: [
        "old rooftop subsidy",
        "difference old new subsidy",
        "previous solar scheme",
        "mnre old scheme",
        "old vs pm surya ghar",
      ],
    },
    {
      question: "Can tenants apply for PM Surya Ghar subsidy?",
      answer:
        "Subsidy is tied to the electricity consumer and property. If you’re a tenant, normally the subsidy will go to the registered consumer/owner. In most cases, the property owner must agree and be the applicant. A clear written understanding between owner and tenant is strongly recommended before applying.",
      keywords: [
        "tenant subsidy",
        "rented house subsidy",
        "live on rent solar subsidy",
        "tenant pm surya ghar",
        "rent house scheme",
        "renter subsidy",
      ],
    },
    {
      question: "Can I install solar on my ancestral house and get subsidy?",
      answer:
        "Yes, ancestral houses are eligible if the electricity connection, property documents, and Aadhaar details match the applicant as per portal rules. Multiple legal heirs must avoid duplicate claims on the same connection. We usually suggest clarifying ownership and electricity account name before starting the application.",
      keywords: [
        "ancestral house subsidy",
        "father house subsidy",
        "family house solar",
        "old house subsidy",
        "joint property subsidy",
        "family property solar",
      ],
    },
    {
      question: "Can I get subsidy on more than one house?",
      answer:
        "PM Surya Ghar is meant for one residential connection per consumer. If you own multiple homes, normally subsidy is allowed only once against one eligible electricity connection. Attempting multiple subsidies under the same identity can lead to rejection or recovery by authorities later.",
      keywords: [
        "multiple houses subsidy",
        "more than one house subsidy",
        "two house subsidy",
        "second home subsidy",
        "double subsidy",
      ],
    },
    {
      question: "Can I shift my solar system to a new house and keep subsidy?",
      answer:
        "You can physically shift the system, but the original subsidy was sanctioned for that specific connection and site. Moving the system to another location without proper permission is not aligned with scheme intent and can cause warranty, approval, and future claim issues. Always consult us before shifting.",
      keywords: [
        "shift system new house",
        "move solar",
        "relocate system",
        "shift house subsidy",
        "move with solar",
        "transfer system",
      ],
    },
    {
      question: "What happens if I increase load after installing solar?",
      answer:
        "You can apply for sanctioned load enhancement with the DISCOM even after going solar. Just remember: subsidy is based on system capacity and scheme norms at installation time, not on later load changes. If your usage rises a lot, we can discuss adding capacity (without extra subsidy) later.",
      keywords: [
        "increase load",
        "sanctioned load change",
        "more load after solar",
        "load enhancement",
        "increase connection load",
        "higher load",
      ],
    },
    {
      question: "Can I upgrade my system size later under the same scheme?",
      answer:
        "You can technically add more panels and capacity later, but additional capacity usually won’t get fresh subsidy under PM Surya Ghar. The subsidy is considered one-time per connection. That’s why we carefully size your system in the beginning based on future usage and budget.",
      keywords: [
        "upgrade system later",
        "increase kw later",
        "add more panels later",
        "expand system scheme",
        "extension subsidy",
        "upgrade under scheme",
      ],
    },
    {
      question: "Is there any penalty if I remove the system after subsidy?",
      answer:
        "The scheme expects the system to remain functional for a minimum period; removing it soon after taking subsidy can invite scrutiny and possible recovery. DISCOM and MNRE monitor generation data. Practically, because solar gives strong savings, almost nobody removes it once they see the benefits.",
      keywords: [
        "remove system after subsidy",
        "take subsidy then remove",
        "penalty remove solar",
        "take money and remove",
        "subsidy misuse",
      ],
    },
    {
      question: "How is PM Surya Ghar different from KUSUM scheme?",
      answer:
        "PM Surya Ghar focuses on residential rooftop systems and household bills. KUSUM mainly targets farmers and agricultural pumps with separate components and norms. If you’re a household consumer in Tripura, PM Surya Ghar is the relevant rooftop scheme for your home.",
      keywords: [
        "kusum vs surya ghar",
        "difference kusum",
        "farmer scheme solar",
        "agriculture solar scheme",
        "solar pump subsidy vs rooftop",
      ],
    },
    {
      question: "Do I need separate approval from the municipality?",
      answer:
        "In most typical residential rooftop cases, approvals are handled centrally via DISCOM and state nodal agencies. For special structures or large capacities, local body permissions may be required. We’ll tell you clearly if your building needs any extra structural or municipal clearance before we proceed.",
      keywords: [
        "municipality approval",
        "permission from nagar nigam",
        "local body permission",
        "corporation approval",
        "municipal clearance",
      ],
    },
    {
      question: "Will subsidy stop if government changes?",
      answer:
        "Schemes can evolve with time, but once your application is approved, installation is completed, and documents are submitted correctly, your subsidy is honoured as per then-prevailing rules. Waiting for politics to settle usually means losing months of savings you could already be earning.",
      keywords: [
        "government change",
        "new government subsidy",
        "politics affect subsidy",
        "if gov changes",
        "scheme after election",
        "subsidy discontinued",
      ],
    },
    {
      question: "What if portal is not working or OTP not coming?",
      answer:
        "The national portal occasionally faces delays or OTP issues during peak traffic. In such cases we try again during off-peak hours, verify your mobile/email, and sometimes switch browser or network. If problems continue, we coordinate with helplines and keep you updated instead of leaving you stuck.",
      keywords: [
        "portal error",
        "otp not received",
        "website not working",
        "unable to login portal",
        "pm surya ghar portal problem",
      ],
    },
    {
      question: "Can I apply without Aadhaar linking?",
      answer:
        "Aadhaar is central to KYC and direct transfer in PM Surya Ghar, so linking is effectively mandatory. Name, address and bank details must be consistent with your identity documents. If anything is mismatched, we usually fix KYC first to avoid subsidy getting delayed or blocked later.",
      keywords: [
        "aadhaar mandatory",
        "without aadhaar subsidy",
        "aadhaar linking",
        "aadhaar seeding",
        "aadhar not linked bank",
        "kyc problem",
      ],
    },
    {
      question: "Can joint owners both claim subsidy?",
      answer:
        "Where a property has joint ownership, normally subsidy is granted once against the single eligible electricity consumer account. Even if two names appear on the property papers, the scheme doesn’t double the subsidy. We document this clearly to avoid any misunderstanding within the family.",
      keywords: [
        "joint owner subsidy",
        "two owners house",
        "joint property solar",
        "both owners subsidy",
        "shared house subsidy",
        "co owner subsidy",
      ],
    },
    {
      question: "Does PM Surya Ghar cover solar water heaters?",
      answer:
        "PM Surya Ghar primarily targets rooftop solar PV (electricity). Solar water heaters may be supported under different state or central programs, depending on policy. We can help you understand options, but the main Muft Bijli benefits relate to electricity-generating rooftop panels.",
      keywords: [
        "solar water heater scheme",
        "geyser subsidy",
        "water heating subsidy",
        "surya ghar water heater",
        "hot water scheme",
      ],
    },
    {
      question: "Is three-phase connection required for subsidy?",
      answer:
        "Both single-phase and three-phase connections are eligible, as long as they meet DISCOM norms for rooftop solar capacity. Very large systems on tiny single-phase connections are not practical. We check your sanction load and suggest the correct sizing and any upgrade if needed.",
      keywords: [
        "single phase subsidy",
        "three phase solar",
        "1 phase 3 phase",
        "phase requirement",
        "phase for solar",
        "single phase eligible",
      ],
    },
    {
      question: "What is the minimum system size under PM Surya Ghar?",
      answer:
        "Most utilities and portal flows effectively start from 1 kW and above because of technical, safety and cost reasons. Very tiny systems give very low savings and are harder to justify under formal schemes. For homes, 1–3 kW is usually the sweet spot in practice.",
      keywords: [
        "minimum kw",
        "smallest system",
        "minimum capacity",
        "0.5kw subsidy",
        "half kw subsidy",
        "tiny system subsidy",
      ],
    },
    {
      question: "Will my existing state subsidy affect PM Surya Ghar benefit?",
      answer:
        "Generally, you cannot stack multiple rooftop subsidies for the same installation. If a state-level rooftop subsidy is active, rules may specify whether central support is adjusted or if only one of them applies. We always check the latest circulars before confirming your final benefit.",
      keywords: [
        "double subsidy",
        "state plus central",
        "two subsidy together",
        "combined subsidy",
        "overlapping subsidy",
        "both schemes",
      ],
    },
    {
      question: "How do you ensure my system meets scheme quality norms?",
      answer:
        "We use MNRE-approved brands, follow BIS standards, and design as per DISCOM guidelines. Wiring, earthing, structure design and protections all match code. After commissioning, DISCOM verifies the installation physically before activating net meter and subsidy processing, so quality is tightly controlled.",
      keywords: [
        "quality norms",
        "mnre norms",
        "bis standard",
        "standard compliance",
        "meets scheme norms",
        "safety standards",
      ],
    },
    {
      question: "Can I change vendor after applying on the portal?",
      answer:
        "In many cases, the portal allows vendor change before installation is marked complete, but it depends on current workflow and DISCOM status. Changing vendors mid-way can delay your project. We suggest choosing an empanelled partner you trust from the start to avoid repeated steps.",
      keywords: [
        "change vendor",
        "switch vendor",
        "change installer",
        "change company",
        "change service provider",
        "vendor change portal",
      ],
    },
    {
      question: "Will my subsidy reduce if panel prices fall later?",
      answer:
        "The subsidy amount is determined by notified structure, not daily market prices. If hardware prices decrease over time, future applicants may benefit with lower net costs, but your already-approved subsidy amount for that period stays as per the official norms at the time of sanction.",
      keywords: [
        "panel price fall",
        "subsidy change future",
        "less price later",
        "if cost decreases",
        "future price effect",
        "price drop",
      ],
    },
    {
      question: "What happens after 25 years when warranty ends?",
      answer:
        "After 25 years, panels still typically produce 75–85% of their original output. You can keep using them, selectively replace weaker modules, or upgrade to new technology. By then, you’d have recovered your investment many times over through savings, so system refresh becomes a choice, not a burden.",
      keywords: [
        "after 25 years",
        "after warranty",
        "end of life",
        "when warranty over",
        "what happens later",
        "life after 25 years",
      ],
    },
    {
      question: "Can I combine battery backup and PM Surya Ghar subsidy?",
      answer:
        "Yes, you can install a hybrid system where rooftop PV is subsidy-eligible and battery storage is added as a separate cost component. The subsidy is calculated on the eligible PV part. Batteries are useful in frequent outage areas, but we design them carefully so ROI still stays attractive.",
      keywords: [
        "battery plus subsidy",
        "hybrid with subsidy",
        "battery in scheme",
        "backup with pm surya ghar",
        "battery and rooftop scheme",
      ],
    },
    {
      question: "How do you decide ideal system size for my home?",
      answer:
        "We study your last 6–12 months’ electricity bills, check sanctioned load, understand appliances and AC usage, review your roof space and budget, and then simulate different system sizes. This way we suggest a capacity that balances subsidy, savings, and future needs instead of blindly oversizing.",
      keywords: [
        "ideal size",
        "how many kw",
        "right capacity",
        "what size system",
        "kw suggestion",
        "how to decide size",
      ],
    },
    {
      question: "What if my monthly consumption is very low?",
      answer:
        "If your usage is already very small, a large system might not be economical even with subsidy. In such cases we consider 1 kW or focus mainly on reliability and future usage growth rather than aggressive savings. A quick bill analysis helps us decide if solar truly makes sense for you.",
      keywords: [
        "low consumption",
        "small bill",
        "very low usage",
        "small user",
        "less units",
        "tiny bill",
      ],
    },
    {
      question: "Can I combine solar with energy efficiency upgrades?",
      answer:
        "Yes, combining rooftop solar with LED lighting, efficient fans, inverter ACs, and smart usage habits gives the best results. First we cut wastage, then we size solar for your optimized load. This reduces both upfront system cost and your overall lifetime spending on electricity.",
      keywords: [
        "efficiency plus solar",
        "led and solar",
        "ac and solar",
        "save more electricity",
        "efficiency upgrades",
        "efficient house",
      ],
    },
    {
      question: "Is PM Surya Ghar helpful for me?",
      answer:
        "Absolutely! If you own a home with electricity bills over ₹1,500/month, PM Surya Ghar is highly beneficial. You get up to ₹78,000 subsidy, 18-22% annual ROI, protection from tariff hikes, and 25+ years of savings. Tell me your monthly bill - I'll show exact benefits!",
      keywords: [
        "is helpful",
        "is beneficial",
        "should i take",
        "is it good",
        "worth taking",
        "is scheme good",
        "helpful for me",
        "benefit me",
        "will it help",
        "good for me",
        "is surya ghar helpful",
        "pm surya ghar helpful",
        "scheme helpful",
        "yojana helpful",
        "useful for me",
        "advantage for me",
        "good scheme",
      ],
    },
    {
      question: "Who should take PM Surya Ghar scheme?",
      answer:
        "Perfect for: homeowners with ₹1,500+ monthly bills, those with open roof space (100+ sq ft), people wanting protection from rising electricity rates, environmentally conscious families. If you plan to stay in your home 3+ years, solar under PM Surya Ghar is excellent!",
      keywords: [
        "who should take",
        "who benefits",
        "right for me",
        "suitable for",
        "for whom",
        "who needs solar",
        "who should apply",
        "eligibility benefit",
      ],
    },
    {
      question: "Will solar really save me money?",
      answer:
        "Yes! A 3kW system saves ₹36,000-60,000 yearly. After subsidy, your investment pays back in just 3-5 years. Then enjoy 20+ years of almost-free electricity! 500+ families in Tripura already saving big. Want to see calculation for your home? 📊",
      keywords: [
        "really save",
        "actually save",
        "truly beneficial",
        "genuine savings",
        "will save money",
        "does it work",
        "real benefits",
        "actually works",
      ],
    },
  ],
};

const keywordIndex: Map<string, number[]> = new Map();

solarKnowledgeBase.qaData.forEach((qa, index) => {
  qa.keywords.forEach((keyword) => {
    const key = keyword.toLowerCase();
    if (!keywordIndex.has(key)) {
      keywordIndex.set(key, []);
    }
    keywordIndex.get(key)!.push(index);
  });
});

export const getContextualAnswer = (userQuestion: string): string | null => {
  const lowerQuestion = userQuestion.toLowerCase();
  for (const [keyword, indices] of keywordIndex.entries()) {
    if (lowerQuestion.includes(keyword)) {
      return solarKnowledgeBase.qaData[indices[0]].answer;
    }
  }

  return null;
};
export const buildPromptContext = (): string => {
  return solarKnowledgeBase.qaData
    .map((qa) => `Q: ${qa.question}\nA: ${qa.answer}`)
    .join("\n\n");
};

export const defaultResponse =
  "I'm sorry, I couldn't quite understand your question. Could you please rephrase it or provide more details? 🤔\n\nFor immediate help, contact us:\n📞 Call: +91 70056 82736\n💬 WhatsApp: +91 9714533858\n\nOur team is available 24x7 to assist you!";
