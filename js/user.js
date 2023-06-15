const user = [{
    userId: 1,
    name: "steak house",
    password: "12345",
    email: "steakhouse@gmail.com",
    phone: "0829292929",
    chart: [{
        orderId: 1,
        id: 1,
        name: "Grilled Fillet",
        price: 12.95,
        img: "../img/menu/breakfast/image 1.png",
        fill: "Eggs, bacon and cherry-tomatoes with bread",
        description: "hot soto is apa gituh",
        detail: {
            weight: "23.98 pounds",
            dimensions: "12cmX13cmX43cm",
            chef: "idris",
            numberItem: "60-MTE"
        },
        quantity: 2,
        infoLocation: {
            name: "idris",
            location: "Japan",
            phone: "012121212",
        }
    }, {
        id: 23,
        name: "Grilled American Fillet",
        price: 19.95,
        img: "../img/menu/lunch/image 8.png",
        fill: "Oat granola with fresh blueberries, almond, yogurt",
        description: "",
        detail: {
            weight: "23.98 pounds",
            dimensions: "12cmX13cmX43cm",
            chef: "idris",
            numberItem: "60-MTE"
        },
        quantity: 1,
        infoLocation: {
            name: "idris",
            location: "Japan",
            phone: "012121212",
        }
    }, {
        id: 27,
        name: "Grilled Seafood paella",
        price: 14.95,
        img: "../img/menu/lunch/image 9.png",
        fill: "Applewood smoked bacon, tomatoes & green",
        description: "",
        detail: {
            weight: "23.98 pounds",
            dimensions: "12cmX13cmX43cm",
            chef: "idris",
            numberItem: "60-MTE"
        },
        quantity: 3,
        infoLocation: {
            name: "idris",
            location: "Japan",
            phone: "012121212",
        }

    }],
    completedOrders: {
        table: [{
            orderId: 1,
            name: "idris",
            location: "k=japan",
            people: 3,
            time: "10:00",
        }],
        product: [{
            orderId: 1,
            id: 1,
            name: "Grilled Fillet",
            price: 12.95,
            img: "../img/menu/breakfast/image 1.png",
            fill: "Eggs, bacon and cherry-tomatoes with bread",
            description: "hot soto is apa gituh",
            detail: {
                weight: "23.98 pounds",
                dimensions: "12cmX13cmX43cm",
                chef: "idris",
                numberItem: "60-MTE"
            },
            quantity: 2,
            infoLocation: {
                name: "farhan",
                location: "Japan",
                phone: "012121212",
            }
        }, {}],
    },
    pendingOrders: {
        table: [{
            orderId: 1,
            name: "admin",
            location: "k=japan",
            people: 3,
            time: "10:00",
        }],
        product: [{
            orderId: 1,
            id: 1,
            name: "Grilled Fillet",
            price: 12.95,
            img: "../img/menu/breakfast/image 1.png",
            fill: "Eggs, bacon and cherry-tomatoes with bread",
            description: "hot soto is apa gituh",
            detail: {
                weight: "23.98 pounds",
                dimensions: "12cmX13cmX43cm",
                chef: "idris",
                numberItem: "60-MTE"
            },
            quantity: 2,
            infoLocation: {
                name: "admin",
                location: "Japan",
                phone: "012121212",
            }
        }, {}],
    },

}];

const contactedUser = [{
    userId: 1,
    name: "idris",
    contactedByUser: true,
    contactTime: "2023-06-14T10:30:00Z",
}];

const emailSubscription = [{
    "userId": 111,
    "name": "John Doe",
    "newsletterEmail": "johndoe@example.com",
    "subscriptionDate": "2023-06-14"
}];

export { user, contactedUser, emailSubscription };

// password key :  rot 7 with array, after that convert to unicode