import React from "react";


import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
			  icon=""
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">Dubotech Ltd.</div>
							<div className="work-subtitle">
								CEO & Co-Founder
							</div>
							<div className="work-duration">
								September 2023 - Present
							</div>
						</div>

						<div className="work">
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

export default Works;
