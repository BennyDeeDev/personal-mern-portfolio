import React, { useEffect, useState } from "react";
import HeadTitle from "../components/HeadTitle";
import udemy from "../images/udemy.svg";
import BackendService from "../services/BackendService";

import ReactStars from "react-rating-stars-component";
import ShowMoreText from "react-show-more-text";
import moment from "moment";
import "moment/locale/de";

export default function Udemy() {
	/* 	const pseudoCourses = [
		{
			title: "mern stack",
			url: "",
		},
		{ title: "electron course", url: "" },
		{ title: "react course", url: "" },
	]; */
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		BackendService.getUdemyCourse()
			.then(({ data }) => {
				data.map((course) => {
					BackendService.getUdemyRatingsById(course.id)
						.then(({ data }) => {
							setCourses([...courses, { ...course, ratings: [...data] }]);
						})
						.catch((Error) => console.log(Error));
				});
			})
			.catch((Error) => console.log(Error));
	}, []);
	return (
		<div>
			<HeadTitle svg={udemy} title="Meine Udemy Kurse">
				<p>Ich bringe angehenden Entwicklern das entwickeln bei!</p>
				<a href="https://www.udemy.com/user/benjamin-derksen/">Mein Dozenten-Link</a>
			</HeadTitle>

			<div className="flex -m-4 w-full justify-between">
				{courses.map((course) => (
					<div className="w-1/3">
						<div className="flex flex-col m-4  bg-white p-4 rounded-lg border border-minimalist-gray">
							<a href={"https://udemy.com" + course.url} target="_blank">
								<h3 className="my-2">{course.title}</h3>
								<img
									className="w-full"
									src="https://img-a.udemycdn.com/course/240x135/3134664_8f59.jpg"
									alt=""
								/>
							</a>
							<div className=" mt-4">
								{course.ratings.map((rating) => (
									<div className="mt-2">
										<h5>{rating.user}</h5>
										<h6>{moment(rating.created).format("LL")}</h6>
										<ReactStars
											count={5}
											value={rating.rating}
											isHalf={true}
											size={24}
											edit={false}
										/>
										<ShowMoreText
											/* Default options */
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
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
