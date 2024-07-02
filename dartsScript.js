/**
 * Opens the menu when the menu icon is clicked
 */
function openMenu(){
    document.getElementById('menu').style.top = '0%';
}

/**
 * Closes the menu when the close icon is clicked
 */
function closeMenu(){
    document.getElementById('menu').style.top = '-1000%';
}

/**
 * Displays the disclaimer when clicking the button inside the footer
 */
function viewDisclaimer(){
	alert('This site has been constructed as coursework for module U08054 Web Technology, at Oxford Brookes University. It is not a working website and is not connected with any site or individual referenced. The views and opinions expressed within these pages are personal and should not be construed as reflecting the views and opinions of Oxford Brookes University.');
}

/**
 * Displays a maintenance message upon clicking the appropriate content
 */
function maintenanceAlert(){
    alert('This content is currently undergoing maintenance and will be available / fully functioning soon.');
}

/**
 * Enables content to be collapsible by clicking the appropriate link
 * @param collapseLink - the link which when clicked, enables appropriate content to be collapsible
 * @var collapsible - the content which will be collapsible when clicking the appropriate link
 */
function collapseContent(collapseLink){
    var collapsible = collapseLink.nextElementSibling;
    if(collapsible.style.display === 'flex'){
        collapsible.style.display = 'none';
    }
    else{
        collapsible.style.display = 'flex';
    }
}