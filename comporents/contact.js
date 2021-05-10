import React, { useState } from 'react';
const Contact = () => {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [message, setmessage] = useState()
    const namehandler = (e) => {
        setname(e.target.value)
    }
    const emailhandler = (e) => {
        setemail(e.target.value)
    }
    const messagehandler = (e) => {
        setmessage(e.target.value)
    }

    const onSubmit = () => {

    }

    return (<section className="contact section" id="contact">
        <div className="container">
            <div className="row">

                <div className="ml-auto col-lg-5 col-md-6 col-12">


                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScfGeorDdZaf1SFt4bbakUnWOUoaJpU-jbqz3SRb7w1A6pfMw/viewform?embedded=true" marginHeight={0} marginWidth={0} width={500} height={800} frameBorder={0}>Loading…</iframe>


                </div>

                <div className="mx-auto mt-4 mt-lg-0 mt-md-0 col-lg-5 col-md-6 col-12">
                    <h2 className="mb-4" data-aos="fade-up" data-aos-delay="600">Where you can <span>find us</span></h2>

                    <p data-aos="fade-up" data-aos-delay="800"><i className="fa fa-map-marker mr-1"></i> 120-240 Rio de Janeiro - State of Rio de Janeiro, Brazil</p>

                    <div className="google-map" data-aos="fade-up" data-aos-delay="900">
                        <iframe src="https://maps.google.com/maps?q=Av.+Lúcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="1920" height="250" frameborder="0" style={{ border: "0" }} allowfullscreen=""></iframe>
                    </div>
                </div>

            </div>
        </div>
    </section>);
}

export default Contact;