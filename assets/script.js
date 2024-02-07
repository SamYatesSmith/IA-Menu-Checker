

    let userDiet;

    function checkChecker() {
    userDiet = document.querySelector('input[name="diet"]:checked');
    const userIntolerance = Array.from(document.querySelectorAll('input[name="intolerance"]:checked')).map(checkbox => checkbox.value);
    
    if(userIntolerance.includes("gluten")) {
        displayError("Our apologies. As this is a sandwich and baguette menu, everything contains either wheat or barley, so there are no options available if you are intolerant to gluten. Further menu options to follow soon, we promise ;)")
        return;
    }

    const validity = validatePreferences(userDiet,userIntolerance);

    if (validity) {
        userDiet = userDiet.value;
    
            if (userDiet === "omnivore" && userIntolerance.length === 0) {
                displayError("Did you mean to check all three dietary preference boxes? There is no such uncertainty as a sure thing - Robert Burns");
                return;
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
                name: "Kids' Cheese Triangles",
                ingredients: ["gluten", "cow"],
                vegetarianFriendly: true,
                veganFriendly: false
            },

            {
                name: "Kids' Chicken & Cucumber Triangles",
                ingredients: ["gluten", "egg"],
                vegetarianFriendly: false,
                veganFriendly: false
            },

            {
                name: "Kids' Ham Triangles",
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

        const suitableItems = menu.filter(item => {
            const isVegetarianFriendly = userDiet === "vegetarian" ? item.vegetarianFriendly : true;
            const isVeganFriendly = userDiet === "vegan" ? item.veganFriendly : true;
            const containsIntolerance = item.ingredients.some(ingredients => userIntolerance.includes(ingredients));

            return !containsIntolerance && isVeganFriendly && isVegetarianFriendly;
        });

        displayResults(suitableItems);
    } else {
        displayError("Please check some boxes for your dietary preferences.");
    }
}

    function displayResults(items) {
            const userResults = document.getElementById("result");
            if (userResults) {
            
            if (items.length > 0) {
                userResults.innerHTML = "<h2>Your personalised menu based on suitability:</h2><ul>" +
                    items.map(item => `<li>${item.name}</li>`).join("") +
                    "</ul>";
            } else {
                userResults.innerHTML = "<p>I'm sorry, there are no suitable menu items on the menu based on your allergy and intolerance selection</p>";
            } 
        } else {
                console.error("Result div not found")
            }
        }
    
    function displayError(message) {
        const userResults = document.getElementById("result");
        if (userResults) {
            userResults.innerHTML = `<p>${message}</p>`;
        } else {
            console.error(message);
        }
    }

    function validatePreferences(userDiet, userIntolerance) {
        return userDiet || userIntolerance.length > 0;
    }
        
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('button').addEventListener('click', checkChecker);

        document.addEventListener('keydown', function(event) {
            if (event.key ==='Enter') {
                checkChecker();
            }
        });
});