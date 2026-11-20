/* Client behaviour for the portfolio: animations, theme, player, Idea Lab, etc. */
(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const isTouch=matchMedia('(hover:none)').matches,small=innerWidth<760,reduce=matchMedia('(prefers-reduced-motion:reduce)').matches,root=document.documentElement;
$('#yr').textContent=new Date().getFullYear();
let tt;const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),2200)};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

(()=>{let n=0;const iv=setInterval(()=>{n=Math.min(100,n+Math.ceil(Math.random()*9));$('#lcount').textContent=n;$('#lbar').style.width=n+'%';if(n>=100){clearInterval(iv);setTimeout(()=>{$('#loader').classList.add('done');$('#heroH').classList.add('in');setTimeout(()=>$('#sig1')?.classList.add('go'),1000)},250)}},40)})();

$$('.split').forEach(el=>{const walk=n=>{[...n.childNodes].forEach(ch=>{if(ch.nodeType===3){const f=document.createDocumentFragment();ch.textContent.split(/(\s+)/).forEach(w=>{if(!w)return;if(/^\s+$/.test(w)){f.appendChild(document.createTextNode(w));return}const o=document.createElement('span');o.className='w';const i=document.createElement('span');i.textContent=w;o.appendChild(i);f.appendChild(o)});ch.replaceWith(f)}else if(ch.nodeType===1&&ch.tagName!=='BR')walk(ch)})};walk(el);el.querySelectorAll('.w>span').forEach((s,i)=>s.style.transitionDelay=(i*.06)+'s')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});

const themeL=[];const setTheme=t=>{root.dataset.theme=t;try{localStorage.setItem('ti_theme3',t)}catch(e){}themeL.forEach(f=>f(t))};
$('#tog').addEventListener('click',e=>{const nx=root.dataset.theme==='dark'?'light':'dark';
 if(document.startViewTransition&&!reduce){const x=e.clientX,y=e.clientY,r=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));const vt=document.startViewTransition(()=>setTheme(nx));vt.ready.then(()=>root.animate({clipPath:[`circle(0 at ${x}px ${y}px)`,`circle(${r}px at ${x}px ${y}px)`]},{duration:700,easing:'cubic-bezier(.7,0,.2,1)',pseudoElement:'::view-transition-new(root)'})).catch(()=>{})}else setTheme(nx)});


let mx=innerWidth/2,my=innerHeight/2;
if(!isTouch){const cur=$('#cur'),dot=$('#curd'),glow=$('#glow');let cx=mx,cy=my,gx=mx,gy=my;
 addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`});
 (function l(){cx+=(mx-cx)*.18;cy+=(my-cy)*.18;gx+=(mx-gx)*.06;gy+=(my-gy)*.06;cur.style.transform=`translate(${cx}px,${cy}px) translate(-50%,-50%)`;glow.style.left=gx+'px';glow.style.top=gy+'px';requestAnimationFrame(l)})();
 document.addEventListener('mouseover',e=>{if(e.target.closest('a,button,.gcard,.onode,[contenteditable]'))cur.classList.add('big')});
 document.addEventListener('mouseout',e=>{if(e.target.closest('a,button,.gcard,.onode,[contenteditable]'))cur.classList.remove('big')});
 document.addEventListener('mousemove',e=>{const m=e.target.closest('.mag');if(!m)return;const r=m.getBoundingClientRect();m.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.22}px,${(e.clientY-r.top-r.height/2)*.32}px)`});
 document.addEventListener('mouseout',e=>{const m=e.target.closest('.mag');if(m&&!m.contains(e.relatedTarget))m.style.transform=''});}

(()=>{const nav=$('#nav'),menu=$('#menu'),pill=$('#pill');let ly=0,act=null;
 const tops=[...menu.children].filter(e=>e!==pill).map(e=>e.classList.contains('dd')?e.querySelector('.ddb'):e);
 const setPill=a=>{if(!a){pill.style.opacity=0;return}const r=a.getBoundingClientRect(),m=menu.getBoundingClientRect();pill.style.opacity=1;pill.style.left=(r.left-m.left)+'px';pill.style.width=r.width+'px'};
 tops.forEach(a=>a.addEventListener('mouseenter',()=>setPill(a)));menu.addEventListener('mouseleave',()=>setPill(act));
 const map={};menu.querySelectorAll('a[href^="#"]').forEach(a=>{const d=a.closest('.dd');map[a.getAttribute('href').slice(1)]=d?d.querySelector('.ddb'):a});
 const secs=$$('section[id]');
 addEventListener('scroll',()=>{const y=scrollY;nav.classList.toggle('hide',y>ly&&y>400&&!$('#mnav').classList.contains('open')&&!menu.querySelector('.dd.open'));ly=y;$('#prog').style.width=(y/(document.documentElement.scrollHeight-innerHeight)*100)+'%';
  let id='hero';secs.forEach(s=>{if(s.getBoundingClientRect().top<innerHeight*.4)id=s.id});act=map[id]||null;tops.forEach(t=>t.classList.toggle('on',t===act));if(!menu.matches(':hover'))setPill(act)},{passive:true});
 $$('.dd').forEach(d=>{d.querySelector('.ddb').addEventListener('click',e=>{e.stopPropagation();const o=d.classList.contains('open');$$('.dd').forEach(x=>x.classList.remove('open'));if(!o)d.classList.add('open')});d.querySelectorAll('.ddm a').forEach(a=>a.addEventListener('click',()=>d.classList.remove('open')))});
 document.addEventListener('click',()=>$$('.dd').forEach(x=>x.classList.remove('open')));addEventListener('keydown',e=>{if(e.key==='Escape')$$('.dd').forEach(x=>x.classList.remove('open'))});
 const b=$('#burger'),mn=$('#mnav'),bg=$('#mnavbg');const setM=o=>{b.classList.toggle('x',o);mn.classList.toggle('open',o);bg.classList.toggle('open',o);document.body.classList.toggle('mlock',o)};b.onclick=()=>setM(!mn.classList.contains('open'));bg.onclick=()=>setM(false);addEventListener('keydown',e=>{if(e.key==='Escape')setM(false)});$$('#mnav a,#mnav .mfoot .btn').forEach(a=>a.addEventListener('click',()=>setM(false)))})();

