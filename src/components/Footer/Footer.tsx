import React from 'react'
import './footer.scss'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from 'components/Layout/Layout'
import InstagramIcon from '../../assets/svgs/instagram.svg'
import FacebookIcon from 'assets/svgs/facebook.svg'
import LinkedinIcon from 'assets/svgs/linkedin.svg'

console.log(InstagramIcon)

const Footer = () => {
  return (
    <footer>
      <Layout>
        <div className='footer--content'>
          <div className='footer--title-container'>
            <div className='footer--content-avatar'>
              <StaticImage
                src='../../images/shirosh.jpg'
                alt='shir voldman avatar'
                layout='fullWidth'
                quality={100}
              />
            </div>
            <h4 id='contact' className='footer--title'>
              Let’s design something new together
            </h4>
          </div>
          <div className='footer--details'>
            <a className='footer--details-email' href='mailto:shirv3@gmail.com'>
              shirv3@gmail.com
            </a>
            <div className='footer--details-social'>
              <a href='' target='__blank'>
                <LinkedinIcon className='linkedin-icon' />
              </a>
              <a href='' target='__blank'>
                <InstagramIcon className='instagram-icon' />
              </a>
              <a href='' target='__blank'>
                <FacebookIcon className='facebook-icon' />
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  )
}

export default Footer
