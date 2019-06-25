import React, { Component } from 'react';
import axios from 'axios';

class Remove extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ' ',
            tourists: [],
        }
    }

    componentWillMount = async () => {
        const tourists = await axios.get(`http://localhost:3500/tourists`);
        const { data } = tourists;
        this.setState({
            tourists: data,
        })

    }

    handleData = e => {
        const { value } = e.target;
        this.setState({
            data: value,
        })
    }

    


    render() {
        const { data } = this.state;
        return (
            <section className='main__section'>
                <form className='formFill' id='formRemove' onSubmit={this.sendData}>
                    <div className='formFill__title'>Find Tourist:</div>
                    <div className='formFill__option option_line'><label htmlFor='data'>Name and Surname : </label><input id='data' onChange={this.handleData} value={data} className='option__txt' /></div>
                    <section className='formFill__result'>
                        <div className='result__desc'>Result:</div>
                    </section>

                </form>
            </section >
        );
    }
}

export default Remove;