(()=>{const m=$('#cvm');const op=()=>{m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'};const cl=()=>{m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.style.overflow=''};
 $$('[data-cv]').forEach(b=>b.addEventListener('click',op));$$('#cvm [data-close]').forEach(b=>b.addEventListener('click',cl));addEventListener('keydown',e=>{if(e.key==='Escape'){cl();$('#ipop').classList.remove('open')}})})();

(()=>{const hero=$('#hero'),st=$('#st3'),scene=$('#scene'),L=[...scene.querySelectorAll('.ly')].reverse(),F=$$('.fz'),hl=$('.hleft'),shine=scene.querySelector('.shine3');
 // base pose per layer: [x%, y%, z, rot, scale]  (L[0]=front)
 const B=[[0,0,0,0,1],[26,-9,-110,8,.9],[-26,-15,-220,-10,.84]];const FZ=[160,120,80,140];
 let tx=0,ty=0,px=0,py=0;const t0=performance.now();
 if(!isTouch){hero.addEventListener('mousemove',e=>{tx=e.clientX/innerWidth-.5;ty=e.clientY/innerHeight-.5});hero.addEventListener('mouseleave',()=>{tx=ty=0})}
 (function l(t){if(isTouch){const k=(t-t0)/1000;tx=Math.sin(k*.6)*.22;ty=Math.cos(k*.5)*.14}px+=(tx-px)*.07;py+=(ty-py)*.07;
  const sp=Math.min(1,scrollY/innerHeight);const fan=1+sp*1.6;
  scene.style.transform=`rotateY(${px*26-sp*10}deg) rotateX(${-py*18+sp*8}deg) translateY(${sp*60}px)`;
  L.forEach((ly,i)=>{const b=B[i];ly.style.transform=`translate(${b[0]*fan+px*i*6}%,${b[1]*fan+py*i*4}%) translateZ(${b[2]*fan}px) rotate(${b[3]*fan}deg) scale(${b[4]})`;
   ly.querySelector('img').style.transform=`scale(1.2) translate(${-px*(14-i*5)}px,${-py*(14-i*5)}px)`});
  F.forEach((f,i)=>{f.style.transform=`translateZ(${FZ[i]*(1+sp)}px) translate(${px*FZ[i]*.12}px,${py*FZ[i]*.12}px)${f.classList.contains('f3')?' translateX(-50%)':''}`});
  shine.style.setProperty('--sx',(50+px*120)+'%');shine.style.setProperty('--sy',(30+py*120)+'%');
  hl.style.transform=`translate(${px*12}px,${py*8-scrollY*.12}px)`;requestAnimationFrame(l)})(t0)})();

(()=>{if(typeof THREE==='undefined'||reduce)return;const cv=$('#bg3d');const r=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true});r.setPixelRatio(Math.min(devicePixelRatio,1.6));
 const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(60,1,1,2000);cam.position.set(0,140,520);
 const NX=small?60:110,NZ=small?40:70,G=14;const pos=new Float32Array(NX*NZ*3),col=new Float32Array(NX*NZ*3);
 let k=0;for(let i=0;i<NX;i++)for(let j=0;j<NZ;j++){pos[k*3]=(i-NX/2)*G;pos[k*3+2]=(j-NZ/2)*G;k++}
 const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(pos,3));geo.setAttribute('color',new THREE.BufferAttribute(col,3));
 const pal={dark:['#4796e3','#9177c7','#ca6673','#22d3ee'],light:['#6b4ed6','#9177c7','#ca6673','#4796e3']};
 const paint=t=>{const c=pal[t].map(x=>new THREE.Color(x));let q=0;for(let i=0;i<NX;i++)for(let j=0;j<NZ;j++){const f=i/NX*3,a=Math.floor(f),b=Math.min(3,a+1);const cc=c[a].clone().lerp(c[b],f-a);col[q*3]=cc.r;col[q*3+1]=cc.g;col[q*3+2]=cc.b;q++}geo.attributes.color.needsUpdate=true};
 const tex=(()=>{const c=document.createElement('canvas');c.width=c.height=64;const g=c.getContext('2d');const gr=g.createRadialGradient(32,32,0,32,32,32);gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(.3,'rgba(255,255,255,.6)');gr.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=gr;g.fillRect(0,0,64,64);return new THREE.CanvasTexture(c)})();
 const mat=new THREE.PointsMaterial({size:5,vertexColors:true,map:tex,transparent:true,depthWrite:false});
 const apply=t=>{paint(t);mat.blending=t==='dark'?THREE.AdditiveBlending:THREE.NormalBlending;mat.opacity=t==='dark'?.85:.5;mat.needsUpdate=true};apply(root.dataset.theme);themeL.push(apply);
 const pts=new THREE.Points(geo,mat);pts.position.y=-120;sc.add(pts);
 const kn=new THREE.Mesh(new THREE.TorusKnotGeometry(60,16,180,16,2,3),new THREE.MeshBasicMaterial({color:0x9177c7,wireframe:true,transparent:true,opacity:.12}));kn.position.set(small?0:-330,120,-200);sc.add(kn);
 const size=()=>{const w=cv.clientWidth,h=cv.clientHeight;r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()};size();addEventListener('resize',size);
 let vis=true;new IntersectionObserver(e=>vis=e[0].isIntersecting).observe($('#hero'));const ts=performance.now();
 (function l(){requestAnimationFrame(l);if(!vis)return;const t=(performance.now()-ts)/1000,p=geo.attributes.position.array;let q=0;
  for(let i=0;i<NX;i++)for(let j=0;j<NZ;j++){p[q*3+1]=Math.sin(i*.18+t*1.2)*18+Math.cos(j*.22+t*.9)*18+Math.sin((i+j)*.08+t*.6)*10;q++}geo.attributes.position.needsUpdate=true;
  cam.position.x+=((mx/innerWidth-.5)*160-cam.position.x)*.03;cam.position.y+=(140-(my/innerHeight-.5)*60-cam.position.y)*.03;cam.lookAt(0,0,0);pts.rotation.y=t*.03;kn.rotation.x=t*.2;kn.rotation.y=t*.15;r.render(sc,cam)})()})();

(()=>{const B=[["Grameenphone", "Telecom", "grameenphone", "#fff"], ["Robi", "Telecom", "robi", "#fff"], ["Cirkle", "Telecom", "cirkle", "#fff"], ["Banglalink", "Telecom", "banglalink", "#fff"], ["bKash", "Fintech", "bkash", "#fff"], ["Prime Bank", "Banking", "primebank", "#fff"], ["Trust Bank", "Banking", "tbl", "#fff"], ["Symphony", "Brand", "symphony", "#fff"], ["Helio", "Brand", "helio", "#004542"], ["Edison Group", "Corp", "edisongroup", "#005fac"], ["Edison Electronics", "Brand", "edisonelec", "#fff"], ["Edison Properties", "Corp", "edisonprop", "#fff"], ["Bosch", "Brand", "bosch", "#fff"], ["Berger", "Brand", "berger", "#fff"], ["10 Minute School", "EdTech", "10ms", "#fff"], ["Army Welfare Trust", "Org", "awt", "#fff"], ["AWT Business Division", "Org", "awt", "#fff"], ["Tail G Bike", "Brand", "tailg", "#fff"], ["GPS", "Real Estate", "gps", "#fff"], ["Meat Theory", "Food", "meattheory", "#881b15"], ["Pixeltub Games", "Gaming", "pixeltub", "#199bff"], ["Horizon Communications", "Agency", "horizon", "#f7e03a"], ["Softvence", "Agency", "softvence", "#fff"], ["Sketchboard", "Design", "sketchboard", "#000"], ["Lumas Creative", "Agency", "lumas", "#0e161b"], ["Ludas", "Lifestyle", "ludas", "#000"], ["NSU ACM", "Tech", "nsuacm", "#fff"], ["Orkmanza", "Platform", "orkmanza", "#fff"], ["Millyracks", "Brand", "", ""], ["On & On", "Brand", "", ""], ["Roottop Ltd", "Agency", "", ""], ["Dawat", "Product", "", ""], ["PetDekho", "Product", "", ""]];
 const C=[['#4796e3','#9177c7'],['#ca6673','#f5b14c'],['#22d3ee','#4796e3'],['#9177c7','#ca6673'],['#34d399','#22d3ee'],['#f5b14c','#ca6673']];
 const card=(b,i)=>{const c=C[i%6];const ini=b[0].replace(/[^A-Za-z0-9 ]/g,'').split(' ').filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase();const lg=b[2];
  return `<div class="bcard"><span class="blg ${lg?'img':''}" style="${lg?`background:${b[3]}`:`background:linear-gradient(135deg,${c[0]},${c[1]})`}">${lg?`<img src="/assets/brands/${lg}.png" alt="${esc(b[0])} logo">`:ini}</span><b>${esc(b[0])}</b><small>${b[1]}</small></div>`};
 const LG=B.filter(b=>b[2]),NL=B.filter(b=>!b[2]),hl=Math.ceil(LG.length/2),hn=Math.ceil(NL.length/2),half=hl+hn,rows=[LG.slice(0,hl),LG.slice(hl)];
 const g=$('#wwgrid');g.className='wwm';const pill=b=>`<span class="bpill"><i></i>${esc(b[0])}<small>${b[1]}</small></span>`;let pl=NL.map(pill).join('');while(NL.length&&NL.length*3<12&&pl.length<4000)pl+=NL.map(pill).join('');g.innerHTML=rows.map((r,ri)=>{const items=r.map((b,i)=>card(b,i+ri*half)).join('');return `<div class="wtrack ${ri?'rev':''}"><div class="wbelt">${items}${items}</div></div>`}).join('')+(NL.length?`<div class="wtrack wmore"><div class="wbelt">${pl}${pl}</div></div>`:'');
 $$('#wwgrid .wtrack').forEach(tr=>[...tr.querySelectorAll('.bcard')].forEach((t,i)=>t.style.setProperty('--d',Math.min(i,14)*0.08+'s')));
 new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){g.classList.add('go');o.disconnect()}},{threshold:.15}).observe(g)})();

