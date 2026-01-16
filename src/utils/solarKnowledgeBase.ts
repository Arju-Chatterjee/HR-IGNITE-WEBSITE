export const solarKnowledgeBase = {
  systemPrompt: `You are a helpful solar installation assistant for a company based in Agartala, Tripura, India. 
Provide accurate, concise answers based on the knowledge base. Keep responses under 80 words. 
Be friendly and professional. If you don't know something, recommend contacting the team directly.`,

  qaData: [
    {
      question: "Hello / Hi / Hey",
      answer:
        "Hello! Welcome to our solar family! 🌞 I'm here to help you discover how solar energy can save you money and power your home with clean energy. What would you like to know about solar installation?",
      keywords: [
        "hello",
        "hi",
        "hey",
        "namaste",
        "good morning",
        "good afternoon",
        "good evening",
        "greetings",
      ],
    },
    {
      question: "How are you?",
      answer:
        "I'm doing great, thank you for asking! 😊 I'm here and ready to help you with all your solar energy questions. How can I assist you today?",
      keywords: ["how are you", "what's up", "whats up", "kaise ho", "how r u"],
    },
    {
      question: "Thank you",
      answer:
        "You're most welcome! 🙏 Feel free to ask if you have any more questions. We're here to help you go solar! Have a bright day ahead!",
      keywords: [
        "thank you",
        "thanks",
        "thank u",
        "thanku",
        "dhanyavaad",
        "shukriya",
      ],
    },
    {
      question: "Can you arrange a callback?",
      answer:
        "Absolutely! To save your time, you can directly call us at +91 70056 82736 or WhatsApp at +91 9714533858 for immediate assistance. We're available 24x7. Or share your number and we'll call you back within 30 minutes!",
      keywords: [
        "callback",
        "call back",
        "call me",
        "phone me",
        "contact me",
        "reach out",
      ],
    },
    {
      question: "I want to book a site visit",
      answer:
        "Excellent! We offer FREE site surveys across Tripura. Call us at +91 70056 82736 or WhatsApp +91 9714533858 to schedule your visit. Our expert will come to your location at your convenience!",
      keywords: [
        "site visit",
        "survey",
        "inspection",
        "come to my place",
        "visit my home",
      ],
    },
    {
      question: "What are your working hours?",
      answer:
        "We provide 24x7 support! You can reach us anytime at +91 70056 82736 (call) or +91 9714533858 (WhatsApp). Our site visits are scheduled Monday to Saturday, 9 AM to 6 PM.",
      keywords: [
        "working hours",
        "timing",
        "when open",
        "office time",
        "available when",
      ],
    },
    {
      question: "Where is your office located?",
      answer:
        "We are based in Agartala, Tripura, and serve all areas across Tripura with doorstep service. Call +91 70056 82736 for our exact office address or to schedule a free home visit!",
      keywords: [
        "office location",
        "address",
        "where are you",
        "office address",
      ],
    },
    {
      question: "Do you provide EMI options?",
      answer:
        "Yes! We can help you explore financing and EMI options for solar installation. The system typically pays for itself in 3-5 years through electricity savings. Contact us at +91 70056 82736 for detailed EMI plans.",
      keywords: [
        "emi",
        "loan",
        "finance",
        "installment",
        "payment plan",
        "easy payment",
      ],
    },
    {
      question: "What is the subsidy for 1kW solar system?",
      answer:
        "Under PM Surya Ghar scheme, you get ₹30,000 subsidy for a 1kW solar system. We handle all subsidy paperwork for you!",
      keywords: ["1kw", "subsidy", "1 kw", "one kw"],
    },
    {
      question: "What is the subsidy for 2kW solar system?",
      answer:
        "You can get ₹60,000 subsidy for a 2kW system under PM Surya Ghar Yojana in Tripura. We process the complete subsidy application.",
      keywords: ["2kw", "subsidy", "2 kw", "two kw"],
    },
    {
      question: "What is the subsidy for 3kW solar system?",
      answer:
        "Under PM Surya Ghar scheme, you get ₹78,000 subsidy for a 3kW solar system in Tripura. This is the maximum subsidy amount available for residential systems.",
      keywords: ["3kw", "subsidy", "3 kw", "three kw"],
    },
    {
      question: "What is the subsidy for 5kW solar system?",
      answer:
        "For 5kW system, you receive ₹78,000 subsidy. The subsidy is capped at 3kW level, so systems above 3kW get the same ₹78,000 subsidy amount.",
      keywords: ["5kw", "subsidy", "5 kw", "five kw"],
    },
    {
      question: "What is PM Surya Ghar Yojana?",
      answer:
        "PM Surya Ghar: Muft Bijli Yojana is India's largest domestic rooftop solar scheme launched in 2024. It provides subsidies up to ₹78,000 and aims to provide free electricity (up to 300 units/month) to 1 crore households by March 2027. We are MNRE approved vendors under this scheme.",
      keywords: [
        "pm surya ghar",
        "muft bijli",
        "surya ghar yojana",
        "government scheme",
        "modi scheme",
      ],
    },
    {
      question: "What is MNRE?",
      answer:
        "MNRE (Ministry of New and Renewable Energy) is the nodal agency for all renewable energy programs in India. We are MNRE-approved vendors, ensuring you get genuine products and guaranteed government subsidies.",
      keywords: ["mnre", "ministry", "renewable energy ministry"],
    },
    {
      question: "Am I eligible for solar subsidy?",
      answer:
        "You're eligible if you: 1) Are an Indian citizen, 2) Own a house with suitable roof, 3) Have valid electricity connection, 4) Haven't availed other solar subsidies. We'll verify your eligibility during free site survey!",
      keywords: [
        "eligible",
        "eligibility",
        "can i get",
        "qualify",
        "who can apply",
      ],
    },
    {
      question: "How does net metering work?",
      answer:
        "Net metering allows you to export excess solar power to the grid and get credits on your electricity bill. When your panels produce more than you use, the surplus goes to the grid. At night, you use grid power offset by these credits. We handle all net metering paperwork!",
      keywords: [
        "net metering",
        "metering",
        "excess electricity",
        "grid connection",
        "export power",
      ],
    },
    {
      question: "What documents are needed for subsidy?",
      answer:
        "Required documents: Aadhaar card, electricity bill, property documents, bank account details, and passport-size photos. Don't worry - we'll guide you through the entire documentation process and handle submissions!",
      keywords: [
        "documents",
        "papers",
        "requirement",
        "needed documents",
        "documents required",
      ],
    },
    {
      question: "How long does installation take?",
      answer:
        "We complete installation within 15 days of site approval and documentation. This includes panel mounting, inverter setup, wiring, and net metering application.",
      keywords: [
        "installation time",
        "how long",
        "duration",
        "days",
        "time taken",
      ],
    },
    {
      question: "What warranty do you provide?",
      answer:
        "We provide a comprehensive 27-year warranty covering solar panels, inverters, mounting structures, and workmanship. This is one of the longest warranties in the industry!",
      keywords: ["warranty", "guarantee", "coverage", "protection"],
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve all areas in Agartala and throughout Tripura with doorstep service. We provide free site surveys anywhere in Tripura, from cities to remote villages.",
      keywords: [
        "service area",
        "location",
        "agartala",
        "tripura",
        "where",
        "coverage area",
      ],
    },
    {
      question: "What is the cost of 1kW solar system?",
      answer:
        "After ₹30,000 subsidy, a 1kW system costs approximately ₹40,000 to ₹50,000. Final price depends on component quality. Call +91 70056 82736 for exact quote after free site survey.",
      keywords: ["1kw cost", "1kw price", "1 kw price"],
    },
    {
      question: "What is the cost of 2kW solar system?",
      answer:
        "After ₹60,000 subsidy, a 2kW system costs approximately ₹80,000 to ₹1,00,000. Contact us for detailed pricing based on your specific requirements.",
      keywords: ["2kw cost", "2kw price", "2 kw price"],
    },
    {
      question: "What is the cost of 3kW solar system?",
      answer:
        "After ₹78,000 subsidy, a 3kW system costs approximately ₹1,20,000 to ₹1,50,000 depending on component quality. This is our most popular residential size. Contact us for exact pricing!",
      keywords: ["3kw cost", "3kw price", "how much", "3 kw price"],
    },
    {
      question: "What is the cost of 5kW solar system?",
      answer:
        "After ₹78,000 subsidy, a 5kW system costs approximately ₹2,00,000 to ₹2,50,000. Ideal for larger homes. We provide detailed quotes after free site survey.",
      keywords: ["5kw cost", "5kw price", "5 kw price"],
    },
    {
      question: "How much can I save on electricity bills?",
      answer:
        "A 3kW system saves ₹3,000-5,000 monthly. A 5kW system saves ₹5,000-8,000 monthly. You can potentially reach ₹0 electricity bills! Annual savings can be ₹36,000 to ₹96,000.",
      keywords: [
        "save",
        "savings",
        "electricity bill",
        "monthly savings",
        "bill reduction",
      ],
    },
    {
      question: "What is your contact number?",
      answer:
        "Call us at +91 70056 82736 or WhatsApp at +91 9714533858. We're available 24x7 for all your queries and support!",
      keywords: ["contact", "phone", "number", "call", "whatsapp", "mobile"],
    },
    {
      question: "Do you offer free site survey?",
      answer:
        "Yes! We provide completely free site surveys with no obligation anywhere in Tripura. Our solar expert will visit your location, assess your roof, check shading, and provide customized recommendations. Book now: +91 70056 82736",
      keywords: [
        "site survey",
        "free survey",
        "visit",
        "inspection",
        "roof check",
      ],
    },
    {
      question: "What brands do you use?",
      answer:
        "We use only premium MNRE-approved and PM Surya Ghar certified brands including Tier-1 solar panels, high-efficiency inverters, and galvanized mounting structures for maximum efficiency and 25+ year lifespan.",
      keywords: ["brands", "components", "quality", "equipment", "products"],
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy! Call us at +91 70056 82736 or WhatsApp +91 9714533858. We'll schedule a FREE site visit, assess your needs, provide a quote, handle all paperwork, and install your system within 15 days!",
      keywords: ["get started", "begin", "start", "how to", "process", "steps"],
    },
    {
      question: "Are you MNRE approved?",
      answer:
        "Yes! We are officially MNRE-approved vendors and authorized under PM Surya Ghar scheme. This ensures you get genuine subsidies, quality components, and full government benefits.",
      keywords: ["mnre", "approved", "certified", "authorized", "registered"],
    },
    {
      question: "What maintenance is required?",
      answer:
        "Solar panels need minimal maintenance - just occasional cleaning (2-3 times yearly) to remove dust. We provide maintenance support throughout the 27-year warranty period. Annual checkups recommended.",
      keywords: ["maintenance", "care", "cleaning", "upkeep", "service"],
    },
    {
      question: "What is the ROI period?",
      answer:
        "Most systems pay for themselves in 3-5 years through electricity savings. After that, you enjoy FREE power for 20+ years! With ₹50,000-96,000 annual savings, ROI is excellent.",
      keywords: ["roi", "return", "payback", "investment", "break even"],
    },
    {
      question: "Can I install solar on a small roof?",
      answer:
        "Yes! Even small roofs (100-150 sq ft) can accommodate 1-2kW systems. Our experts will assess your roof space, shading, and orientation during the FREE site survey to maximize your solar potential.",
      keywords: ["small roof", "roof size", "space", "area", "limited space"],
    },
    {
      question: "What happens on cloudy or rainy days?",
      answer:
        "Solar panels work on cloudy days but at 10-25% reduced efficiency. You remain connected to the grid, so power supply is never interrupted. Excess power generated on sunny days is credited via net metering!",
      keywords: ["cloudy", "rain", "weather", "monsoon", "overcast"],
    },
    {
      question: "What is the lifespan of solar panels?",
      answer:
        "Solar panels last 25-30 years with minimal degradation (0.5-0.8% yearly). After 25 years, panels still produce 80-85% power. Our 27-year warranty ensures long-term performance and peace of mind.",
      keywords: ["lifespan", "life", "duration", "how long last", "durability"],
    },
    {
      question: "Do I need battery backup?",
      answer:
        "Battery backup is optional for grid-connected systems. Most homes don't need batteries as you stay connected to the grid. Batteries are recommended for areas with frequent power cuts. We'll assess during site visit!",
      keywords: [
        "battery",
        "backup",
        "storage",
        "power backup",
        "inverter battery",
      ],
    },
    {
      question: "Can I sell excess electricity?",
      answer:
        "Yes! Through net metering, you export excess solar power to the grid and receive credits on your electricity bill. This maximizes your savings, especially during high-production months!",
      keywords: ["sell", "excess", "export", "grid", "sell power"],
    },
    {
      question: "Will solar work during power cuts?",
      answer:
        "Standard grid-tied systems shut off during power cuts for safety. If you need backup during outages, we can install a hybrid system with battery storage. Discuss your needs during free site survey!",
      keywords: [
        "power cut",
        "outage",
        "load shedding",
        "blackout",
        "no electricity",
      ],
    },
    {
      question: "How much roof space is needed?",
      answer:
        "Approximately 100 sq ft per kW. So 1kW needs ~100 sq ft, 3kW needs ~300 sq ft, 5kW needs ~500 sq ft. Our team will measure and optimize your available roof space during FREE site visit.",
      keywords: [
        "roof space",
        "area needed",
        "space required",
        "how much space",
      ],
    },
    {
      question: "Is solar worth it in Tripura?",
      answer:
        "Absolutely! Tripura receives excellent sunlight (4.5-5.5 hours daily average). With ₹78,000 subsidy, rising electricity rates, and 27-year warranty, solar is highly profitable. Systems pay back in 3-5 years!",
      keywords: [
        "worth it",
        "tripura",
        "profitable",
        "good investment",
        "should i install",
      ],
    },
    {
      question: "What about monsoon season?",
      answer:
        "Solar panels work year-round! During monsoon, production reduces but doesn't stop. Annual production averages out. Plus, rain naturally cleans your panels! Net metering balances seasonal variations.",
      keywords: ["monsoon", "rainy season", "rain", "wet season"],
    },
    {
      question: "How long does subsidy approval take?",
      answer:
        "Subsidy approval typically takes 30-60 days after installation and documentation submission. We handle the entire process and follow up with authorities. You'll receive subsidy directly in your bank account!",
      keywords: [
        "subsidy approval",
        "how long subsidy",
        "subsidy time",
        "when subsidy",
      ],
    },
    {
      question: "Can I expand my system later?",
      answer:
        "Yes! You can add more panels later, but subsidy is available only for the first installation. Plan your capacity needs carefully. We'll help you choose the right size during free consultation!",
      keywords: ["expand", "add more", "increase capacity", "upgrade"],
    },
    {
      question: "What about property tax benefits?",
      answer:
        "Many states offer property tax exemptions or rebates for solar installations. Check with local municipal authorities. We'll provide all installation certificates needed for claiming benefits.",
      keywords: ["property tax", "tax benefit", "tax exemption", "tax rebate"],
    },
    {
      question: "Do panels work in extreme heat?",
      answer:
        "Yes! Solar panels are designed for Indian conditions and work efficiently in heat. In fact, Tripura's climate is ideal. Panels are tested for temperatures up to 85°C. Performance guaranteed!",
      keywords: ["heat", "hot weather", "temperature", "summer"],
    },
    {
      question: "Is there any hidden cost?",
      answer:
        "No hidden costs! Our quote includes panels, inverter, mounting, wiring, installation, net metering application, and subsidy processing. You only pay after installation completion. Transparent pricing guaranteed!",
      keywords: [
        "hidden cost",
        "extra charge",
        "additional cost",
        "total cost",
      ],
    },
    {
      question: "What if I sell my house?",
      answer:
        "Solar systems increase property value by 3-4%! The system transfers with the property. New owners enjoy continued electricity savings. Solar homes sell faster and at premium prices!",
      keywords: ["sell house", "property sale", "moving house", "transfer"],
    },
    {
      question: "How do I monitor my system?",
      answer:
        "We provide mobile app-based monitoring! Track real-time generation, consumption, savings, and system health from your smartphone. Get alerts for any issues. 24x7 remote monitoring available.",
      keywords: [
        "monitor",
        "app",
        "tracking",
        "check generation",
        "performance",
      ],
    },
    {
      question: "What if panels get damaged?",
      answer:
        "Our 27-year comprehensive warranty covers panel damage, manufacturing defects, and performance issues. We also recommend insurance for natural calamities. Quick replacement and repair support available!",
      keywords: ["damage", "broken", "cracked", "hail", "storm damage"],
    },
    {
      question: "Can I install on tin/asbestos roof?",
      answer:
        "Yes! We install on all roof types - concrete, tin, asbestos, tile. Our engineering team designs custom mounting solutions for each roof type. Free structural assessment during site visit!",
      keywords: [
        "tin roof",
        "asbestos",
        "roof type",
        "metal roof",
        "tile roof",
      ],
    },
    {
      question: "Why choose you over others?",
      answer:
        "✅ 27-year warranty (longest) ✅ FREE site survey ✅ 15-day installation ✅ Complete subsidy handling ✅ MNRE approved ✅ 24x7 support ✅ 353+ happy customers ✅ 500+ installations ✅ 5.0 Google rating ✅ Tripura's most trusted!",
      keywords: [
        "why choose",
        "why you",
        "advantage",
        "better than",
        "difference",
      ],
    },
    {
      question: "I'm confused, what should I do?",
      answer:
        "No worries! Let's make it simple. Just call us at +91 70056 82736 or WhatsApp +91 9714533858. Our expert will visit FREE, assess your home, explain everything clearly, and provide a customized solution. Zero confusion, zero obligation!",
      keywords: [
        "confused",
        "don't know",
        "not sure",
        "help me decide",
        "what to do",
      ],
    },
    {
      question: "Tell me customer reviews",
      answer:
        "We have 5.0 Google rating with 353+ happy customers and 500+ successful installations! Our customers love our quick service, transparent pricing, and lifetime support. Check our Google reviews or call +91 70056 82736 for customer references!",
      keywords: [
        "reviews",
        "rating",
        "testimonial",
        "customer feedback",
        "google review",
      ],
    },
    {
      question: "Will solar panels damage my roof?",
      answer:
        "No! Solar panels actually protect your roof from weather and UV damage. Our professional installation ensures no leaks or structural damage. The panels are lightweight and mounting is done on rafters, not roof surface.",
      keywords: [
        "damage roof",
        "roof damage",
        "harm roof",
        "roof leak",
        "roof protection",
        "effect roof",
        "affect roof",
        "roof effect",
        "solar roof",
        "roof impact",
        "hurt roof",
        "ruin roof",
        "destroy roof",
        "roof safe",
        "safe for roof",
        "soler roof",
        "solar effect",
        "effect my roof",
        "affect my roof",
      ],
    },
    {
      question: "Do solar panels work in extreme heat?",
      answer:
        "Solar panels need light, not heat! They work efficiently in all temperatures. While extreme heat slightly reduces efficiency (by 10-15%), Tripura's moderate climate is perfect for solar. Excess summer production balances through net metering.",
      keywords: [
        "extreme heat",
        "very hot",
        "high temperature",
        "summer heat",
        "too hot",
      ],
    },
    {
      question: "Can solar panels withstand storms and hail?",
      answer:
        "Yes! Our panels have tempered glass tested to withstand 25mm hailstones at 80 km/h. Mounting structures are engineered for 150 km/h wind speeds. Your system is built for all weather conditions!",
      keywords: [
        "storm",
        "hail",
        "cyclone",
        "strong wind",
        "weather proof",
        "durability",
      ],
    },
    {
      question: "What happens if a panel stops working?",
      answer:
        "Our 27-year warranty covers this! If any panel fails, we replace it free. Each panel works independently, so one faulty panel won't affect others. We monitor system performance and proactively address issues.",
      keywords: [
        "panel failure",
        "not working",
        "stopped working",
        "broken panel",
        "faulty panel",
      ],
    },
    {
      question: "Can I run air conditioner on solar?",
      answer:
        "Absolutely! A 3kW system can run 1 AC plus normal appliances. A 5kW system can easily power 2-3 ACs with other loads. Size your system based on AC usage - we'll calculate during free site survey!",
      keywords: [
        "air conditioner",
        "ac",
        "cooling",
        "run ac",
        "air conditioning",
      ],
    },
    {
      question: "Do I need to clean panels myself?",
      answer:
        "No need! Rain naturally cleans panels. For dusty months, we recommend professional cleaning 2-3 times yearly. Our maintenance team provides cleaning service throughout warranty period. Simple water cleaning is safe.",
      keywords: [
        "cleaning",
        "clean panels",
        "wash panels",
        "dust removal",
        "panel cleaning",
      ],
    },
    {
      question: "Will panels work in winter or cold weather?",
      answer:
        "Yes! Solar panels actually perform BETTER in cold weather. They need light, not heat. Cold temperatures improve efficiency. Winter production might be slightly lower due to shorter days, but annual output is excellent!",
      keywords: [
        "winter",
        "cold weather",
        "cold",
        "low temperature",
        "december january",
      ],
    },
    {
      question: "Can I install solar if I have trees nearby?",
      answer:
        "Depends on shading! Partial shade reduces output significantly. Our experts assess shade patterns during FREE site survey using solar pathfinder. We'll recommend optimal panel placement or suggest tree trimming if needed.",
      keywords: ["trees", "shade", "shadow", "shading", "nearby trees"],
    },
    {
      question: "How much electricity does 1kW generate daily?",
      answer:
        "1kW system generates 4-5 units (kWh) per day in Tripura (average). That's 120-150 units monthly, worth ₹700-1,000 savings. Actual generation varies by season, weather, and panel orientation.",
      keywords: [
        "1kw generation",
        "how much power",
        "daily generation",
        "electricity production",
      ],
    },
    {
      question: "What is the difference between on-grid and off-grid?",
      answer:
        "On-grid: Connected to electricity grid, uses net metering, no batteries needed, most common. Off-grid: Completely independent, needs batteries, works during power cuts, higher cost. We recommend on-grid with optional battery for Tripura!",
      keywords: [
        "on-grid",
        "off-grid",
        "difference",
        "grid tied",
        "standalone",
      ],
    },
    {
      question: "Can animals or monkeys damage the panels?",
      answer:
        "Panels have 4mm tempered glass - even monkeys jumping won't break them! Animals can't damage panels. Bird droppings reduce efficiency temporarily - easily cleaned. Our mounting prevents animal nesting underneath.",
      keywords: [
        "animals",
        "monkeys",
        "birds",
        "damage by animals",
        "wildlife",
      ],
    },
    {
      question: "Do I need batteries for solar?",
      answer:
        "Not mandatory for grid-tied systems! Grid acts as your 'battery' via net metering. Batteries are optional for backup during power cuts. If Tripura has frequent outages, we can add battery backup. Discuss needs during site visit!",
      keywords: [
        "need battery",
        "battery required",
        "backup battery",
        "power backup",
      ],
    },
    {
      question: "How do I know if my roof is suitable?",
      answer:
        "Most roofs work! Requirements: 100 sq ft per kW, south-facing preferred, minimal shade, structurally sound. Our FREE site survey includes: shadow analysis, roof strength check, orientation measurement. We'll confirm suitability!",
      keywords: [
        "suitable roof",
        "roof suitable",
        "roof compatibility",
        "right roof",
      ],
    },
    {
      question: "What if I have electricity load shedding?",
      answer:
        "Standard grid-tied systems shut off during outages for safety. For uninterrupted power, we offer hybrid systems with battery backup. Batteries store solar power for use during load shedding. Discuss your needs with us!",
      keywords: [
        "load shedding",
        "power cut",
        "outage",
        "electricity cut",
        "no power",
      ],
    },
    {
      question: "Can I install more panels later?",
      answer:
        "Yes, but subsidy applies only to first installation! Plan capacity carefully now. We help you size based on future needs too. Adding panels later is possible but without additional subsidy benefit.",
      keywords: [
        "add later",
        "expand later",
        "more panels",
        "increase size",
        "add more",
      ],
    },
    {
      question: "What is solar panel efficiency?",
      answer:
        "Efficiency is percentage of sunlight converted to electricity. We use 18-22% efficient panels (industry leading). Higher efficiency means more power from same space. Our premium panels maximize generation per sq ft!",
      keywords: [
        "efficiency",
        "panel efficiency",
        "conversion rate",
        "performance",
      ],
    },
    {
      question: "Do panels produce power at night?",
      answer:
        "No, panels need sunlight. At night, you use grid power offset by day's excess production via net metering. If you need nighttime backup, we can add battery storage to your system.",
      keywords: ["night", "nighttime", "after sunset", "evening", "dark"],
    },
    {
      question:
        "What is difference between monocrystalline and polycrystalline?",
      answer:
        "Monocrystalline: Black, 18-22% efficient, better performance, costlier. Polycrystalline: Blue, 15-17% efficient, budget-friendly. We use premium monocrystalline for maximum generation and longer life. Discuss options during consultation!",
      keywords: [
        "monocrystalline",
        "polycrystalline",
        "mono poly",
        "panel types",
        "difference",
      ],
    },
    {
      question: "How does solar reduce my carbon footprint?",
      answer:
        "3kW system offsets 3-4 tons CO2 annually - equivalent to planting 150 trees! Over 25 years, you prevent 75-100 tons CO2 emissions. Solar is clean, renewable, and helps fight climate change while saving money!",
      keywords: [
        "carbon footprint",
        "environment",
        "green energy",
        "eco-friendly",
        "pollution",
      ],
    },
    {
      question: "Can I get loan for solar installation?",
      answer:
        "Yes! Many banks offer solar loans at 8-11% interest. We assist with loan applications. With subsidy and loans, upfront cost reduces dramatically. Monthly EMI is often less than electricity bill savings!",
      keywords: ["loan", "financing", "bank loan", "credit", "borrow money"],
    },
    {
      question: "What is inverter and why is it needed?",
      answer:
        "Inverter converts DC power from panels to AC power for home use. It's the brain of your system! We use premium string inverters or micro-inverters with 10-year warranty, monitoring capability, and 97%+ efficiency.",
      keywords: [
        "inverter",
        "converter",
        "what is inverter",
        "inverter function",
      ],
    },
    {
      question: "Will solar increase my property value?",
      answer:
        "Yes! Solar homes sell 3-4% higher and 20% faster. Buyers love lower electricity costs. Solar is seen as premium amenity. Your investment not only saves money but also increases property marketability!",
      keywords: [
        "property value",
        "home value",
        "resale value",
        "increase value",
      ],
    },
    {
      question: "Can I install solar on metal/tin roof?",
      answer:
        "Absolutely! We install on all roof types: RCC, tin, asbestos, tile, metal. Each needs specific mounting solutions. Our engineers design custom installations preventing leaks and ensuring structural integrity. FREE assessment included!",
      keywords: [
        "tin roof",
        "metal roof",
        "sheet roof",
        "asbestos roof",
        "roof type",
      ],
    },
    {
      question: "What permits or approvals are needed?",
      answer:
        "We handle all permissions! Required: Net metering application, electricity board approval, structural safety certificate (for some areas). Don't worry - we manage entire approval process. You just sign documents!",
      keywords: ["permission", "approval", "permit", "clearance", "noc"],
    },
    {
      question: "How does panel tilt angle affect performance?",
      answer:
        "Optimal tilt for Tripura is 15-25 degrees (matching latitude). Proper tilt maximizes annual generation. Flat panels lose 10-15% efficiency. Our engineers calculate perfect angle during design for your location!",
      keywords: [
        "tilt angle",
        "panel angle",
        "slope",
        "inclination",
        "orientation",
      ],
    },
    {
      question: "Can I monitor my solar system on phone?",
      answer:
        "Yes! We provide mobile app for real-time monitoring. Track: live generation, daily/monthly production, savings, system health, panel-level performance. Get alerts for any issues. Monitor from anywhere, anytime!",
      keywords: [
        "mobile app",
        "phone monitoring",
        "track performance",
        "monitor system",
        "app",
      ],
    },
    {
      question: "What if electricity rates increase in future?",
      answer:
        "Great news! Your savings INCREASE! Solar protects you from rising electricity rates. While grid prices rise 5-8% yearly, your solar generation cost stays fixed. Your investment becomes more valuable over time!",
      keywords: [
        "future rates",
        "price increase",
        "tariff hike",
        "electricity cost rise",
      ],
    },
    {
      question: "Is solar safe during lightning?",
      answer:
        "Yes! All systems include lightning arrestors and earthing as per electrical safety codes. Panels are grounded. In 25+ years, lightning damage is extremely rare. Our installation meets all safety standards!",
      keywords: [
        "lightning",
        "thunderstorm",
        "electrical safety",
        "shock",
        "safe",
      ],
    },
    {
      question: "Can I use solar for water heater?",
      answer:
        "Yes! Solar water heaters are separate products. We can install both - solar panels for electricity AND solar water heaters. Combination maximizes savings! Discuss complete solar solutions with us.",
      keywords: ["water heater", "hot water", "geyser", "water heating"],
    },
    {
      question: "What happens to warranty if I shift house?",
      answer:
        "Warranty transfers with property! New owners enjoy remaining warranty period. Solar increases property value and selling speed. System continues generating savings for new owners. Win-win situation!",
      keywords: ["transfer warranty", "shift house", "move house", "relocate"],
    },
    {
      question: "Do you provide after-sales service?",
      answer:
        "Absolutely! 24x7 customer support, regular monitoring, annual maintenance visits, quick response for issues, replacement support for faulty components. We're with you for entire 27-year warranty period!",
      keywords: [
        "after sales",
        "service",
        "support",
        "customer care",
        "help after",
      ],
    },
    {
      question: "How to apply for PM Surya Ghar subsidy?",
      answer:
        "Simple! Register on pmsuryaghar.gov.in portal, submit documents, get approval, complete installation, apply for subsidy. Don't worry - WE HANDLE EVERYTHING! From registration to subsidy credit. Zero hassle for you!",
      keywords: [
        "apply subsidy",
        "subsidy application",
        "how to apply",
        "subsidy process",
      ],
    },
    {
      question: "What is the current electricity tariff in Tripura?",
      answer:
        "Residential tariffs in Tripura range from ₹5-8 per unit depending on consumption slab. Higher consumption = higher rates. Solar locks your cost at ₹3-4 per unit for 25 years. Huge savings!",
      keywords: [
        "electricity rate",
        "tariff",
        "unit cost",
        "electricity price tripura",
      ],
    },
    {
      question: "Can solar work with inverter battery?",
      answer:
        "Yes! We can integrate solar with your existing inverter system. Hybrid inverters allow seamless operation of solar + grid + battery. This gives you maximum flexibility and backup during outages.",
      keywords: [
        "inverter battery",
        "existing inverter",
        "hybrid",
        "with battery",
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
