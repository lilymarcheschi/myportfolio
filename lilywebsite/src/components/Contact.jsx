import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';



import { Button, Checkbox, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
    <Form>
        <div className="flexer" style={{ display: "flex" }}>
            <Form.Field style={{ marginRight: "10px", width: "50%" }}>
                <label>First Name</label>
                <input placeholder='First Name' />
            </Form.Field>
            <Form.Field style={{ width: "50%" }}>
                <label>Last Name</label>
                <input placeholder='Last Name' />
            </Form.Field>
        </div>
        <Form.Field >
            <label>Email Address</label>
            <input placeholder='Email Address' />
        </Form.Field>
        <Form.Field>
            <label>Subject</label>
            <input placeholder='Subject' />
        </Form.Field>
        <Form.TextArea label='Message' placeholder='Tell us more about you...' />


        <Button type='submit'>Submit</Button>

    </Form>
)


class Contact extends React.Component {
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
                                <div className="main-content" style={{ justifyContent: "center", position: "relative", justifyContent: "space-between" }}>

                                    <div className="form-container" style={{ width: "400px", }} >
                                        <div className="contact-container">
                                            <h1>CONTACT </h1>
                                        </div>
                                        <FormExampleForm />
                                    </div>

                                    <div className="form-container" style={{ width: "400px", }} >
                                        <div className="contact-container">
                                            <img style={{ width: "500px" }} src="./lily2.jpg" />
                                        </div>

                                    </div>

                                </div>
                            </section>
                        </div>
                    </div>

                    :

                    <>
                        {
                            <div className="outer-wrapper">
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


                                <div className="about-wrapper" style={{ width: "100%" }}>
                                    <div className="title-area" style={{ padding: "10px 0px" }}>
                                        <h1 className="name-header" style={{ fontSize: "36px" }}>
                                            Lily Marcheschi
                            </h1>
                                    </div>
                                    <section id="content-contact" className="content" style={{}}>
                                        <div id="contact-main-content" className="main-content" style={{ justifyContent: "center", position: "relative", justifyContent: "space-between" }}>

                                            <div className="form-container" style={{}} >
                                                <div className="contact-container">
                                                    <h1>CONTACT </h1>
                                                </div>
                                                <FormExampleForm />
                                            </div>

                                            <div id="contact-img" className="form-container" style={{ width: "400px", }} >
                                                <div className="contact-container">
                                                    <img style={{ width: "500px" }} src="./lily2.jpg" />
                                                </div>

                                            </div>

                                        </div>
                                    </section>
                                </div>
                            </div>
                        }

                    </>


                }
            </>
        )
    }
}

export default Contact;

