window.onload = function() {
    // ตรวจสอบว่ามี hash fragment ใน URL หรือไม่
    if (window.location.hash === "") {
        // หากไม่มี hash fragment ให้เลื่อนหน้าไปที่ด้านบนสุด
        window.scrollTo(0, 0);
    }

    // เมื่อผู้ใช้ scroll หน้าจอ
    window.onscroll = function() {
        // ถ้าผู้ใช้ scroll ลงมากกว่า 300px แสดงปุ่ม Scroll to Top
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
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
