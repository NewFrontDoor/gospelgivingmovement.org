import React from 'react';

import PodcastEpisodesTable from './PodcastEpisodesTable'

export default () => (
    <section id="past-talks">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title">
                        <h2 className="text-center headerPink"><span>Podcast</span></h2>
                        <p className="subtitle text-center"><a href="https://podcasts.apple.com/us/podcast/gospel-giving-movement/id1457143539?mt=2" target="_blank" rel="noopener noreferrer">Subscribe on iTunes</a></p>
                        <div className="col-xs-12">
                            <PodcastEpisodesTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section >
)