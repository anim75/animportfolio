export default function Showcase() {
  return (
    <>
<section id="showcase">
  <div className="wrap">
    <div className="shead"><h2 className="h2 split">Watch the <span className="gtext">products move</span>.</h2><p className="lead rv">Real walkthroughs and demos of the products I've shipped. Pick one, scrub, change speed or go fullscreen.</p></div>
    <div className="vp-wrap rv">
      <div className="vpo"><div className="vp" id="vp">
        <canvas id="vcan" width="1280" height="720"></canvas><video id="vvid" playsInline preload="metadata"></video>
        <div className="vtitle"><span className="av"></span><div><b id="vtt">QuizMuiz</b><small id="vts">Tanjim Imtial · Product Showcase</small></div></div>
        <button className="bigplay" id="bigplay" aria-label="Play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></button>
        <div className="vtoast" id="vtoast"></div>
        <div className="ctrl">
          <div className="seek" id="seek"><div className="rail"><div className="fill" id="vfill"></div></div><div className="knob" id="vknob"></div><div className="tip" id="vtip">0:00</div></div>
          <div className="crow">
            <button className="cb" id="vplay" aria-label="Play/Pause"><svg viewBox="0 0 24 24"><path id="vpicon" d="M8 5v14l11-7z" /></svg></button>
            <button className="cb" id="vback" aria-label="Back 5 seconds"><svg viewBox="0 0 24 24"><path d="M11 18V6l-8.5 6 8.5 6zm.5-6 8.5 6V6l-8.5 6z" /></svg></button>
            <button className="cb" id="vfwd" aria-label="Forward 5 seconds"><svg viewBox="0 0 24 24"><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" /></svg></button>
            <div className="vgrp" style={{"display": "flex", "alignItems": "center"}}><button className="cb" id="vmute" aria-label="Mute"><svg viewBox="0 0 24 24"><path id="vmicon" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4z" /></svg></button><div className="vol"><input type="range" id="vvol" min="0" max="1" step=".05" defaultValue=".8" aria-label="Volume" /></div></div>
            <span className="vtime" id="vtime">0:00 / 0:30</span><span style={{"flex": "1"}}></span>
            <button className="spd" id="vspd">1×</button>
            <button className="cb" id="vfs" aria-label="Fullscreen"><svg viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" /></svg></button>
          </div>
        </div>
      </div></div>
      <div className="plist" id="plist"><div className="ph2"><b style={{"color": "var(--tx)"}}>Up next</b><span id="pcount"></span></div></div>
    </div>
  </div>
</section>
    </>
  );
}
