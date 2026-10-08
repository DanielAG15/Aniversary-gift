const DATA = {
  girlfriendName: "Yulieth",
  yourName: "Daniel",
  relationshipStart: "2022-10-15T00:00:00",
  heroPhoto: "assets/photos/hero.jpg",
  song: { name: "Nuestra canción", youtubeUrl: "https://www.youtube.com/watch?v=BhNuuNoweVs&list=RDBhNuuNoweVs&start_radio=1" },

  memories: [
    {title:"Ese día que quiero repetir",date:"17/06/2024",file:"assets/photos/01.jpg",fallback:"Tu recuerdo #1"},
    {title:"Una aventura más",date:"01/01/2024",file:"assets/photos/02.jpg",fallback:"Tu recuerdo #2"},
    {title:"Donde fuimos simplemente nosotros",date:"27/01/2023",file:"assets/photos/03.jpg",fallback:"Tu recuerdo #3"},
    {title:"Una de mis fotos favoritas",date:"24/02/2024",file:"assets/photos/04.jpg",fallback:"Tu recuerdo #4"},
    {title:"Ese momento que se quedó",date:"31/12/2025",file:"assets/photos/05.jpg",fallback:"Tu recuerdo #5"},
    {title:"Y todavía quedan miles",date:"28/02/2026",file:"assets/photos/06.jpg",fallback:"Tu recuerdo #6"}
  ],

  timeline: [
    {date:"15 · 10 · 2022",title:"El comienzo",text:"El día que comenzó oficialmente nuestra historia. Un día que terminó convirtiéndose en una de las fechas más importantes de mi vida."},
    {date:"NUESTRO PRIMER VIAJE",title:"Una aventura juntos",text:"Nuestro primer viaje juntos a Santa Marta, una aventura que vivimos de la mano y que se convirtió en uno de esos recuerdos que quisiera volver a vivir contigo una y otra vez. ❤️"},
    {date:"UN MOMENTO ESPECIAL",title:"De esos días que no se olvidan",text:"El día que llegaste por primera vez a mi casa, sin siquiera conocernos en persona, te atreviste a venir hasta Bonanza. Bailamos, jugamos y nos divertimos como si nos conociéramos de toda la vida. Sin saberlo, ese día nació una amistad que con el tiempo se convertiría en amor y en nuestra historia juntos. ❤️"},
    {date:"HOY",title:"Nuestro hogar",text:"Hemos construido mucho más que recuerdos. Estamos construyendo una vida, un espacio y una historia que todavía tiene muchos capítulos por escribir."}
  ],

 places: [
  {
    name: "Nuestra primera cita",
    lat: 10.335700,
    lng: -75.413748,
    text: "El lugar donde comenzó uno de nuestros recuerdos más especiales."
  },
  {
    name: "Un lugar especial",
    lat: 10.393180,
    lng: -75.559967,
    text: "Un lugar que guarda una parte importante de nuestra historia."
  },
  {
    name: "Nuestro hogar",
    lat: 10.346059,
    lng: -75.423747,
    text: "Nuestro pequeño pedacito de mundo."
  },
  {
    name: "Propuesta de novios",
    lat: 10.393540,
    lng: -75.481285,
    text: "El lugar donde nuestra historia de amor comenzó oficialmente. ❤️"
  },
   {
    name: "Nuestro primer Beso",
    lat: 10.312500,
    lng: -75.404027,
    text: "Aqui fue donde nos dimos nuestro primer beso, un momento que siempre recordaré con cariño.",
  }
],


  letter: `Mi amor,

Si estás leyendo esto es porque abriste una carta que preparé especialmente para ti.

A veces siento que decir “te amo” se queda pequeño para explicar todo lo que significas para mí.

Gracias por cada momento, por cada risa, por cada abrazo, por las conversaciones interminables y también por esos días en los que simplemente estar juntos fue suficiente.

Me encanta pensar en todo lo que ya hemos vivido, pero todavía más pensar en todo lo que nos falta.

Quiero seguir conociendo lugares contigo, haciendo planes, riéndonos de cosas que solo nosotros entendemos, construyendo nuestro hogar y llenando nuestra historia de recuerdos.

No sé exactamente qué nos espera en los próximos años.

Pero sí sé algo:

Quiero descubrirlo contigo.

Te elegiría otra vez.

Y otra.

Y otra.

Siempre.

♡`,

  vouchers: [
    {icon:"🍿",title:"Noche de películas",text:"Una noche en la que tú eliges película, comida y lugar."},
    {icon:"🍽️",title:"Tú eliges la cena",text:"Vale por una cena en el lugar que tú quieras."},
    {icon:"💆",title:"Vale por un masaje",text:"Porque también mereces que te consientan."},
    {icon:"🌹",title:"Cita sorpresa",text:"No preguntas. Solo te arreglas y confías en mí."},
    {icon:"🍦",title:"Postre obligatorio",text:"Vale por tu postre favorito. No negociable."},
    {icon:"✈️",title:"Una aventura",text:"Un plan especial fuera de la rutina."}
  ],

  dreams: [
    {text:"Ver un atardecer en un lugar nuevo"},
    {text:"Hacer un viaje improvisado"},
    {text:"Conocer una ciudad que ninguno conozca"},
    {text:"Hacernos una sesión de fotos"},
    {text:"Ver nevar juntos"},
    {text:"Cocinar una cena desde cero"},
    {text:"Crear una tradición solo nuestra"},
    {text:"Cumplir un sueño importante de cada uno"},
    {text:"Tener una aventura que recordemos toda la vida"},
    {text:"Seguir eligiéndonos incluso en los días difíciles"}
  ],

  dates:["Cena romántica","Noche de películas","Picnic","Ir por helado","Restaurante nuevo","Cocinar juntos","Paseo nocturno","Cita sorpresa"]
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const ASSET_BASE = new URL(".", document.baseURI);
const store = {
  get(k,f=[]){try{return JSON.parse(localStorage.getItem(k)) ?? f}catch{return f}},
  set(k,v){localStorage.setItem(k,JSON.stringify(v))}
};
const CUSTOM_PINS_KEY = "customPlaces";

function resolveAssetPath(path){return new URL(path, ASSET_BASE).href}

function showToast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2600)}
function escapeHtml(s){return String(s ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}

function renderHeroPhoto(){
  const placeholder=$("#heroPhoto");
  if(!placeholder)return;
  const src=resolveAssetPath(DATA.heroPhoto || placeholder.dataset.src);
  const img=new Image();
  img.onload=()=>{
    placeholder.style.backgroundImage=`url("${src}")`;
    placeholder.style.backgroundSize="cover";
    placeholder.style.backgroundPosition="center";
    placeholder.classList.add("is-ready");
    placeholder.querySelector("span").style.display="none";
    placeholder.querySelector("small").style.display="none";
  };
  img.src=src;
}

function renderGallery(){
  $("#gallery").innerHTML=DATA.memories.map((m,i)=>`
    <article class="memory-card" data-src="${resolveAssetPath(m.file)}">
      <div class="photo-placeholder" style="min-height:${[290,430,320,410,300,360][i%6]}px">
        <span>${escapeHtml(m.fallback)}</span><small>${escapeHtml(m.file)}</small>
      </div>
      <div class="memory-meta"><strong>${escapeHtml(m.title)}</strong><small>${escapeHtml(m.date)}</small></div>
    </article>`).join("");
  $$(".memory-card").forEach(card=>{
    const p=card.querySelector(".photo-placeholder"), src=card.dataset.src;
    const img=new Image(); img.onload=()=>{p.style.backgroundImage=`url("${src}")`;p.style.backgroundSize="cover";p.style.backgroundPosition="center";p.querySelector("span").style.display="none";p.querySelector("small").style.display="none"};img.src=src;
    card.onclick=()=>{if(img.complete&&img.naturalWidth){$("#lightboxImg").src=src;$("#lightbox").classList.remove("hidden")}}
  });
}
function renderTimeline(){ $("#timeline").innerHTML=DATA.timeline.map(x=>`<article class="timeline-item reveal"><span class="timeline-date">${x.date}</span><h3>${x.title}</h3><p>${x.text}</p></article>`).join(""); }
function renderVouchers(){
  const used=store.get("usedVouchers",[]);
  $("#vouchers").innerHTML=DATA.vouchers.map((v,i)=>`<article class="voucher ${used.includes(i)?"used":""}">
    ${used.includes(i)?'<span class="used-label">CANJEADO ♡</span>':""}<div class="icon">${v.icon}</div><h3>${v.title}</h3><p>${v.text}</p>
    <button ${used.includes(i)?"disabled":""} onclick="redeemVoucher(${i})">${used.includes(i)?"Ya está guardado ♡":"Canjear vale"}</button></article>`).join("");
  $("#availableVouchers").textContent=DATA.vouchers.length-used.length;$("#usedVouchers").textContent=used.length;
}
window.redeemVoucher=i=>{
  if(!confirm("¿Segura que quieres usar este vale? ❤️"))return;
  const used=store.get("usedVouchers",[]);if(!used.includes(i))used.push(i);store.set("usedVouchers",used);renderVouchers();
  showToast("Vale canjeado ♡ Ahora solo falta hacerlo realidad.");
  burst();
}
function renderDreams(){
  const done=store.get("dreams",[]);
  $("#dreams").innerHTML=DATA.dreams.map((d,i)=>`<div class="dream ${done.includes(i)?"done":""}" onclick="toggleDream(${i})"><span class="dream-check">✓</span><span>${d.text}<small>${done.includes(i)?"Cumplido ♡":"Algún día lo haremos."}</small></span></div>`).join("");
  $("#progressText").textContent=`${done.length} / ${DATA.dreams.length}`;
  $("#progressBar").style.width=`${done.length/DATA.dreams.length*100}%`;
}
window.toggleDream=i=>{const d=store.get("dreams",[]);d.includes(i)?d.splice(d.indexOf(i),1):d.push(i);store.set("dreams",d);renderDreams();if(d.includes(i)){showToast("Uno menos de nuestra lista ♡");burst()}}

function updateCounter(){
  const start=new Date(DATA.relationshipStart), now=new Date();
  let years=now.getFullYear()-start.getFullYear(), months=now.getMonth()-start.getMonth(), days=now.getDate()-start.getDate();
  if(days<0){months--;days+=new Date(now.getFullYear(),now.getMonth(),0).getDate()}
  if(months<0){years--;months+=12}
  const diff=now-start, hours=Math.floor(diff/36e5)%24, minutes=Math.floor(diff/6e4)%60, seconds=Math.floor(diff/1e3)%60;
  [["years",years],["months",months],["days",days],["hours",hours],["minutes",minutes],["seconds",seconds]].forEach(([id,v])=>$("#"+id).textContent=v);
}

let playing=false;
function updateMusicUi(isPlaying){
  playing=isPlaying;
}

function extractYouTubeVideoId(url){
  try{
    const parsed=new URL(url);
    if(parsed.hostname.includes("youtu.be"))return parsed.pathname.slice(1);
    if(parsed.pathname.startsWith("/shorts/"))return parsed.pathname.split("/")[2] || "";
    if(parsed.pathname.startsWith("/embed/"))return parsed.pathname.split("/")[2] || "";
    return parsed.searchParams.get("v") || "";
  }catch{return ""}
}

function extractYouTubeStart(url){
  try{
    const parsed=new URL(url);
    const raw=parsed.searchParams.get("t") || parsed.searchParams.get("start") || "0";
    if(/^\d+$/.test(raw))return Number(raw);
    const match=raw.match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/);
    if(!match)return 0;
    return (Number(match[1] || 0) * 3600) + (Number(match[2] || 0) * 60) + Number(match[3] || 0);
  }catch{return 0}
}

