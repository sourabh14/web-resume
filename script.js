// Animation for skills section using Intersection observer
let options= {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const target = document.querySelector('.skills-display');

function handleIntersection(entries) {
	// The callback will return an array of entries, even if you are only observing a single item
	entries.map((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible')
		} 
		else {
			entry.target.classList.remove('visible')
		}
	});
}

const observer = new IntersectionObserver(handleIntersection);
observer.observe(target);