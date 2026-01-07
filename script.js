// Image loading handler
document.querySelectorAll('.card-img img').forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', function() {
        this.classList.add('loaded');
      });
    }
  });

  // Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.section-title').forEach(title => {
    observer.observe(title);
  });

  window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
  });

//   const chatContainer = document.getElementById('chat-container');
// const userInput = document.getElementById('user-input');
// const sendButton = document.getElementById('send-button');

// // Knowledge base from your input
// const knowledgeBase = {
//   greetings: [
//     "Namaste! 👋 I'm your Pune travel assistant. How can I help you today?",
//     "Hello traveler! 🌍 Ready to explore Pune? What would you like to know?",
//     "Hi there! ✨ Planning your Pune trip? I can help with destinations, food, and more!"
//   ],
//   destinations: {
//     "Shaniwar Wada": {
//       description: "🏰 The historic fortification built by the Peshwas in 1732, known for its architectural grandeur and as the seat of the Maratha Empire.",
//       highlights: [
//         "Five massive gates with intricate designs",
//         "Remains of the seven-story palace",
//         "Evening light and sound show",
//         "Beautiful garden complex"
//       ],
//       timings: "9:00 AM - 5:30 PM (Closed Mondays)",
//       entry: "₹25 for Indians, ₹300 for foreigners",
//       bestTime: "October to February (mornings are best)",
//       nearby: [
//         "Badshahi Cafe (0.5km) for Irani chai",
//         "Kayani Bakery (1km) for Shrewsbury biscuits"
//       ],
//       tips: "Hire a guide to understand the rich history (₹200-300)",
//       quickReplies: ["History", "Best time to visit", "Nearby eateries", "Entry fee"]
//     },
//     // Add other destinations as per the knowledge base
//   },
//   food: {
//     "Mango Mastani": {
//       description: "🥭 Thick mango milkshake topped with vanilla ice cream, dry fruits, and cherries. A Pune specialty named after Mastani, the wife of Bajirao Peshwa.",
//       place: "Sujata Mastani (Multiple locations)",
//       price: "₹150-250",
//       rating: "4.5 (1,200+ reviews)",
//       bestTime: "Summer season (April-June)",
//       history: "Created in 1960s at Sujata Mastani, this drink was named after the legendary dancer Mastani for its royal richness.",
//       variants: [
//         "Kesar Mastani (with saffron)",
//         "Chocolate Mastani",
//         "Dry Fruit Mastani",
//         "Seasonal fruit variants"
//       ],
//       quickReplies: ["Other flavors", "Best time to visit", "Nearest location", "Recipe"]
//     },
//     // Add other food items as per the knowledge base
//   },
//   shopping: {
//     "Laxmi Road": {
//       description: "🛍️ Pune's most famous shopping street with hundreds of shops selling clothing, jewelry, footwear and more.",
//       timings: "10AM-9PM",
//       highlights: "Clothing, Jewelry, Footwear",
//       tips: "Bargaining expected, Closed on Mondays",
//       quickReplies: ["Best shops", "Parking", "Nearby food"]
//     },
//     // Add other shopping spots as per the knowledge base
//   },
//   general: [
//     "Pune is known as the 'Oxford of the East' for its educational institutions 🎓",
//     "The best time to visit Pune is from October to February when the weather is pleasant ☀️",
//     "Pune has a mix of historical sites and modern attractions - perfect for all types of travelers! 🏰🏙️",
//     "Don't miss Pune's vibrant nightlife with great pubs and live music venues 🎶🍹",
//     "Pune's public transport includes buses, autos, and metro - but traffic can be heavy during peak hours! 🚍"
//   ],
//   farewell: [
//     "Happy travels! Hope you enjoy Pune as much as I do! ✨",
//     "Come back if you need more Pune travel tips! 👋",
//     "Have a wonderful trip to Pune! Don't forget to try the Mastani! 🥤",
//     "Safe journeys! Pune will welcome you with open arms! 🤗"
//   ],
//   help: [
//     "I can help with:",
//     "- Places to visit 🏰",
//     "- Food recommendations 🍽️",
//     "- Shopping guides 🛍️",
//     "- Travel tips ✈️",
//     "Just ask me anything about Pune!"
//   ]
// };

// // Function to send messages
// function sendMessage(message, sender) {
//   const messageDiv = document.createElement('div');
//   messageDiv.classList.add(sender);
//   messageDiv.textContent = message;
//   chatContainer.appendChild(messageDiv);
//   chatContainer.scrollTop = chatContainer.scrollHeight;
// }

// // Function to get bot response based on user input
// function getBotResponse(userMessage) {
//   // Convert message to lowercase for case-insensitive comparison
//   const lowerCaseMessage = userMessage.toLowerCase();

//   // Handle greetings
//   if (lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hello")) {
//     return knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)];
//   }

//   // Handle general information
//   if (lowerCaseMessage.includes("general") || lowerCaseMessage.includes("info")) {
//     return knowledgeBase.general[Math.floor(Math.random() * knowledgeBase.general.length)];
//   }

//   // Handle destinations
//   for (const destination in knowledgeBase.destinations) {
//     if (lowerCaseMessage.includes(destination.toLowerCase())) {
//       return `Here’s info about ${destination}: ${knowledgeBase.destinations[destination].description}`;
//     }
//   }

//   // Handle food
//   for (const foodItem in knowledgeBase.food) {
//     if (lowerCaseMessage.includes(foodItem.toLowerCase())) {
//       return `Try the famous ${foodItem}: ${knowledgeBase.food[foodItem].description}`;
//     }
//   }

//   // Handle shopping
//   for (const shop in knowledgeBase.shopping) {
//     if (lowerCaseMessage.includes(shop.toLowerCase())) {
//       return `Visit ${shop}: ${knowledgeBase.shopping[shop].description}`;
//     }
//   }

//   // Default message for unrecognized input
//   return "I'm sorry, I couldn't find any information on that. Try asking about places, food, or shopping!";
// }

// // Event listener for the send button
// sendButton.addEventListener('click', () => {
//   const message = userInput.value;
//   if (message.trim() !== "") {
//     sendMessage(message, 'user');
//     const botReply = getBotResponse(message);
//     setTimeout(() => sendMessage(botReply, 'bot'), 500);
//     userInput.value = '';
//   }
// });