const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";

  if (isOpen) {
    dropDownMenu.style.height = "240px"; // ค่าความสูงเมื่อเปิด
  } else {
    dropDownMenu.style.height = "0"; // ค่าความสูงเมื่อปิด
  }
};

document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY >= 0.98) {
    header.classList.add('scrolled')
  }
  else {
    header.classList.remove('scrolled')
  }
})