function getYouTubeEmbedUrl(url, autoplay=false){
  const videoId=extractYouTubeVideoId(DATA.song.youtubeUrl || "");
  if(!videoId)return "";
  const start=extractYouTubeStart(url || "");
  const params=new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    rel: "0",
    playsinline: "1",
    modestbranding: "1"
  });
  if(start > 0)params.set("start", String(start));
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

function initMusic(){
  const embed=$("#youtubeEmbed");
  const songName=DATA.song.name || "Nuestra canción";
  const baseEmbedUrl=getYouTubeEmbedUrl(DATA.song.youtubeUrl, false);
  $("#songSectionName").textContent=songName;
  embed.title=songName;
  if(baseEmbedUrl)embed.src=baseEmbedUrl;
  $("#enterBtn").onclick=async()=>{
    $("#welcome").classList.add("hidden");
    $("#app").classList.remove("hidden");
    renderMap();
    window.scrollTo(0,0);
    burst(14);
    requestAnimationFrame(()=>mapInstance?.invalidateSize());
    if(baseEmbedUrl){
      embed.src=getYouTubeEmbedUrl(DATA.song.youtubeUrl, true);
      updateMusicUi(true);
    }else{
      showToast("Configura una URL válida de YouTube para la canción.");
    }
  };
  $("#musicMini").onclick=()=>$("#cancion").scrollIntoView({behavior:"smooth",block:"start"});
}

