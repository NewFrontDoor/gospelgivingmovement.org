import React from 'react';
import AppleIcon from '../../../images/Apple_Podcast_Icon.png';

export default () => (
    <section id="podcast">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h2 className="headerPink">BE INSPIRED, STAY UP TO DATE</h2>
                    <hr className="hrPink" />
                    <p>
                        Our monthly podcast shares ideas, inspiration and encouragement for gospel giving.
                    </p>
                    <div className="apple-logo text-center">
                        <a href="http://feeds.feedburner.com/GospelGivingMovement" target="_blank" rel="noreferrer noopener"><img src={AppleIcon} alt="" className="img img-responsive" /></a>
                    </div>


                </div>
            </div>
        </div>
    </section>
);
