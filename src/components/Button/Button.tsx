import React from 'react'
import './button.scss'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
}

const Button = (props: ButtonProps) => {
  const { children, className, href } = props

  let _className = 'btn btn-primary'
  if (className) {
    _className += ` ${className}`
  }

  if (href) {
    _className += ` btn-link`
    return (
      <a className={_className} href={href} role='button'>
        {children}
      </a>
    )
  }

  return <button className={_className}>{children}</button>
}

export default Button
