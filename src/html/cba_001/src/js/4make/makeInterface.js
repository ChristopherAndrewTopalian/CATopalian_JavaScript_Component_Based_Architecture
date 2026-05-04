// makeInterface.js

function makeInterface()
{
    let title = ce('h3');
    title.textContent = "CATopalian JavaScript Component Based Architecture Flow";
    ba(title);

    //-//

    // btnFlyLeft
    let btnFlyLeft = ce('button');
    btnFlyLeft.className = "btn-style";
    btnFlyLeft.textContent = "Fly Left";
    btnFlyLeft.onclick = function()
    { 
        drone001.flyLeft(); 
        drone002.flyLeft();
    };
    ba(btnFlyLeft);

    //-//

    // btnFlyRight
    let btnFlyRight = ce('button');
    btnFlyRight.className = "btn-style";
    btnFlyRight.textContent = "Fly Right";
    btnFlyRight.onclick = function()
    { 
        drone001.flyRight(); 
        drone002.flyRight();
    };
    ba(btnFlyRight);

    //-//

    // btnParty
    let btnParty = ce('button');
    btnParty.className = "btn-style";
    btnParty.textContent = "Party Mode";
    btnParty.onclick = function()
    {
        if (drone001.led)
        {
            drone001.led.randomColor();

            ge('infoBox').textContent = "Status: Party Mode Engaged!";
        }
        else
        {
            ge('infoBox').textContent = "Error: Cannot activate. No LED Component installed!";
        }

        //-//

        if (drone002.led)
        {
            drone002.led.randomColor();
    
            ge('infoBox').textContent = "Status: Party Mode Engaged!";
        }
        else
        {
            ge('infoBox').textContent = "Error: Cannot activate. No LED Component installed!";
        }
    };
    ba(btnParty);

    //-//

    let btnEvade = ce('button');
    btnEvade.className = "btn-style";
    btnEvade.textContent = "Evade!";
    btnEvade.onclick = function()
    { 
        drone001.startEvasion(); 
        drone002.startEvasion();
    };
    ba(btnEvade);

    //-//

    let stopEvasionBtn = ce('button');
    stopEvasionBtn.className = "btn-style";
    stopEvasionBtn.textContent = 'Halt Evasive Maneuvers';
    stopEvasionBtn.style.backgroundColor = 'rgb(0, 0, 0)';
    stopEvasionBtn.style.cursor = 'pointer';
    stopEvasionBtn.onclick = function()
    {
        drone001.haltEvasion(); 
        drone002.haltEvasion(); 
    };
    ba(stopEvasionBtn);

    //-//

    let infoBox = ce('div');
    infoBox.id = "infoBox";
    infoBox.style.margin = "15px";
    infoBox.style.color = "cyan";
    infoBox.textContent = "Status: Drone is offline.";
    ba(infoBox);

    //-//

    let distanceBox = ce('div');
    distanceBox.id = "distanceBox";
    distanceBox.style.margin = "15px";
    distanceBox.style.color = "cyan";
    distanceBox.textContent = "Status: Drone is offline.";
    ba(distanceBox);

    //-//

    let drone001Div = ce('div');
    drone001Div.id = "drone001";
    drone001Div.className = "drone-style";
    drone001Div.textContent = "Drone001";
    ba(drone001Div);

    //-//

    let drone002Div = ce('div');
    drone002Div.id = "drone002";
    drone002Div.className = "drone-style";
    drone002Div.textContent = "DRONE 2";
    ba(drone002Div);

    //-//

    let componentsDiagramSummary = ce('img');
    componentsDiagramSummary.src = 'src/uml/textures/CATopalian_JavaScript_Component_Based_Architecture_Flow.svg';
    componentsDiagramSummary.style.width = '720px';
    componentsDiagramSummary.onclick = function()
    {
        window.open('src/uml/textures/CATopalian_JavaScript_Component_Based_Architecture_Flow.svg');
    };
    ba(componentsDiagramSummary);

    //-//

    ba(ce('hr'));
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

