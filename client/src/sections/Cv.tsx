import React from "react";

import resume from "../images/resume.svg";
import work from "../images/work.svg";
import education from "../images/education.svg";
import cvMock from "../mocks/cvMock";

import CvSection from "../components/CvSection";
import HeadTitle from "../components/HeadTitle";

export default function Cv() {
	return (
		<div id="cv">
			<HeadTitle title="Mein Lebenslauf" svg={resume} />
			<div className="flex flex-col justify-between md:flex-row">
				<CvSection
					title="Berufliche Laufbahn"
					svg={work}
					array={cvMock.work}
				/>
				<div className="mt-12 md:ml-12 md:mt-0">
					<CvSection
						title="Ausbildung"
						svg={education}
						array={cvMock.education}
					/>
				</div>
			</div>
		</div>
	);
}
