import { render } from 'react-dom';
import { App } from './components/App';
import { firebaseConfig, app } from '../api';
app;
const rootElement = document.getElementById("root");
render(<App/>, rootElement)