let mapInstance;
let mapMarkersLayer;
function getPlaces(){return [...DATA.places,...store.get(CUSTOM_PINS_KEY,[])]}
function formatPlacePopup(place){
  const parts=[`<strong>${escapeHtml(place.name)} ♡</strong>`];
  if(place.date)parts.push(`<small>${escapeHtml(place.date)}</small>`);
  if(place.text || place.description)parts.push(`<div>${escapeHtml(place.text || place.description)}</div>`);
  if(place.memory)parts.push(`<em>${escapeHtml(place.memory)}</em>`);
  return parts.join("<br>");
}
function renderMapPins(){
  if(!mapMarkersLayer)return;
  mapMarkersLayer.clearLayers();
  getPlaces().forEach(place=>L.marker([place.lat,place.lng]).addTo(mapMarkersLayer).bindPopup(formatPlacePopup(place)));
}
function askPinField(label, defaultValue=""){
  const value=window.prompt(label, defaultValue);
  if(value===null)return null;
  return value.trim();
}
function createCustomPin(lat,lng){
  const name=askPinField("Nombre del lugar o recuerdo:");
  if(!name)return;
  const description=askPinField("Descripción breve:", "");
  if(description===null)return;
  const date=askPinField("Fecha (opcional):", new Date().toLocaleDateString("es-CO"));
  if(date===null)return;
  const memory=askPinField("Recuerdo o detalle especial:", "");
  if(memory===null)return;
  const customPlaces=store.get(CUSTOM_PINS_KEY,[]);
  customPlaces.push({name,description,date,memory,lat,lng});
  store.set(CUSTOM_PINS_KEY,customPlaces);
  renderMapPins();
  showToast("Nuevo pin guardado ♡");
}

