// LocationComponent.js

class LocationComponent
{
    constructor(elementId, startX, startY)
    {
        this.element = ge(elementId);
        this.x = startX;
        this.y = startY;

        // set the physical starting position in the DOM
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

