export default function IdeaLab() {
  return (
    <>
<section id="ideas">
  <div className="wrap">
    <div className="shead"><span className="eyebrow rv"><b></b>12 · Your turn</span><h2 className="h2 split">Share your <span className="gtext">innovation</span> &amp; product idea.</h2><p className="lead rv">Drop your idea in 30 seconds. Your name goes on the board — the idea stays locked.</p></div>
    <div className="lab2">
      <form className="ibox rv" id="iform" autoComplete="off">
        <div className="ihead"><b>Pitch it <span className="gtext">fast</span></b><span className="pbar"><i id="pfill"></i></span><span className="ppct" id="ppct">0%</span><span className="prk" id="prk">🚀</span></div>
        <div className="g2"><div className="f"><input id="inm" placeholder=" " maxLength={40} required /><label htmlFor="inm">Your name</label></div><div className="f"><input id="ipd" placeholder=" " maxLength={60} required /><label htmlFor="ipd">Product / service</label></div></div>
        <select id="iind" className="selfull" required aria-label="Industry"><option value="">Industry</option></select>
        <div className="f"><textarea id="ipt" placeholder=" " maxLength={400} rows={2} required></textarea><label htmlFor="ipt">What problem does it solve? (main scope)</label></div>
        <p className="inote2">🌍 <b>Could it change the world?</b> We'd love to develop it — and invest.</p>
        <button className="btn btn-glow launch mag" id="ilaunch" type="submit">Launch my idea <span className="rk">🚀</span></button>
        <div className="imode" id="imode"></div>
      </form>
      <div className="board rv d1">
        <div className="bhead"><h3>Innovator <span className="gtext">Board</span></h3><div className="bcount"><span className="live2"></span><b id="icount">0</b> ideas launched</div></div>
        <div id="bwrap"></div><div className="pager" id="pager"></div>
        <div className="ltip" id="ltip">🔒 Locked — only Tanjim can open this</div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
