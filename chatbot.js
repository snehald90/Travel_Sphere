// document.addEventListener('DOMContentLoaded', function() {
//     // 1. Initialize elements
//     const elements = {
//         container: document.getElementById('chatbotContainer'),
//         btn: document.getElementById('chatbotBtn'),
//         close: document.getElementById('chatbotClose'),
//         messages: document.getElementById('chatbotMessages'),
//         input: document.getElementById('chatbotInput'),
//         send: document.getElementById('chatbotSend'),
//         quickReplies: document.getElementById('quickRepliesContainer'),
//         reset: document.getElementById('resetChatBtn'),
//         help: document.getElementById('helpBtn'),
//         pulseDot: document.querySelector('.pulse-dot')
//     };

//     // Check if all elements exist
//     for (const [key, element] of Object.entries(elements)) {
//         if (!element) {
//             console.error(`Element not found: ${key}`);
//             return;
//         }
//     }

//     function processUserInput(input) {
//         input = input.toLowerCase().trim();

//         // Help/Contact Redirection
//         if(input === 'help' || input === 'contact' || input === 'human help') {
//             return {
//                 action: 'redirect',
//                 path: 'contact.html',
//                 text: 'Redirecting you to our contact page...'
//             };
//         } }
//     // Rest of your chatbot code...
// });
//        // 2. Knowledge Base
//        const knowledgeBase = {
//         greetings: [
//             "Namaste! 👋 I'm your Pune travel assistant. How can I help you today?",
//             "Hello traveler! 🌍 Ready to explore Pune? What would you like to know?",
//             "Hi there! ✨ Planning your Pune trip? I can help with destinations, food, and more!"
//         ],
//         destinations: {
//             "Shaniwar Wada": {
//                 description: "🏰 The historic fortification built by the Peshwas in 1732, known for its architectural grandeur and as the seat of the Maratha Empire.",
//                 highlights: [
//                     "Five massive gates with intricate designs",
//                     "Remains of the seven-story palace",
//                     "Evening light and sound show",
//                     "Beautiful garden complex"
//                 ],
//                 timings: "9:00 AM - 5:30 PM (Closed Mondays)",
//                 entry: "₹25 for Indians, ₹300 for foreigners",
//                 bestTime: "October to February (mornings are best)",
//                 nearby: [
//                     "Badshahi Cafe (0.5km) for Irani chai",
//                     "Kayani Bakery (1km) for Shrewsbury biscuits"
//                 ],
//                 tips: "Hire a guide to understand the rich history (₹200-300)",
//                 quickReplies: ["History", "Best time to visit", "Nearby eateries", "Entry fee"]
//             },
//             "Sinhagad Fort": {
//                 description: "🏔️ Ancient hill fortress located 30km southwest of Pune, famous for its historical significance and panoramic views.",
//                 highlights: [
//                     "Site of Tanaji Malusare's legendary battle",
//                     "Tanaji Memorial and Kali Temple",
//                     "Military stables and Pune viewpoint",
//                     "Multiple trekking routes"
//                 ],
//                 timings: "Open 24 hours (Best visited sunrise to sunset)",
//                 entry: "Free",
//                 trekInfo: {
//                     difficulty: "Moderate (2-3 hours climb)",
//                     bestRoute: "Atkarwadi route is easiest",
//                     precautions: "Carry water, wear good shoes"
//                 },
//                 tips: "Try the local curd and pithla bhakri at stalls near the top",
//                 quickReplies: ["Trek difficulty", "Best route", "Nearby food", "History"]
//             },
//             "Aga Khan Palace": {
//                 description: "🕌 Majestic palace built in 1892 with Italian arches, significant for its connection to Mahatma Gandhi's imprisonment during Quit India Movement.",
//                 highlights: [
//                     "Gandhi Memorial containing his ashes",
//                     "Photography exhibition of freedom struggle",
//                     "19-acre garden with beautiful landscaping",
//                     "Italian-Indian architectural blend"
//                 ],
//                 timings: "9:00 AM - 5:30 PM",
//                 entry: "₹25 for Indians, ₹300 for foreigners",
//                 nearby: [
//                     "River Walk (0.5km for evening strolls)",
//                     "KP Bakery (1km for fresh breads)"
//                 ],
//                 tips: "Visit during weekdays to avoid crowds",
//                 quickReplies: ["History", "Photo spots", "Visitor tips", "Entry fee"]
//             },
//             "Dagdusheth Temple": {
//                 description: "🛕 Renowned Hindu temple dedicated to Lord Ganesha, famous for its gold-plated dome and 7.5 feet tall idol.",
//                 highlights: [
//                     "Gold-plated dome worth ₹50 million",
//                     "Ornate silver frame around the idol",
//                     "Evening aarti ceremony at 7:30 PM",
//                     "Year-round decorations and flowers"
//                 ],
//                 timings: "6:00 AM - 11:00 PM",
//                 entry: "Free (Special darshan ₹50-500)",
//                 festivalInfo: "During Ganesh Chaturthi (Aug/Sep), hosts one of Pune's most elaborate processions",
//                 tips: "Visit early morning or late evening to avoid long queues",
//                 quickReplies: ["Best time to visit", "Festival dates", "Nearby places", "History"]
//             },
//             "Khadakwasla Dam": {
//                 description: "💧 Scenic dam on the Mutha River offering beautiful sunset views and water activities, located 20km from Pune.",
//                 highlights: [
//                     "Sunset viewpoints",
//                     "Boating facilities available",
//                     "Nearby Sinhagad Fort view",
//                     "Military academy nearby"
//                 ],
//                 timings: "6:00 AM - 6:00 PM",
//                 entry: "Free",
//                 bestTime: "Monsoon (July-Sept) for full reservoir",
//                 nearby: [
//                     "The Gateway Hotel (for lakeside dining)",
//                     "Peshwe Park (for kids)"
//                 ],
//                 tips: "Carry binoculars for better views of surrounding hills",
//                 quickReplies: ["Activities", "Best time to visit", "Nearby places", "Photography spots"]
//             },
//             "Rajiv Gandhi Zoo": {
//                 description: "🦁 Well-maintained zoological park with diverse animal species and a reptile house, officially known as Rajiv Gandhi Zoological Park & Wildlife Research Center.",
//                 highlights: [
//                     "White tigers and leopards",
//                     "Extensive reptile house",
//                     "Butterfly park",
//                     "Toy train for children"
//                 ],
//                 timings: "9:30 AM - 6:00 PM (Closed Mondays)",
//                 entry: "₹50 for adults, ₹25 for children",
//                 bestTime: "Winter mornings (animals most active)",
//                 tips: "Wear comfortable shoes as walking area is large",
//                 quickReplies: ["Animal list", "Entry fee", "Best time to visit", "Toy train info"]
//             },
//             "Visapur Fort": {
//                 description: "🏯 Historic hill fort near Lonavala with panoramic views, popular for trekking and its connection to Maratha history.",
//                 highlights: [
//                     "Massive fort walls and bastions",
//                     "Ancient water cisterns",
//                     "Caves used by Maratha soldiers",
//                     "360-degree view of Sahyadris"
//                 ],
//                 timings: "Sunrise to Sunset",
//                 entry: "Free",
//                 trekInfo: {
//                     difficulty: "Moderate (1.5-2 hours climb)",
//                     startingPoint: "Visapur village base"
//                 },
//                 tips: "Combine with Lohagad Fort visit as they're nearby",
//                 quickReplies: ["Trek difficulty", "Best route", "Nearby forts", "History"]
//             },
//             "Shivneri Fort": {
//                 description: "🏰 Birthplace of Chhatrapati Shivaji Maharaj, this hill fort offers stunning views and historical significance.",
//                 highlights: [
//                     "Shivaji's birthplace monument",
//                     "Seven gates to the fort",
//                     "Ancient water reservoirs",
//                     "Panoramic views of Junnar valley"
//                 ],
//                 timings: "6:00 AM - 6:00 PM",
//                 entry: "₹25",
//                 bestTime: "October to March (cool weather)",
//                 nearby: [
//                     "Lenyadri Caves (8km)",
//                     "Ozhar Balaji Temple (12km)"
//                 ],
//                 tips: "Hire a guide at entrance to understand historical significance",
//                 quickReplies: ["History", "Best time to visit", "Nearby attractions", "Entry fee"]
//             },
//             "Raigad Fort": {
//                 description: "🏔️ Capital fort of Chhatrapati Shivaji's kingdom, featuring majestic architecture and breathtaking views.",
//                 highlights: [
//                     "Rope-way to fort top",
//                     "Shivaji's coronation site",
//                     "Hirkani Buruj (heroic woman's story)",
//                     "Market area ruins"
//                 ],
//                 timings: "8:00 AM - 6:00 PM",
//                 entry: "₹25 (plus ₹200 for rope-way)",
//                 bestTime: "Sunrise or sunset for best views",
//                 tips: "Rope-way operates till 5:30 PM only",
//                 quickReplies: ["Rope-way timings", "History", "Nearby stays", "Photography spots"]
//             },
//             "Rajgad Fort": {
//                 description: "🏯 Former capital of the Maratha Empire, this majestic fort offers historical significance, architectural marvels, and breathtaking views.",
//                 highlights: [
//                     "Three distinct levels (Balekilla, Suvela Machi)",
//                     "Huge storage granaries",
//                     "Padmavati Temple ruins",
//                     "16km circumference walls"
//                 ],
//                 timings: "Sunrise to Sunset",
//                 entry: "Free",
//                 trekInfo: {
//                     difficulty: "Difficult (3-4 hours climb)",
//                     routes: "Gunjavane is most popular starting point"
//                 },
//                 tips: "Requires full day trip from Pune",
//                 quickReplies: ["Trek difficulty", "Best route", "Nearby villages", "History"]
//             },
//             "Lohagad Fort": {
//                 description: "🏰 Ancient hill fortress with impressive fortifications and breathtaking views of the Sahyadris, near Lonavala.",
//                 highlights: [
//                     "Vinchu Kata (scorpion tail-like extension)",
//                     "Four massive gates",
//                     "Ancient water tanks",
//                     "View of Pawna lake"
//                 ],
//                 timings: "Sunrise to Sunset",
//                 entry: "Free",
//                 trekInfo: {
//                     difficulty: "Easy to Moderate (1.5 hours climb)",
//                     startingPoint: "Lohagadwadi base village"
//                 },
//                 tips: "Combine with Visapur Fort visit as they're twin forts",
//                 quickReplies: ["Trek details", "Best time to visit", "Nearby attractions", "History"]
//             },
//             "Vasota Fort": {
//                 description: "🌲 Remote jungle fort in Sahyadris with thrilling boat ride and wildlife encounters, offering pristine wilderness experience.",
//                 highlights: [
//                     "Boat ride on Shivsagar lake",
//                     "Possible wildlife sightings",
//                     "Dense forest surroundings",
//                     "Ancient Nageshwar temple"
//                 ],
//                 timings: "6:00 AM - 6:00 PM (Permit required)",
//                 entry: "Permit needed from forest department",
//                 bestTime: "November to February",
//                 tips: "Requires full day trip with guide, not for casual visitors",
//                 quickReplies: ["Permit process", "Best time to visit", "Boat ride info", "Safety tips"]
//             },
//             "Rajmanchi Fort": {
//                 description: "🌄 Hidden gem of Sahyadris with ancient rock-cut caves and stunning valley views, offering peaceful trekking experience.",
//                 highlights: [
//                     "Ancient rock-cut caves",
//                     "360-degree valley views",
//                     "Less crowded trails",
//                     "Beautiful sunrise/sunset"
//                 ],
//                 timings: "Sunrise to Sunset",
//                 entry: "Free",
//                 trekInfo: {
//                     difficulty: "Moderate (2 hours climb)",
//                     startingPoint: "Near Bhor town"
//                 },
//                 tips: "Carry enough water as no facilities available",
//                 quickReplies: ["Trek route", "Best time to visit", "Photography spots", "History"]
//             },
//             "Jejuri Fort": {
//                 description: "⛰️ Sacred hill fort temple dedicated to Lord Khandoba, famous for its vibrant yellow turmeric festival and steep climb.",
//                 highlights: [
//                     "Khandoba Temple at top",
//                     "Turmeric-covered steps during festivals",
//                     "Panoramic views of countryside",
//                     "Ancient cannon at summit"
//                 ],
//                 timings: "6:00 AM - 8:00 PM",
//                 entry: "Free",
//                 festivalInfo: "Annual Yellu festival (Dec-Jan) covers steps in turmeric",
//                 tips: "Wear comfortable shoes for 500+ step climb",
//                 quickReplies: ["Festival dates", "Best time to visit", "Nearby places", "Temple history"]
//             },
//             "Raja Dinkar Kelkar Museum": {
//                 description: "🏛️ Treasure trove of Indian craftsmanship featuring over 20,000 artifacts including musical instruments, sculptures, and antique household items.",
//                 highlights: [
//                     "Mastani Mahal recreation",
//                     "Collection of 1,500 lamps",
//                     "Ancient musical instruments",
//                     "Traditional kitchen displays"
//                 ],
//                 timings: "9:30 AM - 5:30 PM",
//                 entry: "₹50 for adults, ₹10 for children",
//                 bestTime: "Weekday mornings for peaceful visit",
//                 tips: "Allocate at least 2 hours for proper exploration",
//                 quickReplies: ["Must-see exhibits", "Entry fee", "Photography rules", "History"]
//             },
//             "Vishrambaug Wada": {
//                 description: "🏡 Historic mansion showcasing Pune's royal heritage with exquisite Peshwa-era architecture, now a cultural center.",
//                 highlights: [
//                     "Intricate wooden carvings",
//                     "Traditional courtyard design",
//                     "Cultural exhibitions",
//                     "Photography opportunities"
//                 ],
//                 timings: "10:00 AM - 5:00 PM (Closed Mondays)",
//                 entry: "₹25",
//                 nearby: [
//                     "Tilak Smarak Mandir (500m)",
//                     "Sarasbaug (1km)"
//                 ],
//                 tips: "Check for cultural events schedule before visiting",
//                 quickReplies: ["Architecture details", "Best time to visit", "Nearby attractions", "Entry fee"]
//             },
//             "National War Memorial Southern Command": {
//                 description: "🪦 A solemn tribute to Indian soldiers who sacrificed their lives in various wars, featuring impressive architecture and peaceful surroundings.",
//                 highlights: [
//                     "Names of martyrs inscribed",
//                     "Light and sound show",
//                     "Military equipment display",
//                     "Well-maintained gardens"
//                 ],
//                 timings: "9:00 AM - 6:30 PM",
//                 entry: "Free",
//                 bestTime: "Evening for light show (weekends)",
//                 tips: "Maintain decorum as it's a memorial site",
//                 quickReplies: ["History", "Light show timings", "Photography rules", "Nearby places"]
//             },
//             "Blades of Glory Cricket Museum": {
//                 description: "🏏 World's largest cricket museum showcasing rare memorabilia, artifacts, and the history of cricket.",
//                 highlights: [
//                     "Sachin Tendulkar gallery",
//                     "Historical cricket equipment",
//                     "Interactive displays",
//                     "World Cup trophies replica"
//                 ],
//                 timings: "10:00 AM - 6:00 PM",
//                 entry: "₹200-500 depending on package",
//                 bestTime: "Weekdays for less crowd",
//                 tips: "Cricket fans should allocate 2+ hours",
//                 quickReplies: ["Must-see exhibits", "Ticket prices", "Photography rules", "Interactive features"]
//             },
//             "Shree Chhatrapati Shivaji Maharaj Museum": {
//                 description: "🏛️ Premier museum showcasing the life, weapons, and legacy of the great Maratha warrior king, Chhatrapati Shivaji Maharaj.",
//                 highlights: [
//                     "Shivaji's weapons replica",
//                     "Historical paintings",
//                     "Maratha armor display",
//                     "Interactive battle maps"
//                 ],
//                 timings: "10:00 AM - 5:00 PM (Closed Mondays)",
//                 entry: "₹20",
//                 nearby: [
//                     "Shaniwar Wada (1km)",
//                     "Lal Mahal (1.5km)"
//                 ],
//                 tips: "English guide available for ₹100",
//                 quickReplies: ["Must-see exhibits", "Entry fee", "Photography rules", "History"]
//             },
//             "Parvati Hills": {
//                 description: "⛰️ Scenic hilltop with ancient temples, offering panoramic views of Pune city and rich historical significance.",
//                 highlights: [
//                     "Parvati Temple complex",
//                     "Devdeveshwar Temple",
//                     "Peshwa Museum",
//                     "Sunset viewpoints"
//                 ],
//                 timings: "6:00 AM - 8:00 PM",
//                 entry: "Free",
//                 bestTime: "Early morning or evening",
//                 tips: "300+ steps to climb, wear comfortable shoes",
//                 quickReplies: ["Temple history", "Best time to visit", "Nearby places", "Photography spots"]
//             },
//             "Alandi": {
//                 description: "🛕 Sacred pilgrimage town known for the Samadhi of Sant Dnyaneshwar, attracting devotees and spiritual seekers.",
//                 highlights: [
//                     "Dnyaneshwar Samadhi",
//                     "Vitthal-Rukmini Temple",
//                     "Ghats along Indrayani river",
//                     "Spiritual bookstores"
//                 ],
//                 timings: "6:00 AM - 8:00 PM",
//                 entry: "Free",
//                 festivalInfo: "Dnyaneshwar Palkhi procession (annual event)",
//                 tips: "Remove footwear before entering temple areas",
//                 quickReplies: ["Best time to visit", "Festival dates", "Nearby places", "History"]
//             },
//             "Dehu Temple": {
//                 description: "🛕 Sacred pilgrimage site dedicated to Sant Tukaram, a revered saint of the Bhakti movement, known for its spiritual ambiance.",
//                 highlights: [
//                     "Tukaram Maharaj Samadhi",
//                     "Ancient banyan tree",
//                     "Ghats along Indrayani river",
//                     "Evening aarti ceremony"
//                 ],
//                 timings: "5:30 AM - 9:00 PM",
//                 entry: "Free",
//                 festivalInfo: "Annual Tukaram Maharaj Palkhi procession",
//                 tips: "Visit during weekdays for peaceful experience",
//                 quickReplies: ["Best time to visit", "Festival dates", "Nearby places", "History"]
//             },
//             "Chaturshringi Temple": {
//                 description: "🛕 Ancient hilltop temple dedicated to Goddess Chaturshringi, known for its scenic location and Navratri celebrations.",
//                 highlights: [
//                     "Four-peaked hill setting",
//                     "Navratri festival decorations",
//                     "City views from temple",
//                     "Peaceful atmosphere"
//                 ],
//                 timings: "6:00 AM - 9:00 PM",
//                 entry: "Free",
//                 festivalInfo: "Navratri (Sept/Oct) sees special celebrations",
//                 tips: "100+ steps to climb, moderate fitness required",
//                 quickReplies: ["Best time to visit", "Festival info", "Nearby places", "Temple history"]
//             },
//             "Pataleshwar Cave Temple": {
//                 description: "🕳️ 8th-century rock-cut temple dedicated to Lord Shiva, featuring impressive stone carvings and a peaceful underground atmosphere.",
//                 highlights: [
//                     "Underground Shiva linga",
//                     "Nandi bull sculpture",
//                     "Ancient stone carvings",
//                     "Cool atmosphere in summers"
//                 ],
//                 timings: "8:00 AM - 5:30 PM",
//                 entry: "Free",
//                 bestTime: "Morning for peaceful visit",
//                 tips: "Remove footwear before entering cave",
//                 quickReplies: ["History", "Best time to visit", "Photography tips", "Nearby places"]
//             },
//             "ARAI Hills": {
//                 description: "⛰️ Scenic hill range with trekking trails, offering panoramic views of Pune and home to the Automotive Research Association.",
//                 highlights: [
//                     "Sunrise/sunset viewpoints",
//                     "Moderate trekking trails",
//                     "ARAI testing track view",
//                     "Less crowded than other hills"
//                 ],
//                 timings: "6:00 AM - 6:00 PM",
//                 entry: "Free",
//                 bestTime: "Early morning for best views",
//                 tips: "Carry water as no facilities available",
//                 quickReplies: ["Trekking routes", "Best time to visit", "Photography spots", "Safety tips"]
//             },
//             "Bhimashankar Temple": {
//                 description: "🛕 One of the 12 Jyotirlingas, this sacred Shiva temple is nestled in the Sahyadri mountains with rich biodiversity.",
//                 highlights: [
//                     "Jyotirlinga shrine",
//                     "Bhimashankar Wildlife Sanctuary",
//                     "Ancient Nagara style architecture",
//                     "Beautiful forest surroundings"
//                 ],
//                 timings: "4:30 AM - 9:30 PM",
//                 entry: "Free (Special darshan ₹50-200)",
//                 bestTime: "Maha Shivratri festival sees special celebrations",
//                 tips: "Dress modestly as it's a religious site",
//                 quickReplies: ["Best time to visit", "Festival dates", "Nearby places", "Temple history"]
//             },
//             "Lonavala": {
//                 description: "🏞️ Popular hill station in the Sahyadri ranges, famous for its scenic valleys, waterfalls, and chikki snacks.",
//                 highlights: [
//                     "Tiger's Leap viewpoint",
//                     "Bushy Dam in monsoon",
//                     "Karla and Bhaja caves",
//                     "Local chikki shops"
//                 ],
//                 timings: "All day",
//                 entry: "Free (some attractions may charge)",
//                 bestTime: "Monsoon (July-Sept) for waterfalls",
//                 tips: "Try chikki from Maganlal or Chikki House",
//                 quickReplies: ["Best attractions", "Best time to visit", "Local food", "Stay options"]
//             },
//             "Mahabaleshwar": {
//                 description: "🏞️ Popular hill station known for its strawberry farms, scenic viewpoints, and ancient temples in the Western Ghats.",
//                 highlights: [
//                     "Strawberry picking (Dec-Apr)",
//                     "Arthur's Seat viewpoint",
//                     "Venna Lake boating",
//                     "Mapro Garden"
//                 ],
//                 timings: "All day",
//                 entry: "No entry fee (some attractions charge)",
//                 bestTime: "October to June (avoid monsoon)",
//                 tips: "Carry light woolens even in summer",
//                 quickReplies: ["Best viewpoints", "Strawberry season", "Local food", "Stay options"]
//             },
//             "Matheran": {
//                 description: "🚂 Asia's only automobile-free hill station with colonial-era charm, 38 scenic viewpoints, and peaceful forest trails.",
//                 highlights: [
//                     "Toy train ride",
//                     "Charlotte Lake",
//                     "Sunrise at Panorama Point",
//                     "Horse riding options"
//                 ],
//                 timings: "All day",
//                 entry: "₹50 eco fee",
//                 bestTime: "October to May (avoid monsoon)",
//                 tips: "Wear comfortable walking shoes as no vehicles allowed",
//                 quickReplies: ["Best viewpoints", "Toy train info", "Stay options", "Horse riding"]
//             },
//             "Khandala": {
//                 description: "🌉 Picturesque hill station in the Western Ghats known for its misty valleys, waterfalls, and scenic viewpoints.",
//                 highlights: [
//                     "Kune Falls",
//                     "Rajmachi Point",
//                     "Bhor Ghat view",
//                     "Duke's Nose cliff"
//                 ],
//                 timings: "All day",
//                 entry: "Free (some viewpoints may charge)",
//                 bestTime: "Monsoon for waterfalls, winter for views",
//                 tips: "Combine with Lonavala visit as they're nearby",
//                 quickReplies: ["Best viewpoints", "Best time to visit", "Local food", "Stay options"]
//             },
//             "Lavasa": {
//                 description: "🏙️ India's first planned hill city with picturesque lakeside promenades, adventure activities, and Mediterranean-style architecture.",
//                 highlights: [
//                     "Lakeside walking trails",
//                     "Water sports activities",
//                     "Tamarind Trail for food",
//                     "Beautiful architecture"
//                 ],
//                 timings: "24 hours",
//                 entry: "Free (activities charge separately)",
//                 bestTime: "October to March (pleasant weather)",
//                 tips: "Weekdays are less crowded than weekends",
//                 quickReplies: ["Best activities", "Stay options", "Dining places", "Photography spots"]
//             },
//             "Panchgani": {
//                 description: "🍓 Scenic hill station famous for its strawberry farms, five hills, and breathtaking viewpoints overlooking the Krishna Valley.",
//                 highlights: [
//                     "Table Land (largest volcanic plateau)",
//                     "Strawberry picking (Dec-Mar)",
//                     "Sydney Point views",
//                     "Mapro Garden"
//                 ],
//                 timings: "All day",
//                 entry: "Free (some attractions charge)",
//                 bestTime: "October to May",
//                 tips: "Try fresh strawberry cream at Mapro",
//                 quickReplies: ["Best viewpoints", "Strawberry season", "Local food", "Stay options"]
//             },
//             "Tamhini Ghat": {
//                 description: "🌧️ Scenic mountain pass with lush greenery and waterfalls, famous for its monsoon beauty and winding roads.",
//                 highlights: [
//                     "Waterfalls in monsoon",
//                     "Beautiful valley views",
//                     "Less crowded trails",
//                     "Photography opportunities"
//                 ],
//                 timings: "All day",
//                 entry: "Free",
//                 bestTime: "July to September (monsoon)",
//                 tips: "Drive carefully as roads can be slippery",
//                 quickReplies: ["Best viewpoints", "Safety tips", "Nearby places", "Photography spots"]
//             }
//         },
//         food: {
//             "Mango Mastani": {
//                 description: "🥭 Thick mango milkshake topped with vanilla ice cream, dry fruits, and cherries. A Pune specialty named after Mastani, the wife of Bajirao Peshwa.",
//                 place: "Sujata Mastani (Multiple locations)",
//                 price: "₹150-250",
//                 rating: "4.5 (1,200+ reviews)",
//                 bestTime: "Summer season (April-June)",
//                 history: "Created in 1960s at Sujata Mastani, this drink was named after the legendary dancer Mastani for its royal richness.",
//                 variants: [
//                     "Kesar Mastani (with saffron)",
//                     "Chocolate Mastani",
//                     "Dry Fruit Mastani",
//                     "Seasonal fruit variants"
//                 ],
//                 tags: ["Dessert", "Vegetarian", "Signature", "Seasonal"],
//                 quickReplies: ["Other flavors", "Best time to visit", "Nearest location", "Recipe"]
//             },
//             "Pudachi Wadi": {
//                 description: "🌿 Spicy mint-stuffed rolls wrapped in chickpea flour dough, steamed then fried to perfection. A classic Pune snack often served with chutney.",
//                 place: "Bedekar Misal, Shreemaya",
//                 price: "₹80-120 per plate (4 pieces)",
//                 rating: "4.3 (950+ reviews)",
//                 ingredients: [
//                     "Fresh mint leaves",
//                     "Coconut",
//                     "Sesame seeds",
//                     "Spices"
//                 ],
//                 servingTip: "Best enjoyed hot with tamarind chutney",
//                 tags: ["Snack", "Vegetarian", "Tea-time"],
//                 quickReplies: ["Best places", "Recipe", "Serving suggestions", "History"]
//             },
//             "Puran Poli": {
//                 description: "🍪 Sweet flatbread stuffed with lentil-jaggery filling, a Maharashtrian festive delicacy served with ghee. Especially popular during Ganesh Chaturthi.",
//                 place: "Shreemaya (Kothrud), Aaswad (Dadar)",
//                 price: "₹40-80 per piece",
//                 rating: "4.6 (1,100+ reviews)",
//                 ingredients: [
//                     "Chana dal",
//                     "Jaggery",
//                     "Cardamom",
//                     "Nutmeg",
//                     "Flour"
//                 ],
//                 servingSuggestion: "Best served warm with a dollop of ghee and milk or katachi amti (spicy lentil soup)",
//                 tags: ["Sweet", "Festive", "Vegetarian", "Traditional"],
//                 quickReplies: ["Seasonal availability", "Best places", "Recipe", "Variations"]
//             },
//             "Vada Pav": {
//                 description: "🍔 Spicy potato fritter sandwiched in a bun with chutneys. Mumbai's iconic street food that's equally popular in Pune with local variations.",
//                 place: "JJ Garden Vada Pav (Shivajinagar), Garden Vada Pav (Camp)",
//                 price: "₹15-30 per piece",
//                 rating: "4.7 (2,500+ reviews)",
//                 components: [
//                     "Batata vada: Spiced mashed potato coated in chickpea batter",
//                     "Pav: Soft bread roll",
//                     "Chutneys: Garlic, tamarind, and green chili"
//                 ],
//                 eatingTip: "Ask for 'lasun chutney extra' for garlic lovers or 'tikat' for extra spicy version",
//                 tags: ["Street Food", "Vegetarian", "Quick Bite"],
//                 quickReplies: ["Best stalls", "Recipe", "History", "Variations"]
//             },
//             "Batata Bhaji": {
//                 description: "🥔 Golden-fried potato fritters with chickpea flour, flavored with turmeric and chili. Served with chutney as a popular breakfast item.",
//                 place: "Durga Cafe, Vaishali",
//                 price: "₹40-60 per plate",
//                 rating: "4.4 (1,800+ reviews)",
//                 ingredients: [
//                     "Potatoes",
//                     "Chickpea flour",
//                     "Turmeric",
//                     "Chili powder",
//                     "Coriander"
//                 ],
//                 servingStyle: "Typically served with green chutney and slices of bread",
//                 tags: ["Breakfast", "Vegetarian", "Street Food"],
//                 quickReplies: ["Best places", "Recipe", "Serving suggestions", "History"]
//             },
//             "Bhakarwadi": {
//                 description: "🌶️ Crispy spiral snacks stuffed with spiced coconut and poppy seeds. Pune's iconic savory treat since 1950, perfect with tea.",
//                 place: "Chitale Bandhu (Multiple locations)",
//                 price: "₹200-400 per box",
//                 rating: "4.8 (3,200+ reviews)",
//                 ingredients: [
//                     "Chickpea flour",
//                     "Coconut",
//                     "Poppy seeds",
//                     "Spices"
//                 ],
//                 storageTip: "Stays fresh for 2 weeks in airtight container",
//                 tags: ["Snack", "Vegetarian", "Takeaway"],
//                 quickReplies: ["Best places", "Recipe", "Storage tips", "History"]
//             },
//             "Pandhra & Tamda Rassa": {
//                 description: "🍛 Kolhapuri chicken curry duo - white (coconut-based) and red (spicy chili). Served with bhakri or rice for a flavorful meal.",
//                 place: "Bramha Restaurant",
//                 price: "₹250-400 per thali",
//                 rating: "4.6 (2,100+ reviews)",
//                 spiceLevel: "Medium to Hot (can request milder)",
//                 servingSuggestion: "Best enjoyed with jowar bhakri and onion salad",
//                 tags: ["Non-veg", "Spicy", "Traditional"],
//                 quickReplies: ["Spice options", "Best places", "Recipe", "History"]
//             },
//             "Kothimbir Wadi": {
//                 description: "🌱 Steamed then fried cilantro cakes made with chickpea flour and spices, a fragrant Maharashtrian snack served with chutney.",
//                 place: "Aaswad",
//                 price: "₹90-150 per plate",
//                 rating: "4.5 (1,300+ reviews)",
//                 ingredients: [
//                     "Fresh cilantro",
//                     "Chickpea flour",
//                     "Sesame seeds",
//                     "Spices"
//                 ],
//                 texture: "Soft inside with crispy outer layer",
//                 tags: ["Snack", "Vegetarian", "Traditional"],
//                 quickReplies: ["Best places", "Recipe", "Serving suggestions", "History"]
//             },
//             "Bhel Puri": {
//                 description: "🥗 Crispy puffed rice mixed with chutneys, onions, and sev. Pune's iconic street food with perfect sweet-spicy balance.",
//                 place: "Gupta Bhel (Shivajinagar)",
//                 price: "₹40-80 per plate",
//                 rating: "4.6 (3,500+ reviews)",
//                 components: [
//                     "Puffed rice",
//                     "Sev",
//                     "Onions",
//                     "Tamarind chutney",
//                     "Green chutney"
//                 ],
//                 eatingTip: "Eat immediately as it gets soggy",
//                 tags: ["Street Food", "Vegetarian", "Quick Bite"],
//                 quickReplies: ["Best stalls", "Recipe", "Variations", "History"]
//             },
//             "Sabudana Wada": {
//                 description: "🧆 Crispy golden wadas made with tapioca pearls, peanuts, and spices. A Maharashtrian fasting special that's delicious anytime!",
//                 place: "Hindavi Swarajya",
//                 price: "₹50-90 per plate (2 wadas)",
//                 rating: "4.7 (1,800+ reviews)",
//                 ingredients: [
//                     "Sabudana (tapioca pearls)",
//                     "Peanuts",
//                     "Potatoes",
//                     "Cumin"
//                 ],
//                 servingStyle: "Typically served with green chutney and curd",
//                 tags: ["Fasting Food", "Vegetarian", "Snack"],
//                 quickReplies: ["Best places", "Recipe", "Fasting significance", "History"]
//             },
//             "Misal": {
//                 description: "🌶️ Fiery sprouted bean curry topped with farsan, served with pav and curd. Pune's favorite breakfast dish with regional variations.",
//                 place: "Bedekar Misal, Shri Krishna Bhuvan",
//                 price: "₹60-120 (mild to extra spicy)",
//                 rating: "4.8 (4,200+ reviews)",
//                 variants: [
//                     "Puneri Misal: Medium spicy with thin gravy",
//                     "Kolhapuri Misal: Extremely spicy with thick gravy",
//                     "Nasik Misal: Sweet-spicy balance with more sev"
//                 ],
//                 eatingTip: "Start with mild spice level if you're new to Misal",
//                 tags: ["Spicy", "Breakfast", "Must-try"],
//                 quickReplies: ["Mild options", "Best places", "Recipe", "History"]
//             },
//             "Sol Kadhi": {
//                 description: "🥥 Cooling Konkani drink made with kokum and coconut milk, tempered with garlic and chili. Perfect with spicy seafood.",
//                 place: "Gomantak Boarding House",
//                 price: "₹60-100 per glass",
//                 rating: "4.6 (1,900+ reviews)",
//                 ingredients: [
//                     "Kokum",
//                     "Coconut milk",
//                     "Garlic",
//                     "Green chili"
//                 ],
//                 healthBenefits: "Aids digestion, rich in antioxidants",
//                 tags: ["Beverage", "Vegetarian", "Traditional"],
//                 quickReplies: ["Best places", "Recipe", "Health benefits", "Serving suggestions"]
//             },
//             "Zunka Bhakar": {
//                 description: "🫓 Maharashtra's rustic staple - spiced chickpea flour curry (zunka) served with jowar bhakri, raw onion, and green chili.",
//                 place: "Zhunka Bhakar Kendra (Govt. outlets)",
//                 price: "₹25-50 per thali",
//                 rating: "4.4 (2,700+ reviews)",
//                 nutrition: "High in fiber and protein, gluten-free",
//                 culturalSignificance: "Staple food of rural Maharashtra, now popular in cities",
//                 tags: ["Healthy", "Gluten-free", "Traditional"],
//                 quickReplies: ["Best places", "Nutrition facts", "Recipe", "History"]
//             },
//             "Ukadiche Modak": {
//                 description: "🍡 Steamed rice flour dumplings stuffed with jaggery-coconut filling, traditionally prepared during Ganesh Chaturthi.",
//                 place: "Shreemaya",
//                 price: "₹80-150 per plate (5 pieces)",
//                 rating: "4.7 (2,400+ reviews)",
//                 ingredients: [
//                     "Rice flour",
//                     "Fresh coconut",
//                     "Jaggery",
//                     "Cardamom"
//                 ],
//                 servingStyle: "Best served warm with ghee",
//                 tags: ["Sweet", "Festive", "Vegetarian"],
//                 quickReplies: ["Seasonal availability", "Best places", "Recipe", "History"]
//             },
//             "Thalipeeth": {
//                 description: "🥞 Savory multigrain pancake made with bajra, jowar and chickpea flour, flavored with onions, coriander and spices.",
//                 place: "Aaswad",
//                 price: "₹60-90 per plate (2 pieces)",
//                 rating: "4.5 (1,600+ reviews)",
//                 ingredients: [
//                     "Multigrain flour",
//                     "Onions",
//                     "Coriander",
//                     "Cumin"
//                 ],
//                 servingSuggestion: "Best with homemade white butter and pickle",
//                 tags: ["Healthy", "Multigrain", "Breakfast"],
//                 quickReplies: ["Best places", "Recipe", "Nutrition facts", "History"]
//             },
//             "Bharli Wangi": {
//                 description: "🍆 Baby eggplants stuffed with spiced peanut-coconut masala, cooked in traditional Maharashtrian style.",
//                 place: "Sukanta",
//                 price: "₹120-180 per thali",
//                 rating: "4.4 (1,200+ reviews)",
//                 ingredients: [
//                     "Baby eggplants",
//                     "Peanuts",
//                     "Coconut",
//                     "Spices"
//                 ],
//                 servingStyle: "Best enjoyed with jowar bhakri",
//                 tags: ["Vegetarian", "Traditional", "Main Course"],
//                 quickReplies: ["Best places", "Recipe", "Serving suggestions", "History"]
//             },
//             // Fix the Surali Wadi entry in the food object (add missing ingredients array and close the object)
// "Surali Wadi": {
//     description: "🍥 Spiced chickpea flour rolls steamed in banana leaves, served with fresh coconut chutney.",
//     place: "Shreemaya",
//     price: "₹80-120 per plate (4 pieces)",
//     rating: "4.3 (980+ reviews)",
//     ingredients: [
//         "Fresh cilantro",
//         "Chickpea flour",
//         "Sesame seeds",
//         "Spices"
//     ],
//     texture: "Soft inside with crispy outer layer",
//     tags: ["Snack", "Vegetarian", "Traditional"],
//     quickReplies: ["Best places", "Recipe", "Serving suggestions", "History"]
// },  // This comma was missing and the object wasn't properly closed
// shopping: {
//     "Laxmi Road": {
//         description: "🛍️ Pune's most famous shopping street with hundreds of shops selling clothing, jewelry, footwear and more.",
//         timings: "10AM-9PM",
//         highlights: "Clothing, Jewelry, Footwear",
//         tips: "Bargaining expected, Closed on Mondays",
//         quickReplies: ["Best shops", "Parking", "Nearby food"]
//     },
//     "Tulsi Baug": {
//         description: "🌿 Historic market known for religious items, spices, and traditional fabrics.",
//         timings: "9AM-8PM",
//         highlights: "Spices, Fabrics, Religious Items",
//         tips: "Famous for spices and pooja items, Very crowded on weekends",
//         quickReplies: ["Best buys", "Authenticity", "Timings"]
//     },
//     "Phoenix Marketcity": {
//         description: "🏬 Largest mall in Pune with international brands, multiplex and food court.",
//         timings: "11AM-10PM",
//         highlights: "International Brands, Entertainment, Dining",
//         tips: "Premium shopping experience, Weekends very crowded",
//         quickReplies: ["Brands list", "Parking", "Events"]
//     }
// },
// general: [
//     "Pune is known as the 'Oxford of the East' for its educational institutions 🎓",
//     "The best time to visit Pune is from October to February when the weather is pleasant ☀️",
//     "Pune has a mix of historical sites and modern attractions - perfect for all types of travelers! 🏰🏙️",
//     "Don't miss Pune's vibrant nightlife with great pubs and live music venues 🎶🍹",
//     "Pune's public transport includes buses, autos, and metro - but traffic can be heavy during peak hours! 🚍"
// ],
// farewell: [
//     "Happy travels! Hope you enjoy Pune as much as I do! ✨",
//     "Come back if you need more Pune travel tips! 👋",
//     "Have a wonderful trip to Pune! Don't forget to try the Mastani! 🥤",
//     "Safe journeys! Pune will welcome you with open arms! 🤗"
// ],
// help: [
//     "I can help with:",
//     "- Places to visit 🏰",
//     "- Food recommendations 🍽️",
//     "- Shopping guides 🛍️",
//     "- Travel tips ✈️",
//     "Just ask me anything about Pune!"
// ]
// }}
    
