import React from 'react'

const VideoPlayer = ({url}) => {
    return (

<iframe id="istream" src="{url}" class="responsive-stream" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
    
    )
}

export default VideoPlayer
