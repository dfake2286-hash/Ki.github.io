const IMG = {
  stairs:"images/stairway.jpg",
  hall:"images/silent-cathedral.jpg",
  garden:"images/rose-garden.jpg",
  cemetery:"images/cemetery.jpg",
  library:"images/library.jpg",
  tower:"images/tower.jpg"
};

const places = [
 {g:"🥀", th:"บันไดแห่งการหลับใหล", en:"The Sleeping Stairway", img:"stairs", tags:["ทางเข้าหลัก"],
  body:["บันไดหินขนาดใหญ่ทอดขึ้นสู่เขตวิหารหลัก มีซุ้มประตูโกธิกตรงทางขึ้น สองข้างเต็มไปด้วยกุหลาบสีดำที่เลื้อยพันราวหินและเสาเก่าแก่","หิมะปกคลุมพื้นบันไดเป็นบางส่วน จึงต้องระวังขณะเดิน"],
  notice:["กลีบกุหลาบสีดำตกอยู่ตามขั้นบันได","รอยเท้าบนหิมะที่ระบุไม่ได้ว่าเป็นของใคร"]},
 {g:"⛪", th:"มหาวิหารแห่งความเงียบ", en:"The Silent Cathedral", img:"hall", tags:["โถงหลัก"],
  body:["โถงใหญ่ที่มีเพดานสูงและเสาหินเรียงยาว หน้าต่างกระจกสีทอดตัวขึ้นเกือบถึงเพดาน แสงจันทร์ลอดผ่านลงมาเป็นลวดลายหลากสีบนพื้นหิน","ภายในมีม้านั่งไม้เก่า แท่นพิธี และรูปสลักเทวทูตตามแนวเสา ไม่มีเสียงระฆังหรือเสียงสวดมนต์เหลืออยู่ แม้จะมีหอระฆังอยู่เหนืออาคาร"],
  notice:["ลวดลายแสงสีบนพื้นหิน","รูปสลักเทวทูตตามแนวเสา","ความเงียบของหอระฆัง"]},
 {g:"🌹", th:"สวนกุหลาบสีดำ", en:"The Black Rose Garden", img:"garden", tags:["เหมาะแก่การพักผ่อน"],
  body:["สวนกว้างที่เต็มไปด้วยกุหลาบสีดำสนิท ล้อมศาลาโกธิกกลางสวน และเชื่อมกับทางเดินหินหลายสาย กุหลาบยังบานแม้ท่ามกลางหิมะ","มีม้านั่งหินตามมุมสวน เหมาะแก่การพักผ่อน อ่านหนังสือ หรือนั่งสังเกตบรรยากาศ"],
  notice:["กลีบดอกที่ลอยขึ้นจากพื้นและเคลื่อนไปตามลมโดยไม่มีที่มา","เถาวัลย์หนามที่เลื้อยพันรูปปั้นและซุ้มประตู"]},
 {g:"🪦", th:"สุสานไร้นาม", en:"The Nameless Cemetery", img:"cemetery", tags:["หลังวิหาร"],
  body:["สุสานเก่าแก่ด้านหลังวิหาร ป้ายหลุมศพเรียงรายท่ามกลางหิมะ แต่ไม่มีชื่อผู้ตายสลักอยู่เลยสักป้าย","รูปปั้นเทวทูตหินยืนเฝ้าตามจุดต่าง ๆ บางรูปมีปีกสมบูรณ์ บางรูปเหลือเพียงโครงปีกที่แตกหัก"],
  notice:["กุหลาบสีดำที่วางหน้าหลุมศพทุกแห่ง โดยไม่ทราบว่าใครนำมาวาง","กลิ่นดินเย็นและหินเปียกน้ำค้าง"]},
 {g:"📚", th:"หอสมุดนิทรา", en:"The Library of Slumber", img:"library", tags:["ห้องสมุดใต้ดิน","เหมาะแก่การค้นคว้า"],
  body:["ห้องสมุดใต้ดินขนาดใหญ่ ชั้นไม้สูงจรดเพดานเต็มไปด้วยหนังสือเก่า มีบันไดวนและระเบียงเชื่อมแต่ละชั้น ใจกลางห้องมีโต๊ะอ่านหนังสือขนาดใหญ่ พร้อมโคมไฟและเก้าอี้เก่า","หนังสือบางเล่มบันทึกเรื่องที่ไม่มีใครจำได้ บางเล่มมีเพียงชื่อผู้เขียนกับหน้าว่าง และบางเล่มมีข้อความที่ดูเหมือนเปลี่ยนไปเมื่อกลับมาอ่านอีกครั้ง"],
  notice:["กลิ่นหมึกและหนังสือโบราณ","หน้ากระดาษที่พลิกเอง"]},
 {g:"🌙", th:"หอคอยแห่งดวงจันทร์", en:"The Moonlit Tower", img:"tower", tags:["จุดชมวิว","เงียบสงบที่สุด"],
  body:["หอคอยที่สูงที่สุดของวิหาร มีบันไดวนขึ้นสู่ระเบียงเปิดโล่ง มองเห็นทั้งสวนกุหลาบ สุสาน แนวป่า และภูมิประเทศที่อยู่ไกลออกไป","ราวหินแกะสลักและเสาโกธิกประดับเถากุหลาบ แสงจันทร์ส่องลงบนพื้นหินที่มักมีหิมะบาง ๆ"],
  notice:["เสียงระฆังที่เล่ากันว่าดังบางคืน ทั้งที่ไม่มีใครเคยพบระฆังที่สมบูรณ์"]},
 {g:"🪞", th:"ห้องโถงกระจกเงา", en:"The Hall of Silent Mirrors", tags:["ห้องโถงยาว"],
  body:["ห้องโถงยาวที่มีกระจกโบราณติดตามผนังทั้งสองด้าน กรอบทำจากโลหะสีเงินหม่น แกะสลักลายกุหลาบตามขอบ","กระจกส่วนใหญ่สะท้อนภาพตามปกติ แต่บางบานอาจสะท้อนรายละเอียดที่ต่างออกไป เช่น แสงไฟที่ไม่มีอยู่จริง หรือเงาของวัตถุที่ไม่ปรากฏในห้อง"],
  notice:["เงาสะท้อนที่คลาดเคลื่อนเล็กน้อย"]},
 {g:"🕰️", th:"ห้องนาฬิกาที่หยุดนิ่ง", en:"The Frozen Clock Chamber", tags:["ห้องเก็บของเก่า"],
  body:["ห้องเก็บนาฬิกาเก่าหลายแบบ ทั้งนาฬิกาตั้งพื้น นาฬิกาแขวน และนาฬิกากลไกขนาดใหญ่ บางเรือนหยุดที่เที่ยงคืน บางเรือนหยุดในเวลาอื่นโดยไม่มีรูปแบบร่วมกัน","เสียงกลไกบางส่วนยังดังเป็นระยะ แม้ลูกตุ้มจะหยุดเคลื่อนไหวไปแล้ว"],
  notice:["เสียงกลไกที่ดังทั้งที่ลูกตุ้มไม่ขยับ"]},
 {g:"🕊️", th:"ระเบียงเทวทูต", en:"The Angel's Gallery", tags:["ลมแรงกว่าที่อื่นเล็กน้อย"],
  body:["ระเบียงหินที่เชื่อมกับส่วนบนของมหาวิหาร มีรูปปั้นเทวทูตเรียงตามแนวกำแพง บางรูปมองลงสู่สวน บางรูปก้มหน้าประสานมือราวกับภาวนา","หิมะมักเกาะตามปีกและไหล่ของรูปปั้น และมองเห็นยอดหอคอยได้ชัดจากมุมใกล้"],
  notice:["เงาคล้ายปีกบนหน้าต่างกระจกสี","เงาของรูปปั้นที่ทอดผิดทิศ"]},
 {g:"🗝️", th:"ห้องใต้ดินไร้แสง", en:"The Lightless Crypt", tags:["ต้องผ่านการพิจารณาของ GM"], gm:true,
  body:["พื้นที่ใต้ส่วนเก่าของวิหาร มีทางเดินหินแคบและประตูเหล็กเก่าหลายบาน บางห้องมีชั้นเก็บของและกล่องไม้ที่ถูกทิ้งไว้นาน","ภายในมืดกว่าที่อื่นอย่างเห็นได้ชัด แสงจากภายนอกแทบส่องไม่ถึง ผนังบางส่วนมีสัญลักษณ์และรอยสลักที่ยังไม่รู้ความหมาย"],
  notice:["สัญลักษณ์เก่าแก่บนผนัง"]}
];