(()=>{const M=[['1','M+','People Connected','big'],['500','K+','Monthly Web Visitors','big'],['40','+','Products Built & Managed'],['200','+','Features Delivered'],['30','+','MVPs & Prototypes Developed'],['0.35','','Cost Per Acquisition (CPA)','','$'],['25','+','Marketing Campaigns Executed'],['25','+','Third-Party Integrations Delivered'],['100','+','PRDs & Product Documents Created'],['15','+','AI-Powered Solutions Explored'],['8','+','Industries Served'],['100','+','User Journeys Designed']];
 const sp=()=>{let d='M0 22';for(let i=1;i<=10;i++)d+=` L${i*8} ${22-i*1.6-Math.random()*6}`;return `<svg class="spk" width="80" height="26" viewBox="0 0 80 26"><path d="${d}" fill="none" stroke="url(#og)" stroke-width="2" stroke-linecap="round"/></svg>`};
 let h=M.map((m,i)=>`<div class="metric rv ${m[3]||''}"><div class="idx"><span>${String(i+1).padStart(2,'0')}</span><span>●</span></div><div><div class="n ${m[3]?'gtext':''}"><span class="cnt" data-to="${m[0]}" data-dec="${m[0].includes('.')?2:0}" data-pre="${m[4]||''}" data-suf="${m[1]}">0</span></div><div class="l">${m[2]}</div></div>${sp()}</div>`).join('');
 h+=`<div class="metric rv secret" id="secret"><div class="idx"><span>13</span><span class="lock">🔒 CLASSIFIED</span></div><div class="sec-in"><div class="emo"><span class="e1">😊</span><span class="e2">😉</span></div><div><div class="l" style="margin:0 0 4px">Revenue Generated</div><div class="secret-pop">It's a secret 🤫<small>the numbers smile back — ask me in the interview</small></div></div></div></div>`;
 $('#mgrid').innerHTML=h;const s=$('#secret');let shown=false;
 const burst=()=>{['✨','💰','🤫','⭐','💸','✨','🎉'].forEach((e,i)=>{const c=document.createElement('span');c.className='conf';c.textContent=e;const a=i/7*Math.PI*2;c.style.cssText=`left:40px;top:40px;--dx:${Math.cos(a)*120}px;--dy:${Math.sin(a)*90-40}px`;s.appendChild(c);setTimeout(()=>c.remove(),1300)})};
 new IntersectionObserver(e=>{if(e[0].isIntersecting&&!shown){shown=true;setTimeout(()=>{s.classList.add('on');burst()},1400)}},{threshold:.6}).observe(s);
 s.onclick=()=>{s.classList.remove('on');setTimeout(()=>{s.classList.add('on');burst()},500)};
 $$('.metric').forEach(m=>m.addEventListener('mousemove',e=>{const r=m.getBoundingClientRect();m.style.setProperty('--mx',e.clientX-r.left+'px');m.style.setProperty('--my',e.clientY-r.top+'px')}))})();
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;cio.unobserve(el);const to=parseFloat(el.dataset.to),dec=+(el.dataset.dec||0),pre=el.dataset.pre||'',suf=el.dataset.suf||'';const t0=performance.now();(function f(t){const p=Math.min(1,(t-t0)/1800);el.textContent=pre+(to*(1-Math.pow(1-p,4))).toFixed(dec)+suf;if(p<1)requestAnimationFrame(f)})(t0)}),{threshold:.5});

(()=>{const S=[['🔍','Discovery','Market research & user insights'],['🧭','Strategy','Vision, roadmap & KPIs'],['🎨','Design','UX, prototyping & validation'],['⚙️','Build','Agile sprints & execution'],['🚀','Launch','GTM strategy & campaigns'],['📊','Measure','Analytics & performance data'],['🔁','Iterate','Optimize, A/B test & repeat']];
 const o=$('#orbit'),st=$('#pmsteps');let cur=0,tm;
 S.forEach((s,i)=>{const a=-Math.PI/2+i/S.length*Math.PI*2;const n=document.createElement('button');n.className='onode';n.style.left=(50+40*Math.cos(a))+'%';n.style.top=(50+40*Math.sin(a))+'%';n.innerHTML=`<div><span class="oi">${s[0]}</span>${s[1]}</div>`;n.onclick=()=>{go(i);rs()};o.appendChild(n);
  const d=document.createElement('div');d.className='pms';d.innerHTML=`<span class="k">0${i+1}</span><div style="flex:1"><h5>${s[1]}</h5><p>${s[2]}</p><div class="bar"><i></i></div></div>`;d.onclick=()=>{go(i);rs()};st.appendChild(d)});
 const nodes=$$('.onode'),rows=$$('.pms');
 function go(i){cur=i;nodes.forEach((n,j)=>n.classList.toggle('on',j===i));rows.forEach((r,j)=>{r.classList.toggle('on',j===i);const b=r.querySelector('.bar i');b.style.animation='none';b.offsetHeight;b.style.animation=''});$('#ocn').textContent='STAGE 0'+(i+1);$('#oh').textContent=S[i][1];$('#op').textContent=S[i][2]}
 function rs(){clearInterval(tm);tm=setInterval(()=>go((cur+1)%S.length),3000)}go(0);rs();
 const P=[['📚','Market Research'],['💡','Customer Insights'],['🎯','Product Strategy'],['🤖','AI & Automation'],['💻','Development'],['🚀','Launch'],['💰','Growth & Monetization'],['📈','Analytics'],['⚡','Optimization']];
 const pr=$('#prow');P.forEach(p=>{const d=document.createElement('div');d.className='pnode';d.innerHTML=`<div class="pc">${p[0]}</div><span>${p[1]}</span>`;pr.appendChild(d)});
 const pn=$$('.pnode');let pi=0;setInterval(()=>{pn.forEach((n,j)=>n.classList.toggle('lit',j===pi||j===pi-1));pi=(pi+1)%(P.length+1)},500)})();

(()=>{const H=[['🔍','Product Discovery',['Market Research','Competitor Analysis','Customer Insights','Opportunity ID'],'#4796e3'],['🧭','Product Strategy',['Product Vision','Business Goals','Roadmap Planning','KPI Definition'],'#9177c7'],['🛠','Development',['PRD Creation','Sprint Planning','Stakeholder Alignment','Agile Execution'],'#ca6673'],['🚀','Product Launch',['Go-To-Market Plan','Campaign Management','Analytics Setup'],'#f5b14c'],['📈','Product Growth',['User Acquisition','Monetization Opt.','A/B Testing','Retention'],'#34d399'],['🤖','AI & Automation',['Workflow Automation','AI Agent Integration','Process Optimization','Scalable Ops'],'#22d3ee']];
 $('#stack').innerHTML=H.map((h,i)=>`<div class="hcard" style="top:${110+i*14}px"><div class="top"><span class="num">0${i+1}</span><span class="hic" style="background:${h[3]}22;border:1px solid ${h[3]}66">${h[0]}</span></div><h4>${h[1]}</h4><div class="tg">${h[2].map(x=>`<span>${x}</span>`).join('')}</div><div style="height:3px;border-radius:3px;margin-top:20px;background:linear-gradient(90deg,${h[3]},transparent)"></div></div>`).join('');
 const cards=$$('.hcard');addEventListener('scroll',()=>cards.forEach((c,i)=>{const n=cards[i+1];if(!n)return;const d=n.getBoundingClientRect().top-c.getBoundingClientRect().top;const p=Math.max(0,Math.min(1,1-d/300));c.style.transform=`scale(${1-p*.05})`;c.style.filter=`brightness(${1-p*.3})`}),{passive:true});
 const T=[['PRD: Product X leaderboard','#4796e3'],['Operator billing flow','#ca6673'],['A/B test: paywall copy','#f5b14c'],['MFS payment integration','#9177c7'],['Ad monetization slots','#34d399'],['Product Y onboarding','#22d3ee'],['Analytics funnel events','#f5b14c']];
 const cols=$$('.kcol');const st=T.map((t,i)=>({col:i<4?0:i<6?1:2}));
 T.forEach((t,i)=>{const d=document.createElement('div');d.className='kc';d.innerHTML=`<i style="background:${t[1]}"></i>${t[0]}`;st[i].el=d;cols[st[i].col].appendChild(d)});
 let day=1;setInterval(()=>{if(document.hidden)return;const els=$$('.kc'),before=els.map(e=>e.getBoundingClientRect());let s;const done=st.filter(x=>x.col===3);
  if(done.length>=3){s=done[0];s.col=0}else{const mv=st.filter(x=>x.col<3);s=mv[Math.floor(Math.random()*mv.length)];s.col++}
  cols[s.col].appendChild(s.el);els.forEach((e,i)=>{const b=e.getBoundingClientRect(),a=before[i];const dx=a.left-b.left,dy=a.top-b.top;if(dx||dy)e.animate([{transform:`translate(${dx}px,${dy}px)${e===s.el?' rotate(-4deg)':''}`},{transform:'none'}],{duration:e===s.el?750:450,easing:'cubic-bezier(.2,.8,.2,1)'})});
  day=day%10+1;$('#kday').textContent='DAY '+day},1700)})();

$('#comp').innerHTML=['Product Strategy','Roadmap Management','PRD Writing','User Research','User Journey Mapping','Feature Prioritization','DCB Monetization','Subscription Products','Agile / Scrum','Growth Hacking','AI Automation'].map(c=>`<span>${c}</span>`).join('');
(()=>{const a=$('#aphoto');if(!isTouch){a.addEventListener('mousemove',e=>{const r=a.getBoundingClientRect();a.style.transform=`perspective(900px) rotateY(${((e.clientX-r.left)/r.width-.5)*12}deg) rotateX(${-((e.clientY-r.top)/r.height-.5)*12}deg)`});a.addEventListener('mouseleave',()=>a.style.transform='')}})();
$('#toolsg').innerHTML=[['🗂','Product Management',['Jira','Notion','Trello','Figma','Adobe XD','Pendo','Canva']],['💻','Dev & Collaboration',['Python','SQL','PostgreSQL','React','Postman','GitHub Actions','Selenium','JMeter']],['✨','AI Stack',['Claude','Claude Code','Claude Projects','Claude Artifacts','MCP Servers','Anthropic API','ChatGPT','Gemini','Perplexity','Cursor','Lovable','Replit','Bolt','v0','Higgsfield','ElevenLabs']],['⚡','Automation',['n8n','Zapier','Make','Slack']],['🎮','Game Development',['WebGL','HTML5 Canvas','Unity','Three.js','Construct 3','Phaser']],['💰','Ads & Monetization',['Google AdSense','Google AdMob','Google Ad Manager','Adsterra','Monetag','PropellerAds','Unity Ads','AppLovin MAX','DCB Billing']],['📈','Analytics & Growth',['Google Analytics','Tag Manager','PostHog','Mixpanel','Looker','Search Console']]].map((t,i)=>`<div class="tcat rv d${i%4}${t[1]==='AI Stack'?' wide':''}"><h5><i>${t[0]}</i>${t[1]}</h5><div class="tg">${t[2].map(x=>`<span>${x}</span>`).join('')}</div></div>`).join('');

