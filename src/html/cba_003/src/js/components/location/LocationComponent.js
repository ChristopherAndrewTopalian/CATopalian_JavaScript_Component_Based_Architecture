// LocationComponent.js

class LocationComponent
{
    constructor(elementId, startX, startY)
    {
        this.element = ge(elementId);

        // Read the DOM's current physical position
        // parseInt strips out the "px" and turns "150px" into the number 150
        let currentX = parseInt(this.element.style.left);
        let currentY = parseInt(this.element.style.top);

        /*
        // Check if the element already has a valid position
        // isNaN (Is Not a Number) checks if it failed to find a position
        this.x = !isNaN(currentX) ? currentX : startX;

        this.y = !isNaN(currentY) ? currentY : startY;
        */

        // Set this.x to currentX... unless currentX is broken, in which case, set it to startX.

        // Check the X coordinate
        if (!isNaN(currentX)) 
        {
            // If currentX IS a number, use it.
            this.x = currentX;
        } 
        else 
        {
            // Otherwise, fall back to the default startX.
            this.x = startX;
        }

        // Check the Y coordinate
        if (!isNaN(currentY)) 
        {
            this.y = currentY;
        } 
        else 
        {
            this.y = startY;
        }

        // Lock in the physical position
        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
    }

    moveLeft()
    {
        this.x -= 50;
        this.element.style.left = this.x + "px";
    }

    moveRight()
    {
        this.x += 50;
        this.element.style.left = this.x + "px";
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

