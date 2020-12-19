import React from 'react'
import Emoji from 'react-emoji-render'
import useThemeContext from '../hooks/themeContext'

function RepoCard({ repository }) {
  const { style } = useThemeContext()
  const primaryLanguage =
    repository.primaryLanguage === null
      ? { name: 'Markdown', color: '#ededed' }
      : repository.primaryLanguage
  const langStyle = {
    backgroundColor:
      primaryLanguage.color === null ? '#ededed' : primaryLanguage.color,
  }
  return (
    <div
      className={`github-component height-full text-left ${
        style === 'dark' ? 'box-shadow' : 'border border-gray-light'
      } bg-white rounded-1 p-3`}
    >
      <div className="d-flex flex-justify-between flex-items-start mb-1">
        <h1 className="f4 lh-condensed mb-1">
          <a rel="noreferrer" target="_blank" href={repository.url}>
            <span className="text-normal">{repository.owner.login} /</span>
            {repository.name}
          </a>
        </h1>
      </div>
      <div className="text-gray mb-2 ws-normal">
        <Emoji text={repository.description || ''} />
      </div>
      <div className="d-flex f6 mb-0">
        <span className="d-inline-block mr-3">
          <span className="repo-language-color mr-1" style={langStyle} />
          <span itemProp="programmingLanguage">{primaryLanguage.name}</span>
        </span>
        <a href={repository.url} className="d-inline-flex link-gray mr-4">
          <img
            src={'/octicon-star.svg'}
            alt="octicon-star"
            width="14"
            height="16"
            className={'mr-1'}
          />
          {repository.stargazers.totalCount}
        </a>
        <a href={repository.url} className="d-inline-flex link-gray mr-4">
          <img
            src={'/octicon-repo-fork.svg'}
            alt="octicon-repo-fork"
            width="16"
            height="16"
            className={'mr-1'}
          />
          {repository.forkCount}
        </a>
      </div>
    </div>
  )
}

export default RepoCard
