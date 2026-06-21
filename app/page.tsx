"use client";
import{useState,useEffect,useRef,FormEvent}from"react";
import{useRouter}from"next/navigation";

const P="01029944403",PD="0102 994 4403",PI="+201029944403",WN="201029944403";
const WM="مرحباً، محتاج تفاصيل سيلفر ساندس أورا — Silver Sands ORA Developers";
const WU=`https://wa.me/${WN}?text=${encodeURIComponent(WM)}`;
const WK="1517c55f-0ea9-4648-9551-a0e58bfe0d06";
const DEADLINE=new Date("2026-06-29T23:59:59");

function trackCall(l="call"){if(typeof window!=="undefined"&&(window as any).gtag)(window as any).gtag("event","click_call",{event_category:"contact",event_label:l});}
function trackWA(l="wa"){if(typeof window!=="undefined"&&(window as any).gtag)(window as any).gtag("event","click_whatsapp",{event_category:"contact",event_label:l});}
function trackLead(l="form"){if(typeof window!=="undefined"&&(window as any).gtag)(window as any).gtag("event","generate_lead",{event_category:"lead",event_label:l});}

const IMG={
  hero:"https://ora.properties-eg.com/hero-luxury.webp",logo:"https://ora.properties-eg.com/ora-logo-new.png",
  ssLagoon:"https://ora.properties-eg.com/silversands-lagoon.png",ssLogo:"https://ora.properties-eg.com/silversands-logo-new.png",
  ssPool:"https://ora.properties-eg.com/ss-pool.webp",ssLag:"https://ora.properties-eg.com/ss-lagoon.png",
  ssVilla:"https://ora.properties-eg.com/ss-villa.jpg",ssAerial:"https://ora.properties-eg.com/ss-aerial.jpg",
  zedVilla:"https://ora.properties-eg.com/zedeast-villa.jpg",zedLogo:"https://ora.properties-eg.com/zedeast-logo-new.png",
  zedHero:"https://ora.properties-eg.com/zed-hero.jpg",zedBalcony:"https://ora.properties-eg.com/zed-balcony.png",
  zedAerial:"https://ora.properties-eg.com/zed-aerial.jpg",zedVilla2:"https://ora.properties-eg.com/zed-villa.jpg",
  founder:"https://ora.properties-eg.com/naguib-sawiris.jpg",
};

const PhI=()=><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;

