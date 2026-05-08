// LEDComponent.js

class LEDComponent
{
    constructor(elementId)
    {
        this.element = ge(elementId);
    }

    setColor(newColor)
    {
        this.element.style.backgroundColor = newColor;
    }

    randomColor()
    {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        this.setColor(`rgb(${r}, ${g}, ${b})`);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

