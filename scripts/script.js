//create intersection observer instance
const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('slide-in'); //add class to trigger css animation
			observer.unobserve(entry.target); //stop observing once animation is triggered
		}
	})
}, {
	threshold: 0.1 //trigger when 10% of the element is visible
});

//observe both columns
document.querySelectorAll('.left-column, .right-column').forEach(el => {
	observer.observe(el);
})

const projectObserver = new IntersectionObserver((entries, observere) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('slide-in');
			observer.unobserve(entry.target);
		}
	});
}, {
	threshold: 0.1
});

document.querySelectorAll('.left-slide, .right-slide').forEach(el => {
	projectObserver.observe(el);
})

window.addEventListener('load', () => {
	document.querySelector('.container').classList.add('reveal');
});
