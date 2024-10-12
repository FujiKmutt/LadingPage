function showTab(tabNumber) {
  // ซ่อนทุก ๆ แท็บเนื้อหา
  var tabPanes = document.querySelectorAll('.tab-pane');
  tabPanes.forEach(function (pane) {
    pane.classList.remove('show');
  });

  // แสดงแท็บที่ถูกเลือก
  var selectedTab = document.getElementById('tab' + tabNumber);
  selectedTab.classList.add('show');

  // ลบคลาส 'active' จากทุกปุ่ม
  var buttons = document.querySelectorAll('.ct-button');
  buttons.forEach(function (button) {
    button.classList.remove('active');
  });

  // เพิ่มคลาส 'active' ให้กับปุ่มที่ถูกคลิก
  var clickedButton = document.querySelector('.ct-' + tabNumber + ' .ct-button');
  clickedButton.classList.add('active');
}