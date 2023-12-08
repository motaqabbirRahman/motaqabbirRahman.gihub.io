// DetailsPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Details from "../components/projects/details";
import INFO from "../data/user";
import "./styles/detailsPage.css";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

const DetailsPage = () => {
  const { id } = useParams();
  const project = INFO.projects.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    // <div className="details-page-container">
    //   <NavBar />
    //   <div className="details-main">
    //     <div className="details-image-container">
    //       <div className="details-image-wrapper">
    //         <img src={project.logo} alt={project.title} />
    //       </div>
    //     </div>
    //     <div className="details-right-side">
    //       <h2 className="details-title">{project.title}</h2>
    //       <p className="details-description">{project.description}</p>
    //       {/* Add additional details if needed */}
    //     </div>
    //   </div>
    //   <div className="page-footer">
    //     <Footer />
    //   </div>
    // </div>
    <div className="page-content">
    <NavBar active="details" />
    <div className="content-wrapper">
      <div className="details-logo-container">
        <div className="details-logo">
          <Logo width={46} />
        </div>
      </div>

      <div className="details-container">
        <div className="details-main">
          <div className="details-right-side">
            <div className="title details-title">
              {INFO.details.title}
            </div>

            <div className="subtitle details-subtitle">
              {INFO.details.description}
            </div>
          </div>

          <div className="details-left-side">
            <div className="details-image-container">
              <div className="details-image-wrapper">
                <img
                  src={project.logo}
                  alt="details"
                  className="details-image"
                />
              </div>
            </div>

            <div className="details-socials">
              <Socials />
            </div>
          </div>
        </div>
        <div className="details-socials-mobile">
          <Socials />
        </div>
      </div>
      <div className="page-footer">
        <Footer />
      </div>
    </div>
  </div> );
};

export default DetailsPage;
