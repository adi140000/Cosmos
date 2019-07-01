import React, { Component } from 'react';
import axios from 'axios';

class Remove extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            tourists: [],
            activeTourists: [],
            input: false,
        }
    }   

    componentWillMount = async () => {
        const tourists = await axios.get(`http://localhost:3500/tourists`);
        const { data } = tourists;
        this.setState({
            tourists: data,
        })

    }

    componentDidUpdate = () => {
        const { input, data } = this.state;
        if (input) {
            this.findTourist(data);

        }

    }
    handleData = e => {
        const { value } = e.target;
        this.setState({
            data: value,
            input: true,
        });

    }



    findTourist = data => {
        const { tourists } = this.state;
        if (data === '') {
            this.setState({
                input: false,
                activeTourists: [],
            })
        } else {
            data = data.replace(/\s/g, '').toUpperCase();
            const activeTourists = tourists.filter(({ id_tourist, name, surname }) => {
                const dataTourist = (name + surname).toUpperCase();
                return dataTourist.includes(data);
            })
            this.setState({
                input: false,
                activeTourists
            })
        }



    }

    removeTourist = async e => {

        let { id } = e.target;
        id = parseInt(id);
        console.log(id);
        const response = await axios.get(`http://localhost:3500/removeTourist?id=${id}`);
        if (response.data) {
            const { tourists } = this.state;
            const arr = tourists.filter(({ id_tourist }) => !(id_tourist === id));
            this.setState({
                tourists: arr,
                input: true
            })
        }
    }

    render() {
        const { data, activeTourists } = this.state;
        const showActiveTourists = activeTourists.map(({ id_tourist, name, surname }) => <div key={id_tourist} onClick={this.removeTourist} className='result__tourists'>{name} {surname}<button id={id_tourist} className='result__tourists__btn btn'>Remove</button></div>);
        return (
            <section className='main__section'>
                <section className='formFill' id='formRemove' onSubmit={this.sendData}>
                    <div className='formFill__title'>Find Tourist:</div>
                    <div className='formFill__option option_line'><label htmlFor='data'>Name and Surname : </label><input id='data' onChange={this.handleData} value={data} className='option__txt' /></div>
                    <section className='formFill__result'>
                        <div className='result__desc'>Result:</div>
                        {showActiveTourists}
                    </section>

                </section>
            </section >
        );
    }
}

export default Remove;