function renderMap(){
  if(!window.L || mapInstance)return;
  mapInstance=L.map("map",{scrollWheelZoom:false}).setView([10.40,-75.49],12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(mapInstance);
  mapMarkersLayer=L.layerGroup().addTo(mapInstance);
  renderMapPins();
  mapInstance.on("click",e=>createCustomPin(e.latlng.lat,e.latlng.lng));
  setTimeout(()=>mapInstance?.invalidateSize(),150);
}

let spinAngle=0;
function drawWheel(angle=0){
  const c=$("#wheel"),ctx=c.getContext("2d"),n=DATA.dates.length,r=250;
  ctx.clearRect(0,0,500,500);
  DATA.dates.forEach((label,i)=>{const a=angle+i*2*Math.PI/n;ctx.beginPath();ctx.moveTo(250,250);ctx.arc(250,250,r,a,a+2*Math.PI/n);ctx.closePath();ctx.fillStyle=i%2?"#c89385":"#e4c8bc";ctx.fill();ctx.strokeStyle="#f7f0e9";ctx.lineWidth=3;ctx.stroke();ctx.save();ctx.translate(250,250);ctx.rotate(a+Math.PI/n);ctx.textAlign="right";ctx.fillStyle="#382d29";ctx.font="600 15px DM Sans";ctx.fillText(label,225,5);ctx.restore()});
  ctx.beginPath();ctx.arc(250,250,45,0,Math.PI*2);ctx.fillStyle="#2d2927";ctx.fill();ctx.fillStyle="#fff";ctx.font="25px serif";ctx.textAlign="center";ctx.fillText("♡",250,258);
}
function spin(){
  $("#spinBtn").disabled=true;const extra=5+Math.random()*4, target=Math.random()*Math.PI*2;spinAngle+=extra*Math.PI*2+target;
  const start=performance.now(),from=spinAngle-(extra*Math.PI*2+target),dur=4300;
  function frame(t){const p=Math.min(1,(t-start)/dur),e=1-Math.pow(1-p,4);drawWheel(from+(spinAngle-from)*e);if(p<1)requestAnimationFrame(frame);else{const n=DATA.dates.length;const normalized=(2*Math.PI-(spinAngle%(2*Math.PI)))%(2*Math.PI);const idx=Math.floor(normalized/(2*Math.PI/n))%n;showResult(DATA.dates[idx]);$("#spinBtn").disabled=false;}}
  requestAnimationFrame(frame);
}
function showResult(result){
  $("#resultCard").innerHTML=`<span>🎉 EL DESTINO HA DECIDIDO</span><h3>${result}<br><small>Ahora solo falta una cosa…</small></h3>`;
  $("#yesNo").classList.remove("hidden");$("#dateResult").textContent=`La ruleta eligió: ${result}.`;
  $("#yesNo").scrollIntoView({behavior:"smooth",block:"center"});burst(25);
}
function moveNo(){
  const area=$("#choiceArea"),btn=$("#noBtn"),maxX=area.clientWidth-btn.offsetWidth,maxY=area.clientHeight-btn.offsetHeight;
  btn.style.left=Math.max(0,Math.random()*maxX)+"px";btn.style.top=Math.max(5,Math.random()*maxY)+"px";
  const msgs=["¿Segura? 👀","Ese botón no coopera 😂","Creo que el universo dijo que no al NO.","Prueba con el otro ♡","No te voy a dejar escapar tan fácil 😏"];
  showToast(msgs[Math.floor(Math.random()*msgs.length)]);
}
$("#noBtn").addEventListener("mouseenter",moveNo);$("#noBtn").addEventListener("pointerdown",e=>{e.preventDefault();moveNo()});
$("#yesBtn").onclick=()=>{ $("#dateQuestion").textContent="Sabía que dirías que sí. ♡";$("#dateResult").textContent="Entonces queda oficialmente aprobada nuestra próxima cita.";$("#noBtn").remove();burst(45);showToast("Cita aprobada oficialmente ♡")};

function burst(n=10){for(let i=0;i<n;i++){const h=document.createElement("span");h.className="heart";h.textContent=Math.random()>.25?"♥":"♡";h.style.left=Math.random()*100+"vw";h.style.bottom="-20px";h.style.animationDuration=(3+Math.random()*4)+"s";h.style.fontSize=(10+Math.random()*18)+"px";$("#hearts").appendChild(h);setTimeout(()=>h.remove(),7000)}}
function revealSetup(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")}),{threshold:.12});$$(".reveal").forEach(e=>io.observe(e))}
$("#openLetter").onclick=()=>{const envelope=$("#envelope");if(envelope.classList.contains("open"))return;envelope.classList.add("open");typeLetter()};
function typeLetter(){const el=$("#letterText");el.textContent="";let i=0;const chars=DATA.letter;function tick(){if(i<chars.length){el.textContent+=chars[i++];setTimeout(tick,16)}}setTimeout(tick,500)}
$("#closeLightbox").onclick=()=>$("#lightbox").classList.add("hidden");$("#lightbox").onclick=e=>{if(e.target.id==="lightbox")$("#lightbox").classList.add("hidden")};
$("#topBtn").onclick=()=>window.scrollTo({top:0,behavior:"smooth"});
$("#spinBtn").onclick=spin;

renderHeroPhoto();renderGallery();renderTimeline();renderVouchers();renderDreams();updateCounter();setInterval(updateCounter,1000);initMusic();drawWheel();revealSetup();
if(!$("#app").classList.contains("hidden"))renderMap();
window.addEventListener("resize",()=>mapInstance?.invalidateSize());