// // 5. Event Handlers
// function toggleChatbot() {
//     elements.container.classList.toggle('active');
//     elements.btn.classList.toggle('active');
// }


//     console.log('Toggle function called'); // Debug log
//     container.classList.toggle('active');
    
//     // Add visual feedback
//     this.classList.toggle('active');
    
//     // Toggle aria-expanded state
//     const isExpanded = container.classList.contains('active');
//     this.setAttribute('aria-expanded', isExpanded);

// function showWelcomeMessage() {
//     const hour = new Date().getHours();
//     let greeting = hour < 12 ? "🌅 Good morning!" : hour < 18 ? "🌞 Good afternoon!" : "🌙 Good evening!";
    
//     addMessage({
//         text: `${greeting} I'm your Pune travel assistant! How can I help you plan your trip today?`,
//         sender: 'bot'
//     });
    
//     showQuickReplies([
//         "Best places to visit",
//         "Local food to try",
//         "Shopping areas",
//         "Cultural experiences"
//     ]);
// }

    
// function addMessage({text, sender, time = new Date()}) {
//     const messageDiv = document.createElement('div');
//     messageDiv.className = `message ${sender}-message`;
    
//     const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     messageDiv.innerHTML = `
//         <div class="message-content">${text}</div>
//         <span class="message-time">${formattedTime}</span>
//     `;
    
