import React from 'react'
import useThemeContext from '../hooks/themeContext'
import { Heading } from '@primer/components'
import TechSkills from '../data/technical_skills.yml'
import sanitizeHtml from 'sanitize-html'

const TechnicalSkills = () => {
  const { style } = useThemeContext()
  return (
    <>
      <Heading
        mb={2}
        fontSize={4}
        style={{ color: style === 'dark' ? 'white' : 'black' }}
      >
        Technical Skills
      </Heading>
      <div className="d-flex flex-wrap gutter-condensed mb-4">
        {TechSkills.technical_skills.map((skill, i) => (
          <div key={i} className="position-relative m-1">
            <a
              rel="noreferrer"
              target="_blank"
              href={skill.web_url}
              className="github-component hover-grow height-full d-inline-block no-underline text-center rounded-1"
            >
              <img
                src={
                  style === 'dark'
                    ? skill.image_url_white
                    : skill.image_url_black
                }
                width="64"
                height="64"
                className="mx-0 rounded-1"
                alt={skill.name}
              />
              <p
                style={{ color: style === 'dark' ? 'white' : 'black' }}
                className="m-auto mb-0 mt-1"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(skill.name),
                }}
              />
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
export default TechnicalSkills
