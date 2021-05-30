import React, { FC, useEffect } from 'react'
import classes from './hello-web.module.scss'
import logo from './logo.svg'


type THelloProps = {}


export const Hello: FC<THelloProps> = (props) => {
  useEffect(() => {
    console.log('Hello web effect')
  })
  return (
    <header className={classes['App-header']}>
      <span>location.origin: { window.location.origin }</span>
      <img src={logo} className={classes['App-logo']} alt="logo" />
      <p>
        Edit <code>packages/app-web/src/App.tsx</code> and save to reload.
      </p>
      <a
        className={classes['App-link']}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  )
}
