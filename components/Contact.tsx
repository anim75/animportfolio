export default function Contact() {
  return (
    <>
<section id="contact">
  <div className="wrap">
    <div className="cta-big rv">
      
      <h2 style={{"marginTop": "22px"}}>Let's Build<br /><span className="gtext">Something Remarkable</span></h2>
      <p>Whether it's a product strategy, AI automation, or growth system — I'm ready to turn your idea into impact. Open to product roles, consulting, and collaboration.</p>
      <div className="ctas"><a href="#cform" className="btn btn-glow mag">Send Me a Message <span className="ar">→</span></a><button className="btn btn-ghost mag" data-cv="">View CV <span className="ar">↗</span></button></div>
    </div>
    <div className="contact">
      <div className="cbox rv">
        <div className="me"><span className="hs"></span><div><b>Tanjim Imtial</b><small>Product Manager · MoMagic Bangladesh Ltd. · Edison Communication Ltd. — Edison Group</small></div></div>
        <div className="links">
          <a className="lk" href="https://bd.linkedin.com/in/tanjim-imtial-8036491a6" target="_blank" rel="noopener"><span className="li2" style={{"background": "#0a66c2"}}><svg viewBox="0 0 24 24"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm1.8 13.1H3.5V9h3.6v11.5z" /></svg></span><div><b>LinkedIn</b><small>in/tanjim-imtial</small></div><span className="go">↗</span></a>
          <a className="lk" href="https://github.com/anim75/" target="_blank" rel="noopener"><span className="li2" style={{"background": "#24292f"}}><svg viewBox="0 0 24 24"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" /></svg></span><div><b>GitHub</b><small>github.com/anim75</small></div><span className="go">↗</span></a>
          <div className="lk"><span className="li2" style={{"background": "linear-gradient(135deg,#4796e3,#ca6673)"}}><svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg></span><div><b>Email</b><small>tanjimimtial5@gmail.com</small></div><button className="copy" data-copy="tanjimimtial5@gmail.com">Copy</button></div>
          <a className="lk" href="tel:+8801700705297"><span className="li2" style={{"background": "linear-gradient(135deg,#34d399,#22d3ee)"}}><svg viewBox="0 0 24 24"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" /></svg></span><div><b>Phone</b><small>01700 705 297</small></div><span className="go">↗</span></a>
        </div>
      </div>
      <div className="cbox rv d1">
        <h3 style={{"fontFamily": "var(--disp)", "fontWeight": "600", "fontSize": "24px", "marginBottom": "18px"}}>Send a message</h3>
        <form id="cform">
          <div className="f"><input id="fn" placeholder=" " required /><label htmlFor="fn">Your name</label></div>
          <div className="f"><input id="fe" type="email" placeholder=" " required /><label htmlFor="fe">Your email</label></div>
          <div className="f"><input id="fs" placeholder=" " /><label htmlFor="fs">Subject — role, consulting, collab…</label></div>
          <div className="f"><textarea id="fm" placeholder=" " required></textarea><label htmlFor="fm">Tell me about the product</label></div>
          <button className="btn btn-solid mag" type="submit" style={{"width": "100%", "justifyContent": "center"}}><span className="shine"></span>Compose Message <span className="ar">→</span></button>
          <div className="fmsg" id="fmsg"></div>
        </form>
      </div>
    </div>
  </div>
</section>

<button id="upbtn" aria-label="Back to top"><svg viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7" /></svg></button>
    </>
  );
}
