import React, { FC, useEffect } from 'react'
import icon from './icon.svg'


type THelloProps = {}


export const Hello: FC<THelloProps> = (props) => {
  useEffect(() => {
    console.log('Hello desktop effect')
  })
  return (
    <div>
      <div>location.origin: {window.location.origin}</div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  )
}
