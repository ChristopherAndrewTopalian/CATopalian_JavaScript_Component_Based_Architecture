// EvasionComponent.js

class EvasionComponent 
{
    constructor(targetId, speed, maxDistance) 
    {
        // Data injected from the Container (The Drone)
        this.targetId = targetId;
        this.speed = speed;
        this.maxDistance = maxDistance;

        // Internal state data
        this.direction = 1;  // 1 moves right, -1 moves left
        this.startX = null;  // Will record the starting position
        this.isInitialized = false; 
    }

    update() 
    {
        let el = ge(this.targetId);

        if (!el) return;

        let rect = el.getBoundingClientRect(); 

        // Lock in the starting position on the very first frame
        if (!this.isInitialized) 
        {
            this.startX = rect.left;
            this.isInitialized = true;
        }

        // Calculate how far the drone has traveled from its origin
        let distanceTraveled = rect.left - this.startX;

        // If it moved too far right, flip direction to negative (left)
        if (distanceTraveled >= this.maxDistance) 
        {
            this.direction = -1;
        }
        // If it made it back to the start, flip direction to positive (right)
        else if (distanceTraveled <= 0) 
        {
            this.direction = 1;
        }

        // Apply the speed and direction to the exact current position
        let newX = rect.left + (this.speed * this.direction);
        el.style.left = newX + "px";
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

