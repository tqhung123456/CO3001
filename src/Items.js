const items = [
    {
        id: 1,
        name: "Big Mac®",
        desc: "Mouthwatering perfection starts with two 100% pure beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion and American cheese for a 100% beef burger with a taste like no other. It contains no artificial flavors, preservatives or added colors from artificial sources.* Our pickle contains an artificial preservative, so skip it if you like. There are 550 calories in a Big Mac®. Order one today with McDelivery®!",
        category: 'Burgers',
        img: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-Big-Mac.jpg?$Category_Desktop$",
        price: 5.59
    },
    {
        id: 2,
        name: "McDouble®",
        desc: "The classic McDouble® burger stacks two 100% pure beef patties seasoned with just a pinch of salt and pepper. Wondering what the difference is between a McDouble® and a Double Cheeseburger? A slice of cheese! It’s topped with tangy pickles, chopped onions, ketchup, mustard and a melty slice of American cheese. The McDouble® contains no artificial flavors, preservatives or added colors from artificial sources. Our pickle contains an artificial preservative, so skip it if you like.",
        category: 'Burgers',
        img: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-McDouble.jpg?$Category_Desktop$",
        price: 4.49
    },
    {
        id: 3,
        name: "Cheeseburger",
        desc: "Our simple, classic cheeseburger begins with a 100% pure beef burger seasoned with just a pinch of salt and pepper. The McDonald’s Cheeseburger is topped with a tangy pickle, chopped onions, ketchup, mustard, and a slice of melty American cheese. It contains no artificial flavors, preservatives or added colors from artificial sources. Our pickle contains an artificial preservative, so skip it if you like.",
        category: 'Burgers',
        img: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-Cheeseburger.jpg?$Category_Desktop$",
        price: 3.69
    },
    {
        id: 4,
        name: "Egg McMuffin®",
        desc: "Our Egg McMuffin® breakfast sandwich is an excellent source of protein and oh so delicious. We place a freshly cracked Grade A egg on a toasted English Muffin topped with real butter and add lean Canadian bacon and melty American cheese. There are 300 calories in an Egg McMuffin®.",
        category: 'Breakfast',
        img: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-Egg-McMuffin.jpg?$Category_Desktop$",
        price: 0.69
    },
    {
        id: 5,
        name: "Sausage McMuffin®",
        desc: "Sausage McMuffin® recipe features a warm, freshly toasted English muffin, topped with a savory hot sausage patty and a slice of melty American cheese. There are 400 calories in a Sausage McMuffin®.",
        category: 'Breakfast',
        img: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-Sausage-McMuffin.jpg?$Category_Desktop$",
        price: 1.69
    },
    {
        id: 6,
        name: "Sausage McGriddles®",
        desc: "Our Sausage McGriddles® breakfast sandwich features soft, warm griddle cakes—with the taste of sweet maple—that hold our savory, sizzling hot sausage. McGriddles® cakes have no artificial preservatives or flavors and no colors from artificial sources. There are 430 calories in Sausage McGriddles®",
        category: 'Breakfast',
        img: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-Sausage-McGriddles.jpg?$Category_Desktop$",
        price: 1.29
    },
    {
        id: 7,
        name: "Coca-Cola®",
        desc: "Coca-Cola® is a refreshing soda option that complements all of your menu favorites.",
        category: 'Beverages',
        img: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-Coca-Cola-Classic-Small.jpg?$Category_Desktop$",
        price: 0.99
    },
    {
        id: 8,
        name: "Sprite®",
        desc: "Sprite® is a delicious lemon-lime fountain drink and is available in sizes extra small, small, medium, and large. Sprite® is a caffeine-free soda that makes the perfect addition to any Combo Meal. There are 140 calories in a Small Sprite®.",
        category: 'Beverages',
        img: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-Sprite-Small.jpg?$Category_Desktop$",
        price: 0.99
    },
    {
        id: 9,
        name: "Fanta® Orange",
        desc: "Fanta® Orange is a caffeine-free soft drink full of bubbly, refreshing orange flavor. There are 150 calories in a small Fanta® Orange.",
        category: 'Beverages',
        img: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-fanta-orange.jpg?$Category_Desktop$",
        price: 0.99
    },
    {
        id: 10,
        name: "Big Mac® Combo Meal",
        desc: "The one and only Big Mac® Combo Meal. Big Mac Ingredients include a classic sesame hamburger bun, Big Mac Sauce, American cheese and sliced pickles. Big Mac meal is served with our World Famous Fries® and your choice of an icy Coca-Cola® or other fountain drink. There are 1,080 calories in a Big Mac® Combo Meal with a medium Coca-Cola® and medium fries.",
        category: 'Combo',
        img: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/regular/desktop/h-mcdonalds-Big-Mac-Extra-Value-Meals.jpg?$Category_Desktop$",
        price: 9.99
    },
    {
        id: 11,
        name: "Cheeseburger Combo Meal",
        desc: "Cheeseburger Meal is 2 simple, satisfying classic 100% beef burgers, served with our World Famous Fries® and your choice of a medium soda or soft drink. There are 1,130 calories in a Cheeseburger Combo Meal with a medium Coca-Cola® and medium fries.",
        category: 'Combo',
        img: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/regular/desktop/h-mcdonalds-2-Cheeseburger-Extra-Value-Meals.jpg?$Category_Desktop$",
        price: 11.99
    },
    {
        id: 12,
        name: "Egg McMuffin® Meal",
        desc: "Get more for breakfast with the Egg McMuffin® Meal. This breakfast meal features an Egg McMuffin®, crispy hash browns, and a small McCafé® Premium Roast Coffee– everything you need to start the day off right! There are 450 calories in an Egg McMuffin Meal.",
        category: 'Combo',
        img: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/regular/desktop/h-mcdonalds-Egg-McMuffin-Extra-Value-Meals.jpg?$Category_Desktop$",
        price: 7.99
    },
];

export default items;