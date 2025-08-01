// Fade in container background image on page load
window.addEventListener('load', () => {
	const container = document.querySelector('.container');
	if (container) {
		container.classList.add('reveal');
	}
});

// Scroll-triggered animation for left and right columns
const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('slide-in'); // add animation class
			observer.unobserve(entry.target); // stop observing after reveal
		}
	});
}, {
	threshold: 0.1 // triggers when 10% is visible
});

// Observe target elements for slide-in effect
document.querySelectorAll('.left-column, .right-column').forEach(el => {
	observer.observe(el);
});

//Observer for gallery images sliding left or right
const galleryObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
			observer.unobserve(entry.target);
		}
	});
}, {
	threshold: 0.1
});

document.querySelectorAll('.image-gallery img').forEach(img => {
	galleryObserver.observe(img);
});
