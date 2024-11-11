import { useEffect } from 'react';
import Header from '../components/Header';
import fvImage from '../assets/images/bg-workplace.png';

export default function App() {
	useEffect(() => {
		document.title = 'home';
	}, []);
	const currentYear = new Date().getFullYear();

	return (
		<>
			<div className="wrapper max-w-7xl mx-auto relative w-full h-auto min-h-screen">
				<Header />
				<main className="absolute top-0 left-0 w-full h-full min-h-screen flex justify-center items-center">
					<div className="main-view relative w-full h-full">
						<div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center mx-auto h-auto w-[min(750px,52vw)] opacity-35">
							<svg width="0" height="0" viewBox="0 0 762 638" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 object-contain w-full h-full">
								<clipPath id="clip01">
									<path d="M4 629.2V1.75998L533.76 0C603.573 0 655.2 14.6667 688.64 44C722.667 72.7467 739.68 116.16 739.68 174.24C739.68 232.32 720.32 274.853 681.6 301.84C707.413 315.92 726.48 334.693 738.8 358.16C751.12 381.04 757.28 410.667 757.28 447.04C757.28 506.293 740.267 551.467 706.24 582.56C672.8 613.067 621.173 628.32 551.36 628.32L4 629.2ZM517.04 112.64H144.8V253.44H517.04C570.427 253.44 597.12 229.387 597.12 181.28C597.12 135.52 570.427 112.64 517.04 112.64ZM534.64 366.08H144.8V515.68H534.64C588.027 515.68 614.72 490.453 614.72 440C614.72 390.72 588.027 366.08 534.64 366.08Z" />
								</clipPath>
								<image
									href={fvImage}
									width="100%"
									height="100%"
									preserveAspectRatio="xMidYMid slice"
									clipPath="url(#clip01)"
									id="fv-image"
								/>
							</svg>
						</div>
						<div className="absolute bottom-[10%] left-1/2 translate-x-[-50%] w-5/6 h-auto text-right border-r-8 border-slate-500 px-8 break-keep mix-blend-color-burn dark:mix-blend-difference">
							<div className="lead-ja text-sm text-slate-700 dark:text-slate-200 text-bold">
								<p>ネットの世界に境界線はない。</p>
								<p>世界はもっとフラットなはず。</p>
								<p>できることから始めよう。</p>
							</div>
							<div className="lead-en text-2xl font-en mt-4 text-slate-700 dark:text-slate-200">
								<p>The online world has no boundaries.</p>
								<p>The world should be flatter.</p>
								<p>Start with what you can.</p>
							</div>
							<p className="text-5xl font-en mt-4">Better than nothing.</p>
						</div>
					</div>
				</main>
				<footer className="footer">
					<p className="w-full pr-2 text-center text-xs font-en text-slate-300">©BORDERLESSS {`2019 - ${currentYear}`}</p>
				</footer>
			</div>
		</>
	);
};
