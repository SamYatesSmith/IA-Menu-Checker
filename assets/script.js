

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
                name: "Artichoke, Tapenade & Olive Baugette",
                ingredients: ["sesame", "gluten"],
                vegetarianFriendly: true,
                veganFriendly: true,
                image: "/assets/images/Baguette-ArtichokeTapanardeOlive.png"
            },

            {
                name: "Avo, Olives & Toms Baugette",
                ingredients: ["sesame", "gluten", "pineNuts"],
                vegetarianFriendly: true,
                veganFriendly: true,
                image: "/assets/images/Baguette-AvoOlive_Toms.png"
            },

            {
                name: "Brie, Tomato & Basil Sandwich",
                ingredients: ["gluten", "dairy"],
                vegetarianFriendly: true,
                veganFriendly: false,
                image: "/assets/images/Baguette-BrieTomato_Basil.png"
            },

            {
                name: "Chicken Caesar & Bacon Sandwich",
                ingredients: ["sesame", "gluten", "egg", "fish", "dairy"],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "/assets/images/Sandwich-Chicken-and-Bacon.jpg"
            },

            {
                name: "Chicken Salad baugette",
                ingredients: ["gluten", "egg", "dairy"],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "/assets/images/Baugette-ChickenSalad.png"
            },

            {
                name: "Smoked Salmon, Egg Mayo & Avo Baugette",
                ingredients: ["sesame", "gluten", "egg", "fish"],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "/assets/images/Baugette-FreeRange_eggmayo_Salmon.png"
            },

            {
                name: "Italian Prosciutto Baugette",
                ingredients: ["sesame", "gluten", "egg", "cow"],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "/assets/images/Baguette-Italian_Proscuitto.png"
            },

            {
                name: "Mexican Style Avo & Pepper Wrap",
                ingredients: ["sesame", "gluten"],
                vegetarianFriendly: true,
                veganFriendly: true,
                image: "/assets/images/Wrap-MexicanStyle_FalafalAvo.png"
            },

            {
                name: "Posh Cheddar & Pickle Baugette",
                ingredients: ["sesame", "gluten", "egg", "cow", "mustard"],
                vegetarianFriendly: true,
                veganFriendly: false,
                image: "/assets/images/Baguette-PoshChedder_Pickle.png"
            },

            {
                name: "Free Range Egg Mayo & Smoked Salmon Sandwich",
                ingredients: ["gluten", "egg", "fish",],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "/assets/images/Sandwich-FreeRangeEggMayoCress.png"
            },

            {
                name: "Spicy Tuna Sandwich",
                ingredients: ["gluten", "egg", "fish", "cow"],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "/assets/images/Sandwich-SpicyTuna_Cucumber.jpg"
            },

            {
                name: "Sticky Mushroom Bahn Mi Baugette",
                ingredients: ["sesame", "gluten", "soya"],
                vegetarianFriendly: true,
                veganFriendly: true,
                image: "/assets/images/Baguette_StickyMushroomBahnMi.png"
            },

            {
                name: "Tuna Mayo & Cucumber Sandwich",
                ingredients: ["gluten", "egg", "fish"],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "/assets/images/Sandwich-Tuna-_-Cucumber.jpg"
            },

            {
                name: "Tuna PoleLine Caught & Cucumber Baugette",
                ingredients: ["sesame", "gluten", "egg", "fish", "cow"],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "/assets/images/Baguette-Pole_LineCaughtTuna.png"
            },

            {
                name: "Wiltshire-Cured Ham & Greve Baugette",
                ingredients: ["gluten", "egg", "cow", "mustard"],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "/assets/images/Baguette-WiltshireCuredHam_Greve.png"
            },

            {
                name: "BLT Sandwich",
                ingredients: ["gluten", "egg"],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "/assets/images/Sandwich-Granary_BLT.png"
            },

            {
                name: "Chicken, Avocado & Basil Sandwich",
                ingredients: ["gluten", "egg", "cow"],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "/assets/images/Sandwich-Granary-ChickenAvocado.png"
            },

            {
                name: "Chicken Salad Baugette",
                ingredients: ["gluten", "egg", "cow"],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "/assets/images/Baugette-ChickenSalad.png"
            },

            {
                name: "Classic Super Club Sandwich",
                ingredients: ["gluten", "egg"],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "/assets/images/Sandwich-ClassicSuperClub.png"
            },

            {
                name: "Crayfish & Rocket Sandwich",
                ingredients: ["gluten", "crustacean", "egg"],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "/assets/images/Sandwich-CrayfishRocket.png"
            },

            {
                name: "Free-Range Egg Mayo Sandwich",
                ingredients: ["gluten", "egg", "mustard"],
                vegetarianFriendly: true,
                veganFriendly: false,
                image: "/assets/images/Sandwich-FreeRangeEggMayoCress.png"
            },

            {
                name: "Ham & Cheese Baugette",
                ingredients: ["gluten", "cow"],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "/assets/images/Baugette-Famous-Ham-and-Cheese.jpg"
            },

            {
                name: "Humous & Veg Sandwich",
                ingredients: ["sesame", "gluten"],
                vegetarianFriendly: true,
                veganFriendly: true,
                image: "/assets/images/Sandwich-HummousVeg.png"
            },

            {
                name: "Kids' Cheese Triangles",
                ingredients: ["gluten", "cow"],
                vegetarianFriendly: true,
                veganFriendly: false,
                image: "/assets/images/Sandwich-Kids_CheeseTriangles.png"
            },

            {
                name: "Kids' Chicken & Cucumber Triangles",
                ingredients: ["gluten", "egg"],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "/assets/images/Sandwich-ChickenCucumberTriangles.png"
            },

            {
                name: "Kids' Ham Triangles",
                ingredients: ["gluten", "cow"],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "/assets/images/Sandwich-Kids_HamTriangles.png"
            },

            {
                name: "Mature Cheddar & Pickle Sandwich",
                ingredients: ["gluten", "egg", "cow"],
                vegetarianFriendly: true,
                veganFriendly: false,
                image: "/assets/images/Sandwich-Granary-MatureChedder_Pickle.png"
            },

            {
                name: "Scandi Style Smoked Salmon Rye Roll",
                ingredients: ["gluten", "fish", "cow", "egg", "mustard"],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "#/assets/images/Roll-ScandiSalmonColdRoll.png"
            },

            {
                name: "Super Greens & Reds Baugette",
                ingredients: ["gluten"],
                vegetarianFriendly: true,
                veganFriendly: true,
                image: "/assets/images/Baugette-Super_greens&reds.png"
            },

            {
                name: "The VLT Sandwich",
                ingredients: ["gluten"],
                vegetarianFriendly: false,
                veganFriendly: false,
                image: "/assets/images/Sandwich-Granary-TheVLT.png"
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

    function displayResults(menu) {
        const resultsContainer = document.querySelector("#resultsContainer");
        resultsContainer.innerHTML="";

        if (menu.length > 0) {
            menu.forEach(item => {
                const listItem = document.createElement("li");
                const itemImage = document.createElement("img");
                itemImage.src = item.image;
                itemImage.alt = item.name;
                const itemName = document.createElement("span");
                itemName.textContent = item.name;

                listItem.appendChild(itemImage);
                listItem.appendChild(itemName);

                resultsContainer.appendChild(listItem)
            });
        } else {
            resultsContainer.innerHTML = "<p>I'm sorry, there are no suitable menu items on the menu based on your allergy and intolerance selection</p>"
        }
    }

        //     const userResults = document.getElementById("result");
        //     if (userResults) {
            
        //         if (items.length > 0) {
        //             userResults.innerHTML = "<h2>Your personalised menu based on suitability:</h2><ul>" +
        //                 items.map(item => `<li><img src="${item.image}" alt="${item.name}">${item.name}</li>`).join("") +
        //                 "</ul>";
        //         } else {
        //         userResults.innerHTML = "<p>I'm sorry, there are no suitable menu items on the menu based on your allergy and intolerance selection</p>";
        //     } 
        // } else {
        //         console.error("Result div not found")
        //     }
        // }
    
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
})