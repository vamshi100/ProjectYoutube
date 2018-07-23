import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className="Loading"> Loading ... </div>
  }

  const videoId = video.id.videoId
  const url = `http://www.youtube.com/embed/${videoId}`

  return (
    <div className="CurrentVideoContainer">
      <div className="CurrentVideo">
        <iframe
          className="CurrentVideoContainer"
          src={url}
        />
      </div>
      <div className="VideoDetailsCard">
        <div className="VideoDetailTitle">{video.snippet.title}</div>
        <div className="VideoDetailDescription">{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail
