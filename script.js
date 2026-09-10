const glow=document.querySelector('.cursor-glow');
document.addEventListener('pointermove',e=>{glow.style.transform=`translate(${e.clientX-120}px,${e.clientY-120}px)`});

const rows=document.querySelectorAll('.skill-row');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const row=entry.target;
      const level=row.dataset.level;
      row.querySelector('.bar i').style.width=level+'%';
      observer.unobserve(row);
    }
  });
},{threshold:.35});
rows.forEach(row=>observer.observe(row));

document.querySelectorAll('.cv-btn,.social-btn').forEach(el=>{
  el.addEventListener('mousemove',e=>{
    const r=el.getBoundingClientRect();
    el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.06}px,${(e.clientY-r.top-r.height/2)*.06}px)`;
  });
  el.addEventListener('mouseleave',()=>el.style.transform='');
});
