import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import Start from './Section/Start';
import Tourist from './Section/Tourist/Tourist';
import Flight from './Section/Flight';
import AddTourist from './Section/Tourist/Add';
import Done from './Done';
import Error from './Error';





class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            change: '',
        }
    }

    resetChange = () => {        
        this.setState({
            change: '',
        })
    }

    handleChange = (e) => {
        console.log(e);
        const { id } = e.target;
        this.setState({
            change: id,
        })

    }


    render() {
        const { change } = this.state;

        return (
            <Router >
                <main className='main' id='main'>
                    <nav className='main__nav'>
                        <NavLink className='main__nav__part' exact to='/'>start</NavLink>
                        <NavLink className='main__nav__part' to='/tourist/'>tourist</NavLink>
                        <NavLink className='main__nav__part' to='/flight/'> flight </NavLink>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Start} />
                        <Route path='/done' component={Done}/>
                        <Route exact path="/tourist/" render={() => <Tourist resetChange={this.resetChange} change={change} handleChange={this.handleChange} />} />
                        <Route path="/tourist/add" render={() => change ? <AddTourist change={change} /> : <Error />} />
                        <Route path="/flight/" component={Flight} />
                        <Route path="/flight/add" render={() => change ? <Tourist change={change} /> : <div>404</div>} />
                        
                    </Switch>
                </main>
            </Router>);
    }
}

export default Main;