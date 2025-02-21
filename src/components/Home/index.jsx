// import React from "react";
// import Navbar from "../Navbar";
// import { Link } from "react-router-dom";
// import "./index.css";

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="banner-img">
//         <div className="title">
//           <h3>
//             Find the <span>Right Job</span> In the
//             <br />
//             <span> Right Companies</span>
//           </h3>
//           <div className="small-tagline">
//             <p>Got fired..!! Get Ready to be hired</p>
//           </div>
//         </div>
//         <div className="button" data-testid="btn">
//           <Link to="/Jobs">Browse Jobs</Link>
//         </div>
//       </div>
//       <div className="social-media" data-testid="images">
//         <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d7e0c401a3e668a1d_facebook-logo.svg" alt="fb" />
//         <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d68c9b0a57ed94925_google-logo.svg" alt="google" />
//         <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc333df3521cce5b6a_youtube-logo-jobs-webflow-template.svg" alt="youtube" />
//         <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc774d5a00bcbb0baf_linkedin-logo-jobs-webflow-template.svg" alt="linkedin" />
//       </div>
//     </>
//   );
// };

// export default Home;









import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.css";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="hero">
        <motion.div 
          className="title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>
            Find the <span>Right Job</span> In the
            <br />
            <span> Right Companies</span>
          </h3>
          <p className="small-tagline">Got fired..!! Get Ready to be hired</p>
          {/* CTA Button */}
          <motion.div 
            className="button"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/Jobs">Browse Jobs</Link>
          </motion.div>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div 
          className="social-media"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d7e0c401a3e668a1d_facebook-logo.svg" alt="fb" />
          <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d68c9b0a57ed94925_google-logo.svg" alt="google" />
          <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc333df3521cce5b6a_youtube-logo-jobs-webflow-template.svg" alt="youtube" />
          <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc774d5a00bcbb0baf_linkedin-logo-jobs-webflow-template.svg" alt="linkedin" />
        </motion.div>
      </div>
    </>
  );
};

export default Home;

