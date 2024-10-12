document.addEventListener('click', function (event) {
    var target = event.target;
    var hrefValue = target.getAttribute('href');
    if (target.tagName === 'A' && hrefValue && hrefValue.startsWith('#')) {
        event.preventDefault(); // ป้องกันการเลื่อนหน้าเว็บ

        var targetId = hrefValue.substring(1); // นำ # ออก เพื่อให้ได้ ID ที่ถูกต้อง
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
            // ทำสิ่งที่คุณต้องการทำที่นี่
            // เช่น การแสดงข้อมูล, เปิด/ปิดกล่อง, เลื่อนไปยังส่วนที่ต้องการ, ฯลฯ
            console.log('Link to ' + targetId + ' clicked, but prevented default action.');
            // ตัวอย่าง: scroll ไปยัง element ที่มี ID เป็น targetId
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});