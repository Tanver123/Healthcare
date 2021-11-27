import React from 'react';

const Testimonial = () => {
    return (
        <section className='py-5 bg-light'>
            <div className="container">
                <div className="py-4 text-center">
                    <p className='text-info'>Client Testimonials</p>
                    <h2 className='text-secondary'><b>What Our Clients Say</b></h2>
                </div>

                <div className="row">
                    <div className="col-md-6" style={{ borderLeft: '5px solid #0dcaf0' }}>
                        <div className="row">
                            <div className="col-md-3"><img src="http://metropolitanhost.com/themes/themeforest/html/docfind/assets/img/services/90x90.png" alt="" /></div>
                            <div className="col-md-9 pt-3"><h5 className='text-info'><b>Eugene Freeman</b></h5><small>Tincidunt</small></div>
                        </div>
                        <p className='text-info'>"The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli."</p>
                    </div>
                    <div className="col-md-6" style={{ borderLeft: '5px solid #0dcaf0' }}>
                        <div className="row">
                            <div className="col-md-3"><img src="http://metropolitanhost.com/themes/themeforest/html/docfind/assets/img/services/90x90-0.png" alt="" /></div>
                            <div className="col-md-9 pt-3"><h5 className='text-info'><b>Kelly Coleman</b></h5><small>Nulla Nec</small></div>
                        </div>
                        <p className='text-info'>"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;