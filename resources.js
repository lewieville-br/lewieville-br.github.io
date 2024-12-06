function hideAllSections() {
    var aboutSection = document.getElementsByClassName('aboutText')[0];
    var serviceSection = document.getElementsByClassName('serviceText')[0];
    var contactSection = document.getElementsByClassName('contactText')[0];
    var faqSection = document.getElementsByClassName('faqText')[0];

    aboutSection.style.display = 'none';
    serviceSection.style.display = 'none';
    contactSection.style.display = 'none';
    faqSection.style.display = 'none';
}

function showAbout() {
    hideAllSections();
    var aboutSection = document.getElementsByClassName('aboutText')[0];
    aboutSection.style.display = 'block';
}

function showServices() {
    hideAllSections();
    var serviceSection = document.getElementsByClassName('serviceText')[0];
    serviceSection.style.display = 'block';
}

function showContact() {
    hideAllSections();
    var contactSection = document.getElementsByClassName('contactText')[0];
    contactSection.style.display = 'block';
}

function showFAQ() {
    hideAllSections();
    var faqSection = document.getElementsByClassName('faqText')[0];
    faqSection.style.display = 'block';
}

var aboutButton = document.getElementsByClassName('aboutme')[0];
aboutButton.onclick = showAbout;

var servicesButton = document.getElementsByClassName('services')[0];
servicesButton.onclick = showServices;

var contactButton = document.getElementsByClassName('contact')[0];
contactButton.onclick = showContact;

var faqButton = document.getElementsByClassName('faq')[0];
faqButton.onclick = showFAQ;

showAbout();
