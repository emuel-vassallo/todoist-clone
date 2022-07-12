import { Project } from './project.js';

const Storage = (() => {
  const createEmptyProjectLists = () => {
    if (localStorage.getItem('defaultProjects')) return;
    localStorage.setItem('defaultProjects', JSON.stringify([]));
    if (localStorage.getItem('projects')) return;
    localStorage.setItem('projects', JSON.stringify([]));
  };

  const getProjects = () => {
    if (localStorage.getItem('projects') === null) return [];
    return JSON.parse(localStorage.getItem('projects'));
  };

  const getDefaultProjects = () =>
    JSON.parse(localStorage.getItem('defaultProjects'));

  const getNewProjectId = () => Object.keys(getProjects()).length;

  const updateProjectList = (newProjectList) =>
    localStorage.setItem('projects', JSON.stringify(newProjectList));

  const updateDefaultProjectList = (newProjectList) =>
    localStorage.setItem('defaultProjects', JSON.stringify(newProjectList));

  const addEmptyDefaultProjectsLists = () => {
    let defaultProjects = getDefaultProjects();
    if (defaultProjects.length > 0) return;

    const tabNames = ['Inbox', 'Today', 'Upcoming'];

    for (let i = 0; i < tabNames.length; i++) {
      const projectId = i;
      const projectName = tabNames[i];
      const tasks = [];
      const project = new Project(projectId, projectName, tasks);

      defaultProjects = [...defaultProjects, project];
    }

    updateDefaultProjectList(defaultProjects);
  };

  const addProject = (newProject) => {
    let projects = getProjects();
    const parsedNewProject = JSON.parse(JSON.stringify(newProject));
    projects = [...projects, parsedNewProject];
    updateProjectList(projects);
  };

  const removeProject = (id) => {
    let projectList = getProjects();
    projectList.splice(id, 1);
    updateProjectList(projectList);
  };

  const updateProjectIds = () => {
    const projects = getProjects();

    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      project.id = i;
    }

    updateProjectList(projects);
  };

  createEmptyProjectLists();
  addEmptyDefaultProjectsLists();

  return {
    addProject,
    getNewProjectId,
    getProjects,
    getDefaultProjects,
    removeProject,
    updateProjectIds,
  };
})();

export { Storage };
