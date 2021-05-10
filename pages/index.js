import Head from 'next/head'
import { useEffect } from 'react'

import Menubar from '../comporents/menubar'
import Herosection from '../comporents/herosection'
import AOS from 'aos';
import Feature from '../comporents/feature'
import About from '../comporents/about'
import Contact from '../comporents/contact'
import Footer from '../comporents/footer'
import Testimonial from '../comporents/testimonial'



export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (


    <>
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
        <script
          src="https://code.jquery.com/jquery-2.2.4.min.js"
          integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
          crossorigin="anonymous"></script>
        <script src="https://smtpjs.com/v3/smtp.js"></script>



      </Head>


      <Menubar />
      <Herosection />
      <Feature />
      <About />
      <Testimonial />
      <Contact />
      <Footer />



    </>
  )
}