(()=>{const P=[
 {n:'Kikori AI',c:'AI Workspace',u:'https://kikori.ai/',d:'AI workspace and content generation platform for image, video, audio and creative workflows.',g:'🧠',bg:'radial-gradient(circle at 30% 30%,#4796e3,transparent 60%),radial-gradient(circle at 80% 70%,#9177c7,transparent 55%),#0d1030',img:'/assets/products/kikori-ai.jpg',w:'w2',role:'Product Manager',k:'live ai'},
 {n:'mKiddo',c:'Kids OTT · Play & Learn',u:'https://mkiddo.com/',d:'Kids OTT and play-and-learn platform with 100K+ app downloads.',g:'🧸',bg:'radial-gradient(circle at 70% 30%,#f5b14c,transparent 55%),radial-gradient(circle at 20% 80%,#ca6673,transparent 55%),#2a1220',img:'/assets/products/mkiddo.jpg',w:'w2',role:'Product Manager',k:'live'},
 {n:'DramaPack',c:'Short-Drama Streaming',u:'https://dramapack.com/',d:'Bite-sized vertical dramas built for binge sessions, with episode packs and subscriptions.',g:'🎬',bg:'radial-gradient(circle at 50% 20%,#ca6673,transparent 55%),radial-gradient(circle at 80% 90%,#9177c7,transparent 55%),#1d0c1c',img:'/assets/products/dramapack.jpg',w:'w2',role:'Product Manager',k:'live'},
 {n:'QuizMuiz',c:'Digital Engagement',u:'https://quizmuiz.com',d:'AI-powered quiz engagement platform with subscription and Direct Carrier Billing monetization.',g:'🧩',bg:'radial-gradient(circle at 30% 70%,#22d3ee,transparent 55%),radial-gradient(circle at 80% 20%,#4796e3,transparent 55%),#071a26',img:'/assets/products/quizmuiz.jpg',w:'w2',role:'Product Manager',k:'live ai'},
 {n:'XoshPlay',c:'HTML5 Gaming',u:'https://xoshplay.com/',d:'Online and offline multiplayer gaming platform with 500+ titles and telecom billing.',g:'🎮',logo:'https://xoshplay.com/assets/logo/logo-full.png',bg:'radial-gradient(circle at 70% 60%,#34d399,transparent 55%),radial-gradient(circle at 20% 20%,#22d3ee,transparent 55%),#06201a',img:'/assets/products/xoshplay.jpg',w:'w2',role:'Product Manager',k:'live'},
 {n:'Browse IT',c:'Web Portal',u:'https://browseit.info.bd/#/',d:'A discovery portal bringing everyday digital services and content together in one place.',g:'🌐',bg:'radial-gradient(circle at 20% 40%,#9177c7,transparent 55%),radial-gradient(circle at 90% 60%,#f5b14c,transparent 50%),#14102a',img:'/assets/products/browseit.jpg',w:'w2',role:'Product Owner',k:'live'},
 {n:'Subnex AI',c:'AI Social Media Agent',u:'https://subnexit.com/',d:'AI-powered social media automation that streamlines content workflows and digital marketing.',g:'🛰️',bg:'radial-gradient(circle at 60% 40%,#4796e3,transparent 55%),radial-gradient(circle at 10% 90%,#34d399,transparent 50%),#081426',img:'/assets/products/subnex.jpg',w:'w2',role:'Founder / Builder',k:'live ai'},
 {n:'Appify',c:'AI Chatbot Platform',u:'https://github.com/anim75/ChatApp_appify_echogpt',d:'EchoGPT — an AI chatbot for natural conversations.',g:'💬',bg:'radial-gradient(circle at 50% 30%,#9177c7,transparent 60%),#120d22',w:'w4',role:'Developer',k:'ai dev',gh:1,big:1,t:['NLP','React']},
 {n:'InflationKit',c:'BD Inflation Prediction',u:'https://github.com/anim75/BD_inflationrate_Prediction_ML-data-analysis',d:'ML platform forecasting Bangladesh inflation through economic data.',g:'📉',bg:'radial-gradient(circle at 30% 40%,#4796e3,transparent 60%),#0b1424',w:'w2',role:'ML Engineer',k:'ml',gh:1,t:['ML','Python']},
 {n:'ZeoApp',c:'Credit Card Fraud Detection',u:'https://github.com/anim75/credit-card-fraud-detection-using-machine-learning_445',d:'Predictive analytics detecting card fraud with ML algorithms.',g:'💳',bg:'radial-gradient(circle at 60% 40%,#ca6673,transparent 60%),#1c0d14',w:'w2',role:'ML Engineer',k:'ml ai',gh:1,t:['ML','Fraud']},
 {n:'Track',c:'Water Potability Predictor',u:'https://github.com/anim75/Water-Potability-Prediction-using-Machine-Learning',d:'Predicts water potability from physicochemical data.',g:'💧',bg:'radial-gradient(circle at 40% 30%,#22d3ee,transparent 60%),#071a22',w:'w2',role:'ML Engineer',k:'ml',gh:1,t:['Data Science','ML']},
 {n:'Dawat',c:'Canteen Management',u:'https://github.com/zubair-sowrab/CM_Canteen_Management',d:'Full-stack canteen management for educational institutions.',g:'🍛',bg:'radial-gradient(circle at 50% 30%,#f5b14c,transparent 60%),#1f1408',w:'w2',role:'Developer / PM',k:'dev',gh:1,t:['Full Stack','Web App']},
 {n:'PetDekho',c:'Pet Marketplace',u:'https://github.com/anim75/pet_platformwebapp',d:'A marketplace connecting pet owners and buyers.',g:'🐾',bg:'radial-gradient(circle at 50% 30%,#34d399,transparent 60%),#08190f',w:'w2',role:'Developer / PM',k:'dev',gh:1,t:['Marketplace','E-commerce']},
 {n:'WrapIt',c:'Inventory Management',u:'https://github.com/anim75/Inventory-Managment-system---nsu',d:'Real-time inventory tracking and reporting, built for NSU.',g:'📦',bg:'radial-gradient(circle at 50% 30%,#4796e3,transparent 60%),#0a1220',w:'w2',role:'Developer',k:'dev',gh:1,t:['Inventory','NSU']}];
 $('#bento').innerHTML=P.map((p,i)=>`<article class="prod ${p.w} ${p.gh?'sm':''} ${p.img?'bn':''} rv d${i%3}" data-k="${p.k}"><div class="vis">${p.img?`<img class="bimg" src="${p.img}" alt="${p.n} banner" loading="lazy">`:''}<div class="bgv" style="background:${p.bg}"></div><div class="glyph">${p.logo?`<img src="${p.logo}" alt="${p.n}" onerror="this.replaceWith('${p.g}')">`:p.g}</div><div class="mockui"><i style="width:60%"></i><i class="g"></i><i></i><i style="width:80%"></i><i style="width:45%"></i></div></div><div class="body"><div class="cat">${p.gh?'<span class="gh2">● GITHUB</span>':'<span class="live">LIVE</span>'}<span>${p.c}</span></div><h3>${p.n}</h3><p>${p.d}</p>${p.t?`<div class="stk">${p.t.map(x=>`<span>${x}</span>`).join('')}</div>`:''}<div class="foot"><span class="role">${p.role}</span><a class="visit" href="${p.u}" target="_blank" rel="noopener">${p.gh?'GitHub':'Visit site'} <span>↗</span></a></div></div></article>`).join('');
 $('#fc-all').textContent=P.length;
 if(!isTouch)$$('.prod').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();c.style.transform=`perspective(1000px) rotateY(${((e.clientX-r.left)/r.width-.5)*7}deg) rotateX(${-((e.clientY-r.top)/r.height-.5)*7}deg) translateY(-6px)`});c.addEventListener('mouseleave',()=>c.style.transform='')});
 $$('#filters button').forEach(b=>b.onclick=()=>{$$('#filters button').forEach(x=>x.classList.remove('on'));b.classList.add('on');const f=b.dataset.f;$$('.prod').forEach(l=>{const show=f==='all'||l.dataset.k.split(' ').includes(f);l.classList.toggle('hid',!show);if(show){l.classList.add('in');l.animate([{opacity:0,transform:'scale(.96)'},{opacity:1,transform:'none'}],{duration:450,easing:'cubic-bezier(.2,.8,.2,1)'})}})})})();

