import React, { useState } from "react";

export default function Upload({ section, onUpload, id, image }) {
	return (
		<div className="flex flex-0 items-center">
			<div className="relative inline-block py-2">
				<button className="w-full bg-minimalist-brown text-white font-bold p-2 inline-flex items-center rounded-lg">
					<svg fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 0h24v24H0z" fill="none" />
						<path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
					</svg>
					<span className="ml-2">Upload Image</span>
				</button>
				<input
					onChange={(e) => onUpload(e, id, section)}
					className="opacity-0 inset-0 absolute"
					type="file"
					name="image"
				/>
			</div>
			{image ? (
				<div className="text-xl ml-4 inline-block text-minimalist-lime px-2 bg-white rounded-full border border-green-600">
					{image.name + " uploaded"}
				</div>
			) : null}
		</div>
	);
}
