import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Link } from 'gatsby'

const IndexPage = () => {
    return (
        <div>
            <Header />
            <h1>Hello</h1>
            <h2> I'm Khanh, a full-stack developer living in Beautiful Boston.</h2>
            <p>Need a developer? <Link to="/contact">Contact Me</Link></p>

            <Footer />

        </div>
    )
}

export default IndexPage