//     elements.messages.appendChild(messageDiv);
//     elements.messages.scrollTop = elements.messages.scrollHeight;
// }
    
//     showTypingIndicator(() => {
//         const response = processUserInput(messageText);
        
//         if (response.action === 'redirect') {
//             addMessage({
//                 text: response.text,
//                 sender: 'bot',
//                 time: new Date()
//             });
//             setTimeout(() => {
//                 window.location.href = response.path;
//             }, 2000);
//         } else {
//             addMessage({
//                 text: response.text,
//                 sender: 'bot',
//                 time: new Date()
//             });
            
//             if (response.quickReplies) {
//                 showQuickReplies(response.quickReplies);
//             }
//         }
//     });
    
//     // Show quick reply buttons
//     function showQuickReplies(replies) {
//         elements.quickReplies.innerHTML = '';
//         replies.forEach(reply => {
//             const button = document.createElement('button');
//             button.className = 'quick-reply-btn';
//             button.textContent = reply;
//             button.addEventListener('click', () => sendMessage(reply));
//             elements.quickReplies.appendChild(button);
//         });
//     }
//     // Generate info card
//     function generateInfoCard(title, details) {
//         const cardDiv = document.createElement('div');
//         cardDiv.className = 'message bot-message info-card';
        
//         let detailsHTML = '';
//         for (const [key, value] of Object.entries(details)) {
//             if (key !== 'quickReplies') {
//                 detailsHTML += `<p><strong>${key}:</strong> ${value}</p>`;
//             }
//         }
        
