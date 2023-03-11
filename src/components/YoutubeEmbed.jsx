import React, { Component } from 'react';
import YouTube from 'react-youtube';

// https://www.youtube.com/watch?v=-_pgcFQ0l64
// https://youtu.be/-_pgcFQ0l64
// https://www.youtube.com/watch?v=-_pgcFQ0l64&list=PLEsfXFp6DpzQbwYDx1zgcKJ4tzyWFaESK
class YoutubeEmbed extends Component {
  render() {
    const opts = {
      //   height: '390',
      width: '500',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        host: 'https://www.youtube.com',
        autoplay: 0,
        origin: window.location.origin,
      },
    };
    const { videoId } = this.props;
    return <YouTube videoId={videoId} opts={opts} onReady={this.onReady} />;
  }
}

export default YoutubeEmbed;