/* VIDEO PLAYER — set src to a video file path (e.g. videos/quizmuiz.mp4) to play a real recording */
const VIDEOS=[
 {t:'XoshPlay',src:'/assets/videos/xoshplay.mp4',p:'/assets/videos/xoshplay.jpg',img:'/assets/products/xoshplay.jpg',s:'HTML5 gaming · Telecom billing',e:'🎮',c:['#4796e3','#9177c7'],beats:['','','',''],tall:false},
 {t:'mKiddo',src:'/assets/videos/mkiddo.mp4',p:'/assets/videos/mkiddo.jpg',img:'/assets/products/mkiddo.jpg',s:'Kids OTT · Play & learn',e:'🧸',c:['#4796e3','#9177c7'],beats:['','','',''],tall:false},
 {t:'DramaPack',src:'/assets/videos/dramapack.mp4',p:'/assets/videos/dramapack.jpg',img:'/assets/products/dramapack.jpg',s:'Vertical short-drama streaming',e:'🎬',c:['#4796e3','#9177c7'],beats:['','','',''],tall:false},
 {t:'Kikori AI',src:'/assets/videos/kikori.mp4',p:'/assets/videos/kikori.jpg',img:'/assets/products/kikori-ai.jpg',s:'AI creative workspace',e:'🧠',c:['#4796e3','#9177c7'],beats:['','','',''],tall:false},
 {t:'OrkManza',src:'/assets/videos/orkmanza.mp4',p:'/assets/videos/orkmanza.jpg',img:'/assets/videos/orkmanza.jpg',s:'Smart HR partner · SaaS',e:'🧑‍💼',c:['#4796e3','#9177c7'],beats:['','','',''],tall:false},
 {t:'AI Summit',src:'/assets/videos/ai-summit.mp4',p:'/assets/videos/ai-summit.jpg',img:'/assets/videos/ai-summit.jpg',s:'Event highlight',e:'🎤',c:['#4796e3','#9177c7'],beats:['','','',''],tall:false},
 {t:'Browse IT',src:'/assets/videos/browseit.mp4',p:'/assets/videos/browseit.jpg',img:'/assets/products/browseit.jpg',s:'Content & services portal',e:'🌐',c:['#4796e3','#9177c7'],beats:['','','',''],tall:false}];
