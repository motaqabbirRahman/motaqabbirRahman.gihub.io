import React, { useState } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import SEO from "../data/seo";
import "./styles/exploration.css";

const Exploration = () => {
  const currentSEO = SEO.find((item) => item.page === "exploration");

  const imageFilenames = [
    "iot-air.jpg",
    "auv.jpg",
    "singapore.jpg",
    "ar-game.JPG",
    "iot-air.jpg",
    "robusub.jpg",
    "robusub2022.jpg",
    "singapore.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{`exploration`}</title>
      </Helmet>

      <div className="page-content">
        <NavBar active="exploration" />
        <div className="content-wrapper">
          <div className="explorations-logo-container">
            <div className="explorations-logo">
              <Logo width={4} />
            </div>
          </div>
          <div className="explorations-container">
            {/* ... (existing code) ... */}

            <div className="explorations-list">
              <div className="image-gallery">
                {imageFilenames.map((filename, index) => (
                  <div key={index} className="gallery-item">
                    <img
                      src={`../${filename}`}
                      alt={`Image ${index + 1}`}
                      onClick={() => openLightbox(`../${filename}`)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lightbox */}
          {selectedImage && (
            <div className="lightbox" onClick={closeLightbox}>
              <div className="lightbox-content">
                <span className="lightbox-close" onClick={closeLightbox}>
                  &times;
                </span>
                <img src={selectedImage} alt="Zoomed Image" />
              </div>
            </div>
          )}

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Exploration;
