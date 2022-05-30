import React from 'react'

const VideoPlayer = ({url}) => {
    return (
<link rel="stylesheet" href="//cdn.flowplayer.com/releases/native/3/stable/style/flowplayer.css">
<script src="//cdn.flowplayer.com/releases/native/3/stable/flowplayer.min.js"></script>
<!-- Optional plugins -->
<script src="//cdn.flowplayer.com/releases/native/3/stable/plugins/hls.min.js"></script>
<div
  class="flowplayer-embed-container"
  style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width:100%;">
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    webkitAllowFullScreen mozallowfullscreen allowfullscreen
    src="{url}"
    title="0" byline="0" portrait="0"
    width="640" height="360"
    frameborder="0"
    allow="autoplay"/ >
</div>
)
}

export default VideoPlayer
