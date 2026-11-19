export default function Modals() {
  return (
    <>
<div className="modal" id="cvm" aria-hidden="true"><div className="sh" data-close=""></div>
  <div className="sheet" role="dialog" aria-label="Tanjim Imtial CV">
    <div className="cvbar"><span className="hs"></span><div><b>Tanjim Imtial — CV</b><small>Product Manager · DCB, Telco &amp; Digital Products</small></div><span className="sp2"></span><a className="btn btn-solid" href="/assets/Tanjim_Imtial_CV.pdf" target="_blank" rel="noopener" download><span className="t">Download</span> PDF ↓</a><button className="cvx" data-close="" aria-label="Close">×</button></div>
    <div className="cvbody"><img src="/assets/cv-tanjim-imtial.jpg" alt="Tanjim Imtial CV" /></div>
  </div>
</div>
<div className="modal" id="ipop" aria-hidden="true"><div className="sh" data-iclose=""></div><div className="card" role="dialog" aria-label="Idea received"><span className="big" id="ipe">🚀</span><h3 id="iph">Thank you!</h3><p id="ipp"></p><div className="stamps" id="ips"></div><button className="btn btn-glow mag" data-iclose="">Back to the lab <span className="ar">→</span></button><div className="sig3">Tanjim Imtial</div></div></div>
    </>
  );
}
