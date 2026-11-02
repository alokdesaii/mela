// ponytail: sample cart in memory (resets on reload); items/prices copied from the live catalog
const P = 'https://shop.mela.global/media/catalog/product/';
const C = P + 'cache/ef8213ac78f495963443d9d71d343c6d/';
const items = [
  {n:'Amul Salted Butter · 500g', v:'Dairy Products', p:45, q:1, i:P+'a/m/amul-butter-1.png'},
  {n:'Kohinoor Paneer Cubes · 500g', v:'Dairy Products', p:38, q:2, i:C+'1/6/160.png'},
  {n:'Taj Mahal Tea · 500g', v:'Tea & Coffee', p:31.5, q:1, i:C.replace('ef8213ac78f495963443d9d71d343c6d','c68e9bbb2d73eded5f4972f8e568886c')+'t/a/taj_mahal_tea_500gm-f_1000pxl_1.jpg'},
  {n:'Chaokoh Coconut Milk · 1L', v:'Dairy Products', p:30, q:3, i:C+'c/h/chaokoh_coconut_milk_1ltr.png'},
];
const hk = n => 'HK$' + n.toFixed(2);
const bin = '<svg viewBox="0 0 24 24"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>';

function render() {
  const n = items.reduce((a, x) => a + x.q, 0);
  const sub = items.reduce((a, x) => a + x.p * x.q, 0);
  document.getElementById('cart').hidden = !items.length;
  document.getElementById('empty').hidden = !!items.length;
  document.getElementById('count').textContent = items.length ? `${n} item${n === 1 ? '' : 's'}` : '';
  document.getElementById('sub').textContent = hk(sub);
  document.getElementById('total').textContent = hk(sub);
  document.querySelectorAll('a[href="cart.html"] .badge').forEach(b => b.textContent = n);
  document.getElementById('lines').innerHTML = items.map((x, k) => `<li class="line">
    <div class="prod"><a class="thumb" href="product.html"><img src="${x.i}" alt=""></a><div><a class="name" href="product.html">${x.n}</a><small>${x.v}</small></div></div>
    <span class="unit">${hk(x.p)}</span>
    <div class="qty" role="group" aria-label="Quantity for ${x.n}"><button data-k="${k}" data-d="-1" aria-label="Decrease">−</button><span>${x.q}</span><button data-k="${k}" data-d="1" aria-label="Increase">+</button></div>
    <span class="sum">${hk(x.p * x.q)}</span>
    <button class="remove" data-k="${k}" aria-label="Remove ${x.n}">${bin}</button>
  </li>`).join('');
}
document.getElementById('lines').onclick = e => {
  const b = e.target.closest('button'); if (!b) return;
  const k = +b.dataset.k;
  if (b.classList.contains('remove')) items.splice(k, 1);
  else items[k].q = Math.max(1, items[k].q + +b.dataset.d);
  render();
};
render();

document.getElementById('related').innerHTML = [
  ['Amul Garlic Butter · 100g','18.00',C+'1/6/166.png'],
  ['Amul Cheese Slices · 200g','28.00',C+'a/m/amul_cheese_slice_200g-f_1000pxl.jpg'],
  ['Meadow Fresh Full Cream Milk · 1L','15.00',C+'7/_/7_2.png'],
  ['Coke Regular · 330ml','5.00',P+'2/6/269.png'],
  ['Real Tast Chickpeas · 400g','10.00',P+'u/n/unnamed_3_.png'],
].map(p => card({n:p[0], p:p[1], i:p[2]})).join('');
