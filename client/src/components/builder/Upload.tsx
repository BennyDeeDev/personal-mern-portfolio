import React from "react";

export default function Upload() {
	return (
		<div className="py-2">
			<button className="w-full bg-minimalist-lime hover:bg-minimalist-lime text-white font-bold p-2 inline-flex items-center rounded-lg">
				<svg
					fill="#FFF"
					height="18"
					viewBox="0 0 24 24"
					width="18"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
				</svg>
				<span className="ml-2">Upload Image</span>
				<input className="hidden" type="file" name="strength_image" />
			</button>
		</div>
	);
}
