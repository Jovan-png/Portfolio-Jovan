document.querySelectorAll(".row").forEach(row => {
  const summary = row.firstElementChild;
  const details = row.lastElementChild;
  const openButton = row.querySelector(".show-col");
  const closeButton = row.querySelector(".close-col");

  function setExpanded(expanded) {
    // Reveal the destination before moving focus, then hide the old panel.
    const destination = expanded ? details : summary;
    destination.inert = false;
    destination.style.visibility = "visible";
    row.classList.toggle("box-active", expanded);
    openButton.setAttribute("aria-expanded", String(expanded));
    (expanded ? closeButton : openButton).focus({ preventScroll: true });

    const inactive = expanded ? summary : details;
    inactive.inert = true;
    inactive.style.visibility = "hidden";
    destination.scrollIntoView({ block: "nearest" });
  }

  row.classList.add("enhanced");
  details.inert = true;
  details.style.visibility = "hidden";
  openButton.addEventListener("click", () => setExpanded(true));
  closeButton.addEventListener("click", () => setExpanded(false));
  row.addEventListener("keydown", event => {
    if (event.key === "Escape" && row.classList.contains("box-active")) {
      event.preventDefault();
      setExpanded(false);
    }
  });
});
