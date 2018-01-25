import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Welcome from './Welcome';
import Clock from './Clock';
import Toggle from './Toggle';
import Page from './Page';
import NumberList from './NumberList';
import NameForm from './NameForm';
import Calculator from './Calculator';
import SplitPane from './SplitPane';
import SignUpDialog from './SignUpDialog';
import BasicRouting from './BasicRouting';

import registerServiceWorker from './registerServiceWorker';
const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(<div> <App /><Welcome /> <Clock /><Toggle/><Page/><NumberList numbers={numbers}/><NameForm/><Calculator/>
//   <SplitPane
//       left={
//         <Clock />
//       }
//       right={
//         <Toggle />
//       } />
// <SignUpDialog />
//
//     </div>, document.getElementById('root'));


    ReactDOM.render(<div> <BasicRouting />
        </div>, document.getElementById('root'));
registerServiceWorker();
