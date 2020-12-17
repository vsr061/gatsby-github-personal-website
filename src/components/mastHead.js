import {
  Avatar,
  BorderBox,
  Box,
  Heading,
  Link as PrimerLink,
  StyledOcticon,
  Dialog,
  Text,
} from '@primer/components'
import {
  Link,
  Location,
  Mail,
  MarkGithub,
  CloudDownload,
  Saved,
  DeviceMobile,
} from '@primer/octicons-react'
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby'
import Organizations from '../data/organizations.yml'
import TechnicalSkills from './technicalSkills'
import React from 'react'
import Toggle from 'react-toggle'
import styled from 'styled-components'
import { Medium, Linkedin, Twitter } from 'styled-icons/fa-brands'

import useSiteMetadata from '../hooks/siteMetaData'
import useThemeContext from '../hooks/themeContext'

const StyledHr = styled.hr`
  ${props => props.color === 'dark' && 'border-top-color: whitesmoke;'}
`
function MastHead() {
  const { layout, social } = useSiteMetadata()
  const { style, theme, setTheme } = useThemeContext()

  const [isOpen, setIsOpen] = React.useState(false)

  function onThemeChange(e) {
    const newStyle = e.target.checked ? 'dark' : 'light'
    setTheme(newStyle)
  }

  const {
    github: { viewer: user },
  } = useStaticQuery(
    graphql`
      query {
        github {
          viewer {
            name
            email
            bio
            login
            url
            avatarUrl
            isHireable
            location
            company
            followers {
              totalCount
            }
            isDeveloperProgramMember
            websiteUrl
          }
        }
      }
    `
  )

  const StackedMeta = props => (
    <Box {...props} display={[null, null, 'inline-block']} mr={3} />
  )

  const SideMeta = props => (
    <Box {...props} display={'flex'} alignItems={'center'} mb={3} />
  )

  const MetaComponent = layout === 'stacked' ? StackedMeta : SideMeta

  const {
    websiteUrl,
    login,
    email,
    avatarUrl,
    isHireable,
    name,
    location,
  } = user

  return (
    <>
      <GatsbyLink to={'/'}>
        <Avatar
          src={avatarUrl}
          alt="user-avatar"
          className="circle"
          mb={3}
          size={150}
          borderRadius={'50%'}
          maxWidth={'150px'}
        />
      </GatsbyLink>
      <Heading style={{ color: theme.iconColor }} mb={2} lh={'condensed'}>
        {name ? name : login}
        <span style={{ float: 'right' }}>
          <Toggle
            defaultChecked={style === 'dark'}
            onChange={onThemeChange}
            icons={{
              checked: (
                <img alt="dark-theme" src="/dark.png" width={16} height={16} />
              ),
              unchecked: (
                <img
                  alt="light-theme"
                  src="/light.png"
                  width={16}
                  height={16}
                />
              ),
            }}
          />
        </span>
      </Heading>
      <Box fontSize={4} mb={2}>
        <MetaComponent>
          <StyledOcticon
            color={theme.iconColor}
            icon={CloudDownload}
            size={20}
            verticalAlign="middle"
            mr={2}
            ariaLabel="Resume"
          />
          <PrimerLink
            href="/Viraj_Resume.pdf"
            rel="noreferrer"
            target="_blank"
            color={theme.iconColor}
          >
            Download Resume
          </PrimerLink>
        </MetaComponent>
        <MetaComponent>
          <StyledOcticon
            color={theme.iconColor}
            icon={Saved}
            size={20}
            verticalAlign="middle"
            mr={2}
            ariaLabel="Bookmark"
          />
          <PrimerLink
            href="#"
            color={theme.iconColor}
            onClick={() => setIsOpen(true)}
          >
            Save Contact
          </PrimerLink>
          <Dialog
            width="400px"
            isOpen={isOpen}
            onDismiss={() => setIsOpen(false)}
          >
            <Dialog.Header>Scan QR Code</Dialog.Header>
            <Box className="text-center" p={3}>
              <img
                src="/contact_qr.png"
                width="300"
                height="300"
                className="mx-0 rounded-1"
                alt="qr code"
              />
              <Text as="h3" fontWeight="bold">
                OR
              </Text>
              <PrimerLink
                href="tel:+91 9619459244"
                color="black"
                onClick={() => setIsOpen(true)}
              >
                <Text as="h3" fontWeight="bold">
                  <StyledOcticon
                    icon={DeviceMobile}
                    size={30}
                    verticalAlign="middle"
                    mr={2}
                    ariaLabel="Mobile"
                  />
                  Contact Me
                </Text>
              </PrimerLink>
            </Box>
          </Dialog>
        </MetaComponent>
        {name && (
          <MetaComponent>
            <StyledOcticon
              color={theme.iconColor}
              icon={MarkGithub}
              size={20}
              verticalAlign="middle"
              mr={2}
              ariaLabel="GitHub"
            />
            <PrimerLink
              href={`https://github.com/${login}`}
              target="_blank"
              color={theme.iconColor}
            >
              {login}
            </PrimerLink>
          </MetaComponent>
        )}
        {social.medium && (
          <PrimerLink
            href={social.medium}
            color={theme.iconColor}
            rel="noreferrer"
            target="_blank"
          >
            <Medium
              size={20}
              color={theme.iconColor}
              title={`${name}'s Medium Profile`}
            />
          </PrimerLink>
        )}
        {social.twitter && (
          <PrimerLink
            href={social.twitter}
            color={theme.iconColor}
            marginLeft={2}
            rel="noreferrer"
            target="_blank"
          >
            <Twitter
              size={20}
              color={theme.iconColor}
              title={`${name}'s Twitter Profile`}
            />
          </PrimerLink>
        )}
        {social.linkedIn && (
          <PrimerLink
            href={social.linkedIn}
            color={theme.iconColor}
            marginLeft={2}
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin
              size={20}
              color={theme.iconColor}
              title={`${name}'s LinkedIn Profile`}
            />
          </PrimerLink>
        )}
      </Box>
      <StyledHr color={style} />
      <Box mb={6} fontSize={4}>
        {Organizations.organizations.map((organization, i) => (
          <PrimerLink
            href={organization.web_url}
            rel="noreferrer"
            target="_blank"
            color={theme.iconColor}
            className="hover-grow d-inline-flex mb-3 text-black"
            key={i}
          >
            <img
              height="60"
              width="60"
              src={organization.image_url}
              alt={organization.image_url}
            />
            <span style={{ marginLeft: '8px' }}>
              {organization.designation}
              <br />
              at
              <br />
              {organization.name}
            </span>
          </PrimerLink>
        ))}
        {location && (
          <MetaComponent color={theme.iconColor}>
            <StyledOcticon
              color={theme.iconColor}
              icon={Location}
              size={20}
              verticalAlign="middle"
              mr={2}
              ariaLabel="Location"
            />
            {location}
          </MetaComponent>
        )}
        {email && (
          <MetaComponent>
            <StyledOcticon
              color={theme.iconColor}
              icon={Mail}
              size={20}
              verticalAlign="middle"
              mr={2}
              ariaLabel="email"
            />
            <PrimerLink href={`mailto:${email}`} color={theme.iconColor}>
              {email}
            </PrimerLink>
          </MetaComponent>
        )}
        {websiteUrl && (
          <MetaComponent>
            <StyledOcticon
              color={theme.iconColor}
              icon={Link}
              size={20}
              verticalAlign="middle"
              mr={2}
              ariaLabel="link"
            />
            <PrimerLink
              href={websiteUrl}
              rel="noreferrer"
              target="_blank"
              color={theme.iconColor}
            >
              {websiteUrl}
            </PrimerLink>
          </MetaComponent>
        )}
        <StyledHr color={style} />
        <Box mb={1}>
          <TechnicalSkills />
        </Box>
      </Box>
      <p style={{ color: style === 'dark' ? 'white' : 'black' }}>
        Template Credits:{' '}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/thakkaryash94"
        >
          Yash Thakkar
        </a>
      </p>
    </>
  )
}
export default MastHead
