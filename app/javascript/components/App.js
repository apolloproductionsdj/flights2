// import React from 'react';

// const App = () => {
//     return (<div>Hello World</div>)
// }

// export default App;

import React from 'react';
import Airlines from './Airlines/Airlines';
import Airline from './Airline/Airline';

import {
    Switch,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Airlines} />
            <Route exact path="/airlines/:slug" component={Airline} />
        </Switch>
    )
}

export default App
