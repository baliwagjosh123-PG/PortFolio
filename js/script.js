/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* scorll active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /* sticky navbar */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* remove toggle icon and navbar when click navbar link */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/* scroll reveal */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* Typewriter effect for multiple text */
const typed = new Typed('.multiple-text', {
    strings: ['Graphic Designer', 'Graphic Artist'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

new Typed('.multiple-text-about', {
    strings: ['Graphic Designer', 'Graphic Artist'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Allow Formspree to handle the submission
            setTimeout(() => {
                contactForm.reset(); // Clears all fields after submit
            }, 100); // Slight delay to ensure submission
        });
    }

    // Thesis Project slideshow images
    const thesisImages = [
        'pictureslideproject/UI1.png',
        'pictureslideproject/UI2.png',
        'pictureslideproject/UI3.png',
        'pictureslideproject/UI4.png',
        'pictureslideproject/UI5.png',
        'pictureslideproject/UI6.png',
        'pictureslideproject/UI7.png',
        'pictureslideproject/UI8.png',
        
        // Add more as needed
    ];
    let currentSlide = 0;
    let slideshowInterval;

    const modal = document.getElementById('slideshow-modal');
    const slideshowImg = document.getElementById('slideshow-img');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.getElementById('slideshow-prev-btn');
    const nextBtn = document.getElementById('slideshow-next-btn');
    const thesisLink = document.querySelector('.thesis-slideshow');

    function showThesisModal() {
        modal.classList.add('active');
        showSlide(currentSlide, thesisImages);
        slideshowInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % thesisImages.length;
            showSlide(currentSlide, thesisImages);
        }, 100000);
    }

    function showSlide(index, imagesArray) {
        slideshowImg.style.opacity = 0;
        setTimeout(() => {
            slideshowImg.src = imagesArray[index];
            slideshowImg.onload = () => {
                slideshowImg.style.opacity = 1;
            };
        }, 400);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % thesisImages.length;
        showSlide(currentSlide, thesisImages);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + thesisImages.length) % thesisImages.length;
        showSlide(currentSlide, thesisImages);
    }

    function closeModal() {
        modal.classList.remove('active');
        clearInterval(slideshowInterval);
        currentSlide = 0;
    }

    if (thesisLink) {
        thesisLink.addEventListener('click', function(e) {
            e.preventDefault();
            showThesisModal();
        });
    }

    closeBtn.addEventListener('click', closeModal);

    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }

    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });

    // Avatar Slider
    const avatarImages = [
        'caist-avatars/Class1.png',
        'caist-avatars/Class2.png',
        'caist-avatars/Class3.png',
        'caist-avatars/Class4.png',
        'caist-avatars/Class5.png',
        'caist-avatars/Class6.png',
        'caist-avatars/Class7.png',
        'caist-avatars/Class8.png',
        'caist-avatars/Class9.png',
        'caist-avatars/Class10.png'
    ];
    let currentAvatarSlide = 0;
    let avatarSlideshowInterval;

    const avatarModal = document.getElementById('avatar-modal');
    const avatarImg = document.getElementById('avatar-img');
    const avatarCloseBtn = document.querySelector('.avatar-close-btn');

    function showAvatarModal() {
        avatarModal.style.display = 'flex';
        showAvatarSlide(currentAvatarSlide);
        avatarSlideshowInterval = setInterval(() => {
            currentAvatarSlide = (currentAvatarSlide + 1) % avatarImages.length;
            showAvatarSlide(currentAvatarSlide);
        }, 3000); // Change image every 3 seconds
    }

    function showAvatarSlide(index) {
        avatarImg.style.opacity = 0;
        setTimeout(() => {
            avatarImg.src = avatarImages[index];
            avatarImg.onload = () => {
                avatarImg.style.opacity = 1;
            };
        }, 250);
    }

    function closeAvatarModal() {
        avatarModal.style.display = 'none';
        clearInterval(avatarSlideshowInterval);
        currentAvatarSlide = 0;
    }

    // Show avatar modal when CAIST AVATAR DESIGN project box is clicked
    document.querySelector('.avatar-link').addEventListener('click', function(e) {
        e.preventDefault();
        showAvatarModal();
    });

    avatarCloseBtn.addEventListener('click', closeAvatarModal);

    avatarModal.addEventListener('click', function(e) {
        if (e.target === avatarModal) closeAvatarModal();
    });

    // Skill Icon Slider
    const skillImages = [
        'skillicons/Skill (1).png',
        'skillicons/Skill (2).png',
        'skillicons/Skill (3).png',
        'skillicons/Skill (4).png',
        'skillicons/Skill (5).png',
        'skillicons/Skill (6).png',
        'skillicons/Skill (7).png',
        'skillicons/Skill (8).png',
        'skillicons/Skill (9).png',
        'skillicons/Skill (10).png',
        'skillicons/Skill (11).png',
        'skillicons/Skill (12).png',
        'skillicons/Skill (13).png',
        'skillicons/Skill (14).png',
        'skillicons/Skill (15).png',
        'skillicons/Skill (16).png',
        'skillicons/Skill (17).png',
        'skillicons/Skill (18).png',
        'skillicons/Skill (19).png',
        'skillicons/Skill (20).png',
        'skillicons/Skill (21).png',
        'skillicons/Skill (22).png',
        'skillicons/Skill (23).png',
        'skillicons/Skill (24).png'
    ];
    let currentSkillIndex = 0;

    const skillModal = document.getElementById('skill-modal');
    const skillImg = document.getElementById('skill-img');
    const skillCloseBtn = document.querySelector('.skill-close-btn');
    const skillNextBtn = document.getElementById('skill-next-btn');
    const skillPrevBtn = document.getElementById('skill-prev-btn');

    function showSkillModal() {
        skillModal.style.display = 'flex';
        showSkillSlide(currentSkillIndex);
    }

    function showSkillSlide(index) {
        skillImg.style.opacity = 0;
        setTimeout(() => {
            skillImg.src = skillImages[index];
            skillImg.onload = () => {
                skillImg.style.opacity = 1;
            };
        }, 250);
    }

    function closeSkillModal() {
        skillModal.style.display = 'none';
        currentSkillIndex = 0;
    }

    // Show skill modal when SKILL ICON project box is clicked
    const skillIconLink = document.querySelector('.skill-icon-link');
    if (skillIconLink) {
        skillIconLink.addEventListener('click', function(e) {
            e.preventDefault();
            currentSkillIndex = 0;
            showSkillModal();
        });
    }

    // Skill icon navigation
    if (skillNextBtn) {
        skillNextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            currentSkillIndex = (currentSkillIndex + 1) % skillImages.length;
            showSkillSlide(currentSkillIndex);
        });
    }

    if (skillPrevBtn) {
        skillPrevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            currentSkillIndex = (currentSkillIndex - 1 + skillImages.length) % skillImages.length;
            showSkillSlide(currentSkillIndex);
        });
    }

    skillCloseBtn.addEventListener('click', closeSkillModal);

    skillModal.addEventListener('click', function(e) {
        if (e.target === skillModal) closeSkillModal();
    });

    // Personal Project Slider
    const personalImages = [
        'PERSONAL/PERSONAL1.png',
        'PERSONAL/PERSONAL2.png',
        'PERSONAL/Castorice.gif',
        'PERSONAL/Cat.gif',
        'PERSONAL/Reading.gif'
    ];
    let currentPersonalIndex = 0;

    const personalModal = document.getElementById('personal-modal');
    const personalImg = document.getElementById('personal-img');
    const personalCloseBtn = document.querySelector('.personal-close-btn');
    const personalNextBtn = document.getElementById('personal-next-btn');
    const personalPrevBtn = document.getElementById('personal-prev-btn');

    function showPersonalModal() {
        personalModal.style.display = 'flex';
        showPersonalSlide(currentPersonalIndex);
    }

    function showPersonalSlide(index) {
        personalImg.style.opacity = 0;
        setTimeout(() => {
            personalImg.src = personalImages[index];
            personalImg.onload = () => {
                personalImg.style.opacity = 1;
            };
        }, 250);
    }

    function closePersonalModal() {
        personalModal.style.display = 'none';
        currentPersonalIndex = 0;
    }

    // Show personal modal when PERSONAL PROJECT project box is clicked
    const personalLink = document.querySelector('.personal-link');
    if (personalLink) {
        personalLink.addEventListener('click', function(e) {
            e.preventDefault();
            currentPersonalIndex = 0;
            showPersonalModal();
        });
    }

    // Personal project navigation
    if (personalNextBtn) {
        personalNextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            currentPersonalIndex = (currentPersonalIndex + 1) % personalImages.length;
            showPersonalSlide(currentPersonalIndex);
        });
    }

    if (personalPrevBtn) {
        personalPrevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            currentPersonalIndex = (currentPersonalIndex - 1 + personalImages.length) % personalImages.length;
            showPersonalSlide(currentPersonalIndex);
        });
    }

    personalCloseBtn.addEventListener('click', closePersonalModal);

    personalModal.addEventListener('click', function(e) {
        if (e.target === personalModal) closePersonalModal();
    });
});

