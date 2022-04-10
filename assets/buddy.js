const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");


const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});



/* this is the JS instead of jQuery so you can see. This selects all .rows in the html and the foreach loops thru them using the variable "row" as its reference. when you're in a foreach, you can then use that variable to select any child elements within it e.g. row.querySelector(".show-col") grabs the button. then the click events. */
var rows = document.querySelectorAll('.row');

rows.forEach((row) => {
	let colOpen = row.querySelector(".show-col"),
	colClose = row.querySelector(".close-col");
	
	colOpen.addEventListener("click", function () {
		row.classList.add("box-active");
	});

	colClose.addEventListener("click", function () {
		row.classList.remove("box-active");
	});
});