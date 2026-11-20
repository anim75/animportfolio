export default function SiteChrome() {
  return (
    <>
<div id="loader"><div className="ld"><div className="ln"><span className="gtext">Tanjim Imtial</span></div><div className="lc"><span id="lcount">0</span>% · PRODUCT MANAGER</div><div className="lb"><i id="lbar"></i></div></div></div>
<div id="prog"></div><div id="cur"></div><div id="curd"></div><div id="glow"></div><div id="toast"></div>
<svg width="0" height="0" style={{"position": "absolute"}}><defs><linearGradient id="og" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#4796e3" /><stop offset=".5" stopColor="#9177c7" /><stop offset="1" stopColor="#ca6673" /></linearGradient><linearGradient id="xpg" x1="0" x2="1"><stop offset="0" stopColor="#4796e3" /><stop offset=".5" stopColor="#9177c7" /><stop offset="1" stopColor="#f5b14c" /></linearGradient></defs></svg>

<nav id="nav">
  <a href="#hero" className="logo"><span className="mk av"><img src="/assets/avatar.jpg" alt="Tanjim Imtial" /></span><span className="nm">Tanjim Imtial</span></a>
  <div className="menu" id="menu"><span className="pill" id="pill"></span>
    <a href="#about">About</a>
    <a href="#experience">Experience</a>
    <div className="dd"><button className="ddb" type="button">Process <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M2.5 4.5 6 8l3.5-3.5" /></svg></button><div className="ddm">
      <a href="#flow"><i>🔁</i><span><b>How a PM works</b><small>The product growth loop</small></span></a>
      <a href="#how"><i>🛠</i><span><b>How I work</b><small>Six phases + live sprint board</small></span></a>
      <a href="#tools"><i>🧰</i><span><b>Toolkit</b><small>Tools I use daily</small></span></a>
    </div></div>
    <div className="dd"><button className="ddb" type="button">Work <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M2.5 4.5 6 8l3.5-3.5" /></svg></button><div className="ddm">
      <a href="#products"><i>🚀</i><span><b>Products</b><small>Live platforms I've built &amp; scaled</small></span></a>
      <a href="#showcase"><i>🎬</i><span><b>Showcase</b><small>Product walkthrough reels</small></span></a>
      <a href="#games"><i>🎮</i><span><b>Games</b><small>10 HTML5 games on XoshPlay</small></span></a>
      <a href="#indev"><i>🧪</i><span><b>Building next</b><small>What's cooking now</small></span></a>
      <a href="#metrics"><i>📊</i><span><b>Impact</b><small>The numbers so far</small></span></a>
      <a href="#with"><i>🤝</i><span><b>Worked with</b><small>Brands &amp; campaigns</small></span></a>
    </div></div>
    <a href="#ideas">Idea Lab</a>
    <a href="#contact">Contact</a>
  </div>
  <div className="nr">
    <button className="tog" id="tog" aria-label="Switch colour theme"><svg className="moon" viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" /></svg><svg className="sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5" /><g stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></g></svg></button>
    <button className="btn btn-glow btn-hire mag" data-cv="" aria-label="Hire Me, view CV"><span><span className="cvemo" aria-hidden="true">🎓</span></span><span className="t">Hire Me</span></button>
    <button className="burger" id="burger" aria-label="Menu"><i></i><i></i><i></i></button>
  </div>
</nav>
<div id="mnavbg"></div>
<aside id="mnav" aria-label="Menu">
  <div className="grp"><small>Who</small><div><a href="#hero"><span className="ic">🏠</span>Home</a><a href="#about"><span className="ic">👋</span>About</a><a href="#metrics"><span className="ic">📈</span>Impact</a><a href="#experience"><span className="ic">💼</span>Experience</a></div></div>
  <div className="grp"><small>How</small><div><a href="#tools"><span className="ic">🧰</span>Toolkit</a><a href="#flow"><span className="ic">🔁</span>How a PM works</a><a href="#how"><span className="ic">🧭</span>How I work</a></div></div>
  <div className="grp"><small>Work</small><div><a href="#products"><span className="ic">🚀</span>Products</a><a href="#showcase"><span className="ic">🎬</span>Showcase</a><a href="#games"><span className="ic">🎮</span>Games</a><a href="#indev"><span className="ic">🛠️</span>Building next</a><a href="#with"><span className="ic">🤝</span>Brands</a></div></div>
  <div className="grp"><small>You</small><div><a href="#ideas"><span className="ic">💡</span>Idea Lab</a><a href="#contact"><span className="ic">✉️</span>Contact</a></div></div>
  <div className="mfoot"><button className="btn btn-solid" data-cv=""><span className="cvemo" aria-hidden="true">🎓</span> Hire Me</button><button className="btn btn-ghost" data-cv="">View CV ↗</button></div>
</aside>
    </>
  );
}
