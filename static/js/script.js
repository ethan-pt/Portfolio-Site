// toggle offcanvas with nav links
const offcanvas = new bootstrap.Offcanvas('#offcanvasWithBothOptions');
const offcanvasLinks = document.getElementsByClassName('offcanvas-link');

for (let i = 0; i < offcanvasLinks.length; i++) {
	offcanvasLinks[i].addEventListener('click', (event) => {
		offcanvas.toggle();
	});
}
