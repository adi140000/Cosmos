import React, { Component } from 'react';
import { NavLink, Redirect, withRouter } from "react-router-dom";
import axios from 'axios';




class Add extends Component {
    state = {

        name: '',
        surname: '',
        sex: '',
        country: '',
        note: '',
        data_of_birth: '1990-01-01',
        err: ''

    };

    handelData = (e) => {

        const { id, value } = e.target;
        console.log(id, value);
        this.setState({
            [id]: value,
        })

    }

    sendData = async e => {
        e.preventDefault();
        const issue = await axios.post(`http://localhost:3500/addTourist`, this.state, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const { data } = issue;

        if (data.error) {
            this.setState({
                err: data.error,
            })
        } else {
            this.setState({
                err: '',
            })
        }
        if (!this.state.err) {
            this.props.history.push('/done');
        }

    }

    render() {
        const { name, surname, sex, country, note, data_of_birth, err } = this.state;

        return (
            <section className='main__section'>
                <form className='formFill' id='formAdd' onSubmit={this.sendData}>
                    <div className='formFill__title'>Fill Tourist data :</div>
                    <div className='formFill__option option_line'><label>Name: </label><input id='name' onChange={this.handelData} value={name} className='option__txt' /></div>
                    <div className='formFill__option option_line'><label>Surname: </label><input id='surname' onChange={this.handelData} value={surname} className='option__txt' /></div>
                    <div className='formFill__option option_line'><label>Sex: </label><input id='sex' onChange={this.handelData} value={sex} className='option__txt' /></div>
                    <div className='formFill__option option_line'><label>Country: </label><input id='country' onChange={this.handelData} value={country} className='option__txt' /></div>
                    <div className='formFill__option option_line'><label>Note: </label><textarea id='note' onChange={this.handelData} value={note} rows="6" className='option__txt'></textarea></div>
                    <div className='formFill__option option_line'><label>Data brith:</label><input id='data_of_birth' onChange={this.handelData} value={data_of_birth} type='date' className='option__txt' /></div>
                    <div className='formFill__err'>{err}</div>
                    <button form='formAdd' type='submit' className='formFill__btn btn' >Send</button>
                </form>
            </section >);
    }
}

export default withRouter(Add);