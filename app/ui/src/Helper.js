import { toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import $ from 'jquery';

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
  if(typeof console != "undefined") {
    if(typeof console.log != 'undefined') {
      console.vlog = console.log;
    }
    else {
      console.vlog = () => {};
    }

    console.log = (msg) => {
      console.vlog(msg);
      let time = new Date().toLocaleTimeString();
      let label = 'msg';
      $('#cTab').append(
        '<h6>'
        +'<span class="logTime">'+time+'</span>'
        +'<span class="logLabel">&nbsp;['+label+']&nbsp;:&nbsp;</span>'
        +'<span class="logMsg">'+escapeHtml(msg)+'</span>'+
        '</h6>'
      );
    }

    console.error = (msg) => {
      console.vlog(msg);
      let time = new Date().toLocaleTimeString();
      let label = 'error';
      $('#cTab').append(
        '<h6>'
        +'<span class="logTime">'+time+'</span>'
        +'<span class="logLabel">&nbsp;['+label+']&nbsp;:&nbsp;</span>'
        +'<span class="logMsg text-danger">'+escapeHtml(msg)+'</span>'+
        '</h6>'
      );
    }

    console.info = (msg) => {
      console.vlog(msg);
      let time = new Date().toLocaleTimeString();
      let label = 'info';
      $('#cTab').append(
        '<h6>'
        +'<span class="logTime">'+time+'</span>'
        +'<span class="logLabel">&nbsp;['+label+']&nbsp;:&nbsp;</span>'
        +'<span class="logMsg text-info">'+escapeHtml(msg)+'</span>'+
        '</h6>'
      );
    }

    console.debug = (msg) => {
      console.vlog(msg);
      let time = new Date().toLocaleTimeString();
      let label = 'debug';
      $('#cTab').append(
        '<h6>'
        +'<span class="logTime">'+time+'</span>'
        +'<span class="logLabel">&nbsp;['+label+']&nbsp;:&nbsp;</span>'
        +'<span class="logMsg text-success">'+escapeHtml(msg)+'</span>'+
        '</h6>'
      );
    }
    $('#cTab').scrollTop($('#cTab')[0].scrollHeight);
  }
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
    logData(item); //logging data
    if(item === "SCAN OUTPUT:"){
      scanOutputLine = i;
    }
  });

  if(scanOutputLine >= 0){
    scanData = result.slice(scanOutputLine + 1);
  }
  else{
    scanData = ["Scanner Could not complete this task, check the log for more details"]
  }

  let output = {
    consoleData: result,
    scanData,
  }

  //then show data to the logger

  return output;

}

function escapeHtml(unsafe)
{
  return unsafe
     .replace(/&/g, "&amp;")
     .replace(/</g, "&lt;")
     .replace(/>/g, "&gt;")
     .replace(/"/g, "&quot;")
     .replace(/'/g, "&#039;");
 }
