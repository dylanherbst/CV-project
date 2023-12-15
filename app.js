
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show');
        }
    });
}); { threshold: [0.1] };

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach(el => observer.observe(el));





// CODE FOR EMAIL FORM

// var ractive = new Ractive({
//   el: '#container',
//   template: '#template',
//   data: {}
// }); 