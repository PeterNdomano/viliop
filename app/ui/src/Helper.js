import { toast } from 'react-toastify';

export function tellUser(msg){
  toast(msg, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export function getProjectMenuOptions() {
  return ([
    {
      id: 'current_project',
      title: 'Project',
      parent: 'project',
    },
    {
      id: 'new_project',
      title: 'New Project',
      parent: 'project',
    },
    {
      id: 'save_project',
      title: 'Save Project',
      parent: 'project',
    },
    {
      id: 'save_project_as',
      title: 'Save Project As...',
      parent: 'project',
    },
  ])
}

export function getToolsMenuOptions() {
  return ([
    {
      id: 'metasploit',
      title: 'Metasploit',
      parent: 'tools',
    },
    {
      id: 'nmap',
      title: 'NMAP',
      parent: 'tools',
    },
    {
      id: 'sql_dump',
      title: 'SQL Dump',
      parent: 'tools',
    },
  ])
}

export function sanitizePathString (string) {
  return string;
}
