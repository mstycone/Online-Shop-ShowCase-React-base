
const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest.",
    category: "men's clothing",
    image:  "/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve.",
    category: "men's clothing",
    image:  "/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    rating: {
      rate: 4.1,
      count: 259
    }
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter.",
    category: "men's clothing",
    image:  "/71li-ujtlUL._AC_UX679_t.png",
    rating: {
      rate: 4.7,
      count: 500
    }
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description: "Color may differ slightly from screen.",
    category: "men's clothing",
    image:  "/71YXzeOuslL._AC_UY879_t.png",
    rating: {
      rate: 2.1,
      count: 430
    }
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Bracelet",
    price: 695,
    description: "Inspired by the mythical water dragon.",
    category: "jewelery",
    image:  "/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    rating: {
      rate: 4.6,
      count: 400
    }
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave",
    price: 168,
    description: "Return or exchange within 30 days.",
    category: "jewelery",
    image:  "/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    rating: {
      rate: 3.9,
      count: 70
    }
  },
  {
    id: 7,
    title: "White Gold Plated Princess Ring",
    price: 9.99,
    description: "Classic wedding engagement ring.",
    category: "jewelery",
    image:  "/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    rating: {
      rate: 3,
      count: 400
    }
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Earrings",
    price: 10.99,
    description: "Made of 316L stainless steel.",
    category: "jewelery",
    image:  "/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    rating: {
      rate: 1.9,
      count: 100
    }
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive",
    price: 64,
    description: "USB 3.0 external hard drive.",
    category: "electronics",
    image:  "/61IBBVJvSDL._AC_SY879_t.png",
    rating: {
      rate: 3.3,
      count: 203
    }
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD",
    price: 109,
    description: "Fast boot up and application load.",
    category: "electronics",
    image:  "/61U7T1koQqL._AC_SX679_t.png",
    rating: {
      rate: 2.9,
      count: 470
    }
  },
  {
    id: 11,
    title: "Silicon Power 256GB SSD",
    price: 109,
    description: "High transfer speeds and reliability.",
    category: "electronics",
    image:  "/71kWymZ+c+L._AC_SX679_t.png",
    rating: {
      rate: 4.8,
      count: 319
    }
  },
  {
    id: 12,
    title: "WD 4TB Gaming Drive for PS4",
    price: 114,
    description: "Expand your PS4 gaming experience.",
    category: "electronics",
    image:  "/61mtL65D4cL._AC_SX679_t.png",
    rating: {
      rate: 4.8,
      count: 400
    }
  },
  {
    id: 13,
    title: "Acer SB220Q 21.5 inch Full HD Monitor",
    price: 599,
    description: "IPS ultra-thin display.",
    category: "electronics",
    image:  "/81QpkIctqPL._AC_SX679_t.png",
    rating: {
      rate: 2.9,
      count: 250
    }
  },
  {
    id: 14,
    title: "Samsung 49-Inch Curved Gaming Monitor",
    price: 999.99,
    description: "Super ultrawide gaming monitor.",
    category: "electronics",
    image:  "/81Zt42ioCgL._AC_SX679_t.png",
    rating: {
      rate: 2.2,
      count: 140
    }
  },
  {
    id: 15,
    title: "Women's 3-in-1 Snowboard Jacket",
    price: 56.99,
    description: "Warm fleece detachable liner.",
    category: "women's clothing",
    image:  "/51Y5NI-I5jL._AC_UX679_t.png",
    rating: {
      rate: 2.6,
      count: 235
    }
  },
  {
    id: 16,
    title: "Women's Faux Leather Moto Jacket",
    price: 29.95,
    description: "Hooded faux leather jacket.",
    category: "women's clothing",
    image:  "/81XH0e8fefL._AC_UY879_t.png",
    rating: {
      rate: 2.9,
      count: 340
    }
  },
  {
    id: 17,
    title: "Women's Rain Jacket Windbreaker",
    price: 39.99,
    description: "Lightweight hooded raincoat.",
    category: "women's clothing",
    image:  "/71HblAHs5xL._AC_UY879_-2t.png",
    rating: {
      rate: 3.8,
      count: 679
    }
  },
  {
    id: 18,
    title: "Women's Boat Neck Short Sleeve",
    price: 9.85,
    description: "Lightweight stretch fabric.",
    category: "women's clothing",
    image:  "/71z3kpMAYsL._AC_UY879_t.png",
    rating: {
      rate: 4.7,
      count: 130
    }
  },
  {
    id: 19,
    title: "Women's Moisture Wicking T-Shirt",
    price: 7.95,
    description: "Breathable moisture wicking fabric.",
    category: "women's clothing",
    image: "/51eg55uWmdL._AC_UX679_t.png",
    rating: {
      rate: 4.5,
      count: 146
    }
  },
  {
    id: 20,
    title: "Women's Casual Cotton T-Shirt",
    price: 12.99,
    description: "Soft cotton with stretch.",
    category: "women's clothing",
    image: "/61pHAEJ4NML._AC_UX679_t.png",
    rating: {
      rate: 3.6,
      count: 145
    }
  }
];

export default products;