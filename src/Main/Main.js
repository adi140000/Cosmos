import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import Start from './Section/Start';
import Tourist from './Section/Tourist';
import Flight from './Section/Flight';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {

        return (
            <Router>
                <main className='main' id='main'>
                    <nav className='main__nav'>
                        <NavLink className='main__nav__part' exact to='/'>start</NavLink>
                        <NavLink className='main__nav__part' to='/tourist/'>tourist</NavLink>
                        <NavLink className='main__nav__part' to='/flight/'> flight </NavLink>
                    </nav>
                    <Route exact path="/" component={Start} />
                    <Route path="/tourist/" component={Tourist} />
                    <Route path="/flight/" component={Flight} />
                </main>
            </Router>);
    }
}

export default Main;