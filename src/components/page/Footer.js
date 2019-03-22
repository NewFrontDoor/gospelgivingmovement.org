/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Scroll from 'react-scroll';
import { Link } from 'react-router-dom';

const Footer = ({ isFrontPage }) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-9 col-lg-9">
          <ul className="list-inline">
            <li>
              {isFrontPage ?
                <Scroll.Link className="customLinkColor" activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500}>About</Scroll.Link> :
                <Link className="customLinkColor" to="/#about">About</Link>
              }
            </li>
            <li>
              {isFrontPage ?
                <Scroll.Link className="customLinkColor" activeClass="active" to="testimony" spy={true} smooth={true} offset={-50} duration={500}>Testimony</Scroll.Link> :
                <Link className="customLinkColor" to="/#testimony">Testimony</Link>
              }
            </li>
            <li>
              {isFrontPage ?
                <Scroll.Link className="customLinkColor" activeClass="active" to="podcast" spy={true} smooth={true} offset={-50} duration={500}>Podcast</Scroll.Link> :
                <Link className="customLinkColor" to="/#podcast">Podcast</Link>
              }
            </li>
            <li>
              {isFrontPage ?
                <Scroll.Link className="customLinkColor" activeClass="active" to="events" spy={true} smooth={true} offset={-50} duration={500}>Events</Scroll.Link> :
                <Link className="customLinkColor" to="/#events">Events</Link>
              }
            </li>

            <li>
              {isFrontPage ?
                <Scroll.Link className="customLinkColor" activeClass="active" to="mission-trips" spy={true} smooth={true} offset={-50} duration={500}>Short-Term Mission Trips</Scroll.Link> :
                <Link className="customLinkColor" to="/#mission-trips">Short-Term Mission Trips</Link>
              }
            </li>
            <li>
              {isFrontPage ?
                <Scroll.Link className="customLinkColor" activeClass="active" to="location" spy={true} smooth={true} offset={-50} duration={500}>Get In Touch</Scroll.Link> :
                <Link className="customLinkColor" to="/#get-in-touch">Get In Touch</Link>
              }
            </li>
            <li>
              {isFrontPage ?
                <Scroll.Link className="customLinkColor" activeClass="active" to="location" spy={true} smooth={true} offset={-50} duration={500}>Support</Scroll.Link> :
                <Link className="customLinkColor" to="/#support">Support</Link>
              }
            </li>
          </ul>
          <p className="copyright">Copyright <i className="fa fa-copyright"></i> 2019 - Gospel Giving Movement</p>
          <p className="copyright">Website by <a className="customLinkColor" href="https://newfrontdoor.org/" target="_blank" rel="noreferrer noopener">New Front Door</a></p>
        </div>
        <div className="col-sm-4 col-md-3 col-lg-3">
          <ul className="list-inline social-buttons">
            <li> <a className="fa fa-facebook fa-lg" href="https://www.facebook.com/NewFrontDoorIT/" target="_blank" rel="noreferrer noopener"></a> </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export const FrontPageFooter = () => (
  <Footer isFrontPage={true} />
)

export const OtherPageFooter = () => (
  <Footer isFrontPage={false} />
)
/* eslint-enable jsx-a11y/anchor-has-content */
