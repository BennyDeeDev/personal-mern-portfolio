import React from "react";
import HeadTitle from "../components/HeadTitle";
import project from "../images/project.svg";
import TextWithSvg from "../components/TextWithSvg";
import github from "../images/github.svg";

import Stack from "../components/Stack";
import projectMock from "../mocks/projectMock";

export default function Projects() {
	return (
		<div id="projects">
			<HeadTitle title="Projekte" svg={project}>
				<p>
					Da Projekte kompliziert auf zu setzen sind, habe ich Videos aufgenommen in denen ich meine einzelnen
					Projekte vorstelle.
				</p>
			</HeadTitle>

			<div className="flex flex-col lg:grid grid-cols-3 grid-rows-1 -m-4">
				<div className="flex flex-grow m-4 p-4 rounded-lg flex-col bg-white border border-minimalist-gray ">
					{projectMock.map((project, index) => (
						<div key={index} className="space-y-2">
							<h4>{project.title}</h4>

							<div>
								<a href={project.source}>
									<TextWithSvg
										Tag="h6"
										svg={github}
										styleSvg="w-4"
										styleDiv=""
										title="Source Code"></TextWithSvg>
								</a>
							</div>

							<p>{project.text}</p>
							<div className="flex  w-full h-full flex-1 mt-2 overflow-hidden">
								<iframe
									className="flex-grow border-0 m-0 p-0"
									id="ytplayer"
									title="ytplayer"
									src={project.video}
									allowFullScreen={true}
								/>
							</div>

							<Stack stack={project.stack}></Stack>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
