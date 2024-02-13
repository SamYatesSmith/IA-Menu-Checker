// constants - menu array   
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

// DOM elements
const resultsContainer = document.getElementById("resultsContainer");

// Evenet listeners
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', checkChecker);
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            checkChecker();
        }
    });
    document.getElementById("toTop").addEventListener("click", scrollToTop);
});

// Functions 
function checkChecker() {
    const userDiets = document.querySelectorAll('input[name="diet"]:checked');
    const userIntolerance = Array.from(document.querySelectorAll('input[name="intolerance"]:checked')).map(checkbox => checkbox.value);

    if (userDiets.length !== 1) {
        displayError("Please select only one dietary preference, i.e., Omnivore, Vegetarian, or Vegan.")
        return;
    }
    const userDiet = userDiets[0].value;
    
    if (!userDiet || userIntolerance.length === 0) {
        displayError("Please select your dietary preferences, i.e Omnivore, vegetarian or Vegan");
        return;
    }
    if (userIntolerance.includes ("gluten")) {
        displayError("Our apologies. As this is curently just a sandwich and baugette menu, all items contain wheat, barley or rye, and therefore gluten.  More items on the menu soon, we promise! ");
        return;
    }

    displayUserSelections(userDiet, userIntolerance);
    const suitableItems = getMenuItems(userDiet, userIntolerance)
    displayResults(suitableItems);

}

    function getMenuItems(diet, intolerance) {
        return menu.filter(item => {
            const isVegetarianFriendly = diet === "vegetarian" ? item.vegetarianFriendly: true;
            const isVeganFriendly = diet === "vegan" ? item.veganFriendly : true;
            const containsIntolerance = item.ingredients.some(ingredient => intolerance.includes(ingredient));
            return !containsIntolerance && isVeganFriendly && isVegetarianFriendly;
        });
    }

function displayResults(menu) {
    resultsContainer.innerHTML = "";

    if(menu.length > 0) {
        menu.forEach(item => {
            const listItem = document.createElement("li");
            const itemImage = document.createElement("img");
            itemImage.src = item.image;
            itemImage.alt = item.name;
            itemImage.classList.add("resultsContainer-img")
            const itemName = document.createElement("span");
            itemName.textContent = item.name;
            itemName.classList.add("resultsContainer-span");

            listItem.appendChild(itemImage);
            listItem.appendChild(itemName);

            resultsContainer.appendChild(listItem);
        });
    } else {
        resultsContainer.innerHTML = "<p>No suitable menu items based on your checkbox selections</p>";
    }
}
// Displaying user selections for clarity
function displayUserSelections(diet, intolerance) {
    const userSelectionsContainer = document.getElementById("userSelections");
    const dietText = diet ? `Diet: ${diet}` : '';
    const intoleranceText = intolerance.length > 0 ? `Intolerances: ${intolerance.join(', ')}` : '';

    userSelectionsContainer.innerHTML = 
    `<p><strong>Here are your selections:</strong></p>
     <p>${dietText}</p>
     <p>${intoleranceText}</p>`;
}

// Error message
function displayError(message) {
    resultsContainer.innerHTML = `<p>${message}</p>`;
}
// Scroll page to Top
function scrollToTop() {
    window.scrollTo({top: 0, behaviour: "smooth"});
}
// Clear user inputs from form
function clearForm() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
    displayUserSelections('', []);
    displayResults([]);
}
// download full sandwich and baugette menu and ensure menu opens in new page.
function downloadPNG(event) {
    event.preventDefault();
    window.open('/assets/images/The-Menu.png','_blank');
}
 