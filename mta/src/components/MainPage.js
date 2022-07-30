import { Link } from "react-router-dom";
import Header from "../assets/main_header.jpg";
import Main1 from "../assets/main1.jpg";
import Main2 from "../assets/main2.jpg";
const MainPage = () => {
	return (
		<>
			<div className="container-fluid   ">
				<div className="row d-block">
					<div
						className="col-md-12 w-100 "
						style={{
							backgroundImage: `url(${Header})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							height: "200px",
						}}
					>
						<h1 className=" text-danger col-3 bg-gradient ">EXPRESS SERVER</h1>
					</div>
				</div>
				{/* {------------------------------------------------------} */}
				<div className="row ">
					<section class="dark">
						<div class="container py-4">
							<h1 class="h1 text-center text-danger" id="pageHeaderTitle">
								به سرور حرفه ای اکسپرس خوش آمدید
							</h1>

							<article class="postcard dark blue">
								<a class="postcard__img_link" href="#">
									<img class="postcard__img" src={Main1} alt="Image Title" />
								</a>
								<div class="postcard__text">
									<h1 class="postcard__title blue">
										<a href="#">سرورتو تو پنج دقیقه بساز</a>
									</h1>
									<div class="postcard__subtitle small"></div>
									<div class="postcard__bar"></div>
									<div class="postcard__preview-txt">
										<div> همیشه میخواستی یه سرور برای خودت داشته باشی؟</div>
										<div> ولی گیم مود خودتو نداشتی؟</div>
										<div> اسکریپتر و برنامه نویس نداشتی </div>
										<div> وقت و هزینشو نداشتی</div>
									</div>
									<ul class="postcard__tagbox">
										<li class="tag__item">
											<i class="fas fa-tag mr-2"></i>
										</li>
										<li class="tag__item">
											<i class="fas fa-clock mr-2"></i>
										</li>
										<li class="tag__item play blue">
											<a href="#">
												<i class="fas fa-play mr-2"></i>
											</a>
										</li>
									</ul>
								</div>
							</article>
						</div>
					</section>

					<section class="light">
						<div class="container py-2">
							<div class="h1 text-center text-dark" id="pageHeaderTitle"></div>

							<article class="postcard light blue">
								<a class="postcard__img_link" href="#">
									<img class="postcard__img" src={Main2} alt="Image Title" />
								</a>
								<div class="postcard__text t-dark">
									<h1 class="postcard__title blue">
										<a href="#">همین الان شروع کن</a>
									</h1>
									<div class="postcard__subtitle small"></div>
									<div class="postcard__bar"></div>
									<div class="postcard__preview-txt">
										دیگه نگران نباش با چنتا کلیک میتونی سرور جدید بسازی و تو گیم
										مود فیکس ادمین سرور خودت باشی و با دوستات بازی کنی
										<span className="text-success  d-block">
											فقط کافیه اینجا کلیک کنی و تو پنج دقیقه سرورتو بسازی
										</span>
										<Link
											to="/register"
											activeClassName="none"
											className="btn btn-outline-primary my-2"
										>
											شروع
										</Link>
									</div>
									<ul class="postcard__tagbox">
										<li class="tag__item">
											<i class="fas fa-tag mr-2"></i>
										</li>
										<li class="tag__item">
											<i class="fas fa-clock mr-2"></i>
										</li>
										<li class="tag__item play blue">
											<a href="#">
												<i class="fas fa-play mr-2"></i>
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
