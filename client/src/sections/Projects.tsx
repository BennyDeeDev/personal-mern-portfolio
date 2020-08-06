import React from "react";
import HeadTitle from "../components/HeadTitle";
import project from "../images/project.svg";
import TextWithSvg from "../components/TextWithSvg";
import github from "../images/github.svg";
import react from "../images/react.svg";
import mongodb from "../images/mongodb.svg";
import node from "../images/node.svg";

export default function Projects() {
	//@ts-ignore
	return (
		<div>
			<HeadTitle title="Meine Projekte" svg={project}>
				<p>
					Da Projekte kompliziert auf zu setzen sind, habe ich Videos aufgenommen in denen ich meine einzelnen
					Projekte vorstelle.
				</p>
			</HeadTitle>

			<div className="grid grid-cols-3 grid-rows-1 -m-4">
				<div className="flex flex-grow m-4 p-4 rounded-lg flex-col bg-white border border-minimalist-gray space-y-2">
					<h4>Dieses Portfolio</h4>

					<div>
						<a href="">
							<TextWithSvg
								Tag="h6"
								svg={github}
								styleSvg="w-4"
								styleDiv=""
								title="Source Code"></TextWithSvg>
						</a>
					</div>

					<p>
						Dieses Portfolio kann sehr viel mehr als man auf den ersten Blick vermuten mag, z.B wurden große
						Teile dynamisch generiert und ich kann in meinem selbstgebauten Page-Builder ganz einfach
						Projekte nachreichen.
					</p>
					<div className="mt-2">
						<iframe
							id="ytplayer"
							width="360"
							height="205"
							src="http://www.youtube.com/embed/K-r9ZWRRVW4"
							allowFullScreen={true}
						/>
					</div>
					<hr />
					<div className="flex space-x-2">
						<h6>Stack:</h6>
						<TextWithSvg Tag="p" styleSvg="w-3 h-3" styleDiv="" title="React.js" svg={react} />
						<TextWithSvg Tag="p" styleSvg="w-3 h-3" styleDiv="" title="Node.js" svg={node} />
						<TextWithSvg Tag="p" styleSvg="w-3 h-3" styleDiv="" title="Mongo DB" svg={mongodb} />
					</div>
				</div>
			</div>
		</div>
	);
}
