// DistanceComponent.js

class DistanceComponent
{
    constructor(elementId, originX = 0, originY = 0)
    {
        this.elementId = elementId;

        // The anchor point we are measuring from
        this.originX = originX;
        this.originY = originY;
    }

    // asks the DOM for position, returns the math
    getDistanceFromOrigin()
    {
        // Uses our shortcut to get the physical DOM rect
        let rect = gr(this.elementId); 
        
        // Calculate the difference between current position and origin
        let diffX = Math.abs(rect.x - this.originX);
        let diffY = Math.abs(rect.y - this.originY);

        // Calculate the true straight-line distance (Radial)
        let radialDistance = Math.floor(Math.sqrt((diffX * diffX) + (diffY * diffY)));

        return { 
            x: diffX, 
            y: diffY, 
            total: radialDistance 
        };
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

