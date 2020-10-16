# My Space Rangers App

The goal with my in-browser game Space Rangers was to take the core of a previous
project of mine, and ramp it up using the knowledge I'd gained since it's initial
inception.

# My Approach to the Recreation

My original game was a very simple app that was based entirely on vanilla Javascript.
When the player clicked on a button, they would initiate battle between their own ship, and one of six aliens that generated when the game started.  Most everything was hard coded, and the player only had the option to click two buttons: One to start a round of rng battle, or another to flee the battle and initiate a game over.

When I decided that bettering this original project would be my goal for my first GA SEI Project, I had a list of things that I wanted to include and improve upon.  For instance, in the previous version, the player always fought six aliens; no more, no less.  Also, the name of the players ship was unchangeable.  Taking these issues into account, I decided that expanding the players agency in the experience would be key.

# Technologies and Techniques

The reworking of this game was done in HTML, CSS, Javascript, and JQuery.  Much more attention was paid to the JS this time around, and the inclusion of JQuery was entirely brand new.  Also new to the project was an expanded body in the HTML, and inclusion of several new techniques in the CSS, specifically those of FlexBox.

My first big addition to the game was adding a difficulty selector.  Taking my JS function to generate enemy ships, I added a variable that would be called when the function ran, and assigned that variable to the number of times the function would run (make one enemy every cycle).  Then I hardcoded buttons that would call the function with different variables for each, and labeled them appropriately.  I also styled the container div wrapping the buttons so they would dissapear upon the players selection.

Next, I added a form that allows the player to change the name of their ship.  After the player enters a title, I assign that variable to the Player Ship object.  I also had to add a preventDefault so that entering a name wouldn't reload the page.  Then, I used JQuery to display the information contained in the Player Ship object on screen for the player to see.

The next, and biggest addition to the game, was a restructuring of my JS enemy generator.  I inserted JQuery so that every time the generator ran through a cycle and made an alien, it would create a div and append it to my game div.  I gave each div visuals and size so the player could see them, and then I added clickability to each individual div that would run the battle sequence with whatever enemy the player chose.  This addition to the game was reliant both on me learning how to assign variables inside my JQuery OnLoad, and also my ability to completely rework my battle system.  I stripped out the hardcoded variables, and allowed the variable passed by my div to tell the battle function which enemy the player is targeting.  This reworking of the battle system also meant that my previous solution of splicing out defeated enemies from my array, and measuring the arrays length for the win condition, would no longer be viable.  Instead, I decided to leave all the enemies in the array, and instead have a seperate variable count up on each player victory, where the player will win once that counter reached the number of aliens that had been generated upon game start.

Finally, I was able to add audio files via JQuery, and call on them with JS functions during certain loops.  Then some styling with CSS wrapped it up.

# Unsolved Problems

Unfortunately, I was unable to implement every feature that I had wanted.  A main part of my original battle system relied heavily on alert prompts to convey information to the user, and let them know what was happening at every step.  Every attempt I made to make a setTimeout function and add it to my battle function resulted in either unwanted results, or complete failure.  In the end, I scrapped this from the final product.

I also had to abandon several CSS animation ideas I'd thought would make good additions to the program.  The effect of a visual explosion when a ship was defeated, or even a shaking of a ship upon damage recieved, proved to need too much time for me to implement.

# Conclusion

My new and updated game is available to play here:

https://aaronluing.github.io/space-rangers-app/


Despite some setbacks, I am exceptionally pleased at the end result.  I hope you are as well.