const rumors = [
 "มีคนกล่าวว่า หากเดินขึ้นบันไดแห่งการหลับใหลในช่วงที่หิมะตกหนัก จะพบรอยเท้าอีกคู่เดินอยู่ข้าง ๆ แม้จะไม่มีใครเดินตามมา",
 "บางคนเคยเห็นแสงไฟในหน้าต่างของหอสมุดนิทรา ทั้งที่อาคารส่วนนั้นถูกปิดตายมานานแล้ว",
 "ว่ากันว่ากุหลาบดำในสวนจะไม่ร่วงพร้อมกันสองดอก หากมีใครเด็ดไปหนึ่งดอก ดอกอื่นจะยังอยู่บนกิ่งเสมอ",
 "ผู้ที่เข้าไปในห้องโถงกระจกเงาอาจพบเงาสะท้อนของตนกำลังยิ้ม ทั้งที่เจ้าตัวไม่ได้ยิ้มเลย",
 "มีผู้พบว่ารูปปั้นเทวทูตในสุสานเปลี่ยนท่าทางเล็กน้อยเมื่อกลับมาเยือนอีกครั้ง แต่ไม่มีใครยืนยันได้ว่าเดิมมันอยู่ท่าไหน",
 "บางคืนมีเสียงระฆังดังจากหอคอยแห่งดวงจันทร์ แม้จะไม่มีใครเคยพบระฆังที่ยังสมบูรณ์",
 "มีหนังสือเล่มหนึ่งในหอสมุดนิทราที่ไม่มีชื่อผู้เขียน แต่บนปกมีชื่อของผู้ที่กำลังอ่านมันอยู่",
 "บางคนเชื่อว่า หากนั่งในสวนกุหลาบสีดำจนถึงรุ่งเช้า จะพบว่าหิมะรอบตัวไม่เคยมีรอยเท้าของตนเอง"
];

