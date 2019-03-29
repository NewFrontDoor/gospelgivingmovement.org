import React from 'react';
import afesLogo from '../../../images/afes.png';
import cbfLogo from '../../../images/cbf.png';

export default () => (
    <section id="support">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h2 className="headerPink">SUPPORT</h2>
                    <hr className="hrPink" />
                    <div className="row mrgn-50-top">
                        <div className="col-sm-3">
                            <div className="ministryLogoContainer"><img src={afesLogo} alt="" className="img img-responsive" /></div>
                        </div>
                        <div className="col-sm-9">
                            <p className="mrgn-40-top"> To support AFES Ministry in Tasmania visit: <a href="http://support.afes.org.au" target="_blank" rel="noreferrer noopener">support.afes.org.au</a></p>
                        </div>
                    </div>
                    <div className="row mrgn-50-top">
                        <div className="col-sm-3">
                            <div className="ministryLogoContainer"><img src={cbfLogo} alt="" className="img img-responsive" /></div>
                        </div>
                        <div className="col-sm-9">
                            <p className="mrgn-40-top"> To support City Bible Forum in Tasmania visit: <a href="http://reaching.city/support" target="_blank" rel="noreferrer noopener">reaching.city/support</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
