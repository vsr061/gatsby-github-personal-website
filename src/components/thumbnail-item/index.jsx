import React from 'react'
import { Link } from 'gatsby'

import './index.scss'
import { formatPostDate } from '../postCard'
import useThemeContext from '../../hooks/themeContext'
import sanitizeHtml from 'sanitize-html'

export const ThumbnailItem = ({ node }) => {
  const { style } = useThemeContext()
  return (
    <div
      className={`thumbnail visible height-full text-left ${
        style === 'dark' ? 'box-shadow' : 'border border - gray - light'
      } bg-white rounded-1 p-3`}
    >
      <div className="d-flex flex-justify-between flex-items-start mb-1">
        <div className="f4 lh-condensed mb-1">
          <Link to={node.fields.slug}>
            <h3 className={'mb-4'}>
              {node.frontmatter.title || node.fields.slug}
            </h3>
          </Link>
          <p
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(node.excerpt),
            }}
          />
        </div>
      </div>

      <div className="text-gray mb-2 ws-normal">
        {formatPostDate(`${node.fields.postDate}`)}
      </div>
    </div>
  )
}
