import React from 'react'
import './layout.scss'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  const { children } = props

  return <div className='app-container'>{children}</div>
}

export default Layout
