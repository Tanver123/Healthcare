/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const Contact = () => {
    return (
        <section>
            <div className="p-5 text-center">
                <h2 className='text-secondary'>Contact</h2>
                <strong><b className='text-info'>HOME</b> 	&nbsp;	&nbsp;	&nbsp; /	&nbsp;	&nbsp;	&nbsp;Contact</strong>
            </div>

            <div className="container mb-5">
                <div className="py-4 text-center">
                    <p className='text-info'>Call to Action</p>
                    <h2 className='text-secondary'><b>Make a Request</b></h2>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <input type="name" className="form-control py-3" placeholder="Enter Your Name" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <input type="email" className="form-control  py-3" placeholder="Enter Your Email" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <input type="phone" className="form-control  py-3" placeholder="Enter Your Number" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <input type="text" className="form-control  py-3" placeholder="Enter Your Address" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <textarea className="form-control" placeholder='Enter Message' rows="10"></textarea>
                    </div>
                </div>

            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            />
        </section>
    );
};

export default Contact;