//         cardDiv.innerHTML = `
//             <div class="info-card-header">${title}</div>
//             <div class="info-card-content">
//                 ${detailsHTML}
//             </div>
//         `;
        
//         chatbotMessages.appendChild(cardDiv);
//         chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        
//         if (details.quickReplies) {
//             showQuickReplies(details.quickReplies);
//         }
//     }
    
//     // Process user input and generate response
//     function processUserInput(input) {
//         input = input.toLowerCase().trim();
        
//         // Check for greetings
//         if (input.match(/hi|hello|hey|namaste|sup|what's up/i)) {
//             const randomGreeting = knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)];
//             return {
//                 text: randomGreeting,
//                 quickReplies: ["Best places to visit", "Local food to try", "Shopping areas"]
//             };
//         }
        
//         // Check for farewell
//         if (input.match(/bye|goodbye|see ya|thanks|thank you/i)) {
//             const randomFarewell = knowledgeBase.farewell[Math.floor(Math.random() * knowledgeBase.farewell.length)];
//             return {
//                 text: randomFarewell,
//                 quickReplies: []
//             };
//         }
        
//         // Check for help
//         if (input.match(/help|what can you do|support/i)) {
//             return {
//                 text: knowledgeBase.help.join('<br>'),
//                 quickReplies: ["Destinations", "Food", "Shopping", "Stays"]
//             };
//         }
        
