import { createRoot } from 'react-dom/client';
//https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
import App from './components/App';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
