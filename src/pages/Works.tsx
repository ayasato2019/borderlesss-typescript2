import Layout from './Layout';

// interface Work {
// 	id: string;
// 	title: string;
// 	image_path: string;
// }

// interface WorksProps {
// 	worksWebsite: Work[];
// 	worksApp: Work[];
// 	worksOther: Work[];
// }

export default function Works() {
	return (
		<Layout title="works">
			<p>wa-kusu</p>
			{/* <div id="works-slide" className="tab"> */}
				{/* Website Tab */}
				{/* <label>
					<input type="radio" name="works" defaultChecked />
					Web site
				</label>
				<div className="swiper works-wraper">
					<ul className="swiper-wrapper">
						<li key="1" className="swiper-slide">
							<a href="/works/1" className="slide-item">
								<picture>
								*/}
									{/* <source
										srcSet="../assets/images/works-cliantA.webp"
										type="image/webp"
									/>
									<img
										src="../assets/images/works-cliantA.png"
										alt="クライアントA様のサイトイメージ"
										height="300"
										loading="lazy"
									/>
								</picture>
							</a>
						</li>
					</ul>
					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>
				</div> */}

				{/* App Tab */}
				{/* <label>
					<input type="radio" name="works" />
					App
				</label>
				<div className="swiper works-wraper">
					<ul className="swiper-wrapper">
						<li key="3" className="swiper-slide">
							<a href="/works/3" className="slide-item">
								<picture>
									<source
										srcSet=""
										type="image/webp"
									/>
									<img
										src=""
										alt="家族マネー会議のサイトイメージ"
										width="700"
										height="300"
										loading="lazy"
									/>
								</picture>
							</a>
						</li>
					</ul>
					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>
				</div> */}

				{/* Other Tab */}
				{/* <label>
					<input type="radio" name="works" />
					Other
				</label>
				<div className="swiper works-wraper">
							<ul className="swiper-wrapper">
									<li key="" className="swiper-slide">
										<a href="#" className="slide-item">
											<picture>
												<source
													srcSet={`${publicUrl}/assets/images/${work.image_path}.webp`}
													type="image/webp"
												/>
												<img
													src={`${publicUrl}/assets/images/${work.image_path}.png`}
													alt={`${work.title}のサイトイメージ`}
													width="700"
													height="300"
													loading="lazy"
												/>
											</picture>
										</a>
									</li>
							</ul>
							<div className="swiper-button-prev"></div>
							<div className="swiper-button-next"></div>
				</div> */}
			{/* </div>
		</section> */}
		</Layout>

	);
}