(()=>{const vp=$('#vp'),cv=$('#vcan'),g=cv.getContext('2d'),vid=$('#vvid'),DUR=30;let idx=0,playing=false,t=0,last=0,rate=1,muted=false,mode='reel',idleT;
 const pl=$('#plist');$('#pcount').textContent=VIDEOS.length+' videos';
 VIDEOS.forEach((v,i)=>{const b=document.createElement('button');b.className='pi';b.innerHTML=`<span class="th" style="background:${v.img?`#07070c url(${v.img}) center/cover`:`linear-gradient(135deg,${v.c[0]},${v.c[1]})`}">${v.img?'':v.e}<span class="eq"><i></i><i></i><i></i></span></span><div><b>${v.t}</b><small>${v.s}</small></div>`;b.onclick=()=>{load(i);play()};pl.appendChild(b)});
 const items=$$('.pi');
 function chaps(){$$('.seek .chap').forEach(c=>c.remove());if(mode!=='reel')return;[.2,.47,.73].forEach(p=>{const c=document.createElement('span');c.className='chap';c.style.left=p*100+'%';$('#seek').appendChild(c)})}
 function load(i){idx=i;const v=VIDEOS[i];$('#vtt').textContent=v.t;$('#vts').textContent='Tanjim Imtial · '+v.s;items.forEach((p,j)=>p.classList.toggle('on',j===i));t=0;
  if(v.src){mode='vid';vp.classList.add('vid');vid.src=v.src;vid.poster=v.p||'';vp.classList.toggle('tall',!!v.tall)}else{mode='reel';vp.classList.remove('vid');vid.removeAttribute('src')}chaps();ui()}
 const dur=()=>mode==='vid'?(vid.duration||0):DUR,cur=()=>mode==='vid'?vid.currentTime:t,fmt=s=>{s=Math.max(0,s|0);return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')};
 function ui(){const d=dur()||1,c=cur();$('#vfill').style.width=(c/d*100)+'%';$('#vknob').style.left=(c/d*100)+'%';$('#vtime').textContent=fmt(c)+' / '+fmt(d);$('#vpicon').setAttribute('d',playing?'M6 5h4v14H6zm8 0h4v14h-4z':'M8 5v14l11-7z');vp.classList.toggle('playing',playing);items.forEach((p,j)=>p.classList.toggle('pl',playing&&j===idx))}
 function play(){playing=true;last=performance.now();if(mode==='vid'){vid.playbackRate=rate;vid.muted=muted;vid.play().catch(()=>{})}ui();poke()}
 function pause(){playing=false;if(mode==='vid')vid.pause();ui()}
 const toggle=()=>playing?pause():play();
 const vt=m=>{const e=$('#vtoast');e.textContent=m;e.classList.add('show');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('show'),700)};
 const seekTo=s=>{s=Math.max(0,Math.min(dur(),s));if(mode==='vid')vid.currentTime=s;else t=s;ui()};
 $('#bigplay').onclick=play;$('#vplay').onclick=toggle;cv.onclick=vid.onclick=toggle;
 $('#vback').onclick=()=>{seekTo(cur()-5);vt('⏪ 5s')};$('#vfwd').onclick=()=>{seekTo(cur()+5);vt('5s ⏩')};
 $('#vspd').onclick=()=>{const R=[1,1.25,1.5,2,.5,.75];rate=R[(R.indexOf(rate)+1)%R.length];$('#vspd').textContent=rate+'×';vid.playbackRate=rate;vt(rate+'× speed')};
 $('#vmute').onclick=()=>{muted=!muted;vid.muted=muted;$('#vmicon').setAttribute('d',muted?'M16.5 12 19 9.5l1.4 1.4L18 13.4l2.4 2.4-1.4 1.4-2.5-2.5-2.5 2.5-1.4-1.4 2.5-2.4-2.5-2.5L15.5 10zM3 9v6h4l5 5V4L7 9H3z':'M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4z');vt(muted?'🔇 Muted':'🔊 Sound on')};
 $('#vvol').oninput=e=>{vid.volume=+e.target.value};
 $('#vfs').onclick=()=>{try{const p=document.fullscreenElement?document.exitFullscreen():(vp.requestFullscreen||vp.webkitRequestFullscreen).call(vp);p&&p.catch&&p.catch(()=>toast('Fullscreen isn’t available here'))}catch(e){toast('Fullscreen isn’t available here')}};
 const sk=$('#seek');let drag=false;const pct=e=>{const r=sk.getBoundingClientRect();return Math.max(0,Math.min(1,(e.clientX-r.left)/r.width))};
 sk.addEventListener('pointerdown',e=>{drag=true;seekTo(pct(e)*dur())});addEventListener('pointermove',e=>{if(drag)seekTo(pct(e)*dur())});addEventListener('pointerup',()=>drag=false);
 sk.addEventListener('mousemove',e=>{const p=pct(e),tip=$('#vtip');tip.style.left=p*100+'%';const b=VIDEOS[idx].beats;tip.textContent=fmt(p*dur())+(mode==='reel'?' · '+(p<.2?'Intro':p>.73?'Results':b[Math.min(3,Math.floor((p-.2)/.53*4))]):'')});
 vid.addEventListener('timeupdate',ui);vid.addEventListener('loadedmetadata',ui);vid.addEventListener('ended',()=>{pause();setTimeout(next,700)});
 function next(){load((idx+1)%VIDEOS.length);play()}
 function poke(){vp.classList.remove('idle');clearTimeout(idleT);idleT=setTimeout(()=>vp.classList.add('idle'),2200)}
 vp.addEventListener('mousemove',poke);vp.addEventListener('touchstart',poke,{passive:true});
 vp.tabIndex=0;vp.addEventListener('keydown',e=>{if(e.key===' '||e.key==='k'){e.preventDefault();toggle()}if(e.key==='ArrowRight')$('#vfwd').click();if(e.key==='ArrowLeft')$('#vback').click()});
 const W=1280,H=720,ease=x=>1-Math.pow(1-Math.max(0,Math.min(1,x)),3);const rr=(x,y,w,h,r)=>{g.beginPath();g.roundRect?g.roundRect(x,y,w,h,r):g.rect(x,y,w,h)};
 const DF='"Bricolage Grotesque", sans-serif',BF='"DM Sans", sans-serif',MF='"IBM Plex Mono", monospace';
 function draw(){const v=VIDEOS[idx],T=t;const bg=g.createLinearGradient(0,0,W,H);bg.addColorStop(0,'#07070f');bg.addColorStop(1,'#120c22');g.fillStyle=bg;g.fillRect(0,0,W,H);
  for(let i=0;i<3;i++){const x=W*(.25+i*.3)+Math.sin(T*.6+i*2)*120,y=H*(.4+Math.cos(T*.5+i)*.25);const rg=g.createRadialGradient(x,y,0,x,y,380);rg.addColorStop(0,v.c[i%2]+'88');rg.addColorStop(1,'transparent');g.fillStyle=rg;g.fillRect(0,0,W,H)}
  g.strokeStyle='rgba(255,255,255,.05)';g.lineWidth=1;for(let x=(T*30)%60;x<W;x+=60){g.beginPath();g.moveTo(x,0);g.lineTo(x,H);g.stroke()}for(let y=0;y<H;y+=60){g.beginPath();g.moveTo(0,y);g.lineTo(W,y);g.stroke()}
  g.textAlign='left';
  if(T<6){const p=ease(T/1.2),q=ease((T-4.8)/1.2);g.globalAlpha=p*(1-q);g.textAlign='center';g.font='150px serif';g.fillText(v.e,W/2,H/2-30+(1-p)*60);
   g.font=`600 80px ${DF}`;const tg=g.createLinearGradient(W/2-400,0,W/2+400,0);tg.addColorStop(0,'#fff');tg.addColorStop(.5,v.c[0]);tg.addColorStop(1,v.c[1]);g.fillStyle=tg;g.fillText(v.t,W/2,H/2+90);
   g.font=`500 24px ${MF}`;g.fillStyle='rgba(255,255,255,.7)';g.fillText(v.s.toUpperCase(),W/2,H/2+140);g.globalAlpha=1}
  else if(T<22){const k=T-6,p=ease(k/1);const px=W*.62,py=H/2,pw=300,ph=560;g.save();g.translate(px+(1-p)*200,py);g.rotate(Math.sin(T*.8)*.04);g.globalAlpha=p;
   g.shadowColor=v.c[0];g.shadowBlur=60;g.fillStyle='#0d0d18';rr(-pw/2,-ph/2,pw,ph,40);g.fill();g.shadowBlur=0;g.strokeStyle='rgba(255,255,255,.25)';g.lineWidth=3;g.stroke();
   const hg=g.createLinearGradient(-pw/2,0,pw/2,0);hg.addColorStop(0,v.c[0]);hg.addColorStop(1,v.c[1]);g.fillStyle=hg;rr(-pw/2+20,-ph/2+50,pw-40,150,22);g.fill();g.font='70px serif';g.textAlign='center';g.fillText(v.e,0,-ph/2+150);
   for(let i=0;i<5;i++){const a=ease(k-.4-i*.25),yy=-ph/2+230+i*62;g.globalAlpha=p*a;g.fillStyle='rgba(255,255,255,.08)';rr(-pw/2+20+(1-a)*40,yy,pw-40,50,14);g.fill();g.fillStyle=i%2?v.c[1]:v.c[0];rr(-pw/2+32+(1-a)*40,yy+12,26,26,8);g.fill();g.fillStyle='rgba(255,255,255,.5)';rr(-pw/2+70+(1-a)*40,yy+16,120+(i*37)%60,8,4);g.fill()}
   const tp=(k*1.2)%1;g.globalAlpha=1-tp;g.strokeStyle='#fff';g.lineWidth=3;g.beginPath();g.arc(40,40,10+tp*50,0,7);g.stroke();g.restore();g.globalAlpha=1;
   g.textAlign='left';const bi=Math.min(3,Math.floor(k/4));g.font=`600 20px ${MF}`;g.fillStyle=v.c[0];g.fillText('FEATURE 0'+(bi+1)+' / 04',110,230);
   const bp=ease((k%4)/.6);g.globalAlpha=bp;g.font=`600 64px ${DF}`;g.fillStyle='#fff';g.fillText(v.beats[bi],110-(1-bp)*40,310);g.globalAlpha=1;
   for(let i=0;i<4;i++){g.fillStyle=i<=bi?v.c[i%2]:'rgba(255,255,255,.15)';rr(110+i*70,350,56,6,3);g.fill()}
   g.font=`400 24px ${BF}`;g.fillStyle='rgba(255,255,255,.65)';g.fillText('Designed, shipped & measured by Tanjim Imtial',110,410)}
  else{const k=T-22;if(k<5){const p=ease(k/.8);g.globalAlpha=p;g.font=`600 20px ${MF}`;g.fillStyle=v.c[0];g.fillText('GROWTH DASHBOARD',110,170);
    const vals=[.45,.6,.52,.75,.68,.88,.95];vals.forEach((h,i)=>{const a=ease((k-.3-i*.12)/.8),bh=a*h*330;const gr=g.createLinearGradient(0,560-bh,0,560);gr.addColorStop(0,v.c[i%2]);gr.addColorStop(1,'rgba(255,255,255,.05)');g.fillStyle=gr;rr(110+i*100,560-bh,64,bh,12);g.fill()});
    g.font=`italic 600 96px ${DF}`;const tg=g.createLinearGradient(860,0,1200,0);tg.addColorStop(0,v.c[0]);tg.addColorStop(1,v.c[1]);g.fillStyle=tg;g.fillText('↑ Growth',850,360);g.font=`400 26px ${BF}`;g.fillStyle='rgba(255,255,255,.7)';g.fillText('Engagement · Retention · Revenue',850,410);g.globalAlpha=1}
   else{const p=ease((k-5)/1);g.globalAlpha=p;g.textAlign='center';g.font=`600 68px ${DF}`;g.fillStyle='#fff';g.fillText('Try it live',W/2,H/2-20);g.font=`600 32px ${MF}`;g.fillStyle=v.c[0];g.fillText(v.url,W/2,H/2+40);g.globalAlpha=1}}
  g.textAlign='right';g.font='44px "Mrs Saint Delafield", cursive';g.fillStyle='rgba(255,255,255,.55)';g.fillText('Tanjim Imtial',W-30,H-28)}
 (function l(now){requestAnimationFrame(l);if(mode!=='reel')return;if(playing){t+=(now-last)/1000*rate;if(t>=DUR){t=DUR;pause();setTimeout(next,600)}ui()}last=now;draw()})(performance.now());
 load(0)})();

(()=>{const G=[['whack a mole','whack-a-mole','🐹','#34d399','#065f46'],['the last sashimi','the-last-sashimi','🍣','#ca6673','#4c0519'],['spin war','spin-war','🌀','#4796e3','#1e1b4b'],['snakes & ladders','snakes-and-ladders','🐍','#f5b14c','#78350f'],['soccer pool','soccer-pool','⚽','#22d3ee','#083344'],['pizza memory','pizza-memory','🍕','#f97316','#431407'],['nuts and bolts','nuts-and-bolts','🔩','#9ca3af','#1f2937'],['guess the person','guess-the-person','🕵️','#9177c7','#2e1065'],['animal stack','animal-stack','🦒','#facc15','#422006'],['hammer hit','hammer-hit','🔨','#ef4444','#450a0a']];
 const IMG=s=>`/assets/games/${s}.jpg`;
 const cf=$('#cf'),dots=$('#cfd');let cur=0,auto;
 G.forEach((g,i)=>{const a=document.createElement('div');a.className='gcard';a.innerHTML=`<div class="art" style="background:radial-gradient(circle at 50% 35%,${g[3]},${g[4]} 72%)">${g[2]}</div><img src="${IMG(g[1])}" alt="${g[0]} banner" loading="lazy" draggable="false" onerror="this.remove()"><div class="shine2"></div><div class="gb"><div class="gn">GAME ${String(i+1).padStart(2,'0')} · HTML5</div><h4>${g[0]}</h4><a class="play" href="https://xoshplay.com/play/${g[1]}" target="_blank" rel="noopener">▶ Play now</a></div>`;
  a.addEventListener('click',e=>{if(i!==cur&&!e.target.closest('.play')){e.preventDefault();go(i)}});cf.appendChild(a);const d=document.createElement('i');d.onclick=()=>go(i);dots.appendChild(d)});
 const cards=$$('.gcard'),ds=$$('#cfd i');
 function go(i){cur=(i+G.length)%G.length;const sp=innerWidth<520?150:230;cards.forEach((c,j)=>{let o=j-cur;if(o>G.length/2)o-=G.length;if(o<-G.length/2)o+=G.length;const a=Math.abs(o);c.style.transform=`translateX(${o*sp}px) translateZ(${-a*180}px) rotateY(${-o*28}deg) scale(${1-a*.05})`;c.style.zIndex=100-a;c.style.opacity=a>3?0:1;c.style.filter=a?`brightness(${1-a*.2})`:'none';c.style.pointerEvents=a>3?'none':'auto';c.classList.toggle('act',a===0)});ds.forEach((d,j)=>d.classList.toggle('on',j===cur))}
 const start=()=>{clearInterval(auto);auto=setInterval(()=>go(cur+1),3200)};
 $('#cfp').onclick=()=>{go(cur-1);start()};$('#cfn').onclick=()=>{go(cur+1);start()};
 let sx=null;cf.addEventListener('pointerdown',e=>{sx=e.clientX});addEventListener('pointerup',e=>{if(sx===null)return;const dx=e.clientX-sx;if(Math.abs(dx)>40){go(cur+(dx<0?1:-1));start()}sx=null});
 cf.addEventListener('mouseenter',()=>clearInterval(auto));cf.addEventListener('mouseleave',start);
 addEventListener('keydown',e=>{const r=cf.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0&&!document.querySelector('.modal.open')){if(e.key==='ArrowRight')go(cur+1);if(e.key==='ArrowLeft')go(cur-1)}});
 addEventListener('resize',()=>go(cur));go(0);start()})();

(()=>{const D=[['🩸','LifeDrop','Blood donation platform',['Find nearby blood donors & blood banks by group and location','Post urgent requests','AI-matched donors notified instantly','Donor eligibility reminders'],'#ef4444','wide'],
 ['📊','BizzTrack','Business tracker — marketing ROI & budget approvals',['Marketing ROI dashboard','Budget & fund approval flow'],'#4796e3','','https://claude.ai/artifact/D4C8e136Xo8YCGH4AySDjk'],
 ['💹','Finance Track','Finance tracking platform',['Revenue & cost visibility','Reporting for product lines'],'#34d399'],
 ['🔐','Kunooz','Subscription platform for all DCB products on bKash',['Subscription Platform','CMS for the subscription platform'],'#9177c7','','https://nexoradcb.lovable.app/'],
 ['📢','XoshPlay Ads Monetization','Ad-driven revenue layer for XoshPlay',['Ad slots across games','Revenue alongside subscriptions'],'#f5b14c'],
 ['🌐','Browse IT — New Dev','Next version of the Browse IT portal',['Redesigned experience','New feature set'],'#22d3ee'],
 ['📡','HLS Streaming API','API for adaptive video streaming',['HLS delivery for video products','Shared streaming backbone'],'#ca6673'],
 ['🖼️','Wallpaper & Stock Images','AI-generated images or a ready library to use and download',['Country-wise passport photos','Background removal','Size & ratio tools'],'#9177c7'],
 ['🗂️','Docu Saver','Personal document vault',['NID, license, school ID & every needed document in one place','Indexed & searchable','Printable and shareable'],'#4796e3','wide']];
 $('#devgrid').innerHTML=D.map((d,i)=>`<div class="dev rv d${i%3} ${d[5]||''}"><div class="dt"><span class="di" style="background:${d[4]}22;border:1px solid ${d[4]}66">${d[0]}</span><span class="stat">IN DEVELOPMENT</span></div><h4>${d[1]}</h4><p>${d[2]}</p><ul>${d[3].map(x=>`<li>${x}</li>`).join('')}</ul><div class="ind"><i style="animation-delay:-${i*.3}s"></i></div>${d[6]?`<a class="dl" href="${d[6]}" target="_blank" rel="noopener">View prototype ↗</a>`:''}</div>`).join('')})();

(()=>{$('#skills').insertAdjacentHTML('beforeend',[['Product Strategy',95],['Agile/Scrum',90],['Growth Marketing',88],['Data Analysis',85],['AI/ML',80],['Web Development',75]].map(s=>`<div class="sk"><div class="skt">${s[0]}<span>${s[1]}%</span></div><div class="sb"><i data-w="${s[1]}"></i></div></div>`).join(''));
 new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){$$('.sb i').forEach(i=>i.style.width=i.dataset.w+'%');o.disconnect()}},{threshold:.3}).observe($('#skills'));
 const tl=$('#tl'),f=$('#tlfill');addEventListener('scroll',()=>{const r=tl.getBoundingClientRect();f.style.height=Math.max(0,Math.min(1,(innerHeight*.6-r.top)/r.height))*100+'%'},{passive:true});
 0})();

