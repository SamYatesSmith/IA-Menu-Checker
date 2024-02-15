><img src="https://github.com/SamYatesSmith/IA-Menu-Checker/assets/109161693/303573b5-74f6-49c1-b134-8a135674de10" width=200 height=200>

# The Checker by EDIBLE

Software which checks a food menu against a users allergies and intolerances to highlight what on the menu the user can or cannot eat.

## The Checker

The Checker is a functional menu analyser.  The primary goal of the Checker is to assess a menu's ingredients in order to ascertain whether a customer is safe to eat any particular item on the menu.  Intolerances and Allergies can be incredibly serious, and if the customer is not properly advised on ingredients, intolerances and allergies can be deadly.  EDIBLE offer restaurants, cafe's, sandwich shops, supermarkets or any food outlet with ingredients, the opportunity to allow their customers information about what is safe for them to eat.  

The user would start by listing what their dietary preference is, for example whether they're a vegetarian, a vegan or they're happy to eat anything.  This is in the form of a checkbox.  Following this input, a secondary checkbox input is required; any allergies or intolerances to certain ingredients.  The Checker, once initiated, would then return everything that is safe to eat on the menu, alleviating any of the users concerns about ingesting food which could be harmful to them. 

## Features

 ### Intuitive navbar 
 - The navbars links guide the user to the requested section of the page.  Its design is in-keeping with the style employed throughout the site.  Upon hover, the links transition into a different style and after hover, the transition takes a short time to fade.  
 The logo is of the producer of the software itself, EDIBLE. 
 <img src="https://github.com/SamYatesSmith/IA-Menu-Checker/blob/main/assets/images/libraries/readmescreenshots/1.Screenshot.header.png">
<br>

 ### Burger Menu for smaller screen sizes 
 - Originally, this became a necessity when I was unable to sufficently address an issue with the vertical screen alignment when viewing the site on smaller screens.  Upon click, the navbar becomes evident for quick and easy site perusal.
 <img src="/workspace/IA-Menu-Checker/assets/images/libraries/readmescreenshots/10.BurgerMenu.png">

 ### Flip infomation boxes with detail enclosed
 - The "flip boxes" are initiated upon hover.  The reverse hides the answer to the question on the front in order to provide the user relative information in a space conscious manner whilst adding to the general appeal of the site.  Again, the general aesthetic is in-keeping with the sites appeal.
 <img src="https://github.com/SamYatesSmith/IA-Menu-Checker/blob/main/assets/images/libraries/readmescreenshots/2.Screenshot.flip-front.png"><img src="https://github.com/SamYatesSmith/IA-Menu-Checker/blob/main/assets/images/libraries/readmescreenshots/3.Screenshot.flipped.back.png">
<br>

 ### The Checker
 - The checker is the primary purpose of the site.  The user checks the relevant available checkboxes and pushes the larger of the three button underneath the checker and this will return images and a description of the sandwiches available on the menu, that the user can safely consume.  
 <img src="https://github.com/SamYatesSmith/IA-Menu-Checker/blob/main/assets/images/libraries/readmescreenshots/4.TheChecker.png">
<br>

 ### Clear Responses button
 - The clear responses button clears previous user inputs, selection criteria and results, ready for further input.
 <img src="https://github.com/SamYatesSmith/IA-Menu-Checker/blob/main/assets/images/libraries/readmescreenshots/5.ClearResponses.png">
<br>

 ### Show menu button
 - The show menu button will open a new page in the same window with the full sandwich and baugette menu.  This menu is an older version of a portion of the menu Pret A Manger offered and is used as an example of what the software could achieve.
 <img src="https://github.com/SamYatesSmith/IA-Menu-Checker/blob/main/assets/images/libraries/readmescreenshots/6.ShowMenu.png">
