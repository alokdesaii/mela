// ponytail: page-1 data for Dairy Products, copied from the live site; sort/filter are visual only
const C = 'https://shop.mela.global/media/catalog/product/cache/ef8213ac78f495963443d9d71d343c6d/';
const products = [
  ['Milky Mist Malai Paneer Cubes · 200g','15.00','m/i/milkymist-malai-paneer-cubes.png'],
  ['Meadow Fresh Full Cream Milk · 1L','15.00','7/_/7_2.png'],
  ['Amul Cheese Tin · 400g','40.00','a/m/amul-cheese-with-lid-1_1_.jpg',1],
  ['Amul Paneer Cube · 200g','18.00','i/m/images_2.jpg',1],
  ['Amul Garlic Butter · 100g','18.00','1/6/166.png'],
  ['Meadow Fresh Full Cream Milk · 1L × 12','150.00','5/8/5805000030.jpg'],
  ['Kohinoor Paneer Cubes · 1kg','65.00','1/6/162.png'],
  ['Kohinoor Paneer Cubes · 500g','38.00','1/6/160.png'],
  ['Amul Spiced Buttermilk (Chhachh) · 200ml','8.00','i/m/images_10_.jpg',1],
  ['Amul White Lactic Butter · 500g','45.00','a/m/amul_white_lactic_butter_500g-f_1000pxl.jpg'],
  ['Amul Unsalted Butter · 500g','45.00','a/m/amul-unsalted-butter-500-gm.jpg'],
  ['Amul Unsalted Butter · 100g','15.00','a/m/amul-butter-.jpg'],
  ['Amul Cheese Slices · 200g','28.00','a/m/amul_cheese_slice_200g-f_1000pxl.jpg'],
  ['Amul Salted Butter · 100g','14.00','a/m/amul_salted_butter_100g-f_1000pxl.jpg'],
  ['Chaokoh Coconut Milk · 1L','30.00','c/h/chaokoh_coconut_milk_1ltr.png'],
  ['Black & White Milk Powder · 2kg','250.00','b/l/black-_-white-milk-powder-.jpg'],
  ['Double Happiness Evaporated Milk · 385g × 48','576.00','d/o/double_happiness_evaporated_filled_milk___385g_x_48-f-1000x1000.jpg'],
  ['Kara UHT Coconut Milk · 1L','30.00','k/a/kara_uht_coconut_milk___1ltr-f-1000x1000.jpg',1],
].map(p => ({n:p[0], p:p[1], i:C+p[2], oos:p[3]}));
document.getElementById('grid').innerHTML = products.map(card).join('');

const subcats = [['Cheese',3],['Butter',6],['Paneer Products',6],['Milk',8],['Coconut Milk & Cream',3],['Flavoured Milk',2]];
document.getElementById('subcats').innerHTML = subcats.map(([n,c]) =>
  `<li><label><input type="checkbox"> ${n.replace('&','&amp;')} <span>${c}</span></label></li>`).join('');

const cats = ['Dairy Products','Fresh Fruits & Vegetables','Snacks & Munchies','Tea, Coffee & Beverages','Flours, Rice & Pulses',
  'Dry Fruits, Nuts & Seeds','Breakfast, Pasta & Instant Foods','Personal Care','Puja Essentials','Sweets, Desserts & Confectionery',
  'Cooking Oils & Ghee','Spices & Seasonings','Bakery & Biscuits','Sauces, Spreads & Condiments','Home & Office Essentials',
  'Soft Drinks & Juices','Pharma & Wellness','Festive Items'];
const rail = document.getElementById('rail');
rail.innerHTML = cats.map((n,i) => `<a href="listing.html"${i ? '' : ' aria-current="page"'}>${n.replace('&','&amp;')}</a>`).join('');
document.querySelectorAll('.rail-arrow').forEach(b =>
  b.onclick = () => rail.scrollBy({left: b.dataset.dir * rail.clientWidth * .7}));

// filters start collapsed on phones
if (matchMedia('(max-width:860px)').matches) document.querySelector('.filters').open = false;
