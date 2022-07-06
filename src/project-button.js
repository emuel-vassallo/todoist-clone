import { Editor } from './editor.js';

const ProjectButton = (() => {
  const getProjectIcon = () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('project-icon');
    svg.setAttribute('viewBox', '0 0 24 24');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M12 7a5 5 0 110 10 5 5 0 010-10z');
    path.setAttribute('fill', 'currentColor');
    svg.appendChild(path);
    return svg;
  };

  const getNewProjectButton = (projectIcon, projectName) => {
    const newProjectButton = document.createElement('button');
    const newProjectNameSpan = document.createElement('span');

    newProjectButton.classList.add(
      'project-button',
      'sidebar-button',
      'tab-link'
    );
    newProjectNameSpan.classList.add('project-name');

    const projectNameLowerCase = projectName.toLowerCase();

    newProjectButton.dataset.tabName = projectNameLowerCase;
    newProjectNameSpan.textContent = projectName;

    newProjectButton.append(projectIcon, newProjectNameSpan);
    return newProjectButton;
  };

  const getProjectButtonListItem = (projectButton) => {
    const listItem = document.createElement('li');
    listItem.appendChild(projectButton);
    return listItem;
  };

  const addButtonEventListener = (projectButton) => {
    const tabName = projectButton.dataset.tabName;
    projectButton.addEventListener('click', () =>
      Editor.changeContent(tabName)
    );
  };

  const addProjectButtonToSidebarList = (projectButton) => {
    const projectsList = document.querySelector('#projects-list');
    const listItem = getProjectButtonListItem(projectButton);
    projectsList.appendChild(listItem);
  };

  const addProjectButton = (projectName) => {
    const icon = getProjectIcon();
    const newButton = getNewProjectButton(icon, projectName);
    addProjectButtonToSidebarList(newButton);
    addButtonEventListener(newButton);
  };

  return { addProjectButton };
})();

export { ProjectButton };