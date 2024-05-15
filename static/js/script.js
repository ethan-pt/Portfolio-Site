// change body background on scroll
const profileWrapper = document.getElementById('profile-wrapper');
const aboutWrapper = document.getElementById('about-wrapper');
const projectsWrapper = document.getElementById('projects-wrapper');
const contactWrapper = document.getElementById('contact-wrapper');
const contentWrapper = document.getElementById('content');

window.addEventListener('scroll', () => {
	let offsetFromTop = window.scrollY;
	let viewHeight = window.innerHeight;
	if (offsetFromTop <= (viewHeight * 0.5)) {
		profileWrapper.style.opacity = '1';
		aboutWrapper.style.opacity = '0';
		projectsWrapper.style.opacity = '0';
		contactWrapper.style.opacity = '0';
		contentWrapper.style.backgroundColor = 'rgba(33,45,49,0)';

	} else if (offsetFromTop <= (profileWrapper.offsetHeight + (aboutWrapper.offsetHeight - (viewHeight * 0.5)))) {
		profileWrapper.style.opacity = '0';
		aboutWrapper.style.opacity = '1';
		projectsWrapper.style.opacity = '0';
		contactWrapper.style.opacity = '0';
		contentWrapper.style.backgroundColor = 'rgba(33,45,49,1)';

	} else if (offsetFromTop <= (profileWrapper.offsetHeight + aboutWrapper.offsetHeight + (projectsWrapper.offsetHeight - (viewHeight * 0.5)))) {
		profileWrapper.style.opacity = '0';
		aboutWrapper.style.opacity = '0';
		projectsWrapper.style.opacity = '1';
		contactWrapper.style.opacity = '0';
		contentWrapper.style.backgroundColor = 'rgba(33,45,49,1)';
	} else if (offsetFromTop <= (profileWrapper.offsetHeight + aboutWrapper.offsetHeight + projectsWrapper.offsetHeight + (contactWrapper.offsetHeight - (viewHeight * 0.5)))) {
		profileWrapper.style.opacity = '0';
		aboutWrapper.style.opacity = '0';
		projectsWrapper.style.opacity = '0';
		contactWrapper.style.opacity = '1';
		contentWrapper.style.backgroundColor = 'rgba(33,45,49,1)';
	}
});

// toggle offcanvas with nav links
const offcanvas = new bootstrap.Offcanvas('#offcanvasWithBothOptions');
const offcanvasLinks = document.getElementsByClassName('offcanvas-link');

for (let i = 0; i < offcanvasLinks.length; i++) {
	offcanvasLinks[i].addEventListener('click', (event) => {
		offcanvas.toggle();
	});
}
