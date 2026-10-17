const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
});

document.querySelectorAll(".fade-in, .slide-in").forEach(element => {
  appearOnScroll.observe(element);
});

document.querySelectorAll(".row").forEach(row => {
  row.querySelector(".show-col").addEventListener("click", () => {
    row.classList.add("box-active");
  });

  row.querySelector(".close-col").addEventListener("click", () => {
    row.classList.remove("box-active");
  });
});
