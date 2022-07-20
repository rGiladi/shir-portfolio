import React from 'react'
import './header.scss'
import Layout from 'components/Layout/Layout'
import ContactBtn from 'assets/svgs/contact-btn.svg'

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <Layout>
      <header>
        <div className='logo'>
          <span>S</span>
          <strong>V.</strong>
        </div>
        <nav>
          <a className='contact-btn' href='#contact'>
            <ContactBtn />
            <span>Contact</span>
          </a>
        </nav>
      </header>
    </Layout>
  )
}

export default Header
