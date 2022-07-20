import React from 'react'
import Layout from 'components/Layout/Layout'
import './header.scss'

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <Layout>
      <header>
        <div className='logo'>
          <span>S</span>
          <strong>V</strong>
        </div>
        <nav>
          <a href='#contact'>Contact</a>
        </nav>
      </header>
    </Layout>
  )
}

export default Header
