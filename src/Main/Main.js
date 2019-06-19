import React from 'react';

const Main = () => {
    return (
        <main className='main'>
            <section className='main__section ' ></section>
            <section className='main__section section_description' >
                <div className='section_description__title'>Lorem ipsum dolor sit amet</div>
                <div className='section_description__desc'>Vivamus at ipsum nec odio elementum congue nec non orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi tincidunt fringilla nibh sit amet imperdiet. Aliquam vitae nibh et turpis accumsan varius sed ac mi. Nunc scelerisque nulla vitae sapien iaculis, fringilla placerat risus dapibus. In tempor odio lacus, eget suscipit libero iaculis in. Aenean lectus dui, convallis et ultricies vel, suscipit eget libero.</div>
            </section>
            <section className='main__section' id='ticket'></section>
        </main>);
}

export default Main;