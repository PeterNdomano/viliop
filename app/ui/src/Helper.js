import { toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';

export function tellUser(msg, id = "warning"){
  if(id === "success"){
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  else if(id === "warning"){
    toast.warn(msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  else{
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

export function getInlineLoader() {
  return (
    <TailSpin
      color="var(--secondaryColor)"
      width="30px"
      height="30px"
    />
  );
}

export function sanitizeUrl( url ) {
  return url;
}

export function setupConsole() {
  //this will setup console window
}

export function logData(error) {
  console.log(error);
}

export function sanitizeMarkdown( markdown ){
  return markdown;
}

export function processScanResult(result) {
  //result is array
  let scanOutputLine = -1;
  let scanData = null;
  result.forEach((item, i) => {
    if(item === "SCAN OUTPUT:"){
      scanOutputLine = i;
      return;
    }
  });

  if(scanOutputLine >= 0){
    scanData = result.slice(scanOutputLine);
  }

  let output = {
    consoleData: result,
    scanData,
  }

  return output;

}
