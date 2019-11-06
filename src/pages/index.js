import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const IndexPage = () => {
    return(
        <Layout>
        <h1>Hello</h1>
            <h2> I'm Khanh, a full-stack developer living in Beautiful Boston.</h2>
            <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
}

export default IndexPage