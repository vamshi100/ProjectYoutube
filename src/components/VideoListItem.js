import React from 'react'

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url

  return (
    <li
      onClick={() => { onVideoSelect(video) }}
      className="VideoList_group"
    >
      <div className="VideoList_media">
        <div className="VideoList_mediaLeft">
          <img
            alt="presentation"
            className="Media_image"
            src={imageUrl}
          />
          <div
            className="Media_heading"
          >
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem
