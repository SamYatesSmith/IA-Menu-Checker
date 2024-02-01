function checkChecker() {
    const userDiet = document.querySelector('input[name="diet"]:checked').value;
    const userIntolernce = array.from(document.querySelectorAll('input[name="intolerance]:checked')).map(checkbox => checkbox.value);
}
const menu = [
    {
        name: "Artichoke, Tapenade & Olive Sandwich",
        ingredients: ["sesame", "gluten"],
        vegetarianFriendly: true,
        veganFriendly: true
    },

    {
        name: "Avo, Olives & Toms Sandwich",
        ingredients: ["sesame", "gluten", "pineNuts"],
        vegetarianFriendly: true,
        veganFriendly: true
    },

    {
        name: "Brie, Tomato & Basil Sandwich",
        ingredients: ["gluten", "dairy"],
        vegetarianFriendly: true,
        veganFriendly: false
    },

    {
        name: "Chicken Caesar & Bacon Sandwich",
        ingredients: ["sesame", "gluten", "egg", "fish", "dairy"],
        vegetarianFriendly: false,
        veganFriendly: false
    },

    {
        name: "Chicken Salad Baguette Sandwich",
        ingredients: ["gluten", "egg", "dairy"],
        vegetarianFriendly: false,
        veganFriendly: false
    },

    {
        name: "Smoked Salmon, Egg Mayo & Avo Sandwich",
        ingredients: ["sesame", "gluten", "egg", "fish"],
        vegetarianFriendly: false,
        veganFriendly: false
    },

    {
        name: "Italian Prosciutto Sandwich",
        ingredients: ["sesame", "gluten", "egg", "cow"],
        vegetarianFriendly: false,
        veganFriendly: false
    },

    {
        name: "Mexican Style Avo & Pepper Sandwich",
        ingredients: ["sesame", "gluten"],
        vegetarianFriendly: true,
        veganFriendly: true
    },

    {
        name: "Posh Cheddar & Pickle Sandwich",
        ingredients: ["sesame", "gluten", "egg", "cow", "mustard"],
        vegetarianFriendly: true,
        veganFriendly: false
    },

    {
        name: "Free Range Egg Mayo & Smoked Salmon Sandwich",
        ingredients: ["gluten", "egg", "fish",],
        vegetarianFriendly: false,
        veganFriendly: false
    },

    {
        name: "Spicy Tuna Sandwich",
        ingredients: ["gluten", "egg", "fish", "cow"],
        vegetarianFriendly: false,
        veganFriendly: false
    },

    {
        name: "Sticky Mushroom Bahn Mi Sandwich",
        ingredients: ["sesame", "gluten", "soya"],
        vegetarianFriendly: true,
        veganFriendly: true
    },

    {
        name: "Tuna Mayo & Cucumber Sandwich",
        ingredients: ["gluten", "egg", "fish"],
        vegetarianFriendly: false,
        veganFriendly: false
    },

    {
        name: "Tuna Nicoise Sandwich",
        ingredients: ["sesame", "gluten", "egg", "fish", "cow"],
        vegetarianFriendly: false,
        veganFriendly: false
    },

    {
        name: "Wiltshire-Cured Ham & Greve Sandwich",
        ingredients: ["gluten", "egg", "cow", "mustard"],
        vegetarianFriendly: false,
        veganFriendly: false
    },

    {
        name: "BLT Baugette",
        ingredients: ["gluten", "egg"],
        vegetarianFriendly: false,
        veganFriendly: false
    },

    {
        name: "Chicken, Avocado & Basil Baugette",
        ingredients: ["gluten", "egg", "cow"],
        vegetarianFriendly: false,
        veganFriendly: false
    },

    {
        name: "Chicken Salad Baugette",
        ingredients: ["gluten", "egg", "cow"],
        vegetarianFriendly: false,
        veganFriendly: false
    },

    {
        name: "Classic Super Club Baugette",
        ingredients: ["gluten", "egg"],
        vegetarianFriendly: false,
        veganFriendly: false
    },

    {
        name: "Crayfish & Rocket Baugette",
        ingredients: ["gluten", "crustacean", "egg"],
        vegetarianFriendly: false,
        veganFriendly: false
    },

    {
        name: "Free-Range Egg Mayo Baugette",
        ingredients: ["gluten", "egg", "mustard"],
        vegetarianFriendly: true,
        veganFriendly: false
    },

    {
        name: "Ham & Cheese Baugette",
        ingredients: ["gluten", "cow"],
        vegetarianFriendly: false,
        veganFriendly: false
    },

    {
        name: "Humous & Veg Baugette",
        ingredients: ["sesame", "gluten"],
        vegetarianFriendly: true,
        veganFriendly: true
    },

    {
        name: "Kids' Cheese Triangles Baugette",
        ingredients: ["gluten", "cow"],
        vegetarianFriendly: true,
        veganFriendly: false
    },

    {
        name: "Kids' Chicken & Cucumber Triangles Baugette",
        ingredients: ["gluten", "egg"],
        vegetarianFriendly: true,
        veganFriendly: true
    },

    {
        name: "Kids' Ham Triangles Baugette",
        ingredients: ["gluten", "cow"],
        vegetarianFriendly: false,
        veganFriendly: false
    },

    {
        name: "Mature Cheddar & Pickle Baugette",
        ingredients: ["gluten", "egg", "cow"],
        vegetarianFriendly: true,
        veganFriendly: false
    },

    {
        name: "Scottish Smoked Salmon Baugette",
        ingredients: ["gluten", "fish", "cow"],
        vegetarianFriendly: false,
        veganFriendly: false
    },

    {
        name: "Super Greens & Reds Baugette",
        ingredients: ["gluten"],
        vegetarianFriendly: true,
        veganFriendly: true
    },

    {
        name: "Tuna Mayo & Cucumber Baugette",
        ingredients: ["gluten", "egg", "fish"],
        vegetarianFriendly: false,
        veganFriendly: false
    },

    {
        name: "The VLT Baugette",
        ingredients: ["gluten"],
        vegetarianFriendly: false,
        veganFriendly: false
    },
];

menu.forEach(item => {
    const isVegetarianFriendly = userDiet === "vegetarian" ? item.vegetarianFriendly : true;
    const isVeganFriendly = userDiet === "vegan" ? item.veganFriendly : true;
    const containsIntolerance = item.ingredients.some(ingredients => userIntolernce.includes(ingredients));

    if (containsIntolerance || !isVegetarianFriendly || !isVeganFriendly) {
        
        console.log(`Avoid ${item.name} - Not suitable for your dietary prefernces.`);
    } else {
        console.log(`${item.name} is suitable for your dietary preferences.`);
    }
});