document.addEventListener("DOMContentLoaded", function() {

    setTimeout(function() {
        var loadingBar = document.querySelector('.loading-bar');
        loadingBar.style.width = '100%';
    }, 1000);

    setTimeout(function() {
        var preloader = document.querySelector('.preloader');
        preloader.classList.add('fade');
        document.body.style.overflow = "auto";
    }, 2500);

    const header = document.querySelector('header');
    const aboutSection = document.querySelector('#discography');

    function isFollowIconsTouchingAbout() {
        const followIcons = document.querySelector('.follow-icons');
        const followIconsRect = followIcons.getBoundingClientRect();
        const aboutSectionRect = aboutSection.getBoundingClientRect();

        return followIconsRect.bottom >= aboutSectionRect.top;
    }

    function handleScroll() {
        if (isFollowIconsTouchingAbout()) {
            header.classList.add('header-up');
        } else {
            header.classList.remove('header-up');
        }
    }

    window.addEventListener('scroll', handleScroll);

    const cancelButton = document.getElementById('cancelButton');
    const sendButton = document.getElementById('sendButton');

    function sendForm() {
        const nameInput = document.getElementById('nameInput');
        const emailInput = document.getElementById('emailInput');
        const contactNoInput = document.getElementById('contactNoInput');
        const messageInput = document.getElementById('messageInput');

        const name = nameInput.value;
        const email = emailInput.value;
        const contactNo = contactNoInput.value;
        const message = messageInput.value;

        const recipientEmail = 'musicbigvee08@gmail.com';
        const subject = 'New Contact Form Submission';
        const body = `Name: ${name}\nEmail: ${email}\nContact No: ${contactNo}\nMessage: ${message}`;

        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    }

    function clearForm() {
        const nameInput = document.getElementById('nameInput');
        const emailInput = document.getElementById('emailInput');
        const contactNoInput = document.getElementById('contactNoInput');
        const messageInput = document.getElementById('messageInput');

        nameInput.value = '';
        emailInput.value = '';
        contactNoInput.value = '';
        messageInput.value = '';
    }

    sendButton.addEventListener('click', function(event) {
        event.preventDefault();
        sendForm();
        clearForm();
    });

    cancelButton.addEventListener('click', function(event) {
        event.preventDefault();
        clearForm();
    });

});
