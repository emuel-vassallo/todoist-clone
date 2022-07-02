import { Editor } from './editor';
import { Tooltip } from './tooltip.js';

const Sidebar = (() => {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  const sidebarButtons = document.querySelectorAll('.sidebar-button');
  const editor = document.querySelector('.editor');

  const toggleProjectsVisibility = () => {
    const sidebarProjectsButton = document.querySelector(
      '.sidebar-projects-button'
    );
    const arrow = document.querySelector('.sidebar-projects-arrow-icon');

    sidebarProjectsButton.addEventListener('click', () => {
      arrow.classList.toggle('expanded');
    });
  };

  const removeSelectedClass = () => {
    for (const button of sidebarButtons) button.classList.remove('selected');
  };

  const getCapitalizedString = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const changeTabTitle = (tabName) =>
    (document.title = `${getCapitalizedString(tabName)}: Todoist`);

  const addSelectedClassOnClick = () => {
    for (const button of sidebarButtons) {
      button.addEventListener('click', () => {
        removeSelectedClass();
        button.classList.add('selected');
      });
    }
  };

  const addVisibleClass = () => {
    sidebar.classList.add('is-visible');
    Editor.addSidebarVisibleClass();
    Tooltip.changeMenuTooltipTextClose();
  };

  const removeVisibleClass = () => {
    sidebar.classList.remove('is-visible');
    Editor.removeSidebarVisibleClass();
    Tooltip.changeMenuTooltipTextOpen();
  };

  const toggleOverlayVisibility = () =>
    document.querySelector('.sidebar-overlay').classList.toggle('is-visible');

  const toggleSidebarVisibility = () => {
    const menuToggleButtons = document.querySelectorAll('.menu-button');
    for (const button of menuToggleButtons) {
      button.addEventListener('click', () => {
        sidebar.classList.toggle('is-visible');
        editor.classList.toggle('is-sidebar-visible');
        toggleOverlayVisibility();
        if (sidebar.classList.contains('is-visible')) {
          Tooltip.changeMenuTooltipTextClose();
          return;
        }
        Tooltip.changeMenuTooltipTextOpen();
      });
    }
  };

  if (window.innerWidth > 750) addVisibleClass();

  window.addEventListener('resize', () => {
    const isSidebarVisible = sidebar.classList.contains('is-visible');
    const isOverlayVisible = overlay.classList.contains('is-visible');
    const windowWidth = window.innerWidth;

    if (isSidebarVisible && isOverlayVisible && windowWidth <= 750) return;

    if (isSidebarVisible && windowWidth <= 750) {
      removeVisibleClass();
      console.log('Hidden');
      return;
    }

    if (!isSidebarVisible && windowWidth > 750) {
      addVisibleClass();
      console.log('Visible');
      return;
    }
  });

  toggleSidebarVisibility();
  toggleProjectsVisibility();
  addSelectedClassOnClick();

  return {
    changeTabTitle,
  };
})();

export { Sidebar };