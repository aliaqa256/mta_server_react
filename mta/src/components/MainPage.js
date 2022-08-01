import { Link } from "react-router-dom";
import Header from "../assets/main_header.jpg";
import Main1 from "../assets/main1.jpg";
import Main2 from "../assets/main2.jpg";
const MainPage = () => {
	return (
		<>
			<div classNameName="container-fluid   ">
				<div classNameName="row d-block">
					<div
						classNameName="col-md-12 w-100 "
						style={{
							backgroundImage: `url(${Header})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							height: "200px",
						}}
					>
						<h1 classNameName=" text-danger col-3 bg-gradient ">EXPRESS SERVER</h1>
					</div>
				</div>
				{/* {------------------------------------------------------} */}
				<div classNameName="row ">
					<section className="dark">
						<div className="container py-4">
							<h1 className="h1 text-center text-danger" id="pageHeaderTitle">
								به سرور حرفه ای اکسپرس خوش آمدید
							</h1>

							<article className="postcard dark blue">
								<a className="postcard__img_link" href="#">
									<img className="postcard__img" src={Main1} alt="Image Title" />
								</a>
								<div className="postcard__text">
									<h1 className="postcard__title blue">
										<a href="#">سرورتو تو پنج دقیقه بساز</a>
									</h1>
									<div className="postcard__subtitle small"></div>
									<div className="postcard__bar"></div>
									<div className="postcard__preview-txt">
										<div> همیشه میخواستی یه سرور برای خودت داشته باشی؟</div>
										<div> ولی گیم مود خودتو نداشتی؟</div>
										<div> اسکریپتر و برنامه نویس نداشتی </div>
										<div> وقت و هزینشو نداشتی</div>
									</div>
									<ul className="postcard__tagbox">
										<li className="tag__item">
											<i className="fas fa-tag mr-2"></i>
										</li>
										<li className="tag__item">
											<i className="fas fa-clock mr-2"></i>
										</li>
										<li className="tag__item play blue">
											<a href="#">
												<i className="fas fa-play mr-2"></i>
											</a>
										</li>
									</ul>
								</div>
							</article>
						</div>
					</section>

					<section className="dark">
						<div className="container py-2">
							<div className="h1 text-center text-dark" id="pageHeaderTitle"></div>

							<article className="postcard light blue">
								<a className="postcard__img_link" href="#">
									<img className="postcard__img" src={Main2} alt="Image Title" />
								</a>
								<div className="postcard__text t-dark">
									<h1 className="postcard__title blue">
										<a href="#">همین الان شروع کن</a>
									</h1>
									<div className="postcard__subtitle small"></div>
									<div className="postcard__bar"></div>
									<div className="postcard__preview-txt">
										دیگه نگران نباش با چنتا کلیک میتونی سرور جدید بسازی و تو گیم
										مود فیکس ادمین سرور خودت باشی و با دوستات بازی کنی
										<span classNameName="text-success  d-block">
											فقط کافیه اینجا کلیک کنی و تو پنج دقیقه سرورتو بسازی
										</span>
										<Link
											to="/register"
											activeclassNameName="none"
											classNameName="btn btn-outline-primary my-2"
										>
											شروع
										</Link>
									</div>
									<ul className="postcard__tagbox">
										<li className="tag__item">
											<i className="fas fa-tag mr-2"></i>
										</li>
										<li className="tag__item">
											<i className="fas fa-clock mr-2"></i>
										</li>
										<li className="tag__item play blue">
											<a href="#">
												<i className="fas fa-play mr-2"></i>
											</a>
										</li>
									</ul>
								</div>
							</article>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default MainPage;
