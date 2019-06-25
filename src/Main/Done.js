import React from 'react';
import Ok from './../img/ok.png'


const Done = (props) => {    
    return (<section className='main__section'>
        <img src={Ok} alt='ok' className='main__section__ok'/>
        <div>Well Done</div>
    </section>);
}

export default Done;
