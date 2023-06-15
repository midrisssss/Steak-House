const review = [{
    name: "John_Doe123",
    message: '"I recently visited the Steak House website, and I was impressed with its appearance and functionality. The elegant design and easy navigation allowed me to quickly find the information I was looking for, such as the menu, location, and opening hours. Additionally, the mouthwatering food photos truly tempted me to visit this restaurant. I was also pleased to see the option for online reservations, making it convenient for me to plan my visit. With its attractive layout and comprehensive features, the Steak House website is the perfect place to learn more about this restaurant."',
    img: "../img/review/jhonDoe.jpg",
}, {
    name: "FoodieExplorer",
    message: '"The Steak House website truly tantalized my taste buds! Its design is modern and appealing, with enticing food photos. I love how the information about the restaurant is presented clearly and neatly. Not only that, but they also showcase customer testimonials that provide valuable insights into the dining experience at Steak House. The search feature on this website is also very helpful, as I can look for specific steak menus that I desire. I\'m highly impressed with the quality of this website and will definitely visit Steak House soon!"',
    img: "../img/review/foodieExplorer.png",
}, {
    name: "JaneSmith",
    message: '"The Steak House website is a comprehensive guide for steak lovers. I greatly appreciate its simple yet professional appearance. The information provided is extensive, including the menu list, recommended wine selections, and even details about the meat used in their dishes. I\'m also glad to see that they have a regularly updated blog with interesting articles about steak and cooking tips. With all of this, the Steak House website truly offers a rich and appetizing experience before we even step foot into the physical restaurant. I can\'t wait to taste their renowned steaks!"',
    img: "../img/review/janeSmith.png",
}];

const location = [
    "Jakarta, Indonesia",
    "Bandung, Indonesia",
    "Bali, Indonesia",
    "Surabaya, Indonesia",
    "Yogyakarta, Indonesia"
]

const time = [
    "10:00", "11:00", "12:00", "13:00", "14:00",
    "15:00", "16:00", "17:00", "18:00", "19:00",
    "20:00", "21:00", "22:00", "23:00"
]

const people = [
    0, 1, 2, 3, 4, 5, 6, 7, 8
]

const faqs = [{
    id: 1,
    question: "What makes Steak House unique?",
    answer: "Steak House offers a combination of delicious food, exceptional cocktails, and excellent service in a comfortable and atmospheric setting. With a cozy dining room, open kitchen, coffee take-out bar, and an amazing on-site coffee roastery, we provide an unforgettable experience for our customers."
}, {
    id: 2,
    question: "What types of dishes are offered at Steak House?",
    answer: "At Steak House, we specialize in delicious grilled meat dishes. We offer a variety of premium steaks, ranging from sirloin and ribeye to tenderloin, prepared with skill and care to ensure the best flavors. We also provide accompanying dishes such as sauces, soups, desserts, and a selection of cocktails that pair perfectly with our dishes."
}, {
    id: 3,
    question: "Does Steak House accept reservations?",
    answer: "Yes, Steak House accepts reservations. We encourage our guests to make reservations in advance to ensure a better experience and to anticipate your arrival. You can make a reservation by phone or through the online reservation form on our website."
}, {
    id: 4,
    question: "Does Steak House offer vegetarian or vegan options?",
    answer: "While Steak House specializes in grilled meat dishes, we are also aware of the preferences and dietary needs of our diverse customers. Therefore, we offer several vegetarian or vegan options on our menu, including delicious grilled vegetable dishes. Please inform our staff about your dietary preferences when making a reservation or upon arrival at the restaurant."
}, {
    id: 5,
    question: "Does Steak House provide services for special events or parties?",
    answer: "Yes, Steak House can accommodate special events or parties. We have customizable spaces for events such as birthdays, family celebrations, or business meetings. Please contact our team for more information and assistance in planning your event perfectly."
}, {
    id: 6,
    question: "How can I contact Steak House?",
    answer: "You can contact Steak House through the telephone number listed on our website. You can also send a message through the contact form available on our website. Our team will be happy to assist in answering any questions or fulfilling your requests."
}];

let payment = ["BANK MANDIRI", "PAYPAL", "BANK BCA", "BANK BRI", "BANK BNI", "OVO", "DANA", "GOPAY"];

export { review, location, time, people, faqs, payment };