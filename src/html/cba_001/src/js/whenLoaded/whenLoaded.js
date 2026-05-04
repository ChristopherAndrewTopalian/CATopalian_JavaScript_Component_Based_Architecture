// whenLoaded.js

function whenLoaded()
{
    // Build the HTML interface first
    makeInterface();

    // Now that the DOM element exists, build the Class logic container around it
    drone001 = new Drone("drone001", 50, 170);

    drone002 = new Drone("drone002", 50, 300);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

