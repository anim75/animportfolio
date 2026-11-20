export default function Products() {
  return (
    <>
<section id="products">
  <div className="wrap">
    <div className="shead"><h2 className="h2 split">Products I've <span className="gtext">built &amp; scaled</span>.</h2><p className="lead rv">Live platforms across AI, telecom billing, kids' edutainment, short-form drama, quizzes and gaming — each solving a real problem.</p></div>
    <div className="pfil rv"><div className="filters" id="filters"><button className="on" data-f="all">All <sup id="fc-all"></sup></button><button data-f="live">Live</button><button data-f="ai">AI</button><button data-f="ml">ML</button><button data-f="dev">Dev</button></div></div>
    <div className="swh mo">Swipe<i></i></div><div className="bento xs" id="bento"></div>
  </div>
</section>
    </>
  );
}
