import React from 'react'
import sanitizeHtml from 'sanitize-html'
import { useStaticQuery, graphql } from 'gatsby'
import useThemeContext from '../hooks/themeContext'

export const AboutMe = () => {
  const { style } = useThemeContext()
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "about me" } } }
        ) {
          edges {
            node {
              id
              html
            }
          }
        }
      }
    `
  )
  return (
    <div className="mb-6">
      <h2 className={`${style === 'dark' ? 'text-white ' : ''}mb-4`}>
        About Me
      </h2>
      {edges.map(edge => (
        <article
          key={edge.node.id}
          style={{ color: style === 'dark' ? 'white' : 'black' }}
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(edge.node.html, {
              allowedAttributes: {
                h1: ['class'],
              },
            }),
          }}
          className="markdown-body entry-content container-lg"
        />
      ))}
    </div>
  )
}
