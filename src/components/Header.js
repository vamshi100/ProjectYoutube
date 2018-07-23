import React, { Component } from 'react'
import { playButton } from './assets/Icon/svgs/playButton'
import SearchBar from './SearchBar'

export default class Header extends Component {
  render() {
    const { videoSearch } = this.props
    return (
      <header className="Header" >
        <div className="Header_Logo" >
          <a
            className="projectYoutubeLogo_Link"
            href="/"
          >
            <span className="Logo">
              {playButton}
            </span>
          </a>
        </div>
        <SearchBar
          onSearchTermChange={videoSearch}
        />
      </header>
    )
  }
}
