function showContent(section) {
    var container = document.getElementsByClassName('container')[0];
    var sections = container.children;

    var i = 0;
    while (i < sections.length) {
        sections[i].style.display = 'none';
        i++;
    }

    var targetSection = document.getElementsByClassName(section + 'Text')[0];
    targetSection.style.display = 'block';
}

function showAbout() {
    showContent('about');
}

function showServices() {
    showContent('service');
}

function showContact() {
    showContent('contact');
}

function showFAQ() {
    showContent('faq');
}

var aboutButton = document.getElementsByClassName('aboutme')[0];
aboutButton.onclick = showAbout;

var servicesButton = document.getElementsByClassName('services')[0];
servicesButton.onclick = showServices;

var contactButton = document.getElementsByClassName('contact')[0];
contactButton.onclick = showContact;

var faqButton = document.getElementsByClassName('faq')[0];
faqButton.onclick = showFAQ;

showContent('about');
