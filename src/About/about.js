import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import InstagramIcon from "@material-ui/icons/Instagram";

const About = () => {
    const visitInstagram = () => {
      window.location = "https://www.instagram.com/digiflake";
    };
    return (
      <div className="aboutSection">
        <div></div>
        <div className="aboutSectionGradient"></div>
        <div className="aboutSectionContainer">
          <Typography component="h1">About Us</Typography>
  
          <div>
            <div>
              <Avatar
                style={{ width: "30vmax", height: "20vmax", margin: "2vmax 0", borderRadius:0}}
                src='https://digitalflake.com/wp-content/uploads/2023/04/DF_logo-transparent2.png'
                alt="Founder"
              />
              <Typography>Digiflake</Typography>
              <Button onClick={visitInstagram} color="primary">
                Visit Instagram
              </Button>
              <span>
                This is a sample wesbite made by @arpitVaishy. Only with the
                purpose to made my own project for Digiflake.
              </span>
            </div>
            <div className="aboutSectionContainer2">
              <Typography component="h2">Our Brands</Typography>
              <a
                href="https://www.youtube.com"
                target="blank"
                
              >
                <img src="https://static.vecteezy.com/system/resources/previews/023/986/473/original/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" alt="" />
               
              </a>
  
              <a href="https://instagram.com/digiflake" target="blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="" />
                
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;