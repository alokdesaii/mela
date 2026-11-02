// ponytail: sample wishlist in memory (resets on reload); items/prices copied from the live catalog
const P = 'https://shop.mela.global/media/catalog/product/';
const C = P + 'cache/c68e9bbb2d73eded5f4972f8e568886c/';
const D = P + 'cache/ef8213ac78f495963443d9d71d343c6d/';
const items = [
  {n:'Taj Mahal Tea · 500g', p:'31.50', o:'42.00', tag:'25% OFF', i:C+'t/a/taj_mahal_tea_500gm-f_1000pxl_1.jpg', a:'Saved 2 days ago'},
  {n:'Amul Salted Butter · 500g', p:'45.00', i:P+'a/m/amul-butter-1.png', a:'Saved 5 days ago'},
  {n:'Fortune Sun Lite Sunflower Oil · 5L', p:'120.00', i:C+'e/d/edited-photo_6_1__1.jpg', a:'Saved last week'},
  {n:'Amul Paneer Block · 1kg', p:'70.00', i:P+'a/m/amul-paneer-block-1kg-1.jpg', oos:true, a:'Saved last week'},
  {n:'AK Foods Dry Roasted Cashews · 450g', p:'65.00', i:C+'1/7/17_1.png', a:'Saved 2 weeks ago'},
  {n:'Gits Gulab Jamun Mix · 200g', p:'10.50', o:'14.00', tag:'25% OFF', i:C+'g/i/gits_gulab_jamun_mix___200g-f-1000x1000.jpg', a:'Saved 2 weeks ago'},
  {n:'Amul Cheese Slices · 200g', p:'28.00', i:D+'a/m/amul_cheese_slice_200g-f_1000pxl.jpg', a:'Saved 3 weeks ago'},
];
const heart = '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/></svg>';
const grid = document.getElementById('grid');

function render() {
  grid.innerHTML = items.map((d, k) =>
    card(d).replace('<article class="card">', `<article class="card"><button class="wl-remove" data-k="${k}" aria-label="Remove ${d.n} from wishlist">${heart}</button>`)
           .replace('</h3>', `</h3><small>${d.a}</small>`)).join('');
  grid.hidden = !items.length;
  document.getElementById('empty').hidden = !!items.length;
  document.querySelector('.wl-head').toggleAttribute('data-empty', !items.length);
  document.getElementById('count').textContent = items.length ? `${items.length} saved item${items.length === 1 ? '' : 's'}` : 'Nothing saved yet';
  document.querySelector('a[href="wishlist.html"] .badge').textContent = items.length;
}
grid.onclick = e => {
  const b = e.target.closest('.wl-remove');
  if (b) { items.splice(+b.dataset.k, 1); render(); }
};
render();
