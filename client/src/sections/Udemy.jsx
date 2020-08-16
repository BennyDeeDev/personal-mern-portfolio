import React, { useEffect, useState } from "react";
import HeadTitle from "../components/HeadTitle";
import udemy from "../images/udemy.svg";
import BackendService from "../services/BackendService";

import ReactStars from "react-rating-stars-component";
import ShowMoreText from "react-show-more-text";

import format from "date-fns/format";
import de from "date-fns/locale/de";

export default function Udemy() {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		BackendService.getUdemyData()
			.then(({ data }) => {
				/* console.log(data); */
				setCourses(data.courses);
			})
			.catch((Error) => {});
	}, []);
	return (
		<div id="udemy">
			<HeadTitle svg={udemy} title="Udemy Kurse">
				<p>Ich bringe angehenden Entwicklern das programmieren bei!</p>
				<a className="text-indigo-600" href="https://www.udemy.com/user/benjamin-derksen/">
					Mein Dozenten-Link
				</a>
			</HeadTitle>

			<div className="flex flex-col lg:flex-row -m-4 justify-between">
				{courses
					? courses.map(({ course, ratings }, index) => (
							<a
								key={index}
								className="flex flex-col  lg:w-1/3 m-4  bg-white p-4 rounded-lg border border-minimalist-gray"
								href={"https://udemy.com" + course.url}
								rel="noopener noreferrer"
								target="_blank">
								<h3 className="my-2">{course.title}</h3>

								{course.id === "x01VXpq8eS_IQ8tEFhCu0EXhw==" ? (
									<img
										className="w-full"
										src="https://img-a.udemycdn.com/course/240x135/3134664_8f59.jpg"
										alt=""
									/>
								) : null}
								<div className=" mt-4">
									{ratings.results.map((rating, index) => (
										<div key={index} className="mt-2">
											<h5>{rating.user.title}</h5>
											<h6>{format(new Date(rating.created), "dd. MMMM yyyy", { locale: de })}</h6>
											<ReactStars
												count={5}
												value={rating.rating}
												isHalf={true}
												size={24}
												edit={false}
											/>
											<ShowMoreText
												lines={3}
												more="mehr"
												less="weniger"
												anchorClass=""
												expanded={false}>
												<p>{rating.content}</p>
											</ShowMoreText>
										</div>
									))}
								</div>
							</a>
					  ))
					: null}
				<div className="md:w-1/3 m-4 md:h-64"></div>
				<div className="md:w-1/3 m-4 md:h-64"></div>
			</div>
		</div>
	);
}
