import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata{
                    name
                }
            }
        }
    `)
    return (
        <footer>
            <p>
                Createed by {data.site.siteMetadata.name}, © 2019
            </p>
        </footer>
    )
}

export default Footer