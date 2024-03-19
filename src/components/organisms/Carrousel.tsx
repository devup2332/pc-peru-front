"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion as m } from "framer-motion";

interface ICarrousel {
	children: React.ReactNode;
	items: React.ReactNode[];
	itemsToShow: number;
}

const Carrousel = ({ items }: ICarrousel) => {
	const [width, setWith] = useState(0);
	const carrouselRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const fn = () => {
			setWith(
				carrouselRef.current!.scrollWidth - carrouselRef.current!.offsetWidth
			);
		};
		fn();
		window.addEventListener("resize", fn);

		return () => {
			window.removeEventListener("resize", fn);
		};
	}, []);
	return (
		<m.div className="carrousel w-full">
			<m.div
				ref={carrouselRef}
				drag="x"
				dragConstraints={{ right: 0, left: -width }}
				className="carroulse-wrapper flex gap-5 w-full"
			>
				{items}
			</m.div>
		</m.div>
	);
};

export default Carrousel;
