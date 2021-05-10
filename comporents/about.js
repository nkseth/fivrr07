import React from 'react';
import team from '../public/images/team.jpg'

const About = () => {
    return (<section className="about section" id="about">
        <div className="container">
            <div className="row">

                <div className="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
                    <h2 className="mb-4" data-aos="fade-up" data-aos-delay="300">Who are we?</h2>

                    <p data-aos="fade-up" data-aos-delay="400" style={{ fontSize: "1rem" }}>As an independent car company,
                    TvD Autoservice is engaged in the purchase, sale and maintenance of new and used
                    cars for both individuals and business customers. In our workshop you can go for MOT
                      inspections, maintenance and other repairs.</p>

                    <p data-aos="fade-up" data-aos-delay="500" style={{ fontSize: "1rem" }} >Based on his hobby, Twan van Doormaal
                    started his first car company in Hilvarenbeek in August 2016 with his father in the barn.
                    He started alone in the workshop, but now his car company is ready for a new step: together
                    with fellow entrepreneur Glenn from eye4clean they are now located at a new location
                    in Diessen right next to the Peut Julianastraat 52c petrol station, Diessen.
                    </p>
                    <br />
                    <a rel="nofollow" href="/apk" target="_parent" style={{ fontSize: "1rem" }} className="btn custom-btn bordered mt-3">
                        VIEW OUR SERVICES</a>

                </div>

                <div className=" col-md-6 " data-aos="fade-up" data-aos-delay="700">
                    <img className="fluid" src={team} style={{ width: "100%", height: '100%' }} />
                </div>


            </div>
        </div>

    </section>
    );
}

export default About;