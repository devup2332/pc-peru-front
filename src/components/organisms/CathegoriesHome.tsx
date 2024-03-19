import { cathegories } from "@/data";
import Image from "next/image";
import React from "react";

const CathegoriesHome = () => {
	return (
		<div className="grid gap-5 lg:flex lg:gap-5 mt-10">
			{cathegories.map((c) => {
				return (
					<div key={c.id} className=" grid gap-5 max-w-md lg:max-w-xs m-auto">
						<div className="w-full h-[400px] rounded-xl overflow-hidden">
							<Image
								className="w-full h-full object-cover"
								src={c.image}
								alt=""
								width={500}
								height={500}
							/>
						</div>
						<p className="text-center font-bold">{c.name}</p>
					</div>
				);
			})}
		</div>
	);
};

export default CathegoriesHome;
