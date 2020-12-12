import React from 'react'

import { ThumbnailContainer } from '../thumbnail-container'
import { ThumbnailItem } from '../thumbnail-item'

export const Contents = ({ posts, category }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const refinedPosts = React.useMemo(() =>
    posts.filter(
      ({ node }) => category === 'All' || node.frontmatter.category === category
    )
  )

  return (
    <ThumbnailContainer>
      {refinedPosts.map(({ node }, index) => (
        <ThumbnailItem node={node} key={`item_${index}`} />
      ))}
    </ThumbnailContainer>
  )
}
