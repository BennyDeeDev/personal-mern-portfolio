import React from "react";

import resume from "../images/resume.svg";
import work from "../images/work.svg";
import education from "../images/education.svg";
import cvMock from "../mocks/cvMock";

import CvSection from "../components/CvSection";
import SubTitle from "../components/SubTitle";

export default function Cv() {
	return (
		<div id="cv">
			<SubTitle title="Lebenslauf" svg={resume} />
			<div className="flex flex-col justify-between -m-4 lg:flex-row">
				<div className="flex lg:w-7/12 m-4 p-4 ">
					<CvSection section="work" title="Berufliche Laufbahn" svg={work} array={cvMock.work} />
				</div>
				<div className="flex lg:w-5/12 m-4 p-4">
					<CvSection section="education" title="Ausbildung" svg={education} array={cvMock.education} />
				</div>
			</div>
		</div>
	);
}
