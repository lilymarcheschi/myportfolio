import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

class About extends React.Component {
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
                            <section className="content">
                                <div className="main-content">

                                    <div style={{}}>
                                        <img style={{ maxWidth: "400px" }} src="./lily2.jpg" />
                                    </div>
                                    <div>
                                        <p>
                                            Originally from San Francisco, CA, mezzo-soprano Olivia Cosío has been hailed as a "formidable talent, with a large, sure voice...and a charismatic, even striking,
                                            stage presence" (San Francisco Classical Voice). She is currently a
                                            Master of Music degree student at The Juilliard School, studying with Elizabeth Bishop.
                                    </p>
                                        <p>
                                            This upcoming season, Ms. Cosío makes two house debuts: as Rosina in Il Barbiere di Siviglia with Opera Columbus and as a Gerdine Young Artist with Opera Theater of St. Louis. Ms. Cosío will take part in an AMOC* (A Modern Opera Company) workshop of a new piece by Matthew Aucoin, and will appear with the New York Festival of Song (NYFOS),
                                            led by Steve Blier, for their “Cubans in Paris” program as part of the NYFOS@Juilliard residency.
                                            This will be her second appearance with NYFOS this season, the first having been the “Ports of Call” program in Orient, NY.
                                    </p>
                                    </div>

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

                        <div className="about-wrapper" style={{ width: "100%", margin: 0 }}>
                            <div className="title-area">
                                <h1 className="name-header" style={{ fontSize: "35px" }}>
                                    Lily Marcheschi
                            </h1>
                            </div>
                            <section className="content">
                                <div className="main-content" style={{ flexDirection: "column", alignItems: "center", }}>

                                    <div style={{ marginBottom: "24px" }}>
                                        <img style={{ maxWidth: "300px" }} src="./lily2.jpg" />
                                    </div>
                                    <div style={{ padding: "0 7em", fontSize: "0.8em" }}>
                                        <p>
                                            Originally from San Francisco, CA, mezzo-soprano Olivia Cosío has been hailed as a "formidable talent, with a large, sure voice...and a charismatic, even striking,
                                            stage presence" (San Francisco Classical Voice). She is currently a
                                            Master of Music degree student at The Juilliard School, studying with Elizabeth Bishop.
                                    </p>
                                        <p>
                                            This upcoming season, Ms. Cosío makes two house debuts: as Rosina in Il Barbiere di Siviglia with Opera Columbus and as a Gerdine Young Artist with Opera Theater of St. Louis. Ms. Cosío will take part in an AMOC* (A Modern Opera Company) workshop of a new piece by Matthew Aucoin, and will appear with the New York Festival of Song (NYFOS),
                                            led by Steve Blier, for their “Cubans in Paris” program as part of the NYFOS@Juilliard residency.
                                            This will be her second appearance with NYFOS this season, the first having been the “Ports of Call” program in Orient, NY.
                                    </p>
                                    </div>

                                </div>
                            </section>
                        </div>

                    </>
                }

            </>
        )
    }
}

export default About;