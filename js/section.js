window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('div[id^="profile"], div[id^="project"], div[id^="support"], div[id^="contact"]');
  const navLinks = document.querySelectorAll('.nav_links li a');

  sections.forEach(function (section, index) {
    const top = section.offsetTop;
    const height = section.clientHeight;
    const navLink = navLinks[index];

    if (window.scrollY >= top && window.scrollY < top + height) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
});