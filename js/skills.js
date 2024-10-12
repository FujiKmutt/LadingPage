let boxes = document.querySelectorAll(".box");

// สร้าง IntersectionObserver
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // entry.isIntersecting เป็น true เมื่อ .box ปรากฎในหน้าจอ
    if (entry.isIntersecting) {
      loadBars();
      // เมื่อเรียกใช้งานแล้ว ลบ observer เพื่อไม่ต้องตรวจสอบต่อ
      observer.disconnect();
    }
  });
}, { threshold: 0.5 }); // threshold คือสัดส่วนของ .box ที่ต้องปรากฎในหน้าจอเพื่อให้เรียกใช้งาน

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
