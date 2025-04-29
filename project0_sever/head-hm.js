document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const sideMenu = document.querySelector('.side-menu');
  const closeBtn = document.querySelector('.close-btn');

  menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });

  // 사이드 메뉴 서브메뉴 토글
  const sideMenuItems = document.querySelectorAll('.side-menu-item > a');
  sideMenuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = item.parentElement;
      parent.classList.toggle('active');
    });
  });
});
