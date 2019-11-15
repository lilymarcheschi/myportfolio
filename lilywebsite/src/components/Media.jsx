import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

// const MobileNav = (modalActive) => {
//     console.log(modalActie)
//     // this.state.active ?
//     //     <ul className="nav-item-menu" style={{ textAlign: "center" }}>
//     //         <li> <Link to={'/'}>Home</Link> </li>
//     //         <li> <Link to={'/bio'}>About</Link> </li>
//     //         <li> <Link to={'/media'}>Media</Link> </li>
//     //         <li> <Link to={'/gallery'}>Gallery</Link> </li>
//     //         <li> <Link to={'/contact'}>Contact</Link> </li>
//     //     </ul> :
//     //     <ul></ul>
//     return (
//         <>
//             {modalActive ?
//                 <ul className="nav-item-menu" style={{ textAlign: "center" }}>
//                     <li> <Link to={'/'}>Home</Link> </li>
//                     <li> <Link to={'/bio'}>About</Link> </li>
//                     <li> <Link to={'/media'}>Media</Link> </li>
//                     <li> <Link to={'/gallery'}>Gallery</Link> </li>
//                     <li> <Link to={'/contact'}>Contact</Link> </li>
//                 </ul>
//                 :
//                 <ul></ul>

//             }

//         </>
//     );
// };



class Media extends React.Component {
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
                            <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <iframe src='https://www.youtube.com/embed/RzZmo1q0cWs'
                                    frameBorder='0'
                                    allow='autoplay; encrypted-media'
                                    allowFullScreen
                                    title='video'
                                    width="80%"
                                    height="500px"
                                    position="absolute"
                                />
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

                        <div className="about-wrapper" style={{ width: "100%", margin: 0 }}>
                            <div className="title-area" >
                                <h1 className="name-header" style={{ fontSize: "35px" }}>
                                    Lily Marcheschi
                                </h1>
                            </div>
                            <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <iframe src='https://www.youtube.com/embed/RzZmo1q0cWs'
                                    frameBorder='0'
                                    allow='autoplay; encrypted-media'
                                    allowFullScreen
                                    title='video'
                                    width="96%"
                                    height="200px"
                                    position="absolute"
                                />
                            </section>
                        </div>
                    </>

                }
            </>
        )
    }
}

export default Media;