import React from 'react';
import MikeyImg from '../../../images/Mikey.jpg';

export default () => (
    <section id="mission-trips">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h2 className="headerPink">SHORT-TERM MISSION TRIPS</h2>
                    <hr className="hrPink" />
                    <div className="col-sm-4 img-center-border-50 text-center">
                        <img src={MikeyImg} alt="" className="img img-responsive" />
                    </div>
                    <div className="col-sm-8 mrgn-40-top">
                        <p>
                            A great way to understand the ministry better and contribute in a more practical manner is to join us on the ground during one of our busy ministry seasons, or even in a quieter season. Please get in touch to enquire about how you or a group from your church might be able to help us during O Week, the start of Semester 2, or even visit at another time during the university year.
                    </p>
                    </div>


                </div>
            </div>
        </div>
    </section>
);
