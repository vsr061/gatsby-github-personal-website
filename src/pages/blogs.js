import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import _ from 'lodash'

import Layout from '../components/layout'
import MastHead from '../components/mastHead'
import useThemeContext from '../hooks/themeContext'
import { Category } from '../components/categories'
import Octicon, { ChevronLeft } from '@primer/octicons-react'
import { Contents } from '../components/contents'
import useMobileContext from '../components/mobileContext'

function Blogs() {
  const { style } = useThemeContext()
  const [category, setCategory] = React.useState('All')
  const { width } = useMobileContext()
  const selectCategory = category => {
    setCategory(category)
  }
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: {
            frontmatter: { type: { eq: "blog" }, published: { eq: true } }
          }
          sort: { order: DESC, fields: fields___postDate }
        ) {
          edges {
            node {
              frontmatter {
                title
                category
              }
              fields {
                slug
                postDate
              }
              html
              excerpt
            }
          }
        }
      }
    `
  )
  const categories = _.uniq(edges.map(({ node }) => node.frontmatter.category))
  return (
    <Layout>
      <div
        className={`d-md-flex ${style !== 'dark' ? 'border-md-bottom' : ''}`}
      >
        <div
          className={`flex-self-stretch ${
            style === 'dark'
              ? 'bg-gray-dark'
              : 'border-md-right border-gray-light bg-white'
          } col-md-5 col-lg-4 col-xl-3 px-4 px-md-6 px-lg-7 py-5`}
          style={{ display: width <= 760 ? 'none' : 'block' }}
        >
          <MastHead metaData={true} />
        </div>

        <div
          className="col-md-7 col-lg-8 col-xl-9 px-4 py-5 px-lg-7 border-top border-md-top-0"
          style={{
            backgroundColor: style === 'dark' ? '#2f363d' : '#fafbfc',
          }}
        >
          <div className="mx-auto" style={{ maxWidth: '900px' }}>
            <div className={`f4 ${style === 'dark' ? 'text-white' : ''} mb-6`}>
              <div className={`f4 ${style === 'dark' && 'text-white'}`}>
                <p className="f5">
                  <span
                    className="d-flex flex-items-center"
                    style={{ color: '#0366d6' }}
                  >
                    <Octicon
                      icon={ChevronLeft}
                      size={16}
                      verticalAlign="middle"
                      ariaLabel="Home"
                      className={`${style === 'dark' ? 'text-white ' : ''}mr-2`}
                    />
                    <Link
                      className={style === 'dark' ? 'text-white' : ''}
                      to="/"
                    >
                      Home
                    </Link>
                  </span>
                </p>
                <h2 className={style === 'dark' ? 'text-white' : ''}>Blogs</h2>
                <p
                  className={`${
                    style === 'dark' ? 'text-white ' : ''
                  }f4 mb-4 text-gray`}
                >
                  Filter blogs from categories
                </p>
                <div className="mb-4">
                  <Category
                    categories={categories}
                    category={category}
                    selectCategory={selectCategory}
                  />
                </div>
                <Contents posts={edges} category={category} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Blogs
