import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/publications.css";

const Publications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "projects");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`publications`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta
          name="keywords"
          content={currentSEO.keywords.join(", ")}
        />
      </Helmet>

      <div className="page-content">
        <NavBar active="publications" />
        <div className="content-wrapper">
          <div className="publications-logo-container">
            <div className="projects-logo">
              <Logo width={46} />
            </div>
          </div>
          <div className="publications-container">
            <div className="title projects-title">
               Ongoing Research and Publications :
            </div>

            <div className="subtitle publication-subtitle">
              My current endeavors involve groundbreaking research initiatives and publications.
              I am leading a project on "<strong>Vehicle Automation Using Sensor Fusion and Multi-modal Approach for Traversing in Irregular and Poorly Planned Urban Traffic</strong>," funded by the Research Seed Grant Initiative of BRAC University.
              Engaging in R&D for affordable and problem-specific aquatic and underwater robots, we aim to revolutionize Aquaculture and Marine exploration in Bangladesh. Additionally, I've founded a startup offering ROV and AUV services in the country.

              Here are some of my notable publications:
              <div class="publication-item">
                <p>S. R. Arko, R. B. Issa, M. Das and M. S. Rahman, "<a href="https://doi.org/10.1109/IEEECONF38699.2020.9389350" target="_blank" rel="noopener noreferrer">Autonomous Surface Vehicle for Real-time Monitoring of Water Bodies in Bangladesh</a>," Global Oceans 2020: Singapore – U.S. Gulf Coast, 2020, pp. 1-7.</p>
              </div>

              <div class="publication-item">
                <p>S. R. Arko, A. Ghosh, A. B. Shahid, S. Tasnim and J. Uddin, "<a href="https://doi.org/10.1109/STI47673.2019.9068045" target="_blank" rel="noopener noreferrer">A Smart Assistive Computer Numerical Control System for Visually Impaired People to Learn Writing</a>," 2019 International Conference on Sustainable Technologies for Industry 4.0 (STI), 2019, pp. 1-5.</p>
              </div>

              <div class="publication-item">
                <p>S. R. Arko, S. Muhammad Gazi, A. Bin Shahid, E. Lina Gomes, A. Chakrabarty and S. Hossain, "<a href="https://doi.org/10.1109/ICCIT57492.2022.10055903" target="_blank" rel="noopener noreferrer">A novel traffic simulator for evaluating complex SIoT-based algorithms in typical road traffic scenarios</a>," 2022 25th International Conference on Computer and Information Technology (ICCIT), Cox's Bazar, Bangladesh, 2022, pp. 300-305.</p>
              </div>

            </div>

            <div className="publications-list">
            
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Publications;