//         // Check for destinations
//         for (const [place, details] of Object.entries(knowledgeBase.destinations)) {
//             if (input.includes(place.toLowerCase())) {
//                 generateInfoCard(place, details);
//                 return {
//                     text: `Here's what I know about ${place}:`,
//                     quickReplies: details.quickReplies
//                 };
//             }
//         }
        
//         // Check for food items
//         for (const [food, details] of Object.entries(knowledgeBase.food)) {
//             if (input.includes(food.toLowerCase())) {
//                 generateInfoCard(food, details);
//                 return {
//                     text: `Here's what I know about ${food}:`,
//                     quickReplies: details.quickReplies
//                 };
//             }
//         }
        
//         // Check for shopping locations
//         for (const [shop, details] of Object.entries(knowledgeBase.shopping)) {
//             if (input.includes(shop.toLowerCase())) {
//                 generateInfoCard(shop, details);
//                 return {
//                     text: `Here's what I know about ${shop}:`,
//                     quickReplies: details.quickReplies
//                 };
//             }
//         }
        
//         // General travel queries
//         if (input.match(/places to visit|things to do|attractions|sightseeing/i)) {
//             const places = Object.keys(knowledgeBase.destinations).join(', ');
//             return {
//                 text: `🏰 Popular places in Pune include: ${places}. Would you like details about any specific one?`,
//                 quickReplies: Object.keys(knowledgeBase.destinations).slice(0, 4)
//             };
//         }
        