const phen = [
 ["🌨️","หิมะตกต่อเนื่องโดยไม่มีทิศทางลมแน่นอน"],
 ["🥀","กลีบกุหลาบสีดำลอยทวนกระแสลม"],
 ["🌙","แสงจันทร์ส่องผ่านเมฆ แม้ท้องฟ้าจะมืดครึ้ม"],
 ["🕯️","เปลวเทียนสั่นไหวโดยไม่มีลมพัด"],
 ["🪞","เงาสะท้อนในกระจกคลาดเคลื่อนเล็กน้อย"],
 ["🕰️","เสียงกลไกนาฬิกาดังจากห้องที่ไม่มีนาฬิกาทำงาน"],
 ["📖","หน้ากระดาษในหนังสือบางเล่มพลิกเอง"],
 ["🪦","กลีบกุหลาบปรากฏบนหลุมศพที่ไม่มีผู้มาเยือน"],
 ["🌫️","หมอกสีขาวเคลื่อนผ่านพื้นหินและทางเดิน"],
 ["❄️","เกล็ดหิมะบางส่วนหยุดนิ่งกลางอากาศชั่วครู่"],
 ["🕊️","เงาคล้ายปีกปรากฏบนหน้าต่างกระจกสี"],
 ["🎵","เสียงดนตรีแผ่วเบาดังมาจากห้องที่ว่างเปล่า"],
 ["🌑","เงาของรูปปั้นทอดยาวผิดทิศทาง"],
 ["💠","ผลึกน้ำแข็งสะท้อนแสงสีม่วงจาง ๆ"],
 ["🌹","ดอกกุหลาบบางดอกมีหยดน้ำค้างสีเงินเกาะอยู่"]
];

