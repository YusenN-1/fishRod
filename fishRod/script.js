let own={},mode="a";
try{own=JSON.parse(localStorage.getItem("fischRods")||"{}")}catch(e){}
const sv=()=>{try{localStorage.setItem("fischRods",JSON.stringify(own))}catch(e){}};
const E=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const two=s=>{const[a,b]=s.split("~");return E(a)+(b?"<small>"+E(b)+"</small>":"")};
const v=s=>s===""?"":/^-/.test(s)?`<span class="n">${E(s)}</span>`:/^0(%)?$/.test(s)?`<span class="z">${E(s)}</span>`:E(s);
function R(){
const q=document.getElementById("q").value.trim().toLowerCase();
let n=0,h="";
D.forEach((r,i)=>{
 if(q&&!r[0].toLowerCase().includes(q))return;
 const y=!!own[r[0]];
 if(mode==="y"&&!y||mode==="n"&&y)return;
 n++;
 h+=`<tr><td><div class="nm"><img loading="lazy" alt="" src="https://fischipedia.org/wiki/Special:FilePath/${encodeURIComponent(r[0].replace(': ',' - ').replace(/ /g,'_'))}.png?width=100" onerror="this.style.visibility='hidden'"><span>${E(r[0])}</span></div></td><td class="j">${two(r[1])}</td><td class="s">${two(r[2])}</td><td>${E(r[3])}</td><td>${v(r[4])}</td><td>${v(r[5])}</td><td>${v(r[6])}</td><td>${v(r[7])}</td><td>${E(r[8])}</td><td><button class="h${y?" y":""}" data-i="${i}">${y?"✓ มีแล้ว":"✗ ยังไม่มี"}</button></td></tr>`;
});
document.getElementById("b").innerHTML=h;
const o=Object.keys(own).filter(k=>own[k]).length;
document.getElementById("c").textContent=`แสดง ${n} จาก ${D.length} เบ็ด · มีแล้ว ${o} อัน`;
}
document.getElementById("b").onclick=e=>{const b=e.target.closest("button.h");if(!b)return;const k=D[b.dataset.i][0];own[k]=!own[k];sv();R()};
document.querySelectorAll("button.f").forEach(b=>b.onclick=()=>{mode=b.dataset.m;document.querySelectorAll("button.f").forEach(x=>x.classList.toggle("on",x===b));R()});
document.getElementById("q").oninput=R;
R();
