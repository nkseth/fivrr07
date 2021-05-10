import React from 'react';
import logo from '../public/images/logo.png'
import Link from 'next/link'


const Menubar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top ">
            <div className="container ">

                <Link className="navbar-brand" href="/">

                    <img src={logo} style={{ width: '100px' }}
                        alt="Picture of the author"
                    />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarNav">
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', }} className="d-flex justify-content-center justify-content-lg-end">
                        <div className="text-white w-90 d-flex flex-column   flex-lg-row justify-content-between ml-auto">


                            <Link href="/" className="nav-linki" >Home</Link>

                            <Link href="/mot" >MOT</Link>



                            <Link href="/Salesandsales" >Sales and sales</Link>



                            <Link href="/vehicleRepairs" > Repairs</Link>


                            <Link href="/vehiclemaintenance" > Maintenance</Link>

                            <Link href="/TyreService" >Tyre Service</Link>
                            <Link href="#contact" >Contact Us</Link>
                        </div>
                    </div>

                    {/*<ul className="social-icon ml-lg-3">
                        <li><Link href="https://fb.com/tooplate" className="fa fa-facebook"></Link></li>
                        <li><Link href="#" className="fa fa-twitter"></Link></li>
                        <li><Link href="#" className="fa fa-instagram"></Link></li>
    </ul>*/}
                </div>

            </div>
        </nav>
    );
}

export default Menubar;