//         if (input.match(/food|eat|restaurant|cafe|dining|cuisine/i)) {
//             const foods = Object.keys(knowledgeBase.food).join(', ');
//             return {
//                 text: `🍽️ Must-try Pune foods: ${foods}. Want to know more about any?`,
//                 quickReplies: Object.keys(knowledgeBase.food).slice(0, 4)
//             };
//         }
        
//         if (input.match(/shop|buy|shopping|market|mall/i)) {
//             const shops = Object.keys(knowledgeBase.shopping).join(', ');
//             return {
//                 text: `🛍️ Great shopping spots: ${shops}. Need details on any?`,
//                 quickReplies: Object.keys(knowledgeBase.shopping).slice(0, 4)
//             };
//         }
        
//         if (input.match(/weather|best time|season/i)) {
//             return {
//                 text: "⛅ Pune has pleasant weather from October to February (15-30°C). Summers (Mar-Jun) can get hot (up to 40°C). Monsoons (Jul-Sep) bring heavy rains but lush greenery.",
//                 quickReplies: ["Winter activities", "Monsoon destinations", "Summer tips"]
//             };
//         }
        
//         if (input.match(/transport|travel|bus|metro|auto|taxi/i)) {
//             return {
//                 text: "🚍 Pune has buses (PMPML), autos, taxis, and a growing metro system. Traffic can be heavy during peak hours (9-11AM & 5-8PM). Consider app-based cabs for convenience.",
//                 quickReplies: ["Metro routes", "Bus routes", "Taxi apps"]
//             };
//         }
        
