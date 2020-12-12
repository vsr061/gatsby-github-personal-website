import React from 'react'
import { ButtonOutline } from '@primer/components'

export const Item = ({ title, category, selectCategory }) => (
  <li
    className="item"
    role="tab"
    aria-selected={category === title ? 'true' : 'false'}
  >
    <ButtonOutline
      fontSize={'13px'}
      onClick={() => selectCategory(title)}
      variant="medium"
      className={category === title ? 'item-selected' : ''}
    >
      {title}
    </ButtonOutline>
  </li>
)
