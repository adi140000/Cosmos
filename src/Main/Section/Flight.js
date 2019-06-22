import React, { Component } from 'react';

class Flight extends Component {
    state = {}
    
    componentDidMount = () => {
        console.log(this.props.change);
    }
    render() { 
        return ( <div></div>  );
    }
}
 
export default Flight;