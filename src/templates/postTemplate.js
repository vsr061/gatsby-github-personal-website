import Octicon, { ChevronLeft } from '@primer/octicons-react'
import { graphql, Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import MastHead from '../components/mastHead'
import { formatPostDate } from '../components/postCard'
import useThemeContext from '../hooks/themeContext'
import useMobileContext from '../components/mobileContext'

const PostTemplate = ({ data }) => {
  const { style } = useThemeContext()
  const { width } = useMobileContext()
  const post = data.markdownRemark
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
                    <Link
                      to="/blogs"
                      className={`d-flex flex-items-center ${style === 'dark' &&
                        'text-white'}`}
                    >
                      <Octicon
                        icon={ChevronLeft}
                        size={16}
                        verticalAlign="middle"
                        ariaLabel="Blogs"
                        className="mr-2"
                      />
                      Blogs
                    </Link>
                  </span>
                </p>
                <h1 className="f00-light lh-condensed">
                  {post.frontmatter.title}
                </h1>
                <p
                  className={`${
                    style === 'dark' ? 'text-white' : 'text-gray'
                  } mb-5`}
                >
                  Published {formatPostDate(`${post.fields.postDate}`)}
                </p>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        postDate
      }
    }
  }
`
export default PostTemplate
