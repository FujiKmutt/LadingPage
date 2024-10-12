function showTab(tabNumber) {
  // ซ่อนทุก ๆ แท็บเนื้อหา
  var tabPanes = document.querySelectorAll(".tab-pane");
  tabPanes.forEach(function (pane) {
    pane.classList.remove("show");
  });

  // แสดงแท็บที่ถูกเลือก
  var selectedTab = document.getElementById("tab" + tabNumber);
  selectedTab.classList.add("show");

  // ลบคลาส 'active' จากทุกปุ่ม
  var buttons = document.querySelectorAll(".ct-button");
  buttons.forEach(function (button) {
    button.classList.remove("active");
  });

  // เพิ่มคลาส 'active' ให้กับปุ่มที่ถูกคลิก
  var clickedButton = document.querySelector(
    ".ct-" + tabNumber + " .ct-button"
  );
  clickedButton.classList.add("active");
}
document.addEventListener("DOMContentLoaded", function () {
  const containDivs = document.querySelectorAll(
    ".contain-2, .contain-3, .contain-4, .contain-5"
  );

  function checkContainDivs() {
    containDivs.forEach((div) => {
      const divTop = div.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const isBottomVisible =
        divTop < windowHeight && divTop + div.offsetHeight > 0;

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
document.addEventListener("click", function (event) {
  var target = event.target;
  var hrefValue = target.getAttribute("href");
  if (target.tagName === "A" && hrefValue && hrefValue.startsWith("#")) {
    event.preventDefault(); // ป้องกันการเลื่อนหน้าเว็บ

    var targetId = hrefValue.substring(1); // นำ # ออก เพื่อให้ได้ ID ที่ถูกต้อง
    var targetElement = document.getElementById(targetId);

    if (targetElement) {
      // ทำสิ่งที่คุณต้องการทำที่นี่
      // เช่น การแสดงข้อมูล, เปิด/ปิดกล่อง, เลื่อนไปยังส่วนที่ต้องการ, ฯลฯ
      console.log(
        "Link to " + targetId + " clicked, but prevented default action."
      );
      // ตัวอย่าง: scroll ไปยัง element ที่มี ID เป็น targetId
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
});
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

document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY >= 0.98) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
var audio = document.getElementById("myAudio");
var circleDiv = document.querySelector(".ct-profile");

// เพิ่มเหตุการณ์เมื่อคลิกที่ <div> ที่มี class "circle"
circleDiv.addEventListener("click", function () {
  if (audio.paused) {
    audio.play(); // เริ่มเล่นเพลงหากยังไม่ได้เล่น
  } else {
    audio.pause(); // หยุดเล่นเพลงหากกำลังเล่น
  }
  // คำสั่งด้านล่างใช้สลับคลาส "playing" เพื่อแสดงสถานะการเล่น
  circleDiv.classList.toggle("playing");
});

// เพิ่มเหตุการณ์เมื่อเสียงเล่นเสร็จ
audio.addEventListener("ended", function () {
  circleDiv.classList.remove("playing"); // ลบคลาส "playing" เมื่อเสียงเล่นเสร็จ
});
window.onload = function () {
  // ตรวจสอบว่ามี hash fragment ใน URL หรือไม่
  if (window.location.hash === "") {
    // หากไม่มี hash fragment ให้เลื่อนหน้าไปที่ด้านบนสุด
    window.scrollTo(0, 0);
  }

  // เมื่อผู้ใช้ scroll หน้าจอ
  window.onscroll = function () {
    // ถ้าผู้ใช้ scroll ลงมากกว่า 300px แสดงปุ่ม Scroll to Top
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
      document.getElementById("scrollToTopBtn").style.display = "none";
    }
  };
};

// เมื่อคลิกที่ปุ่ม Scroll to Top
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  window.scrollTo(0, 0);
}
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(
    'div[id^="profile"], div[id^="project"], div[id^="support"], div[id^="contact"]'
  );
  const navLinks = document.querySelectorAll(".nav_links li a");

  sections.forEach(function (section, index) {
    const top = section.offsetTop;
    const height = section.clientHeight;
    const navLink = navLinks[index];

    if (window.scrollY >= top && window.scrollY < top + height) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
});
let boxes = document.querySelectorAll(".box");

// สร้าง IntersectionObserver
let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      // entry.isIntersecting เป็น true เมื่อ .box ปรากฎในหน้าจอ
      if (entry.isIntersecting) {
        loadBars();
        // เมื่อเรียกใช้งานแล้ว ลบ observer เพื่อไม่ต้องตรวจสอบต่อ
        observer.disconnect();
      }
    });
  },
  { threshold: 0.5 }
); // threshold คือสัดส่วนของ .box ที่ต้องปรากฎในหน้าจอเพื่อให้เรียกใช้งาน

// เลือก .box ทั้งหมดและลงทะเบียนให้กับ IntersectionObserver
boxes.forEach((box) => {
  observer.observe(box);
});

function loadBars() {
  boxes.forEach((box) => {
    let line = box.querySelector(".line");
    let increasingPercentage = box.querySelector(".increasing_percentage");
    let totalPercentage = box.querySelector(".total_percentage");

    let targetPercentage = parseInt(totalPercentage.innerHTML);

    let p = 0;
    let myInterval = setInterval(() => {
      p++;
      line.style.width = p + "%";
      increasingPercentage.innerHTML = p + "%";
      if (p === targetPercentage) {
        clearInterval(myInterval);
        totalPercentage.style.display = "none";
      }
    }, 25);
  });
}
var typed = new Typed(".element", {
  strings: ["Frontend Developer", "Software Engineer", "DevOps"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
