// makeInterface.js

function makeInterface()
{
    let title = ce('a');
    title.className = 'theTitle';
    title.textContent = "CATopalian JavaScript Component Based Architecture";
    title.style.textDecoration = 'none';
    title.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Component_Based_Architecture';
    ba(title);

    //-//

    let componentsContainer = ce('div');
    componentsContainer.style.display = 'flex';
    componentsContainer.style.flexDirection = 'column';
    componentsContainer.style.width = '150px';
    componentsContainer.style.height = '100px';
    componentsContainer.style.overflowY = 'scroll';
    componentsContainer.style.gap = '2px';
    componentsContainer.style.marginTop = '5px';
    ba(componentsContainer);

    //-//

    let btnLocationToggle = ce('button');
    btnLocationToggle.textContent = 'Location Ability';
    btnLocationToggle.id = 'btnLocationToggle';

    btnLocationToggle.onclick = function() 
    {
        if (selectedDrone === null) return;

        // Look at the selected drone's components
        if (selectedDrone.location == null) 
        {
            this.textContent = 'Location On';

            // It's empty. Equip it.
            selectedDrone.addLocationComponent();

            this.style.backgroundColor = 'rgb(0, 208, 255)';
            this.style.color = 'rgb(255, 255, 255)';
        } 
        else 
        {
            this.textContent = 'Location Off';

            // It already has one. Remove it.
            selectedDrone.removeLocationComponent();

            this.style.backgroundColor = 'rgb(0, 0, 0)';
            this.style.color = 'rgb(100, 100, 100)';
        }
        
        // Refresh the entire board to update the colors and text
        updateInterface(); 
    };
    componentsContainer.append(btnLocationToggle);

    //--//

    let btnLEDToggle = ce('button');
    btnLEDToggle.textContent = 'LED Ability';
    btnLEDToggle.id = 'btnLEDToggle';

    btnLEDToggle.onclick = function() 
    {
        if (selectedDrone === null) return;

        // Look at the selected drone's components
        if (selectedDrone.led == null) 
        {
            this.textContent = 'LED On';

            // It's empty. Equip it.
            selectedDrone.addLEDComponent();
            this.style.backgroundColor = 'rgb(0, 208, 255)';
            this.style.color = 'rgb(255, 255, 255)';
        } 
        else 
        {
            this.textContent = 'LED Off';

            // It already has one. Remove it.
            selectedDrone.removeLEDComponent();
            this.style.backgroundColor = 'rgb(0, 0, 0)';
            this.style.color = 'rgb(100, 100, 100)';
        }
        
        // Refresh the entire board to update the colors and text
        updateInterface(); 
    };
    componentsContainer.append(btnLEDToggle);

    //-//

    let btnDistanceToggle = ce('button');
    btnDistanceToggle.textContent = 'Distance Ability';
    btnDistanceToggle.id = 'btnDistanceToggle';

    btnDistanceToggle.onclick = function() 
    {
        if (selectedDrone === null) return;

        // Look at the selected drone's components
        if (selectedDrone.distanceTracker == null) 
        {
            this.textContent = 'Distance On';

            // It's empty. Equip it.
            selectedDrone.addDistanceComponent();

            this.style.backgroundColor = 'rgb(0, 208, 255)';
            this.style.color = 'rgb(255, 255, 255)';
        } 
        else 
        {
            this.textContent = 'Distance Off';

            // It already has one. Remove it.
            selectedDrone.removeDistanceComponent();

            this.style.backgroundColor = 'rgb(0, 0, 0)';
            this.style.color = 'rgb(100, 100, 100)';
        }
        
        // Refresh the entire board to update the colors and text
        updateInterface(); 
    };
    componentsContainer.append(btnDistanceToggle);

    //-//

    let btnEvasionToggle = ce('button');
    btnEvasionToggle.textContent = 'Evasion Ability';
    btnEvasionToggle.id = 'btnEvasionToggle';

    btnEvasionToggle.onclick = function() 
    {
        if (selectedDrone === null) return;

        // Look at the selected drone's components
        if (selectedDrone.evasion == null) 
        {
            this.textContent = 'Evasion On';

            // It's empty. Equip it.
            selectedDrone.addEvasionComponent();
            this.style.backgroundColor = 'rgb(0, 208, 255)';
            this.style.color = 'rgb(255, 255, 255)';
        } 
        else 
        {
            this.textContent = 'Evasion Off';

            // It already has one. Remove it.
            selectedDrone.removeEvasionComponent();
            this.style.backgroundColor = 'rgb(0, 0, 0)';
            this.style.color = 'rgb(100, 100, 100)';
        }
        
        // Refresh the entire board to update the colors and text
        updateInterface(); 
    };
    componentsContainer.append(btnEvasionToggle);

    //----//

    let actionsContainer = ce('div');
    actionsContainer.style.position = 'absolute';
    actionsContainer.style.right = '0px';
    actionsContainer.style.top = '0px';
    actionsContainer.style.display = 'flex';
    actionsContainer.style.flexDirection = 'column';
    actionsContainer.style.width = '150px';
    componentsContainer.style.height = '100px';
    actionsContainer.style.overflowY = 'scroll';
    actionsContainer.style.gap = '2px';
    ba(actionsContainer);

    // btnFlyLeft
    let btnFlyLeft = ce('button');
    btnFlyLeft.id = 'btnFlyLeft';
    btnFlyLeft.className = "btn-style";
    btnFlyLeft.textContent = "Fly Left";
    btnFlyLeft.onclick = function()
    { 
        if (selectedDrone === null) return; // Safety check

        if (selectedDrone.location !== null)
        {
            selectedDrone.flyLeft();
        }
        else
        {
            ge('infoBox').textContent = `Error: ${selectedDrone.id} has no Location Component installed!`;
        }
    };
    actionsContainer.append(btnFlyLeft);

    //-//

    // btnFlyRight
    let btnFlyRight = ce('button');
    btnFlyRight.id = 'btnFlyRight';
    btnFlyRight.className = "btn-style";
    btnFlyRight.textContent = "Fly Right";
    btnFlyRight.onclick = function()
    { 
        if (selectedDrone === null) return; // Safety check

        if (selectedDrone.location !== null)
        {
            selectedDrone.flyRight();
        }
        else
        {
            ge('infoBox').textContent = `Error: ${selectedDrone.id} has no Location Component installed!`;
        }
    };
    actionsContainer.append(btnFlyRight);

    //-//

    // btnParty
    let btnParty = ce('button');
    btnParty.id = 'btnParty';
    btnParty.className = "btn-style";
    btnParty.textContent = "Party Mode";
    btnParty.onclick = function()
    {
        if (selectedDrone === null) return; // Safety check

        if (selectedDrone.led !== null)
        {
            selectedDrone.led.randomColor();

            ge(selectedDrone.id).textContent = "Status: Party Mode Engaged!";
        }
        else
        {
            ge(selectedDrone.id).textContent = `Error: ${selectedDrone.id} has no LED Component installed!`;
        }
    };
    actionsContainer.append(btnParty);

    //-//

    let btnEvade = ce('button');
    btnEvade.id = 'btnEvade';
    btnEvade.className = "btn-style";
    btnEvade.textContent = "Evade!";
    btnEvade.onclick = function()
    { 
        if (selectedDrone === null) return; // Safety check

        if (selectedDrone.evasion !== null)
        {
            selectedDrone.startEvasion();
        }
        else
        {
            ge(selectedDrone.id).textContent = `Error: ${selectedDrone.id} has no Evasion Component installed!`;
        }
    };
    actionsContainer.append(btnEvade);

    //-//

    let btnHaltEvasion = ce('button');
    btnHaltEvasion.id = 'btnHaltEvasion';
    btnHaltEvasion.className = "btn-style";
    btnHaltEvasion.textContent = 'Halt Evasion';
    btnHaltEvasion.style.cursor = 'pointer';
    btnHaltEvasion.onclick = function()
    {
        if (selectedDrone === null) return; // Safety check

        if (selectedDrone.evasion !== null)
        {
            selectedDrone.haltEvasion();
        }
        else
        {
            ge(selectedDrone.id).textContent = `Error: ${selectedDrone.id} has no Evasion Component installed!`;
        }
    };
    actionsContainer.append(btnHaltEvasion);

    //-//

    let infoBox = ce('div');
    infoBox.id = "infoBox";
    infoBox.textContent = "infoBox";
    ba(infoBox);

    //-//

    let distanceBox = ce('div');
    distanceBox.id = "distanceBox";
    distanceBox.textContent = "distanceBox";
    ba(distanceBox);

    //-//

    let drone001Div = ce('div');
    drone001Div.id = "drone001";
    drone001Div.className = "drone-style";
    drone001Div.textContent = "Drone001";
    drone001Div.onclick = function()
    {
        clickSound();
        selectDrone(drone001);
        ge('infoBox').textContent = 'Controlling drone001';
        updateInterface();
    };
    ba(drone001Div);

    //-//

    let drone002Div = ce('div');
    drone002Div.id = "drone002";
    drone002Div.className = "drone-style";
    drone002Div.textContent = "Drone002";
    drone002Div.onclick = function()
    {
        clickSound();
        selectDrone(drone002);
        ge('infoBox').textContent = 'Controlling drone002';
        updateInterface();
    };
    ba(drone002Div);

    //-//

    let componentsDiagramSummary = ce('img');
    componentsDiagramSummary.src = 'src/uml/textures/CATopalian_JavaScript_Component_Based_Architecture_Flow.svg';
    componentsDiagramSummary.style.width = '720px';
    componentsDiagramSummary.style.marginTop = '5px';
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

