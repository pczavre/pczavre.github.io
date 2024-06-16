import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { MailOutlineOutlined } from '@material-ui/icons'
import { about, contact } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='__blank'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='__blank'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='__blank'
              >
                <LinkedInIcon />
              </a>
            )}

            
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                aria-label='email'
                className='link link--icon'
                target='__blank'
              >
                <MailOutlineOutlined />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
