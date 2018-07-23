import React, { Component } from 'react'
import _ from 'lodash'
import YTSearch from 'youtube-api-search'
import Header from './components/Header'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import Footer from './components/Footer'

const API_KEY = 'AIzaSyBo6XecGpkAR6QlaPY3ZkcaPPZoO8-du8Y'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null,
    }
    this.videoSearch('')
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div>
        <Header
          videoSearch={videoSearch}
        />
        <div className="VideoBody">
          <VideoDetail
            video={this.state.selectedVideo}
          />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
        <Footer />
      </div>
    )
  }
}
