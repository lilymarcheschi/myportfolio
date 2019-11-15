import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

//components
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Media from './components/Media';
import Contact from './components/Contact';


function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/bio">
                        <About />
                    </Route>
                    <Route exact path="/gallery">
                        <Gallery />
                    </Route>
                    <Route exact path="/media">
                        <Media />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>

                </Switch>
            </div >
        </Router>
    );
}

export default App;
