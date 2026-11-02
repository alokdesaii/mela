// ponytail: single sample product (Amul Salted Butter 500g) copied from the live site
const G = 'https://shop.mela.global/media/catalog/product/a/m/';
const shots = ['amul-butter-1.png','amul-butter-4.png','amul-butter-2.png','amul-butter-3.png'];
const main = document.getElementById('mainImg');
const thumbs = document.getElementById('thumbs');
thumbs.innerHTML = shots.map((f,i) =>
  `<button aria-label="View image ${i+1}" aria-current="${!i}"><img src="${G+f}" alt=""></button>`).join('');
thumbs.onclick = e => {
  const b = e.target.closest('button'); if (!b) return;
  main.src = b.querySelector('img').src;
  thumbs.querySelectorAll('button').forEach(x => x.setAttribute('aria-current', x === b));
};

const qty = document.getElementById('qty');
document.querySelectorAll('.qty button').forEach(b =>
  b.onclick = () => qty.value = Math.max(1, (+qty.value || 1) + +b.dataset.step));

const wish = document.querySelector('.wish');
wish.onclick = () => wish.setAttribute('aria-pressed', wish.getAttribute('aria-pressed') !== 'true');

const P = 'https://shop.mela.global/media/catalog/product/';
document.getElementById('related').innerHTML = [
  ['Nestlé Dairy Farm UHT Milk · 1L × 12','155.00','1/_/1.png'],
  ['Amul Paneer Block · 1kg','70.00','a/m/amul-paneer-block-1kg-1.jpg',true],
  ['Real Tast Chickpeas · 400g','10.00','u/n/unnamed_3_.png'],
  ['Amul Cheese Slices · 200g','28.00','cache/ef8213ac78f495963443d9d71d343c6d/a/m/amul_cheese_slice_200g-f_1000pxl.jpg'],
  ['Amul Garlic Butter · 100g','18.00','cache/ef8213ac78f495963443d9d71d343c6d/1/6/166.png'],
].map(p => card({n:p[0], p:p[1], i:P+p[2], oos:p[3]})).join('');
