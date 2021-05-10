import React from 'react';
import apk1 from '../public/images/APK.jpg'
import apk2 from '../public/images/Werkplaats.jpg'
import apk3 from '../public/images/Onderhoud.jpg'
import apk4 from '../public/images/Bandenservice.jpg'
import apk5 from '../public/images/Scooterservice.jpg'
import apk6 from '../public/images/Reparaties.jpg'
import Link from 'next/Link'
import { useRouter } from 'next/router'
const Feature = () => {
    const router = useRouter()
    return (
        <section className="feature" id="feature">
            <div className="container">
                <div className="row">



                    <div className="col-6 col-md-4" data-aos="fade-up" onClick={() => { router.push("/mot") }}>

                        <hr />
                        <div className="profile-card-2" data-aos="fade-up"><img className="fluid" src={apk1} />
                            <div className="profile-name" data-aos="fade-up" >MOT</div>
                            <div className="profile-username" data-aos="fade-up">Fast and Reliable</div>

                        </div>
                    </div>

                    <div className="col-6 col-md-4" data-aos="fade-up" onClick={() => { router.push("/vehicleRepairs") }} >

                        <hr />
                        <div className="profile-card-2" data-aos="fade-up"><img className="fluid" src={apk2} />
                            <div className="profile-name" data-aos="fade-up" >Repairs</div>
                            <div className="profile-username" data-aos="fade-up">In the Workshop</div>

                        </div>

                    </div>

                    <div className="col-6 col-md-4" data-aos="fade-up" onClick={() => { router.push("/vehiclemaintenance") }}>

                        <hr />
                        <div className="profile-card-2" data-aos="fade-up"><img className="fluid" src={apk3} />
                            <div className="profile-name" data-aos="fade-up" >Maintenance</div>
                            <div className="profile-username" data-aos="fade-up">Just to be sure</div>

                        </div>
                    </div>

                    <div className="col-6 col-md-4" data-aos="fade-up" onClick={() => { router.push("/TyreService") }} >

                        <hr />
                        <div className="profile-card-2" data-aos="fade-up"><img className="fluid" src={apk4} />
                            <div className="profile-name" data-aos="fade-up" >Tyre Service</div>
                            <div className="profile-username" data-aos="fade-up">For each vehicle</div>

                        </div>
                    </div>


                    <div className="col-6 col-md-4" data-aos="fade-up" onClick={() => { router.push("/mot") }} >

                        <hr />
                        <div className="profile-card-2" data-aos="fade-up"><img className="fluid" src={apk5} />
                            <div className="profile-name" data-aos="fade-up" >Scooter Service</div>
                            <div className="profile-username" data-aos="fade-up">Quick Treatment</div>

                        </div>
                    </div>

                    <div className="col-6 col-md-4  " data-aos="fade-up" onClick={() => { router.push("/mot") }} >

                        <hr />
                        <div className="profile-card-2" data-aos="fade-up"><img className="fluid" src={apk6} />
                            <div className="profile-name" data-aos="fade-up" >Sale & Sales </div>
                            <div className="profile-username" data-aos="fade-up">Used Cars</div>

                        </div>
                    </div>


                </div>

            </div>

        </section>



    );
}

export default Feature;