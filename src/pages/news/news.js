import React from "react";

function News() {
  return (
    <>
      {/* Breadcrumb Start */}
      <div className="container-fluid">
        <div className="container">
          <nav className="breadcrumb bg-transparent m-0 p-0">
            <a className="breadcrumb-item" href="#">
              Home
            </a>
            <a className="breadcrumb-item" href="#">
              Category
            </a>
            <a className="breadcrumb-item" href="#">
              Technology
            </a>
            <span className="breadcrumb-item active">News Title</span>
          </nav>
        </div>
      </div>
      {/* Breadcrumb End */}
      {/* News With Sidebar Start */}
      <div className="container-fluid py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* News Detail Start */}
              <div className="position-relative mb-3">
                <img
                  className="img-fluid w-100"
                  src="img/news-700x435-2.jpg"
                  style={{ objectFit: "cover" }}
                />
                <div className="overlay position-relative bg-light">
                  <div className="mb-3">
                    <a href>Technology</a>
                    <span className="px-1">/</span>
                    <span>January 01, 2045</span>
                  </div>
                  <div>
                    <h3 className="mb-3">
                      Est stet amet ipsum stet clita rebum duo
                    </h3>
                    <p>
                      Sadipscing labore amet rebum est et justo gubergren. Et
                      eirmod ipsum sit diam ut magna lorem. Nonumy vero labore
                      lorem sanctus rebum et lorem magna kasd, stet amet magna
                      accusam consetetur eirmod. Kasd accusam sit ipsum
                      sadipscing et at at sanctus et. Ipsum sit gubergren
                      dolores et, consetetur justo invidunt at et aliquyam ut et
                      vero clita. Diam sea sea no sed dolores diam nonumy,
                      gubergren sit stet no diam kasd vero.
                    </p>
                    <p>
                      Voluptua est takimata stet invidunt sed rebum nonumy stet,
                      clita aliquyam dolores vero stet consetetur elitr takimata
                      rebum sanctus. Sit sed accusam stet sit nonumy kasd diam
                      dolores, sanctus lorem kasd duo dolor dolor vero sit et.
                      Labore ipsum duo sanctus amet eos et. Consetetur no sed et
                      aliquyam ipsum justo et, clita lorem sit vero amet amet
                      est dolor elitr, stet et no diam sit. Dolor erat justo
                      dolore sit invidunt.
                    </p>
                    <h4 className="mb-3">Est dolor lorem et ea</h4>
                    <img
                      className="img-fluid w-50 float-left mr-4 mb-2"
                      src="img/news-500x280-1.jpg"
                    />
                    <p>
                      Diam dolor est labore duo invidunt ipsum clita et, sed et
                      lorem voluptua tempor invidunt at est sanctus sanctus.
                      Clita dolores sit kasd diam takimata justo diam lorem sed.
                      Magna amet sed rebum eos. Clita no magna no dolor erat
                      diam tempor rebum consetetur, sanctus labore sed nonumy
                      diam lorem amet eirmod. No at tempor sea diam kasd,
                      takimata ea nonumy elitr sadipscing gubergren erat.
                      Gubergren at lorem invidunt sadipscing rebum sit amet ut
                      ut, voluptua diam dolores at sadipscing stet. Clita dolor
                      amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores
                      takimata dolor dolore dolore sit. Sit ipsum erat amet
                      lorem et, magna sea at sed et eos. Accusam eirmod kasd
                      lorem clita sanctus ut consetetur et. Et duo tempor sea
                      kasd clita ipsum et.
                    </p>
                    <h5 className="mb-3">Est dolor lorem et ea</h5>
                    <img
                      className="img-fluid w-50 float-right ml-4 mb-2"
                      src="img/news-500x280-2.jpg"
                    />
                    <p>
                      Diam dolor est labore duo invidunt ipsum clita et, sed et
                      lorem voluptua tempor invidunt at est sanctus sanctus.
                      Clita dolores sit kasd diam takimata justo diam lorem sed.
                      Magna amet sed rebum eos. Clita no magna no dolor erat
                      diam tempor rebum consetetur, sanctus labore sed nonumy
                      diam lorem amet eirmod. No at tempor sea diam kasd,
                      takimata ea nonumy elitr sadipscing gubergren erat.
                      Gubergren at lorem invidunt sadipscing rebum sit amet ut
                      ut, voluptua diam dolores at sadipscing stet. Clita dolor
                      amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores
                      takimata dolor dolore dolore sit. Sit ipsum erat amet
                      lorem et, magna sea at sed et eos. Accusam eirmod kasd
                      lorem clita sanctus ut consetetur et. Et duo tempor sea
                      kasd clita ipsum et. Takimata kasd diam justo est eos erat
                      aliquyam et ut.
                    </p>
                  </div>
                </div>
              </div>
              {/* News Detail End */}
              {/* Comment List Start */}
              <div className="bg-light mb-3" style={{ padding: "30px" }}>
                <h3 className="mb-4">3 Comments</h3>
                <div className="media mb-4">
                  <img
                    src="img/user.jpg"
                    alt="Image"
                    className="img-fluid mr-3 mt-1"
                    style={{ width: "45px" }}
                  />
                  <div className="media-body">
                    <h6>
                      <a href>John Doe</a>{" "}
                      <small>
                        <i>01 Jan 2045</i>
                      </small>
                    </h6>
                    <p>
                      Diam amet duo labore stet elitr invidunt ea clita ipsum
                      voluptua, tempor labore accusam ipsum et no at. Kasd diam
                      tempor rebum magna dolores sed sed eirmod ipsum. Gubergren
                      clita aliquyam consetetur sadipscing, at tempor amet ipsum
                      diam tempor consetetur at sit.
                    </p>
                    <button className="btn btn-sm btn-outline-secondary">
                      Reply
                    </button>
                  </div>
                </div>
                <div className="media">
                  <img
                    src="img/user.jpg"
                    alt="Image"
                    className="img-fluid mr-3 mt-1"
                    style={{ width: "45px" }}
                  />
                  <div className="media-body">
                    <h6>
                      <a href>John Doe</a>{" "}
                      <small>
                        <i>01 Jan 2045 at 12:00pm</i>
                      </small>
                    </h6>
                    <p>
                      Diam amet duo labore stet elitr invidunt ea clita ipsum
                      voluptua, tempor labore accusam ipsum et no at. Kasd diam
                      tempor rebum magna dolores sed sed eirmod ipsum. Gubergren
                      clita aliquyam consetetur sadipscing, at tempor amet ipsum
                      diam tempor consetetur at sit.
                    </p>
                    <button className="btn btn-sm btn-outline-secondary">
                      Reply
                    </button>
                    <div className="media mt-4">
                      <img
                        src="img/user.jpg"
                        alt="Image"
                        className="img-fluid mr-3 mt-1"
                        style={{ width: "45px" }}
                      />
                      <div className="media-body">
                        <h6>
                          <a href>John Doe</a>{" "}
                          <small>
                            <i>01 Jan 2045 at 12:00pm</i>
                          </small>
                        </h6>
                        <p>
                          Diam amet duo labore stet elitr invidunt ea clita
                          ipsum voluptua, tempor labore accusam ipsum et no at.
                          Kasd diam tempor rebum magna dolores sed sed eirmod
                          ipsum. Gubergren clita aliquyam consetetur sadipscing,
                          at tempor amet ipsum diam tempor consetetur at sit.
                        </p>
                        <button className="btn btn-sm btn-outline-secondary">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Comment List End */}
              {/* Comment Form Start */}
              <div className="bg-light mb-3" style={{ padding: "30px" }}>
                <h3 className="mb-4">Leave a comment</h3>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input type="url" className="form-control" id="website" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      cols={30}
                      rows={5}
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group mb-0">
                    <input
                      type="submit"
                      defaultValue="Leave a comment"
                      className="btn btn-primary font-weight-semi-bold py-2 px-3"
                    />
                  </div>
                </form>
              </div>
              {/* Comment Form End */}
            </div>
            <div className="col-lg-4 pt-3 pt-lg-0">
              {/* Social Follow Start */}
              <div className="pb-3">
                <div className="bg-light py-2 px-4 mb-3">
                  <h3 className="m-0">Follow Us</h3>
                </div>
                <div className="d-flex mb-3">
                  <a
                    href
                    className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2"
                    style={{ background: "#39569E" }}
                  >
                    <small className="fab fa-facebook-f mr-2" />
                    <small>12,345 Fans</small>
                  </a>
                  <a
                    href
                    className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2"
                    style={{ background: "#52AAF4" }}
                  >
                    <small className="fab fa-twitter mr-2" />
                    <small>12,345 Followers</small>
                  </a>
                </div>
                <div className="d-flex mb-3">
                  <a
                    href
                    className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2"
                    style={{ background: "#0185AE" }}
                  >
                    <small className="fab fa-linkedin-in mr-2" />
                    <small>12,345 Connects</small>
                  </a>
                  <a
                    href
                    className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2"
                    style={{ background: "#C8359D" }}
                  >
                    <small className="fab fa-instagram mr-2" />
                    <small>12,345 Followers</small>
                  </a>
                </div>
                <div className="d-flex mb-3">
                  <a
                    href
                    className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2"
                    style={{ background: "#DC472E" }}
                  >
                    <small className="fab fa-youtube mr-2" />
                    <small>12,345 Subscribers</small>
                  </a>
                  <a
                    href
                    className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2"
                    style={{ background: "#1AB7EA" }}
                  >
                    <small className="fab fa-vimeo-v mr-2" />
                    <small>12,345 Followers</small>
                  </a>
                </div>
              </div>
              {/* Social Follow End */}
              {/* Newsletter Start */}
              <div className="pb-3">
                <div className="bg-light py-2 px-4 mb-3">
                  <h3 className="m-0">Newsletter</h3>
                </div>
                <div className="bg-light text-center p-4 mb-3">
                  <p>
                    Aliqu justo et labore at eirmod justo sea erat diam dolor
                    diam vero kasd
                  </p>
                  <div className="input-group" style={{ width: "100%" }}>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Your Email"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary">Sign Up</button>
                    </div>
                  </div>
                  <small>Sit eirmod nonumy kasd eirmod</small>
                </div>
              </div>
              {/* Newsletter End */}
              {/* Ads Start */}
              <div className="mb-3 pb-3">
                <a href>
                  <img
                    className="img-fluid"
                    src="img/news-500x280-4.jpg"
                    alt=""
                  />
                </a>
              </div>
              {/* Ads End */}
              {/* Popular News Start */}
              <div className="pb-3">
                <div className="bg-light py-2 px-4 mb-3">
                  <h3 className="m-0">Tranding</h3>
                </div>
                <div className="d-flex mb-3">
                  <img
                    src="img/news-100x100-1.jpg"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                    style={{ height: "100px" }}
                  >
                    <div className="mb-1" style={{ fontSize: "13px" }}>
                      <a href>Technology</a>
                      <span className="px-1">/</span>
                      <span>January 01, 2045</span>
                    </div>
                    <a className="h6 m-0" href>
                      Lorem ipsum dolor sit amet consec adipis elit
                    </a>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <img
                    src="img/news-100x100-2.jpg"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                    style={{ height: "100px" }}
                  >
                    <div className="mb-1" style={{ fontSize: "13px" }}>
                      <a href>Technology</a>
                      <span className="px-1">/</span>
                      <span>January 01, 2045</span>
                    </div>
                    <a className="h6 m-0" href>
                      Lorem ipsum dolor sit amet consec adipis elit
                    </a>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <img
                    src="img/news-100x100-3.jpg"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                    style={{ height: "100px" }}
                  >
                    <div className="mb-1" style={{ fontSize: "13px" }}>
                      <a href>Technology</a>
                      <span className="px-1">/</span>
                      <span>January 01, 2045</span>
                    </div>
                    <a className="h6 m-0" href>
                      Lorem ipsum dolor sit amet consec adipis elit
                    </a>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <img
                    src="img/news-100x100-4.jpg"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                    style={{ height: "100px" }}
                  >
                    <div className="mb-1" style={{ fontSize: "13px" }}>
                      <a href>Technology</a>
                      <span className="px-1">/</span>
                      <span>January 01, 2045</span>
                    </div>
                    <a className="h6 m-0" href>
                      Lorem ipsum dolor sit amet consec adipis elit
                    </a>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <img
                    src="img/news-100x100-5.jpg"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                    style={{ height: "100px" }}
                  >
                    <div className="mb-1" style={{ fontSize: "13px" }}>
                      <a href>Technology</a>
                      <span className="px-1">/</span>
                      <span>January 01, 2045</span>
                    </div>
                    <a className="h6 m-0" href>
                      Lorem ipsum dolor sit amet consec adipis elit
                    </a>
                  </div>
                </div>
              </div>
              {/* Popular News End */}
              {/* Tags Start */}
              <div className="pb-3">
                <div className="bg-light py-2 px-4 mb-3">
                  <h3 className="m-0">Tags</h3>
                </div>
                <div className="d-flex flex-wrap m-n1">
                  <a href className="btn btn-sm btn-outline-secondary m-1">
                    Politics
                  </a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">
                    Business
                  </a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">
                    Corporate
                  </a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">
                    Sports
                  </a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">
                    Health
                  </a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">
                    Education
                  </a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">
                    Science
                  </a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">
                    Technology
                  </a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">
                    Foods
                  </a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">
                    Entertainment
                  </a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">
                    Travel
                  </a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">
                    Lifestyle
                  </a>
                </div>
              </div>
              {/* Tags End */}
            </div>
          </div>
        </div>
      </div>
      {/* News With Sidebar End */}
    </>
  );
}

export default News;