/* IDEA LAB — names public, ideas private */
(()=>{const IND=['AI','Fintech','Health','EdTech','Telecom','Gaming','E-commerce','Media','Climate','Social good','Other'];
 const $i=$('#iind');$i.insertAdjacentHTML('beforeend',IND.map(x=>`<option>${x}</option>`).join(''));
 function score(){const s=($('#inm').value.trim()?25:0)+($('#ipd').value.trim()?30:0)+($i.value?20:0)+(Math.min(25,Math.round($('#ipt').value.trim().length/40*25)));$('#pfill').style.width=s+'%';$('#ppct').textContent=s+'%';$('#prk').classList.toggle('on',s>=90);return s}
 ['#inm','#ipd','#ipt'].forEach(s=>$(s).addEventListener('input',score));$i.addEventListener('change',score);score();
 const COL=['#9177c7','#ca6673','#4796e3','#f5b14c','#22d3ee','#34d399'];const scram=n=>{let s='';for(let i=0;i<n;i++)s+=i&&i%6===0?' ':'abcdefghijklmnopqrstuvwxyz'[Math.random()*26|0];return s.replace(/^./,c=>c.toUpperCase())};
 let rows=[],mine=new Map(),page=0,mode='local',db=null,uid=null;const PER=6;
 function render(){const tot=rows.length;$('#icount').textContent=tot;const pages=Math.max(1,Math.ceil(tot/PER));page=Math.min(page,pages-1);
  if(!tot){$('#bwrap').innerHTML=`<div class="bempty"><span class="e">💡</span><b>No ideas yet.</b>Be the first innovator.</div>`;$('#pager').innerHTML='';return}
  const lock=(len,lab)=>`<span class="lock"><em>${lab}</em><span class="lk2"><svg viewBox="0 0 24 24"><path d="M7 10V7a5 5 0 0 1 10 0v3h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1zm2 0h6V7a3 3 0 0 0-6 0v3z"/></svg></span><span class="bl">${scram(len)}</span></span>`;
  const IC={'AI':'#9177c7','Fintech':'#34d399','Health':'#ef4444','EdTech':'#f5b14c','Telecom':'#4796e3','Gaming':'#22d3ee','E-commerce':'#ca6673','Media':'#e879f9','Climate':'#4ade80','Social good':'#fb923c','Other':'#9aa0b6'};
  const md=['🥇','🥈','🥉'];
  $('#bwrap').innerHTML=`<div class="lb"><div class="lbh"><span>#</span><span>Innovator</span><span>Product</span><span>Industry</span><span>Problem</span></div>${rows.slice(page*PER,page*PER+PER).map((r,k)=>{const n=page*PER+k+1,own=mine.get(r.key),c=own?(IC[own.ind]||'#9aa0b6'):'#9177c7';
   return `<div class="lr ${own?'mine':''} ${n<=3?'top':''}" style="animation-delay:${k*.06}s;--ic:${c}">
    <span class="rk2">${n<=3?`<i>${md[n-1]}</i>`:''}<b>${String(n).padStart(2,'0')}</b></span>
    <span class="who"><span class="av2" style="background:linear-gradient(135deg,${COL[(n-1)%6]},${COL[n%6]})">${esc(((r.n||'?').trim()[0]||'?').toUpperCase())}</span><span class="wn"><b>${esc(r.n)}${own?'<span class="youtag">you</span>':''}</b><small>${r.ts?new Date(r.ts).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}):''}</small></span></span>
    <span class="cp">${(own&&own.pd)||r.pd?`<span class="open">${esc((own&&own.pd)||r.pd)}</span>`:lock(r.pl||10,'Product')}</span>
    <span class="ci"><span class="blr" aria-label="Industry hidden">${scram(r.il||8)}</span></span>
    <span class="cs"><span class="blr" aria-label="Problem hidden">${scram(Math.min(r.sl||14,34))}</span></span>
   </div>`}).join('')}</div>`;
  const nums=[];for(let p=0;p<pages;p++)nums.push(`<button data-p="${p}" class="${p===page?'on':''}" aria-label="Page ${p+1}">${p+1}</button>`);
  $('#pager').innerHTML=`<small>${page*PER+1}–${Math.min(tot,page*PER+PER)} of ${tot} innovators</small><div class="pg"><button data-p="${page-1}" ${page?'':'disabled'} aria-label="Previous page">←</button>${pages<=7?nums.join(''):`<button class="on">${page+1} / ${pages}</button>`}<button data-p="${page+1}" ${page<pages-1?'':'disabled'} aria-label="Next page">→</button></div>`}
 $('#pager').addEventListener('click',e=>{const b=e.target.closest('button[data-p]');if(!b||b.disabled)return;page=+b.dataset.p;render()});
 const tip=$('#ltip');let tipT;$('#bwrap').addEventListener('click',e=>{const l=e.target.closest('.lock');if(!l)return;l.classList.remove('shake');void l.offsetWidth;l.classList.add('shake');const br=$('.board').getBoundingClientRect(),r=l.getBoundingClientRect();tip.style.left=(r.left-br.left+r.width/2)+'px';tip.style.top=(r.top-br.top)+'px';tip.classList.add('on');clearTimeout(tipT);tipT=setTimeout(()=>tip.classList.remove('on'),1600)});
 const LK='ti_ideas_local';
 function loadLocal(){let a=[];try{a=JSON.parse(localStorage.getItem(LK)||'[]')}catch(e){}mine=new Map(a.map(x=>[x.key,x]));rows=a.map(x=>({key:x.key,n:x.nm,pd:x.pd,il:(x.ind||'').length,pl:x.pd.length,sl:(x.pt||'').length||12,ts:x.ts}));render()}
 (async()=>{loadLocal();$('#imode').textContent='Only your name appears on the board.';
  if(!window.claude||!claude.use)return;
  try{const [d,u]=await Promise.all([claude.use('db'),claude.use('user')]);if(!d||!u)return;const id=await u.id();if(!id)return;let w=null;try{w=await u.can('data.write')}catch(e){}if(w===false)return;
   db=d;uid=id;mode='db';const me=await db.doc('ideas/'+uid).get();mine=new Map((me.exists?(me.data().items||[]):[]).map(x=>[x.key,x]));
   const to=setTimeout(()=>{$('#imode').textContent='The board is taking a while to load…'},10000);
   db.collection('board').onSnapshot(s=>{clearTimeout(to);const all=[];s.docs.forEach(dc=>((dc.data()||{}).items||[]).forEach(x=>all.push(x)));all.sort((a,b)=>(a.ts||0)-(b.ts||0));rows=all;render();$('#imode').textContent='Live board · only you and Tanjim can see your idea.'},()=>{clearTimeout(to);mode='local';loadLocal()})}catch(e){}})();
 let busy=false;
 $('#iform').addEventListener('submit',async e=>{e.preventDefault();if(busy)return;const nm=$('#inm').value.trim(),pd=$('#ipd').value.trim(),pt=$('#ipt').value.trim(),ind=$i.value;
  if(!nm||!pd){toast('Add your name and a product name ✍️');return}if(!ind){toast('Pick an industry 👆');$i.focus();return}if(pt.length<5){toast('Tell us the problem it solves 💡');$('#ipt').focus();return}
  busy=true;const btn=$('#ilaunch');btn.disabled=true;btn.classList.add('go');const xp=score();const key=Date.now().toString(36)+Math.random().toString(36).slice(2,6),ts=Date.now();
  const full={key,nm,pd,ind,pt,ts},pub={key,n:nm,pd,il:ind.length,pl:pd.length,sl:pt.length,ts};
  try{if(mode==='db'){await db.doc('ideas/'+uid).set({items:[...mine.values(),full].slice(-20)});const bs=await db.doc('board/'+uid).get();await db.doc('board/'+uid).set({items:[...(bs.exists?(bs.data().items||[]):[]),pub].slice(-20)});mine.set(key,full)}
   else{let a=[];try{a=JSON.parse(localStorage.getItem(LK)||'[]')}catch(e){}a.push(full);try{localStorage.setItem(LK,JSON.stringify(a.slice(-20)))}catch(e){}loadLocal()}}
  catch(err){busy=false;btn.disabled=false;btn.classList.remove('go');toast(err&&err.code==='quota_exceeded'?'The lab is full right now — try again later':'Couldn’t save your idea. Please try again.');return}
  const rank=(rows.findIndex(r=>r.key===key)+1)||rows.length;page=Math.floor((Math.max(1,rank)-1)/PER);render();celebrate(nm,pd,rank,xp);
  setTimeout(()=>{btn.classList.remove('go');btn.disabled=false;busy=false;$('#iform').reset();score()},1200)});
 function celebrate(nm,pd,rank,xp){const m=$('#ipop');$('#ipe').textContent=['🚀','💡','🌍','✨','🦄'][Math.random()*5|0];$('#iph').innerHTML=`Thank you, <span class="gtext">${esc(nm.split(' ')[0])}</span>! 🎉`;
  const msg=`“${pd}” just landed in the lab. I'll read every word — and if it can change the world, let's build it together. 🙌`;
  const p=$('#ipp');p.textContent='';let i=0;(function ty(){p.textContent=msg.slice(0,i++);if(i<=msg.length)setTimeout(ty,16)})();
  $('#ips').innerHTML=`<span>🏅 Innovator #${rank}</span><span>⚡ ${xp}% complete</span><span>🔒 Idea sealed</span>`;m.classList.add('open');m.setAttribute('aria-hidden','false');
  const EM=['🎉','✨','💡','🚀','⭐','💜','🌍','🦄'];for(let k=0;k<30;k++){const f=document.createElement('span');f.className='fall';f.textContent=EM[k%8];f.style.left=Math.random()*100+'vw';f.style.animationDuration=(2+Math.random()*2.2)+'s';f.style.animationDelay=(Math.random()*.8)+'s';f.style.fontSize=(16+Math.random()*20)+'px';document.body.appendChild(f);setTimeout(()=>f.remove(),5200)}}
 $$('#ipop [data-iclose]').forEach(b=>b.addEventListener('click',()=>{$('#ipop').classList.remove('open');$('#ipop').setAttribute('aria-hidden','true')}))})();

