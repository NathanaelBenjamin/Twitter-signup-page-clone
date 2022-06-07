import React from 'react';
import "../App.css";

const Footer = () => {

  let currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
      <footer>
        <ul>
          <li><a href="https://about.twitter.com/">About</a></li>
          <li><a href="https://help.twitter.com/">Help Centre</a></li>
          <li><a href="https://twitter.com/tos">Terms of Service</a></li>
          <li><a href="https://twitter.com/privacy">Privacy Policy</a></li>
          <li><a href="https://support.twitter.com/articles/20170514">Cookie Policy</a></li>
          <li><a href="https://help.twitter.com/resources/accessibility">Accessibility</a></li>
          <li><a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo">Ads info</a></li>
          <li><a href="https://blog.twitter.com/">Blog</a></li>
          <li><a href="https://status.twitterstat.us/">Status</a></li>
          <li><a href="https://careers.twitter.com/">Careers</a></li>
          <li><a href="https://about.twitter.com/press/brand-assets">Brand Resources</a></li>
          <li><a href="https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise">Advertising</a></li>
          <li><a href="https://marketing.twitter.com/">Marketing</a></li>
          <li><a href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness">Twitter for Business</a></li>
          <li><a href="https://developer.twitter.com/">Developers</a></li>
          <li><a href="https://twitter.com/i/directory/profiles">Directory</a></li>
          <li><a href="https://twitter.com/settings">Settings</a></li>
          <li>© {currentYear} Twitter, Inc.</li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer;