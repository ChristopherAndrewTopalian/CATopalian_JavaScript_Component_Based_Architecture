// Drone.js

// THE SHELL (The Entity Container)
class Drone
{
    constructor(id, startX, startY, speed = 2, maxDistance = 200)
    {
        this.id = id;
        this.startX = startX;
        this.startY = startY;
        this.speed = speed;
        this.maxDistance = maxDistance;

        this.location = new LocationComponent(id, startX, startY);

        this.led = null; //new LEDComponent(id);

        // Initialize the distance chip, setting startX and startY as the origin
        this.distanceTracker = null; //new DistanceComponent(id, startX, startY);

        // Initialize the Evasion Chip
        this.evasion = null; //new EvasionComponent(id, speed, maxDistance);

        // A variable to store the engine loop so we can turn it off later
        this.patrolTimer = null; 
    }

    addLocationComponent()
    {
        this.location = new LocationComponent(this.id, this.startX, this.startY);

        ge(this.id).textContent = "Status: Location Component Installed!";
    }

    removeLocationComponent()
    {
        this.location = null;

        ge(this.id).textContent = "Status: Location Component Removed!";
    }

    //----//

    addLEDComponent()
    {
        this.led = new LEDComponent(this.id);

        ge(this.id).textContent = "Status: LED Component Installed!";
    }

    removeLEDComponent()
    {
        this.led = null;

        ge(this.id).textContent = "Status: LED Component Removed!";
    }

    //-//

    addDistanceComponent()
    {
        this.distanceTracker = new DistanceComponent(this.id, this.startX, this.startY);

        ge(this.id).textContent = "Status: Distance Component Installed!";
    }

    removeDistanceComponent()
    {
        this.distanceTracker = null;

        ge(this.id).textContent = "Status: Distance Component Removed!";
    }

    //-//

    addEvasionComponent()
    {
        this.evasion = new EvasionComponent(this.id, this.speed, this.maxDistance);

        ge(this.id).textContent = "Status: Evasion Component Installed!";
    }

    removeEvasionComponent()
    {
        this.evasion = null;

        ge(this.id).textContent = "Status: Evasion Component Removed!";
    }

    flyLeft()
    {
        this.location.moveLeft();

        let distanceData = this.distanceTracker.getDistanceFromOrigin();

        ge('distanceBox').textContent = `Distance from origin: ${distanceData.total}px`;

        ge(this.id).textContent = "Status: Drone flying left.";
    }

    flyRight()
    {
        this.location.moveRight();

        let distanceData = this.distanceTracker.getDistanceFromOrigin();

        ge('distanceBox').textContent = `Distance from origin: ${distanceData.total}px`;

        ge(this.id).textContent = "Status: Drone flying right.";
    }

    startEvasion()
    {
        if (this.patrolTimer !== null) 
        {
            return;
        }

        ge(this.id).textContent = "Status: Drone executing evasive maneuvers.";

        this.patrolTimer = setInterval(() => 
        {
            // The Evasion chip physically moves the element
            this.evasion.update();

            // We read the raw DOM location
            let rect = ge(this.id).getBoundingClientRect();

            // We update the UI directly from the raw data
            ge('distanceBox').textContent = `Current Screen Position X: ${Math.round(rect.left)}px`;

        }, 1000 / 60); 
    }

    haltEvasion()
    {
        // cut the power to the loop
        clearInterval(this.patrolTimer);
        this.patrolTimer = null;

        ge(this.id).textContent = "Status: Evasive maneuvers halted. Holding position.";
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

