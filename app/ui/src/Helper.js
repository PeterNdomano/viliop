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
      title: 'Current Project',
      parent: 'project',
    },
    // {
    //   id: 'new_project',
    //   title: 'New or Reopen Project',
    //   parent: 'project',
    // },
    {
      id: 'new_window',
      title: 'New Window / Project',
      parent: 'project',
    },
    {
      id: 'export_project',
      title: 'Export Project',
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

export function getReportingMenuOptions() {
  return ([
    {
      id: 'view',
      title: 'View Report',
      parent: 'reporting',
    },
    {
      id: 'edit',
      title: 'Edit Report',
      parent: 'reporting',
    },
    {
      id: 'export',
      title: 'Export Report',
      parent: 'reporting',
    },

  ])
}



export function sanitizePathString (string) {
  return string;
}

export function getInlineLoader(color="var(--secondaryColor)", width="30px", height="30px") {
  return (
    <TailSpin
      color={color}
      width={width}
      height={height}
      wrapperStyle={{
        position: "absolute",
        width:"auto",
        height: "auto",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
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
      msg = (typeof msg === 'object') ? JSON.stringify(msg, null, 2) : msg;
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
      msg = (typeof msg === 'object') ? JSON.stringify(msg, null, 2) : msg;
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
      msg = (typeof msg === 'object') ? JSON.stringify(msg, null, 2) : msg;
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
      msg = (typeof msg === 'object') ? JSON.stringify(msg, null, 2) : msg;
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

function escapeHtml(unsafe){
  if(typeof unsafe === 'string') {
    return unsafe
       .replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;")
       .replace(/'/g, "&#039;");
  }
  else {
    return unsafe;
  }
}
