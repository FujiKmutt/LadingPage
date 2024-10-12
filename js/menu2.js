const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";

  if (isOpen) {
    dropDownMenu.style.height = "240px"; // ค่าความสูงเมื่อเปิด
    dropDownMenu.style.display = "block"; // เพิ่มบรรทัดนี้
  } else {
    dropDownMenu.style.height = "0"; // ค่าความสูงเมื่อปิด
    if (window.innerWidth > 802) {
      dropDownMenu.style.display = "none"; // เพิ่มบรรทัดนี้ ถ้าขนาดหน้าจอมากกว่า 802px
    }
  }
};

// อื่น ๆ ในโค้ดที่เหลือ...

window.addEventListener('resize', () => {
  if (!dropDownMenu.classList.contains("open") || window.innerWidth > 802) {
    dropDownMenu.style.display = "none"; // เพิ่มบรรทัดนี้ เพื่อให้มันไม่แสดงเมื่อ resize เมื่อ dropdown ไม่ได้เปิด หรือ ขนาดหน้าจอมากกว่า 802px
  } else {
    dropDownMenu.style.display = "block"; // เพิ่มบรรทัดนี้ ถ้า dropdown เปิดและขนาดหน้าจอไม่ใช่มากกว่า 802px
  }
});

document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY >= 0.98) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
});
