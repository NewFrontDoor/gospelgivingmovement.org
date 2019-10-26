import React, { Component } from 'react';

import {getFromDrupalAPI} from '../../../utils/fetchFromDrupal7';

class PodcastEpisodesTable extends Component {
  constructor() {
    super();
    this.state = {
      episodes: null
    }
  }

  componentWillMount() {
    var that = this;

    getFromDrupalAPI('podcast_api', function (data) {
      that.setState({ episodes: data });
      console.log(data)
    });
  }


  render() {
    var episodes;
    if (!this.state.episodes) {
      episodes = <tr><td>Loading, please wait.</td></tr>;
    }
    else {
       episodes = this.state.episodes.map(episode => {
        return (
          <tr>
             <td dangerouslySetInnerHTML={{__html: episode.node_title}}></td>
             <td dangerouslySetInnerHTML={{__html: episode.speaker}}></td>
             <td><a href={episode.url} target="_blank" rel="noreferrer noopener"><i className="fa fa-download"></i></a></td>
          </tr>
        )
      });
    }

    return (
     <table className="podcast-table">
         <thead>
             <th>Episode Title</th>
             <th>Speaker(s)</th>
             <th></th>
         </thead>
     <tbody>{episodes}</tbody>
     </table>
    );
  }
}

export default PodcastEpisodesTable;