$$('.copy').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);b.textContent='Copied ✓';toast('Email copied to clipboard')}catch(e){toast('tanjimimtial5@gmail.com')}setTimeout(()=>b.textContent='Copy',1800)});
$('#cform').addEventListener('submit',e=>{e.preventDefault();const n=$('#fn').value.trim(),em=$('#fe').value.trim(),s=$('#fs').value.trim()||'Hello from your portfolio',m=$('#fm').value.trim();
 const href=`mailto:tanjimimtial5@gmail.com?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(m+'\n\n— '+n+' ('+em+')')}`;const box=$('#fmsg');box.innerHTML=`✓ Your message is ready. <a href="${href}">Open it in your email app</a> to send — or write directly to <b>tanjimimtial5@gmail.com</b>.`;box.classList.add('show')});

$$('.rv,.split').forEach(el=>{if(el.id!=='heroH')io.observe(el)});$$('.cnt').forEach(c=>cio.observe(c));
})();
(()=>{const w=[...document.querySelectorAll('#rotw>span')];let k=0;setInterval(()=>{const a=w[k];a.classList.remove('on');a.classList.add('out');setTimeout(()=>a.classList.remove('out'),700);k=(k+1)%w.length;w[k].classList.add('on')},2300)})();
(()=>{const u=document.getElementById('upbtn');if(!u)return;addEventListener('scroll',()=>u.classList.toggle('show',scrollY>innerHeight*.8),{passive:true});u.onclick=()=>scrollTo({top:0,behavior:'smooth'})})();
(()=>{const mq=matchMedia('(max-width:680px)');let pageScroll=0,selfFix=0;addEventListener('scroll',()=>{if(Date.now()-selfFix>80)pageScroll=Date.now()},{passive:true});addEventListener('touchmove',()=>{pageScroll=Date.now()},{passive:true});
document.querySelectorAll('.xs').forEach(el=>{let hold=0,vis=false,idx=0;const stop=()=>{hold=Date.now()+6000};['touchstart','pointerdown','wheel'].forEach(ev=>el.addEventListener(ev,stop,{passive:true}));new IntersectionObserver(e=>{vis=e[0].isIntersecting},{threshold:.2}).observe(el);
 setInterval(()=>{if(!mq.matches||!vis||Date.now()<hold||Date.now()-pageScroll<700||document.hidden)return;const kids=[...el.children].filter(c=>c.offsetParent!==null);if(kids.length<2)return;
  const er=el.getBoundingClientRect(),mid=er.left+er.width/2;const cur=kids.findIndex(k=>{const r=k.getBoundingClientRect();return r.left+r.width/2>=mid-er.width*.2});idx=(cur<0?0:cur)+1;if(idx>=kids.length||el.scrollLeft+el.clientWidth>=el.scrollWidth-8)idx=0;
  const kr=kids[idx].getBoundingClientRect();slide(el,Math.max(0,Math.min(el.scrollWidth-el.clientWidth,el.scrollLeft+(kr.left-er.left)-(er.width-kr.width)/2)))},3800)});
function slide(el,to){const y0=window.scrollY,from=el.scrollLeft,t0=performance.now(),d=650;el.style.scrollSnapType='none';el.style.scrollBehavior='auto';
 const f=t=>{if(Date.now()-pageScroll<120){el.style.scrollSnapType='';return}const p=Math.min(1,(t-t0)/d),e=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;el.scrollLeft=from+(to-from)*e;if(Math.abs(window.scrollY-y0)>1&&Date.now()-pageScroll>400){selfFix=Date.now();window.scrollTo(0,y0)}if(p<1)requestAnimationFrame(f);else setTimeout(()=>{el.style.scrollSnapType='';if(Math.abs(window.scrollY-y0)>1&&Date.now()-pageScroll>400){selfFix=Date.now();window.scrollTo(0,y0)}},60)};requestAnimationFrame(f)}})();
(()=>{const top=()=>window.scrollTo(0,0);if(location.hash){try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}}top();addEventListener('load',()=>{top();setTimeout(top,50)});addEventListener('pageshow',top)})();