//         if (input.match(/history|culture|heritage/i)) {
//             return {
//                 text: "🏛️ Pune has rich Maratha history as the seat of Peshwa rulers. It's also known for educational institutions, IT parks, and a mix of traditional and modern culture.",
//                 quickReplies: ["Historical sites", "Museums", "Cultural events"]
//             };
//         }
        
//         // Default response
//         const randomGeneral = knowledgeBase.general[Math.floor(Math.random() * knowledgeBase.general.length)];
//         return {
//             text: `🤔 I'm not sure I understand. ${randomGeneral} What else would you like to know?`,
//             quickReplies: ["Help", "Destinations", "Food", "Shopping"]
//         };
//     }
    
//     document.addEventListener('DOMContentLoaded', function() {
//         // 1. Initialize elements
//         const elements = {
//             container: document.getElementById('chatbotContainer'),
//             btn: document.getElementById('chatbotBtn'),
//             close: document.getElementById('chatbotClose'),
//             messages: document.getElementById('chatbotMessages'),
//             input: document.getElementById('chatbotInput'),
//             send: document.getElementById('chatbotSend'),
//             quickReplies: document.getElementById('quickRepliesContainer'),
//             reset: document.getElementById('resetChatBtn'),
//             help: document.getElementById('helpBtn'),
//             pulseDot: document.querySelector('.pulse-dot')
//         };
    
//         // Check if all elements exist
//         for (const [key, element] of Object.entries(elements)) {
//             if (!element) {
//                 console.error(`Element not found: ${key}`);
//                 return;
//             }
//         }
    
