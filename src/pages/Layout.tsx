// Layout.tsx
import React from 'react';
import Header from '../components/Header';

type LayoutProps = {
	children: React.ReactNode;
	title: string;
};

export default function Layout({ children, title }: LayoutProps) {
	const currensYear = new Date().getFullYear();

	return (
		<>
			<div id="particles-js"></div>
			<div className="wrapper max-w-7xl mx-auto relative w-full h-auto min-h-screen">
				<Header />
				<main className="absolute top-0 left-0 w-full h-full min-h-screen flex justify-center items-center">
					<section className="main-view w-auto h-auto min-w-[672px] lg:ml-[220px] 2xl:ml-0 min-h-[448.82px]">
					<h1 className="page-title">{title}</h1>

					<div id={title} className="flex flex-wrap w-[min(100%,700px)] mx-auto">
						{children}
					</div>
					</section>
				</main>
				<footer className="footer">
					<p className="w-full pr-2text-center text-xs font-en text-slate-300">©BORDERLESSS {`2019 - ${currensYear}`}</p>
				</footer>
			</div>
		</>
	);
};