/* ---- places explorer ---- */
const list = document.getElementById('placeList');
const panel = document.getElementById('placePanel');
places.forEach((p,i)=>{
  const b = document.createElement('button');
  b.className='place-btn'; b.type='button'; b.setAttribute('role','tab');
  b.setAttribute('aria-selected', i===0);
  b.innerHTML = `<span class="g">${p.g}</span><span class="n">${p.th}<span class="e">${p.en}</span></span>`;
  b.addEventListener('click',()=>show(i));
  b.addEventListener('keydown',e=>{
    if(e.key==='ArrowDown'||e.key==='ArrowRight'){e.preventDefault();show((i+1)%places.length,true)}
    if(e.key==='ArrowUp'||e.key==='ArrowLeft'){e.preventDefault();show((i-1+places.length)%places.length,true)}
  });
  list.appendChild(b);
});
function show(i,focus){
  const p = places[i];
  [...list.children].forEach((b,j)=>{b.setAttribute('aria-selected', j===i); if(j===i){ if(focus) b.focus(); b.scrollIntoView({block:'nearest',inline:'center'}) }});
  const media = p.img
    ? `<div class="arch"><img src="${IMG[p.img]}" alt="${p.th}"></div>`
    : `<div class="arch"><div class="blank"><div><span class="big">${p.g}</span><span class="s">ยังไม่มีภาพประกอบสำหรับจุดนี้</span></div></div></div>`;
  const tags = p.tags.map(t=>`<span class="tag-chip ${p.gm&&t.includes('GM')?'gm':''}">${t}</span>`).join('');
  panel.innerHTML = `${media}
  <div class="panel-body">
    <h3>${p.th}</h3><div class="en">${p.en}</div>
    <div class="tags">${tags}</div>
    ${p.body.map(t=>`<p>${t}</p>`).join('')}
    <div class="notice"><h4>สิ่งที่อาจพบ</h4><ul>${p.notice.map(n=>`<li>${n}</li>`).join('')}</ul></div>
  </div>`;
}
show(0);

/* ---- draw ---- */
const card = document.getElementById('card');
let last = {r:-1,p:-1};
function pick(arr,key){let n;do{n=Math.floor(Math.random()*arr.length)}while(n===last[key]&&arr.length>1);last[key]=n;return arr[n]}
function render(kind,text,foot){
  card.classList.remove('flip'); void card.offsetWidth; card.classList.add('flip');
  card.innerHTML = `<div><span class="kind">${kind}</span><q>${text}</q></div><div class="foot">${foot}</div>`;
}
document.getElementById('drawRumor').addEventListener('click',()=>{
  render('ข่าวลือจากวิหาร', pick(rumors,'r'), 'ข่าวลือนี้ยังไม่มีหลักฐานยืนยัน อาจเป็นเพียงเรื่องเล่าจากบรรยากาศของสถานที่');
});
document.getElementById('drawPhen').addEventListener('click',()=>{
  const [e,t] = pick(phen,'p');
  render('ปรากฏการณ์ที่พบ', `${e} ${t}`, 'เป็นเพียงบรรยากาศ ไม่ได้แปลว่าจะพบต้นกำเนิดทันที');
});
const chips = document.getElementById('chips');
phen.forEach(([e,t])=>{const s=document.createElement('span');s.className='chip';s.textContent=`${e} ${t}`;chips.appendChild(s)});

/* ---- snow (hero only, skipped for reduced motion) ---- */
(function(){
  const cv = document.getElementById('snow'); if(!cv) return;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ctx = cv.getContext('2d'); let w,h,flakes=[],petals=[];
  function size(){const r=cv.getBoundingClientRect();w=cv.width=r.width;h=cv.height=r.height;
    const n=Math.round(w*h/9000);
    flakes=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*2+.6,v:Math.random()*.6+.25,d:Math.random()*Math.PI*2}));
    petals=Array.from({length:7},()=>({x:Math.random()*w,y:Math.random()*h,s:Math.random()*7+6,v:Math.random()*.5+.3,a:Math.random()*6.28,ra:(Math.random()-.5)*.02}));
  }
  size(); addEventListener('resize',size);
  let on=true; new IntersectionObserver(e=>{on=e[0].isIntersecting;if(on)loop()}).observe(cv);
  function loop(){
    if(!on) return;
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle='rgba(238,240,248,.85)';
    for(const f of flakes){
      f.y+=f.v; f.d+=.01; f.x+=Math.sin(f.d)*.35;
      if(f.y>h){f.y=-4;f.x=Math.random()*w}
      ctx.beginPath();ctx.arc(f.x,f.y,f.r,0,6.283);ctx.fill();
    }
    for(const p of petals){
      p.y+=p.v; p.x+=Math.sin(p.a)*.6; p.a+=p.ra*3;
      if(p.y>h+20){p.y=-20;p.x=Math.random()*w}
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.a);
      ctx.fillStyle='rgba(26,18,38,.9)';ctx.strokeStyle='rgba(169,150,230,.5)';
      ctx.beginPath();ctx.ellipse(0,0,p.s,p.s*.55,0,0,6.283);ctx.fill();ctx.stroke();ctx.restore();
    }
    requestAnimationFrame(loop);
  }
  loop();
})();
