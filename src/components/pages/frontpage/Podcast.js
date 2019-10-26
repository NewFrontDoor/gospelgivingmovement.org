import React from 'react';
import AppleIcon from '../../../images/Apple_Podcast_Icon.png';
import { Link } from 'react-router-dom';

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
                    <div className="apple-logo">
                        <Link to="/podcast"><img src={AppleIcon} alt="" className="podcast-img img img-responsive" /></Link>
                        
                    </div>


                </div>
            </div>
        </div>
    </section>
);
