document.addEventListener("DOMContentLoaded", function () {
    const containDivs = document.querySelectorAll(".contain-2, .contain-3, .contain-4, .contain-5");
  
    function checkContainDivs() {
      containDivs.forEach((div) => {
        const divTop = div.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const isBottomVisible = divTop < windowHeight && divTop + div.offsetHeight > 0;
  
        if (isBottomVisible) {
          div.classList.add("visible");
        } else {
          div.classList.remove("visible");
        }
      });
    }
  
    // Initial check when the page loads
    checkContainDivs();
  
    // Check divs on scroll
    window.addEventListener("scroll", checkContainDivs);
  });
  