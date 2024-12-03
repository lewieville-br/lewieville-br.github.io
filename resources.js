function showContent(section) {
    var container = document.getElementsByClassName('container')[0];
    var sections = container.children;
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    var targetSection = document.getElementsByClassName(section + 'Text')[0];
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

var aboutButton = document.getElementsByClassName('aboutme')[0];
aboutButton.onclick = function() {
    showContent('about');
};

var servicesButton = document.getElementsByClassName('services')[0];
servicesButton.onclick = function() {
    showContent('service');
};

var contactButton = document.getElementsByClassName('contact')[0];
contactButton.onclick = function() {
    showContent('contact');
};

var faqButton = document.getElementsByClassName('faq')[0];
faqButton.onclick = function() {
    showContent('faq');
};

showContent('about');
