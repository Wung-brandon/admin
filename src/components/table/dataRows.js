

const data = [
  {
    img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
    product: "Nike Air Monarch IV",
    customer:"john doe",
    status:"approved",
    date:"1 march",
    method:"cash on delivery",
    amount:785
  },
  {
    img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
    product: "Chunky High Heel",
    customer:"micheal doe",
    status:"pending",
    date:"1 march",
    method:"cash on delivery",
    amount:885
  },
  {
    img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
    product: "Amore Fashion Stilettos",
    customer:"jack ma",
    status:"approved",
    date:"1 march",
    method:"cash on delivery",
    amount:1756
  },
  {
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    product: "DREAM PAIRS Court Shoes",
    customer:"wung brandon",
    status:"approved",
    date:"4 april",
    method:"online payment",
    amount:2455
  },
  {
    img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    product: "Slip On Stiletto High Heel",
    customer:"boris ben",
    status:"pending",
    date:"11 may",
    method:"cash on delivery",
    amount:8100
  },
  {
    img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
    product: "Low-Top Trainers",
    customer:"emmanuel",
    status:"pending",
    date:"15 june",
    method:"cash on delivery",
    amount:5420
  },
  {
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
    product: "Classic Bandana Sneakers",
    customer:"venerita",
    status:"approved",
    date:"5 january",
    method:"online payment",
    amount:6120
  },
  

];

data.forEach((product, index) => {
  product.id = index + 1;
  // console.log("id",product.id, product.title)
});

export default data