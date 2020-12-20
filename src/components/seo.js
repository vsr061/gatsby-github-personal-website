/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO() {
  const {
    github: {
      viewer: { name },
    },
  } = useStaticQuery(
    graphql`
      query {
        github {
          viewer {
            name
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={name}
    >
      <meta
        name="description"
        content="Viraj Rane: Analyst - Software Development at Goldman Sachs"
      />
      <meta
        name="keywords"
        content="Experience Manager,Content Management,AEM,Adobe AEM,Adobe Experience Manager,Adobe Experience Cloud,Profile,Blogs,Portfolio"
      />
      <meta property="og:image" content="https://virajrane.com/avatar.jfif" />
      <meta property="og:site_name" content="Viraj Rane" />
      <meta property="og:type" content="profile" />
      <meta property="og:title" content="Viraj Rane: Portfolio & Blogs" />
      <meta property="og:url" content="https://virajrane.com/" />
      <meta
        property="og:description"
        content="Viraj Rane: Analyst - Software Development at Goldman Sachs"
      />
      <meta
        name="twitter:image:src"
        content="https://virajrane.com/avatar.jfif"
      />
      <meta name="twitter:site" content="Viraj Rane" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Viraj Rane: Portfolio & Blogs" />
      <meta
        name="twitter:description"
        content="Viraj Rane: Analyst - Software Development at Goldman Sachs"
      />
      <meta name="theme-color" content="#000000" />
      <link
        data-rh="true"
        rel="apple-touch-icon"
        sizes="152x152"
        href="https://virajrane.com/avatar_152X152.jpg"
      />
      <link
        data-rh="true"
        rel="apple-touch-icon"
        sizes="120x120"
        href="https://virajrane.com/avatar_120X120.jpg"
      />
      <link
        data-rh="true"
        rel="apple-touch-icon"
        sizes="76x76"
        href="https://virajrane.com/avatar_76X76.jpg"
      />
      <link
        data-rh="true"
        rel="apple-touch-icon"
        sizes="60x60"
        href="https://virajrane.com/avatar_60X60.jpg"
      />
      <link
        data-rh="true"
        rel="mask-icon"
        href="https://virajrane.com/avatar_500X500.jpg"
      />
    </Helmet>
  )
}

export default SEO
