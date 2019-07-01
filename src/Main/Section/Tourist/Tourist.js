import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class Tourist extends Component {
    state = {
     
    }

    componentWillMount = () => {
        const { resetChange } = this.props;
        resetChange();
    }

    render() {
        const { change, handleChange } = this.props;
        return (

            <section className='main__section'>
                <form className='formFill'>

                    <div className='formFill__title'>What do you do ?</div>
                    <div className='formFill__option'><input onChange={handleChange} type='radio' name='option' id='add' className='option_input' /><label htmlFor='add' >Add</label> Tourist</div>
                    <div className='formFill__option'> <input onChange={handleChange} type='radio' name='option' id='remove' className='option_input' /><label htmlFor='remove'>Remove Tourist</label></div>
                    <div className='formFill__option'> <input onChange={handleChange} type='radio' name='option' id='edit' className='option_input' /><label htmlFor='edit'>Edit Tourist</label></div>

                    <NavLink to={change ? {
                        pathname: `/tourist/${change}`,

                    } : '/tourist'} > <button className='formFill__btn btn' >Next</button></NavLink>


                </form>
            </section >);
    }
}

export default Tourist;