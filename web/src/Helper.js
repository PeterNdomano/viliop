import toast from 'siiimple-toast';

export const MAIN_URL = '/github_projects/viliop/api/';

export function tellUser(msg, type = 's'){
  toast.message(msg);
}
