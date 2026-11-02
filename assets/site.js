// Shared across pages: product card markup + sticky header shadow
const card = d => `<article class="card">
  ${d.oos ? '<span class="tag oos">Out of stock</span>' : d.tag ? `<span class="tag">${d.tag}</span>` : ''}
  <a class="thumb" href="product.html"><img loading="lazy" src="${d.i}" alt="${d.n}"></a>
  <h3><a href="product.html">${d.n}</a></h3>
  <div class="price"><b>HK$${d.p}</b>${d.o ? `<s>HK$${d.o}</s>` : ''}</div>
  <button class="btn btn-primary" ${d.oos ? 'disabled' : ''}>${d.oos ? 'Notify me' : 'Add to cart'}</button>
</article>`;

const head = document.querySelector('.site-head');
addEventListener('scroll', () => head.classList.toggle('scrolled', scrollY > 36), {passive:true});

// countdown: demo only, runs from a fixed offset
let left = ((1*24+23)*60+34)*60+57;
const tb = document.querySelectorAll('#timer b');
if (tb.length) setInterval(() => {
  left = Math.max(0, left-1);
  [Math.floor(left/86400), Math.floor(left/3600)%24, Math.floor(left/60)%60, left%60]
    .forEach((v,i) => tb[i].textContent = String(v).padStart(2,'0'));
}, 1000);
