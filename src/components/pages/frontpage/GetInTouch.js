import React from 'react';
import GGMLogo from '../../../images/GGM-500px.png'

export default () => (
    <section id="get-in-touch">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h2 className="headerPink">GET IN TOUCH</h2>
                    <hr className="hrPink" />


                    <div className="row">

                        <div className="col-sm-9">
                            <p className="mrgn-50-top"> <p>
                                The Gospel Giving Movement is an initiative of the Hobart ministries of AFES and City Bible Forum.
                    </p>
                                <p>
                                    <a href="mailto:info@gospelgivingmovement">info@gospelgivingmovement</a>
                                </p></p>
                        </div>
                        <div className="col-sm-3 text-center maxHeight350">

                            <img src={GGMLogo} alt="" className="img img-responsive" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section >
);
