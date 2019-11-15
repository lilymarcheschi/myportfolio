import React from 'react';
import Nav from './Nav';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { Link } from 'react-router-dom';







class Gallery extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false,
            active: false
        };

        this.updatePredicate = this.updatePredicate.bind(this);
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 1200 });
    }

    handleOpen(active) {
        if (active) {
            return 'Close'
        } else {
            return 'Menu'
        }
    }

    handleActive() {
        const { active } = this.state;
        this.setState({ ...this.state, active: !active })
    }

    render() {
        const isDesktop = this.state.isDesktop;


        return (

            <>
                {isDesktop ?
                    <div className="outer-wrapper">

                        <Nav />
                        <div className="about-wrapper">
                            <div className="title-area">
                                <h1 className="name-header">
                                    Lily Marcheschi
                        </h1>
                            </div>
                            <section className="content" style={{ paddingRight: "20px" }}>
                                <div className="main-content" style={{ justifyContent: "center", position: "relative" }}>
                                    <CarouselProvider
                                        naturalSlideWidth={125}
                                        naturalSlideHeight={125}
                                        totalSlides={2}
                                        style={{
                                            width: "100%",
                                        }}

                                    >

                                        <Slider style={{ maxHeight: "700px" }}>

                                            <Slide index={1}><Image id="2" src={'./lily2.jpg'} /></Slide>
                                            <Slide index={2}><Image style={{ width: "500px", margin: "0 auto" }} id="3" src={'./model.jpg'} /></Slide>
                                        </Slider>
                                        <ButtonBack style={{
                                            position: "absolute",
                                            top: "40%",
                                            fontSize: "20px",
                                            color: "black",
                                            padding: "10px",
                                            backgroundColor: "rgba(0, 0, 0, .12)"
                                        }}>{'‹'}</ButtonBack>
                                        <ButtonNext style={{
                                            position: "absolute",
                                            top: "40%",
                                            left: "100%",
                                            fontSize: "20px",
                                            color: "black",
                                            padding: "10px",
                                            backgroundColor: "rgba(0, 0, 0, .12)"
                                        }}>{'›'}</ButtonNext>
                                    </CarouselProvider>

                                </div>
                            </section>
                        </div>
                    </div>
                    :
                    <>
                        <div className="nav-item-container">

                            <span className="nav-item-menu" onClick={() => { this.handleActive() }}>{this.handleOpen(this.state.active)}</span>

                            {this.state.active ?
                                <ul className="nav-item-menu" style={{ textAlign: "center" }}>
                                    <li> <Link to={'/'}>Home</Link> </li>
                                    <li> <Link to={'/bio'}>About</Link> </li>
                                    <li> <Link to={'/media'}>Media</Link> </li>
                                    <li> <Link to={'/gallery'}>Gallery</Link> </li>
                                    <li> <Link to={'/contact'}>Contact</Link> </li>
                                </ul> :
                                <ul></ul>
                            }


                        </div>

                        <div className="outer-wrapper">


                            <div className="about-wrapper" style={{ width: "100%" }}>
                                <div className="title-area">
                                    <h1 className="name-header" style={{ fontSize: "35px" }}>
                                        Lily Marcheschi
                            </h1>
                                </div>
                                <section className="content">
                                    <div className="main-content" style={{ justifyContent: "center", position: "relative" }}>
                                        <CarouselProvider
                                            naturalSlideWidth={125}
                                            naturalSlideHeight={125}
                                            totalSlides={2}
                                            style={{
                                                width: "100%",
                                            }}

                                        >

                                            <Slider style={{ maxHeight: "700px" }}>

                                                <Slide index={1}><Image id="2" src={'./lily2.jpg'} /></Slide>
                                                <Slide index={2}><Image style={{ width: "200px", margin: "0 auto" }} id="3" src={'./model.jpg'} /></Slide>
                                            </Slider>
                                            <ButtonBack style={{
                                                position: "absolute",
                                                top: "40%",
                                                fontSize: "20px",
                                                color: "black",
                                                padding: "10px",
                                                backgroundColor: "rgba(0, 0, 0, .12)"
                                            }}>{'‹'}</ButtonBack>
                                            <ButtonNext style={{
                                                position: "absolute",
                                                top: "40%",
                                                left: "100%",
                                                fontSize: "20px",
                                                color: "black",
                                                padding: "10px",
                                                backgroundColor: "rgba(0, 0, 0, .12)"
                                            }}>{'›'}</ButtonNext>
                                        </CarouselProvider>
                                    </div>
                                </section>
                            </div>
                        </div>


                    </>

                }
            </>

        )
    }
}

export default Gallery;