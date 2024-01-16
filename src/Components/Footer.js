import React from "react";
import footer_image from "../Images/undraw_reading_time_re_phf7.svg";
import ig from "../Images/5282544_camera_instagram_social media_social network_instagram logo_icon (1).png"
import tw from "../Images/5282551_tweet_twitter_twitter logo_icon.png";
import lin from "../Images/5282542_linkedin_network_social network_linkedin logo_icon.png";
import fb from "../Images/5282541_fb_social media_facebook_facebook logo_social network_icon.png"

const Footer = () => {
  const socials = [
    {
        social: ig
    },
    {
        social: tw
    },
    {
        social: lin
    },
    {
        social: fb
    }
  ]  
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="logo-container">
            <div className="logo">
              <p className="logo1">Story</p>
              <p className="logo2">Recs</p>
            </div>

            <div className="copyright">
                <p>Copyright @ 2024. All rights reserved</p>
            </div>
          </div>
          <div className="footer-info">
            <div className="Company">
              <h4>Company</h4>
              <p>About us</p>
              <p>Terms</p>
              <p>Privacy Policy</p>
              <p>Help</p>
            </div>
            <div className="socials">
              <h4>Socials</h4>
              <div className="social-icons">
               {
                socials.map((social, index)=>(
                    <>
                        <div className="social" key={index}>
                           <img src={social.social} alt="social-icon"/>
                        </div>
                    </>
                ))
               }
              </div>
            </div>
          </div>
          <div className="footer-image">
            <img src={footer_image} alt="footer_image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
