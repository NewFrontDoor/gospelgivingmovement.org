import React from 'react';
import NickAndJane from '../../../images/NickAndJane.jpg';

export default () => (
  <section id="testimony">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h2 className="headerPink">NICK & JANE’S STORY</h2>
          <hr className="hrPink" />
          <div className="col-sm-4 testimony-img text-center hideNotXS">
            <img src={NickAndJane} alt="" className="img img-responsive" />
          </div>
          <div className="col-sm-8 mrgn-40-top">
            <p>
              “We are strong advocates for Christians being good stewards as well as being generous with finances. We understand God’s word teaches giving is a Christian duty; that finances are a blessing from God and He loves joyful givers with generous hearts. While we don’t see ourselves as gifted evangelists, we recognise that we can serve God by financially and prayerfully assisting other ministries as a means of glorifying God.
          </p>

            <p>
              “We are passionate about the strategic aspect that giving to university ministry presents. That is, being able to reach young adults at a time when they are exploring and open to new ideas — and this is especially true of international student ministry, with the added element that students will likely return to their homeland having heard the gospel and share the good news there.”
          </p>

            <p>
              NICK AND JANE PETERSON LAUNCESTON, TAS
          </p>
          </div>
          <div className="col-sm-4 testimony-img text-center hideWhenXS">
            <img src={NickAndJane} alt="" className="img img-responsive" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
