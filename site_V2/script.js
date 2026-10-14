(function(){
var d=document,r=d.documentElement,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
d.getElementById('theme').onclick=function(){var c=r.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');var n=c==='dark'?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('th',n)}catch(e){}};
try{var s=localStorage.getItem('th');if(s)r.setAttribute('data-theme',s)}catch(e){}
/* typing */
var roles=['Cybersecurity enthusiast','Python developer','CEH in progress','Builder of secure things'],t=d.getElementById('type'),ri=0,ci=0,del=false;
function tick(){var w=roles[ri];ci+=del?-1:1;t.innerHTML='> '+w.slice(0,ci)+'<i></i>';
var s=del?35:70;if(!del&&ci===w.length){del=true;s=1400}else if(del&&ci===0){del=false;ri=(ri+1)%roles.length;s=300}
setTimeout(tick,s)}
if(rm){t.textContent='> '+roles.join(' · ')}else tick();
/* network canvas */
var cv=d.getElementById('net'),cx=cv.getContext('2d'),P=[],W,H,col='#00ff99';
function rs(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;col=getComputedStyle(r).getPropertyValue('--accent').trim()||col;
var n=Math.min(70,Math.floor(W*H/14000));P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5})}
function draw(){cx.clearRect(0,0,W,H);cx.fillStyle=col;cx.strokeStyle=col;
for(var i=0;i<P.length;i++){var a=P[i];if(!rm){a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1}
cx.globalAlpha=.9;cx.beginPath();cx.arc(a.x,a.y,1.6,0,6.3);cx.fill();
for(var j=i+1;j<P.length;j++){var b=P[j],dx=a.x-b.x,dy=a.y-b.y,q=dx*dx+dy*dy;if(q<14400){cx.globalAlpha=(1-q/14400)*.35;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}}
if(!rm)requestAnimationFrame(draw)}
rs();draw();addEventListener('resize',rs);
new MutationObserver(function(){rs();if(rm)draw()}).observe(r,{attributes:true,attributeFilter:['data-theme']});
/* reveal + counters */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
d.querySelectorAll('.ch,.end .rv').forEach(function(el){io.observe(el)});
d.querySelectorAll('[data-n]').forEach(function(el){var n=+el.dataset.n,k=0;if(rm){el.textContent=n+(n>9?'+':'');return}
var iv=setInterval(function(){k++;el.textContent=k>=n?n+(n>9?'+':''):k;if(k>=n)clearInterval(iv)},900/n)});
/* scroll progress + rail fill */
var bar=d.getElementById('bar'),fill=d.getElementById('fill'),st=d.querySelector('.story');
function sc(){var h=r.scrollHeight-innerHeight;bar.style.width=(h>0?scrollY/h*100:0)+'%';
var b=st.getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.6-b.top)/b.height));fill.style.height=p*100+'%'}
addEventListener('scroll',sc,{passive:true});sc();
/* cursor glow + card tilt (pointer devices) */
var g=d.getElementById('glow');
if(matchMedia('(hover: hover)').matches&&!rm){
addEventListener('pointermove',function(e){g.style.transform='translate('+(e.clientX-190)+'px,'+(e.clientY-190)+'px)'});
d.querySelectorAll('.card').forEach(function(c){
c.addEventListener('pointermove',function(e){var b=c.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;c.style.transform='perspective(700px) rotateY('+x*8+'deg) rotateX('+-y*8+'deg) translateY(-3px)'});
c.addEventListener('pointerleave',function(){c.style.transform=''})})}
})();