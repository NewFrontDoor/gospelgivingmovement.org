import React from 'react';
import splash from '../../../images/backgrounds/website-header.png'

export default () => (
  <header id="fullwidth" className="homepage" style={{ 'backgroundImage': `url('${splash}')`, 'backgroundPosition': '51%' }}>
    <div className="header-text white text-center text-uppercase">
      {/*<h1 className="titlebg pddn-20-top pddn-20-btm">Gospel Giving Movement</h1>*/}
    </div>
    <div className="arrow text-center"> <i className="fa fa-angle-down fa-4x"></i> </div>
  </header>
)
