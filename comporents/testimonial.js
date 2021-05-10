import { data } from 'jquery';
import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap'



const Testimonial = () => {
    const [data, setdata] = useState([{
        name: "jaku roy",

        review: "If Shai Rezniks TDD videos don't convince you to add automated testinyour code, I don't know what will.This was the very best explanation o frameworks for brginners that I've ever seen.",

    },
    {
        name: "jaku roy",

        review: "If Shai Rezniks TDD videos don't convince you to add automated testinyour code, I don't know what will.This was the very best explanation o frameworks for brginners that I've ever seen.",

    },
    {
        name: "jaku roy",

        review: "If Shai Rezniks TDD videos don't convince you to add automated testinyour code, I don't know what will.This was the very best explanation o frameworks for brginners that I've ever seen.",

    }
    ])
    return (

        <section style={{ backgroundColor: 'black' }}>
            <Container  >


                <Carousel>
                    {data.map((item) => {
                        return (

                            <Carousel.Item  >

                                <div id="demo" className="carousel slide rounded shadow mt-5 mb-5" data-ride="carousel">


                                    <Carousel.Caption>
                                        <div className="carousel-caption">
                                            <p className='text-white'>{item.review}</p> <img src="https://i.imgur.com/lE89Aey.jpg" />
                                            <div id="image-caption">{item.name}</div>

                                        </div>
                                    </Carousel.Caption>





                                </div>
                            </Carousel.Item>
                        )
                    })}


                </Carousel>
            </Container>
        </section>


    );
};

export default Testimonial



