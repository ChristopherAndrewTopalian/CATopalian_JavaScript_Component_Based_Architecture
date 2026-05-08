// whenLoaded.js

function whenLoaded()
{
    makeInterface();

    drone001 = new Drone("drone001", 200, 130);

    drone002 = new Drone("drone002", 200, 240);

    addBtnSounds();

    selectedDrone = drone001;

    selectDrone(drone001);

    // keep at the end of this boot sequence
    //defaultState();
    updateInterface();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

