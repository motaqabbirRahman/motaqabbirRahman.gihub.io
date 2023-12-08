import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const PreviousWorks = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Previous Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./dubotech-logo.png"
								alt="dubotech"
								className="work-image"
							/>
							<div className="work-title">Dubotech Ltd.</div>
							<div className="work-subtitle">
								CEO & Co-Founder
							</div>
							<div className="work-duration">
								September 2023 - Present
							</div>
						</div>

						<div className="work">
							<img
								src="./ai-project.png"
								alt="ai-project"
								className="work-image"
							/>
							<div className="work-title">
								AI based Disaster Risk Reduction Project
							</div>
							<div className="work-subtitle">
								Part-Time Researcher
							</div>
							<div className="work-duration">
								January 2023 - Present
							</div>
						</div>

						<div className="work">
							<img
								src="./bracu-logo.png"
								alt="bracu"
								className="work-image"
							/>
							<div className="work-title">
								Brac University, Dhaka, Bangladesh
							</div>
							<div className="work-subtitle">
								Research Assistant
							</div>
							<div className="work-duration">
								August 2022 - Present
							</div>
						</div>

						<div className="work">
							<img
								src="./uwa-logo.png"
								alt="uwa"
								className="work-image"
							/>
							<div className="work-title">
								University of Western Australia
							</div>
							<div className="work-subtitle">
								Remote Research Assistant
							</div>
							<div className="work-duration">
								March 2021 - February 2022
							</div>
						</div>

						<div className="work">
							<img
								src="./channel-i-logo.png"
								alt="channel-i"
								className="work-image"
							/>
							<div className="work-title">
								Channel I, Dhaka, Bangladesh
							</div>
							<div className="work-subtitle">
								Robotics Engineer
							</div>
							<div className="work-duration">
								August 2019 - October 2019
							</div>
						</div>

						<div className="work">
							<img
								src="./robogears-logo.png"
								alt="robogears"
								className="work-image"
							/>
							<div className="work-title">
								tutor.robogearsbd.com, Dhaka, Bangladesh
							</div>
							<div className="work-subtitle">
								Contributor and Writer
							</div>
							<div className="work-duration">
								July 2017 - November 2017
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default PreviousWorks;
