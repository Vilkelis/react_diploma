import { useHistory } from 'react-router-dom';

let globalHistory = null;

export function GlobalHistory(props) {
  globalHistory = useHistory();   
  return null;
}

// export react-router history
export default function getHistory() {    
  return globalHistory;
}