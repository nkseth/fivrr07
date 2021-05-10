import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import { Container, Carousel, Image } from 'react-bootstrap'
import Footer from '../comporents/footer';
import Herosection from '../comporents/herosection';
import Menubar from '../comporents/menubar'
import img1 from "../public/images/APK.jpg"

import img2 from '../public/images/Werkplaats.jpg'
import img3 from '../public/images/Onderhoud.jpg'
import img4 from '../public/images/Bandenservice.jpg'
import img5 from '../public/images/Scooterservice.jpg'
import img6 from '../public/images/Reparaties.jpg'

import AOS from 'aos';
import Contact from '../comporents/contact';

const Subpages = (props) => {
    useEffect(() => {
        AOS.init();
    }, []);

    const [data, setdata] = useState([
        {
            id: "mot",
            title: 'MOT inspection ',
            tag: "Pick up/Bring service +- 10km-Reliable and Honest Advice-Personal Service",
            about: "As an independent car company, TvD Autoservice is engaged in the purchase, sale and maintenance of new and use cars for both individuals and business customers. In our workshop you can go for MOinspections, maintenance and other repairs.",
            imageid: img1
        },


    ])



    return (<>

        <Head>
            <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
                crossorigin="anonymous"></script>

            <link rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css"
                integrity="sha384-wESLQ85D6gbsF459vf1CiZ2+rr+CsxRY0RpiF1tLlQpDnAgg6rwdsUF1+Ics2bni"
                crossorigin="anonymous"></link>

            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
        </Head>

        <Menubar />

        {data.map((item, i) => {

            return (
                <>
                    <section className="hero d-flex flex-column justify-content-center align-items-center" id="home"
                        style={{ backgroundImage: `url(${item.imageid})` }}
                    >

                        <div className="bg-overlay " style={{ opacity: '0.7' }}></div>

                        <div className="container">
                            <div className="row">

                                <div className="col-lg-8 col-md-10 mx-auto col-12">
                                    <div className="hero-text mt-5 text-center">

                                        <h6 data-aos="fade-up" data-aos-delay="300" className="text-white">{item.tag}</h6>

                                        <h1 className="text-white" data-aos="fade-up" data-aos-delay="500">{item.title}</h1>



                                        <a href="#about" className="btn custom-btn bordered mt-3" data-aos="fade-up" data-aos-delay="700">Our Services</a>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className="about section" id="about">
                        <div className="container">
                            <div className="row">

                                <div className="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
                                    <h2 className="mb-4" data-aos="fade-up" data-aos-delay="300">Who are we?</h2>

                                    <p data-aos="fade-up" data-aos-delay="400" style={{ fontSize: "1rem" }}>{item.about}</p>


                                    <br />
                                    <a rel="nofollow" href="/apk" target="_parent" style={{ fontSize: "1rem" }} className="btn custom-btn bordered mt-3">
                                        CONTACT US NOW</a>

                                </div>

                                <div className=" col-md-6 " data-aos="fade-up" data-aos-delay="700">
                                    <img className="fluid" src={item.imageid} style={{
                                        width: "100%", height: '100%',

                                        maxHeight: '60vh', objectFit: 'cover'
                                    }} />
                                </div>


                            </div>
                        </div>

                    </section>
                </>
            )
        })}

        <Contact />

        <Footer />
    </>);
}

export default Subpages;