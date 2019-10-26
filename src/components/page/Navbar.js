import React from 'react';
import logo from '../../images/logo/NavBarLogo.png';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';

const TycNav = ({ isFrontPage }) => (
  <Navbar collapseOnSelect fixedTop id="customnav">
    <Navbar.Header>
      <Navbar.Toggle>
      </Navbar.Toggle>
      <Navbar.Brand>
        <a href="/"><img src={logo} className="img-responsive" alt="Gospel Giving Movement" width="199" height="72" /></a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <li role="presentation">
          {isFrontPage ?
            <Scroll.Link activeClass="active" to="about" spy={true} smooth={true} offset={-85} duration={500}>About</Scroll.Link> :
            <Link to="/#about">About</Link>
          }
        </li>
        <li role="presentation">
          {isFrontPage ?
            <Scroll.Link activeClass="active" to="testimony" spy={true} smooth={true} offset={-85} duration={500}>Testimony</Scroll.Link> :
            <Link to="/#testimony">Testimony</Link>
          }
        </li>
        <li role="presentation">
          {isFrontPage ?
            <Scroll.Link activeClass="active" to="podcast" spy={true} smooth={true} offset={-85} duration={500}>Podcast</Scroll.Link> :
            <Link to="/#podcast">Podcast</Link>
          }
        </li>
        <li role="presentation">
          {isFrontPage ?
            <Scroll.Link activeClass="active" to="events" spy={true} smooth={true} offset={-85} duration={500}>Events</Scroll.Link> :
            <Link to="/#events">Events</Link>
          }
        </li>
        <li role="presentation">
          {isFrontPage ?
            <Scroll.Link activeClass="active" to="mission-trips" spy={true} smooth={true} offset={-85} duration={500}>Short-Term Mission Trips</Scroll.Link> :
            <Link to="/#mission-trips">Short-Term Mission Trips</Link>
          }
        </li>
        <li role="presentation">
          {isFrontPage ?
            <Scroll.Link activeClass="active" to="get-in-touch" spy={true} smooth={true} offset={-85} duration={500}>Get In Touch</Scroll.Link> :
            <Link to="/#get-in-touch">Get In Touch</Link>
          }
        </li>
        <li role="presentation">
          {isFrontPage ?
            <Scroll.Link activeClass="active" to="get-in-touch" spy={true} smooth={true} offset={-85} duration={500}>Support</Scroll.Link> :
            <Link to="/#support">Support</Link>
          }
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export const FrontPageNavbar = () => (
  <TycNav isFrontPage={true} />
)

export const OtherPageNavbar = () => (
  <TycNav isFrontPage={false} />
)
