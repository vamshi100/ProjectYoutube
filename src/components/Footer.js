import React, { Component } from 'react'

import { facebook } from './assets/Icon/svgs/facebook'
import { github } from './assets/Icon/svgs/github'
import { gmail } from './assets/Icon/svgs/gmail'
import { linkedin } from './assets/Icon/svgs/linkedin'
import { phone } from './assets/Icon/svgs/phone'

export default class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="Menulinks" >
          <a
            className="Footer_Menulink"
            href="https://www.facebook.com/anireddy.vamshi"
          >
            {facebook}
          </a>
          <a
            className="Footer_Menulink"
            href="https://github.com/vamshi100"
          >
            {github}
          </a>
          <a
            className="Footer_Menulink"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vamshianireddy@gmail.com"
          >
            {gmail}
          </a>
          <a
            className="Footer_Menulink"
            href="https://www.linkedin.com/in/venkatesh-vamshi-anireddy-5a964b70/"
          >
            {linkedin}
          </a>
          <a
            className="Footer_Menulink"
            href="tel:7329979502"
          >
            {phone}
          </a>
        </div>
      </footer>
    )
  }
}
