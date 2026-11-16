var e=document.querySelector(`#interest`),t=document.querySelector(`#email-enquiry`);function n(n){if(!e||!t)return;n&&Array.from(e.options).some(e=>e.value===n)&&(e.value=n);let r=e.selectedOptions[0].textContent??`General inquiry`;t.href=`mailto:lefaucheuxesports@gmail.com?subject=${encodeURIComponent(`LFX inquiry — ${r}`)}&body=${encodeURIComponent(`Hello LFX,

My name is: 
Organization (optional): 

I would like to discuss `+r+`.

`)}`}n(new URLSearchParams(location.search).get(`interest`)),e?.addEventListener(`change`,()=>n()),document.querySelectorAll(`[data-interest]`).forEach(t=>t.addEventListener(`click`,r=>{r.preventDefault(),n(t.dataset.interest),history.replaceState(null,``,t.href),document.getElementById(`enquiry`)?.scrollIntoView({behavior:matchMedia(`(prefers-reduced-motion: reduce)`).matches?`instant`:`smooth`}),e?.focus({preventScroll:!0})}));