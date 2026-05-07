// selectDrone.js

function selectDrone(targetDrone) 
{
    selectedDrone = targetDrone;
    
    // Update a readout so the user knows who they are controlling
    ge('infoBox').textContent = `Currently Controlling: ${selectedDrone.id}`;
    
    // Refresh the button colors to match the new drone's abilities!
    updateInterface(); 
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

