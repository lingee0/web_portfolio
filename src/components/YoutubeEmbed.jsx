import React, { Component } from 'react';
import YouTube from 'react-youtube';

// https://www.youtube.com/watch?v=-_pgcFQ0l64
// https://youtu.be/-_pgcFQ0l64
// https://www.youtube.com/watch?v=-_pgcFQ0l64&list=PLEsfXFp6DpzQbwYDx1zgcKJ4tzyWFaESK
class YoutubeEmbed extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  _onStateChange(event) {
    console.log(event);
  }

  render() {
    const { videoId } = this.props;
    const opts = {
      width: '500',
      playerVars: {
        host: 'https://www.youtube.com',
        autoplay: 0,
        origin: window.location.origin,
      },
    };
    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this._onReady}
        onStateChange={this._onStateChange}
      />
    );
  }
}

export default YoutubeEmbed;
