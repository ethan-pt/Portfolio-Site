// change body background on scroll
const profileWrapper = document.getElementById('profile-wrapper');
const aboutWrapper = document.getElementById('about-wrapper');
const contentWrapper = document.getElementById('content');

window.addEventListener('scroll', () => {
	let offsetFromTop = window.scrollY;
	let viewHeight = window.innerHeight;
	if (offsetFromTop <= viewHeight/2) {
		profileWrapper.style.opacity = '1';
		aboutWrapper.style.opacity = '0';
		contentWrapper.style.backgroundColor = 'rgba(255,252,242,0)';

	} else if (offsetFromTop > viewHeight/2 && offsetFromTop <= viewHeight*1.5) {
		profileWrapper.style.opacity = '0';
		aboutWrapper.style.opacity = '1';
		contentWrapper.style.backgroundColor = 'rgba(255,252,242,1)';

	} else if (offsetFromTop > viewHeight*1.5) {
		profileWrapper.style.opacity = '0';
		aboutWrapper.style.opacity = '0';
		contentWrapper.style.backgroundColor = 'rgba(255,252,242,1)';
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
