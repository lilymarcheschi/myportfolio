import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

class Home extends React.Component {
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
                    <div className="img-container" >
                        <div className="bg-overlay">
                        </div>

                        <div className="nav-item-container">



                            <Nav />


                        </div>

                        <div className="name-div">

                            <h1 className="name-h1">Lily Marcheschi</h1>
                            <h1 className="name-h1" style={{ fontSize: "23px", color: 'rgba(255,255,255,0.95)', marginTop: "0px" }}>Actor | Singer | Dancer | Model </h1>

                        </div>
                    </div>
                    :

                    <div className="img-container" style={{ backgroundPosition: "61%" }}>
                        <div className="bg-overlay">
                        </div>

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

                        <div id="name-div-home" className="name-div">

                            <h1 className="name-h1" style={{ fontSize: "35px" }}>Lily Marcheschi</h1>
                            <h1 className="name-h1" style={{ fontSize: "16px", color: 'rgba(255,255,255,0.95)', marginTop: '0' }}>Actor | Singer | Dancer | Model </h1>

                        </div>
                    </div>


                }
            </>
        )
    }
}

export default Home;