<br>

 ### Scripted error checking
 - The functionality behind the software will alert the user of any errors they may have activated when checking (or not checking) the checkboxes.  This error returns in the same area that they would recieve their sandwhich results. 
 <img src="https://github.com/SamYatesSmith/IA-Menu-Checker/blob/main/assets/images/libraries/readmescreenshots/7.displayError.png">
<br>

 ### Selection information, confirming users checked items for clarity
 - This simply returns the users selection information so that the user may check what they have inputted.
 <img src="https://github.com/SamYatesSmith/IA-Menu-Checker/blob/main/assets/images/libraries/readmescreenshots/8.SelectionClarity.png">
<br>

 ### Navigable footer linking to external socials
 - When clicking the site map links, these refer the user to the desired location of the page for instant navigable access.  The social media links, if avilable at source, will guide the user to the respective social media page logins, opening within a new tab in the same window.
 <img src="/workspace/IA-Menu-Checker/assets/images/libraries/readmescreenshots/9.NavigableFooter.png">
<br>

 ### User friendly aides (color contrasts and alt image messages)
 ### Devlopable & maleable code 
 - If required, the code is easily maleable to input secondary or larger menus.

 ### Features left to implement? 
 - If the core data is available, I would like to offer restaurants the opportunity to sign up with me and provide a QR code with their menu and ingredients (Or I oculd build it for them) and I could then provide the service as a result of a QR scan. 

# Testing 

The site has taken over 3 weeks to build.  Approximately 100 hours at a guess.  I have performed testing at every stage of the sites development as shown in the list of git repository entries and their descriptions.  Some particular examples of the various tests carried out and their resulting fixes are below;
- Errors resolved
 1. Functionality of the "Checker" program.  **Action:** There were numerous issues on relating to the ordering and readability of the code I had written.  This drove me to re-write the Javascript in an attempt to make it more legible to other developers. (to view repository entry, see Commit#4.8) The stages the program goes through now are easier to follow and therefore changes or improvements will be much simpler to complete. 
 2. Issue where the form, after use, still had all previous results listed.  **Action:** Added a function to clear previous user selections from the form and their previous results & images.
 3. displayError() function.  **Action:** I wrote this function to handle the various messages that the program needed to return to the user to highlight what had been incorrectly inputted and why.  A short explanation appears in the results container to advise what steps need to be taken to continue using the program.
 4. User Selections were not obvious ot user.  **Action:** I decided to add a function that advises the user what they actually selected to ensure they hadn't made a mistake upon input.  This appears above the results section.
 5. Page width on very small screens **Action:** As there are numerous containers on the same page, padding, width, height, font-size and various other factors were causing issues on very small screen sizes, such as the Galaxy Fold. I had to trawl through the code and assess styling to ensure all was in line with preferred aesthetic to ensure a positive UI experience.  After further testing and assessment, the site alignment still sat off the page to the left.  I therefore decided the navbars at the top and bottom of the page were to blame.  I created various media queries and added a burger menu at a small screen width to allow for the user to click on the burger to access the navbar.  I also changed the orientation of the footer.  Resolved.
 6. File management **Action** As evidenced by the Git commit messages, there have been numerous file name changes for images and various other elements of the site.  This is because as the site grew, better, more accessible file structures were required.  I therefore made folder within the libraries folder to house groups of images.
 7. General Testing **Action:** As there are some nuanced CSS stylings within the site, there was inspiration drawn from a few sources for, for example, the flip boxes and the flip style on the checkboxes.  These required numerous testing with styles to attempt to incorporate an interesting aesthetic that considers space and functionality as of high importance.

## Validator Testing

- HTML Validation

 <img src="https://github.com/SamYatesSmith/IA-Menu-Checker/blob/main/assets/images/libraries/readmescreenshots/HTML.Validation.Pass.png">

- CSS Validation 

 <img src="https://github.com/SamYatesSmith/IA-Menu-Checker/blob/main/assets/images/libraries/readmescreenshots/CSS.Validation.Pass.png">


## Unfixed Bugs

 - I do not believe there are any unfixed bugs