//         // 2. Knowledge Base (truncated for brevity - keep your full knowledge base here)
//         const knowledgeBase = {
//             greetings: ["Namaste! 👋 I'm your Pune travel assistant..."],
//             destinations: {
//                 "Shaniwar Wada": { /*...*/ },
//                 // ... keep all your destinations data
//             },
//             food: {
//                 "Mango Mastani": { /*...*/ },
//                 // ... keep all your food data
//             },
//             shopping: {
//                 "Laxmi Road": { /*...*/ },
//                 // ... keep all your shopping data
//             },
//             general: ["Pune is known as the 'Oxford of the East'..."],
//             farewell: ["Happy travels! Hope you enjoy Pune..."],
//             help: ["I can help with:", "- Places to visit 🏰", "..."]
//         };
    
//         // 3. Core Functions
//         function showWelcomeMessage() {
//             const hour = new Date().getHours();
//             let greeting = hour < 12 ? "🌅 Good morning!" : 
//                           hour < 18 ? "🌞 Good afternoon!" : "🌙 Good evening!";
            
//             addMessage({
//                 text: `${greeting} I'm your Pune travel assistant! How can I help you plan your trip today?`,
//                 sender: 'bot'
//             });
            
//             showQuickReplies(["Best places to visit", "Local food to try", "Shopping areas"]);
//         }
    
//         function addMessage({text, sender}) {
//             const messageDiv = document.createElement('div');
//             messageDiv.className = `message ${sender}-message`;
//             messageDiv.innerHTML = `
//                 <div class="message-content">${text}</div>
//                 <span class="message-time">${new Date().toLocaleTimeString()}</span>
//             `;
//             elements.messages.appendChild(messageDiv);
//             elements.messages.scrollTop = elements.messages.scrollHeight;
//         }
    
//         function showQuickReplies(replies) {
//             elements.quickReplies.innerHTML = '';
//             replies.forEach(reply => {
//                 const button = document.createElement('button');
//                 button.className = 'quick-reply-btn';
//                 button.textContent = reply;
//                 button.onclick = () => handleQuickReply(reply);
//                 elements.quickReplies.appendChild(button);
//             });
//         }
    
//         // 4. Processing Logic
//         function handleQuickReply(reply) {
//             elements.input.value = reply; // Set input value
//             sendMessage(); // Trigger send
//         }
    
//         function processUserInput(input) {
//             input = input.toLowerCase().trim();
            
//             // Help/Contact Redirection
//             if(input === 'help' || input === 'contact') {
//                 return {
//                     text: 'Redirecting you to our contact page...',
//                     action: 'redirect',
//                     path: 'contact.html'
//                 };
//             }
    
//             // Greetings
//             if (/hi|hello|hey|namaste/i.test(input)) {
//                 return {
//                     text: knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)],
//                     quickReplies: ["Destinations", "Food", "Shopping"]
//                 };
//             }
    
//             // Destinations
//             for (const [place, details] of Object.entries(knowledgeBase.destinations)) {
//                 if (input.includes(place.toLowerCase())) {
//                     return {
//                         text: `🏰 ${place}: ${details.description}\n\nHighlights:\n- ${details.highlights.join('\n- ')}`,
//                         quickReplies: details.quickReplies
//                     };
//                 }
//             }
    
//             // Default response
//             return {
//                 text: "I'm here to help with Pune travel information! Ask about places, food, or shopping!",
//                 quickReplies: ["Help", "Destinations", "Food"]
//             };
//         }
    
//         // 5. Event Handlers
//         function toggleChatbot() {
//             elements.container.classList.toggle('active');
//             elements.btn.classList.toggle('active');
//         }
//          function resetChat() {
//                 elements.messages.innerHTML = '';
//                 elements.quickReplies.innerHTML = '';
//                 showWelcomeMessage();
//             }
    
    
//         function sendMessage() {
//             const message = elements.input.value.trim();
//             if (!message) return;
    
//             addMessage({ text: message, sender: 'user' });
//             elements.input.value = '';
    
//             // Simulate bot response delay
//             setTimeout(() => {
//                 const response = processUserInput(message);
                
//                 if (response.action === 'redirect') {
//                     addMessage({ text: response.text, sender: 'bot' });
//                     setTimeout(() => window.location.href = response.path, 1500);
//                 } else {
//                     addMessage({ text: response.text, sender: 'bot' });
//                     if (response.quickReplies) showQuickReplies(response.quickReplies);
//                 }
//             }, 500);
//         }
//      // 6. Event Listeners
//      elements.btn.addEventListener('click', toggleChatbot);
//      elements.close.addEventListener('click', toggleChatbot);
//      elements.send.addEventListener('click', sendMessage);
//      elements.input.addEventListener('keypress', (e) => e.key === 'Enter' && sendMessage());
//      elements.reset.addEventListener('click', () => {
//          elements.messages.innerHTML = '';
//          showWelcomeMessage();
//      });
 
    
//         // Initialization
//         showWelcomeMessage();
//     });
    
//             // function resetChat() {
//             //     elements.messages.innerHTML = '';
//             //     elements.quickReplies.innerHTML = '';
//             //     showWelcomeMessage();
//             // }
    
// //     // Show help
// //    // Modified Help Button Handler
// //    function showHelp() {
// //     const response = processUserInput('help');
// //     if (response.action === 'redirect') {
// //         addMessage({
// //             text: response.text,
// //             sender: 'bot',
// //             time: new Date()
// //         });
// //         setTimeout(() => {
// //             window.location.href = response.path;
// //         }, 2000);
// //     }
// // }
// // document.getElementById('helpBtn').addEventListener('click', showHelp);


// //         showQuickReplies(["Destinations", "Food", "Shopping", "Stays"]);
// //         showQuickReplies(["Go to Contact Page Now"]);
    
// //     document.addEventListener('DOMContentLoaded', () => {
// //         const chatbotBtn = document.getElementById('chatbotBtn');
// //         // const chatbotBtn = document.getElementById('chatbotBtn');
// //         const chatbotContainer = document.getElementById('chatbotContainer');
        
// //         if (!chatbotBtn) {
// //             console.error('Chatbot button not found! Check HTML ID');
// //             return;
// //         }
    
// //         chatbotBtn.addEventListener('click', toggleChatbot);
// //         console.log('Chatbot button event listener attached'); // Debug log

// //     });
// //     // 6. Event Listeners
// //     elements.btn.addEventListener('click', toggleChatbot);
// //     elements.close.addEventListener('click', toggleChatbot);
// //     elements.send.addEventListener('click', sendMessage);
// //     elements.reset.addEventListener('click', resetChat);
// //     elements.input.addEventListener('keypress', (e) => {
// //         if (e.key === 'Enter') sendMessage();
// //     });
// //     elements.help.addEventListener('click', () => {
// //         const helpResponse = processUserInput('help');
// //         addMessage({ text: helpResponse.text, sender: 'bot' });
// //         showQuickReplies(helpResponse.quickReplies);
// //     });

//     // Add click animation
// chatbotBtn.addEventListener('click', function() {
//     this.style.transform = 'scale(0.9)';
//     setTimeout(() => {
//         this.style.transform = 'scale(1)';
//     }, 100);
// });
    
// //     // Initialize
// //     showWelcomeMessage();
// // }}