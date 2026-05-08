// KeyboardControlComponent.js

class KeyboardControlComponent 
{
    constructor(droneReference) 
    {
        this.drone = droneReference;
        this.speed = 25; 

        window.addEventListener('keydown', this.handleKeyDown);
        
        console.log(`${this.drone.id}: Keyboard Controls Online.`);
    }

    // By making this an Arrow Function, 'this' is permanently locked to the Component
    handleKeyDown = (e) => 
    {
        if (typeof selectedDrone !== 'undefined' && selectedDrone !== this.drone) return;

        if (this.drone.location === null) return;

        let loc = this.drone.location;

        if (e.key === 'w' || e.key === 'W')
        {
            loc.y -= this.speed;
        }

        if (e.key === 's' || e.key === 'S')
        {
            loc.y += this.speed;
        }

        if (e.key === 'a' || e.key === 'A')
        {
            loc.x -= this.speed;
        }

        if (e.key === 'd' || e.key === 'D')
        {
            loc.x += this.speed;
        }

        loc.element.style.left = loc.x + "px";
        loc.element.style.top = loc.y + "px";
    }

    destroy() 
    {
        window.removeEventListener('keydown', this.handleKeyDown);

        console.log(`${this.drone.id}: Keyboard Controls Offline.`);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

