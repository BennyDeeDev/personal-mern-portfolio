import React, { useState, useEffect } from "react";
import HeadTitle from "../components/HeadTitle";
import codewars from "../images/codewars.svg";
import BackendService from "../services/BackendService";

import ShowMoreText from "react-show-more-text";
import moment from "moment";
import "moment/locale/de";

export default function CodeWars() {
	const [user, setUser] = useState({});
	const [challenges, setChallenges] = useState([]);

	useEffect(() => {
		BackendService.getCodeWarsData().then(({ data }) => {
			setUser(data.user);
			setChallenges(data.completed);
		});
	}, []);

	return (
		<div id="coding-challenges" className="">
			<HeadTitle svg={codewars} title="Coding Challenges">
				<div className="flex flex-col justify-center items-center">
					<p>Wenn ich noch Freizeit habe löse ich oft Coding Challenges</p>
					<a className="mt-1" href="https://www.codewars.com/users/Relentl3zz">
						{/* Mein CodeWars Link: */}
						<img src="https://www.codewars.com/users/Relentl3zz/badges/small" alt="" />
					</a>
				</div>
			</HeadTitle>
			<h3 className="mt-4 mb-2">Meine letzten Challenges:</h3>
			<div className="flex flex-col lg:grid grid-cols-3 grid-rows-2 -m-4 justify-between">
				{challenges.map(({ challenge, details }, index) => (
					<div className="flex flex-col shadow-md relative bg-gray-300 m-4 p-4 rounded-lg space-y-1">
						<h5 className="mr-8">
							Challenge:
							<a className="ml-1" href={details.url} target="_blank" rel="noopener noreferrer">
								{challenge.name}
							</a>
						</h5>
						<h6>Absolviert am: {moment(challenge.completedAt).format("LL")}</h6>
						<h6
							className="absolute top-0 right-0 rounded-full m-1 my-4 border p-1"
							style={{ borderColor: details.rank.color }}>
							{details.rank.name}
						</h6>
						<ShowMoreText
							/* Default options */
							lines={6}
							more="mehr"
							less="weniger"
							anchorClass=""
							expanded={false}>
							<p>{details.description}</p>
						</ShowMoreText>
						<div className="flex justify-between my-1">
							<div className="flex">
								<h6>Versuche: </h6>
								<code className="ml-1 text-orange-500">{details.totalAttempts}</code>
							</div>
							<div className="flex">
								<h6>Lösungen: </h6>
								<code className="ml-1 text-green-500">{details.totalCompleted}</code>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