export default function Home(){
  const router=useRouter();
  const[fs,sFs]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const[pop,sPop]=useState(false);const[ps,sPs]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const[ck,sCk]=useState(false);const[prv,sPrv]=useState(false);
  const[cd,sCd]=useState({d:0,h:0,m:0,s:0});
  const pr=useRef(false);const fr=useRef<HTMLFormElement>(null);const pfr=useRef<HTMLFormElement>(null);

  useEffect(()=>{
    document.querySelectorAll(".fin").forEach(el=>{new IntersectionObserver(([e])=>{if(e.isIntersecting)e.target.classList.add("vis")},{threshold:.1}).observe(el)});
    try{if(!localStorage.getItem("ssv2"))sCk(true)}catch{sCk(true)}
    const ci=setInterval(()=>{const diff=DEADLINE.getTime()-Date.now();if(diff<=0){clearInterval(ci);return}sCd({d:Math.floor(diff/864e5),h:Math.floor(diff%864e5/36e5),m:Math.floor(diff%36e5/6e4),s:Math.floor(diff%6e4/1e3)})},1000);
    return()=>clearInterval(ci);
  },[]);
  useEffect(()=>{if(pr.current)return;const os=()=>{if(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)>=.5)go()};const t=setTimeout(()=>go(),15000);window.addEventListener("scroll",os,{passive:true});function go(){if(pr.current)return;pr.current=true;sPop(true);document.body.classList.add("p-on");window.removeEventListener("scroll",os);clearTimeout(t)}return()=>{window.removeEventListener("scroll",os);clearTimeout(t)}},[]);
  function cp(){sPop(false);document.body.classList.remove("p-on")}
  async function sub(r:React.RefObject<HTMLFormElement|null>,ss:(s:any)=>void,src:string){if(!r.current)return;ss("sending");const fd=new FormData(r.current);const pl:Record<string,string>={};fd.forEach((v,k)=>pl[k]=v.toString());try{const res=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(pl)});const d=await res.json();if(d.success){ss("sent");trackLead(src);r.current.reset();if(src==="hero_form")setTimeout(()=>router.push("/thank-you"),800)}else throw 0}catch{ss("error")}}

  return(<>
    {/* NAV */}
    <nav className="nav"><div className="nav-in">
      <a className="nav-logo" href="#"><img src={IMG.logo} alt="ORA Developers أورا"/></a>
      <div className="nav-ctas">
        <a className="nav-call" href={`tel:${PI}`} onClick={()=>trackCall("nav")}><PhI/><span>{PD}</span></a>
        <a className="nav-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("nav")}>💬 واتساب</a>
      </div>
    </div></nav>

    {/* HERO + FORM */}
    <section className="hero" id="hero"><div className="hero-bg"><img src={IMG.hero} alt="سيلفر ساندس أورا الساحل الشمالي — Silver Sands ORA North Coast"/></div>
    <div className="hero-in">
      <div className="hero-left">
        <img src={IMG.logo} alt="ORA Developers أورا" className="hero-logo"/>
        <p className="hero-tag" style={{fontFamily:"var(--font-ar)"}}>سيلفر ساندس · Silver Sands · أورا ORA</p>
        <h1 className="hero-h" style={{fontFamily:"var(--font-ar)"}}>سيلفر ساندس<br/><em>الساحل الشمالي</em></h1>
        <p className="hero-p" style={{fontFamily:"var(--font-ar)"}}>سيلفر ساندس Silver Sands من أورا ORA Developers — شاليهات وفيلات فاخرة بتشطيب كامل في سيدي حنيش، كيلو ٢٢٢. إطلاق The Cove Lagoon الجديد. سيلفر ساندس أورا — استثمر في التميز.</p>
        <p style={{fontSize:11,color:"rgba(255,255,255,.4)",fontStyle:"italic",marginBottom:20}}>Silver Sands by ORA — fully finished luxury residences at Sidi Heneish, Km 222. The Cove Lagoon Launch.</p>
        <div className="hero-stats">
          <div className="hero-stat"><strong>٩.٧M</strong><span>يبدأ من · Starting</span></div>
          <div className="hero-stat"><strong>٨</strong><span>سنوات تقسيط · Years</span></div>
          <div className="hero-stat"><strong>كامل</strong><span>تشطيب · Finished</span></div>
        </div>
      </div>

      {/* FORM WITH COUNTDOWN */}
      <div className="hero-form">
        <p className="cd-label" style={{fontFamily:"var(--font-ar)"}}>⏰ التسجيل ينتهي يوم ٢٩ يونيو — Registration closes June 29</p>
        <div className="cd-bar">
          <div className="cd-box"><strong>{cd.d}</strong><span>يوم</span></div>
          <div className="cd-box"><strong>{cd.h}</strong><span>ساعة</span></div>
          <div className="cd-box"><strong>{cd.m}</strong><span>دقيقة</span></div>
          <div className="cd-box"><strong>{cd.s}</strong><span>ثانية</span></div>
        </div>
        <h2 className="hf-title" style={{fontFamily:"var(--font-ar)"}}>سجّل اهتمامك الآن</h2>
        <p className="hf-sub">Register now for exclusive pricing · سجّل للأسعار الحصرية</p>
        <form ref={fr} onSubmit={(e:FormEvent)=>{e.preventDefault();sub(fr,sFs,"hero_form")}}>
          <input type="hidden" name="access_key" value={WK}/>
          <input type="hidden" name="subject" value="Lead — سيلفر ساندس أورا Silver Sands ORA"/>
          <input type="hidden" name="from_name" value="Silver Sands V2 Landing"/>
          <input type="checkbox" name="botcheck" style={{display:"none"}}/>
          <div className="hf-field"><label>الاسم الكامل · Full Name *</label><input name="name" placeholder="أدخل اسمك — Your name" required/></div>
          <div className="hf-field"><label>رقم الموبايل · Phone *</label><input name="phone" type="tel" placeholder="+20 1XX XXX XXXX" required/></div>
          <div className="hf-field"><label>البريد الإلكتروني · Email</label><input name="email" type="email" placeholder="email@example.com"/></div>
          <div className="hf-field"><label>المشروع · Project</label>
            <select name="project"><option value="Silver Sands — The Cove">سيلفر ساندس — Silver Sands The Cove</option><option value="ZED East">ZED East</option><option value="Both">الاثنين — Both</option></select>
          </div>
          {fs==="sent"?<div style={{textAlign:"center",padding:"14px 0"}}><div style={{fontSize:36}}>✓</div><p style={{color:"var(--color-gold)",fontWeight:700,marginTop:4,fontFamily:"var(--font-ar)"}}>تم الاستلام — جاري التحويل</p></div>
          :<button type="submit" className="hf-submit" disabled={fs==="sending"}>{fs==="sending"?"جاري... Submitting...":"سجّل الآن — Register Now"}</button>}
          {fs==="error"&&<p style={{color:"#ef4444",fontSize:11,textAlign:"center",marginTop:8}}>خطأ — <a href={WU} target="_blank" style={{color:"var(--color-gold)"}}>واتساب WhatsApp</a></p>}
          <p className="hf-disc">بإرسال النموذج توافق على سياسة الخصوصية. الأسعار استرشادية وقابلة للتغيير.<br/>By submitting you agree to our <a href="#" onClick={(e)=>{e.preventDefault();sPrv(true)}}>Privacy Policy</a>. Prices subject to change.</p>
        </form>
      </div>
    </div></section>

    {/* SILVER SANDS — THE COVE */}
    <section className="proj fin" id="silversands"><div className="proj-in">
      <div className="proj-head">
        <div className="proj-hero-img"><img src={IMG.ssLagoon} alt="سيلفر ساندس الساحل الشمالي — Silver Sands The Cove Lagoon أورا ORA"/></div>
        <div className="proj-info">
          <div className="proj-logos"><img src={IMG.ssLogo} alt="Silver Sands سيلفر ساندس"/><img src={IMG.logo} alt="ORA أورا" style={{height:28}}/></div>
          <span className="proj-badge">إطلاق جديد · New Launch — The Cove</span>
          <h2 className="proj-title" style={{fontFamily:"var(--font-ar)"}}>سيلفر ساندس — The Cove Lagoon</h2>
          <p className="proj-desc" style={{fontFamily:"var(--font-ar)"}}>سيلفر ساندس Silver Sands من أورا ORA Developers — إطلاق The Cove Lagoon. وحدات فاخرة بتشطيب كامل بإطلالة مباشرة على بحيرة كريستالية في سيدي حنيش، كيلو ٢٢٢ الساحل الشمالي. سيلفر ساندس أورا — أسلوب حياة متوسطي فاخر.</p>
          <p className="bi-en">Silver Sands by ORA — The Cove Lagoon launch. Fully finished lagoon-front residences at Sidi Heneish, Km 222 North Coast. Mediterranean luxury redefined.</p>
          <div className="proj-price">
            <div className="proj-pr-item"><span>يبدأ من · Starting</span><strong>٩,٧٠٠,٠٠٠ جنيه</strong></div>
            <div className="proj-pr-item"><span>التقسيط · Plan</span><strong>حتى ٨ سنوات</strong></div>
          </div>
          <div className="proj-highlights">
            <div className="proj-hl">بحيرة كريستالية · Crystal Lagoon</div>
            <div className="proj-hl">تشطيب كامل · Fully Finished</div>
            <div className="proj-hl">١ كم شاطئ · 1km Beach</div>
            <div className="proj-hl">فنادق بوتيك · Boutique Hotels</div>
            <div className="proj-hl">كيلو ٢٢٢ · Km 222</div>
            <div className="proj-hl">نجيب ساويرس · Naguib Sawiris</div>
          </div>
        </div>
      </div>
      <div className="proj-gallery">
        {[{s:IMG.ssPool,a:"سيلفر ساندس Silver Sands Pool"},{s:IMG.ssLag,a:"سيلفر ساندس أورا Lagoon"},{s:IMG.ssVilla,a:"فيلات سيلفر ساندس Silver Sands Villa"},{s:IMG.ssAerial,a:"سيلفر ساندس الساحل Silver Sands Aerial"}].map((g,i)=>
          <div key={i} className="proj-gal-item"><img src={g.s} alt={g.a}/></div>
        )}
      </div>
      <a className="proj-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("ss")}>💬 استفسر عن سيلفر ساندس — Silver Sands</a>
    </div></section>

    {/* ZED EAST */}
    <section className="proj fin" id="zedeast"><div className="proj-in">
      <div className="proj-head">
        <div className="proj-hero-img"><img src={IMG.zedVilla} alt="ZED East أورا ORA القاهرة الجديدة New Cairo"/></div>
        <div className="proj-info">
          <div className="proj-logos"><img src={IMG.zedLogo} alt="ZED East"/><img src={IMG.logo} alt="ORA أورا" style={{height:28}}/></div>
          <span className="proj-badge">ZED East · القاهرة الجديدة</span>
          <h2 className="proj-title" style={{fontFamily:"var(--font-ar)"}}>ZED East — حياة عصرية متكاملة</h2>
          <p className="proj-desc" style={{fontFamily:"var(--font-ar)"}}>ZED East من أورا ORA Developers — وحدات بتشطيب كامل وسط مرافق عالمية في القاهرة الجديدة. نادي ZED الرياضي ومساحات خضراء واسعة ومركز أعمال وتجاري متكامل.</p>
          <p className="bi-en">ZED East by ORA — fully finished contemporary residences in New Cairo with world-class amenities, ZED Sports Club, and lush green spaces.</p>
          <div className="proj-price">
            <div className="proj-pr-item"><span>يبدأ من · Starting</span><strong>٩,٠٠٠,٠٠٠ جنيه</strong></div>
            <div className="proj-pr-item"><span>التقسيط · Plan</span><strong>حتى ٩ سنوات</strong></div>
          </div>
          <div className="proj-highlights">
            <div className="proj-hl">تشطيب كامل · Fully Finished</div>
            <div className="proj-hl">نادي ZED الرياضي · ZED Club</div>
            <div className="proj-hl">لاندسكيب فاخر · Landscaping</div>
            <div className="proj-hl">مركز أعمال · Business Hub</div>
          </div>
        </div>
      </div>
      <div className="proj-gallery">
        {[{s:IMG.zedHero,a:"ZED East ORA أورا"},{s:IMG.zedBalcony,a:"ZED East Balcony"},{s:IMG.zedAerial,a:"ZED East Aerial"},{s:IMG.zedVilla2,a:"ZED East Villa أورا"}].map((g,i)=>
          <div key={i} className="proj-gal-item"><img src={g.s} alt={g.a}/></div>
        )}
      </div>
      <a className="proj-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("zed")}>💬 استفسر عن ZED East</a>
    </div></section>

    {/* FOUNDER */}
    <section className="founder fin"><div className="founder-in">
      <div className="founder-img"><img src={IMG.founder} alt="نجيب ساويرس Naguib Sawiris — أورا ORA Developers"/></div>
      <div className="founder-info">
        <p style={{fontSize:10,letterSpacing:3,textTransform:"uppercase",color:"var(--color-gold)",marginBottom:8}}>المؤسس · The Founder</p>
        <h3 className="founder-name" style={{fontFamily:"var(--font-ar)"}}>نجيب ساويرس · Naguib Sawiris</h3>
        <p className="founder-role">رئيس مجلس الإدارة · Chairman</p>
        <blockquote className="founder-quote" style={{fontFamily:"var(--font-ar)"}}>رجل أعمال مصري بارز ومالك شركة أورا ORA Developers الرائدة في التطوير العقاري الفاخر في مصر والعالم.</blockquote>
        <p className="bi-en" style={{marginBottom:16}}>A world-renowned billionaire and visionary owner of ORA Developers, a leader in luxury real estate.</p>
        <p className="founder-text" style={{fontFamily:"var(--font-ar)"}}>تحت قيادته، تقدم أورا ORA مشاريع أيقونية مثل سيلفر ساندس Silver Sands وZED بتصميمات عالمية وتشطيبات فاخرة. الاستثمار مع أورا يضمن جودة استثنائية وقيمة استثمارية قوية.</p>
        <div className="founder-stats">
          <div className="founder-stat"><strong>عالمي</strong><span>خبرة · Global</span></div>
          <div className="founder-stat"><strong>فاخر</strong><span>جودة · Premium</span></div>
          <div className="founder-stat"><strong>موثوق</strong><span>استثمار · Trusted</span></div>
        </div>
        <a className="proj-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("founder")}>💬 تواصل معنا — Contact Us</a>
      </div>
    </div></section>

    {/* WHY */}
    <section className="why fin"><div className="why-in">
      <p className="why-tag">شريكك الاستراتيجي · Your Strategic Partner</p>
      <h2 className="why-h" style={{fontFamily:"var(--font-ar)"}}>لماذا أورا؟ — Why ORA?</h2>
      <div className="why-grid">
        <div className="why-card"><div className="why-num">01</div><h3 style={{fontFamily:"var(--font-ar)"}}>استشارة محايدة ١٠٠٪</h3><p style={{fontFamily:"var(--font-ar)"}}>نقدم استشارات محايدة لضمان أن أورا ORA هي الخيار الأفضل لأهدافك الاستثمارية. سيلفر ساندس Silver Sands أو ZED East — نساعدك تختار الأنسب.</p><p className="bi-en">100% unbiased consultation to match your investment goals.</p></div>
        <div className="why-card"><div className="why-num">02</div><h3 style={{fontFamily:"var(--font-ar)"}}>إرشاد خطوة بخطوة</h3><p style={{fontFamily:"var(--font-ar)"}}>خبراؤنا يرشدوك خطوة بخطوة لحجز أفضل الوحدات في سيلفر ساندس أورا مع خطة سداد تناسب ميزانيتك.</p><p className="bi-en">Expert step-by-step guidance to secure prime units with flexible plans.</p></div>
      </div>
      <a className="proj-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("why")} style={{marginTop:28,display:"inline-flex"}}>💬 تحدث مع خبير — Talk to an Expert</a>
    </div></section>

    {/* FOOTER */}
    <footer className="ft"><div className="ft-in">
      <img src={IMG.logo} alt="ORA أورا" className="ft-logo"/>
      <p className="ft-disc" style={{fontFamily:"var(--font-ar)"}}>هذا الموقع يقدم معلومات عن مشاريع أورا ORA Developers — سيلفر ساندس Silver Sands الساحل الشمالي وZED East القاهرة الجديدة. الأسعار استرشادية وقابلة للتغيير. التعاقد مع المطور مباشرة.<br/><span style={{fontStyle:"italic",fontSize:9}}>Prices and availability subject to change. Contracts directly with ORA Developers.</span></p>
      <div className="ft-links">
        <a href="#" onClick={(e)=>{e.preventDefault();sPrv(true)}}>سياسة الخصوصية · Privacy</a>
        <a href="#silversands">سيلفر ساندس · Silver Sands</a>
        <a href="#zedeast">ZED East</a>
      </div>
      <p className="ft-cr">© 2026 ORA Developers · أورا · سيلفر ساندس Silver Sands · ZED East · أسعار استرشادية</p>
    </div></footer>

    {/* FLOATING WA + CALL */}
    <a className="float-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("float")} aria-label="واتساب WhatsApp">💬</a>
    <a className="float-call" href={`tel:${PI}`} onClick={()=>trackCall("float")} aria-label="اتصل Call">📞</a>

    {/* POPUP */}
    <div className={`p-bk ${pop?"on":""}`} onClick={cp}/>
    <div className={`p-dlg ${pop?"on":""}`}><button className="p-x" onClick={cp}>✕</button>
      <p className="cd-label" style={{fontFamily:"var(--font-ar)"}}>⏰ باقي {cd.d} يوم — {cd.d} days left</p>
      <div className="cd-bar" style={{justifyContent:"center"}}>
        <div className="cd-box"><strong>{cd.d}</strong><span>يوم</span></div>
        <div className="cd-box"><strong>{cd.h}</strong><span>ساعة</span></div>
        <div className="cd-box"><strong>{cd.m}</strong><span>دقيقة</span></div>
        <div className="cd-box"><strong>{cd.s}</strong><span>ثانية</span></div>
      </div>
      <h2 className="hf-title" style={{fontFamily:"var(--font-ar)"}}>سجّل قبل ٢٩ يونيو — Register by June 29</h2>
      <p className="hf-sub" style={{fontFamily:"var(--font-ar)"}}>احصل على أسعار حصرية لـ سيلفر ساندس أورا · Exclusive Silver Sands ORA pricing</p>
      {ps==="sent"?<div style={{textAlign:"center",padding:"14px 0"}}><div style={{fontSize:36}}>✓</div><p style={{color:"var(--color-gold)",fontWeight:700}}>تم · Done!</p></div>
      :<form ref={pfr} onSubmit={(e:FormEvent)=>{e.preventDefault();sub(pfr,sPs,"popup").then(()=>setTimeout(cp,2500))}}>
        <input type="hidden" name="access_key" value={WK}/><input type="hidden" name="subject" value="Popup — سيلفر ساندس Silver Sands ORA"/><input type="hidden" name="from_name" value="SS Popup"/><input type="checkbox" name="botcheck" style={{display:"none"}}/>
        <div className="hf-field"><label>الاسم · Name *</label><input name="name" placeholder="اسمك — Your name" required/></div>
        <div className="hf-field"><label>الموبايل · Phone *</label><input name="phone" type="tel" placeholder="+20 1XX XXX XXXX" required/></div>
        <button type="submit" className="hf-submit" disabled={ps==="sending"}>{ps==="sending"?"...":"سجّل الآن — Register Now"}</button>
        <a href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("popup")} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginTop:10,padding:10,borderRadius:10,background:"#25d366",color:"#fff",fontSize:12,fontWeight:700,textDecoration:"none"}}>💬 واتساب — WhatsApp</a>
      </form>}
    </div>

    {/* PRIVACY */}
    {prv&&<><div style={{position:"fixed",inset:0,zIndex:300,background:"rgba(0,0,0,.6)"}} onClick={()=>sPrv(false)}/><div style={{position:"fixed",zIndex:301,top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"min(520px,92vw)",maxHeight:"85vh",overflowY:"auto",background:"#1a1a1a",border:"1px solid rgba(201,168,76,.15)",borderRadius:18,padding:"28px 24px",color:"#fff"}}>
      <button onClick={()=>sPrv(false)} style={{position:"absolute",top:10,left:10,background:"rgba(255,255,255,.06)",border:"none",borderRadius:"50%",width:28,height:28,color:"#fff",fontSize:14,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
      <h2 style={{fontFamily:"var(--font-head)",fontSize:22,fontWeight:600,marginBottom:12}}>سياسة الخصوصية · Privacy Policy</h2>
      <div style={{fontSize:11,lineHeight:1.8,color:"var(--color-muted)"}}>
        <p style={{marginBottom:8,fontFamily:"var(--font-ar)"}}>نجمع الاسم والهاتف والإيميل فقط عند تعبئة النموذج — للتواصل بخصوص سيلفر ساندس Silver Sands وZED East من أورا ORA.</p>
        <p style={{marginBottom:8}}>We collect name, phone, and email only via the form — to contact you about ORA projects.</p>
        <p style={{marginBottom:8,fontFamily:"var(--font-ar)"}}>بياناتك مشفرة ومحمية. لا نبيع أو نشارك بياناتك مع أطراف ثالثة.</p>
        <p>Contact: <a href={`tel:${PI}`} style={{color:"var(--color-gold)"}}>{PD}</a></p>
      </div></div></>}

    {/* COOKIE */}
    {ck&&<div className="ck"><p style={{fontFamily:"var(--font-ar)"}}>نستخدم cookies لتحسين تجربتك · We use cookies. <button onClick={()=>sPrv(true)} style={{background:"none",border:"none",color:"var(--color-gold)",textDecoration:"underline",cursor:"pointer",fontSize:10,fontFamily:"var(--font-body)"}}>Privacy</button></p>
      <div className="ck-btns"><button className="ck-ok" onClick={()=>{sCk(false);try{localStorage.setItem("ssv2","1")}catch{}}}>موافق · Accept</button><button className="ck-no" onClick={()=>sCk(false)}>رفض · Decline</button></div>
    </div>}

    {/* MOBILE BAR */}
    <nav className="mbar"><div className="mbar-in">
      <a className="m-call" href={`tel:${PI}`} onClick={()=>trackCall("mob")}><PhI/> {PD}</a>
      <a className="m-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("mob")}>💬 واتساب · WhatsApp</a>
    </div></nav>
  </>);
}
