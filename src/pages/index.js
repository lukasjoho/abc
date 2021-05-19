//dependencies
import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

//styles
import "@fontsource/inter/100.css"
import "@fontsource/inter/200.css"
import "@fontsource/inter/300.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"
import "@fontsource/inter/900.css"

//components
import PageTitle from "../components/00-shared/PageTitle"
import Layout from "../layouts/Layout"
import Promo from "../components/00-shared/Promo"
import Meta from "../components/00-shared/Meta"
import Skeletons from "../components/00-shared/Skeletons"

const IndexPage = () => {
  const { imageMeta } = useStaticQuery(graphql`
    query {
      imageMeta: file(relativePath: { eq: "image-meta.jpg" }) {
        childImageSharp {
          fixed(width: 1200, quality: 90) {
            src
          }
        }
      }
    }
  `)

  return (
    <>
      <Meta
        title="Home"
        description="Abacum helps finance teams scale their companies through business insights, collaboration and automation."
        url="https://kind-ride-786754.netlify.app"
        image={imageMeta.childImageSharp.fixed.src}
      />
      <Layout>
        <PageTitle icon="office-building" text="Home" />

        <Promo />

        <Skeletons />
      </Layout>
    </>
  )
}

export default IndexPage
