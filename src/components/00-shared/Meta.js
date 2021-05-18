import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { graphql, useStaticQuery } from "gatsby"

function Meta({ title, description, image, robots, url }) {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            lang
          }
        }
        file(relativePath: { eq: "image-logo.png" }) {
          childImageSharp {
            fixed {
              defaultImage: src
            }
          }
        }
      }
    `
  )

  const { defaultTitle, defaultDescription, siteUrl, lang } = site.siteMetadata

  const { defaultImage } = file.childImageSharp.fixed

  // Remove leading double slashes (//) from contentful source link received by graphql query
  let modifiedImageUrl
  if (image) {
    modifiedImageUrl = `${siteUrl}${image}`
  }

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: modifiedImageUrl || `${siteUrl}${defaultImage}`,
    siteUrl: url || siteUrl,
    robots: robots || "all",
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.robots && <meta name="robots" content={seo.robots} />}

      {seo.siteUrl && <meta property="og:url" content={seo.siteUrl} />}

      {seo.title && (
        <meta property="og:title" content={`${seo.title} | Abacum`} />
      )}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {seo.title && (
        <meta name="twitter:title" content={`${seo.title} | Abacum`} />
      )}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

Meta.defaultProps = {
  title: null,
  description: null,
  image: null,
}

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  robots: PropTypes.string,
}

export default Meta
