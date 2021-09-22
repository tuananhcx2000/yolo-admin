import { img } from "../assets";

export interface IProduct {
  title: string,
  price: string,
  image: string[],
  categorySlug: string,
  colors: string[],
  slug: string,
  size: string[],
}

const products: IProduct[] = [
  {
    title: "Áo thun Dinosaur 01",
    price: '189000',
    image: [img.product.product_1_1, img.product.product_1_2, img.product.product_1_3],
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange"],
    slug: "ao-thun-dinosaur-01",
    size: ["s", "m", "l", "xl"]
  },
  {
    title: "Áo thun Dinosaur 02",
    price: '159000',
    image: [img.product.product_2_1, img.product.product_2_2],
    categorySlug: "ao-thun",
    colors: ["white", "red", "blue"],
    slug: "ao-thun-dinosaur-02",
    size: ["s", "m"]
  },
  {
    title: "Áo thun Dinosaur 03",
    price: '190000',
    image: [img.product.product_3_1, img.product.product_3_2],
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange", "yellow"],
    slug: "ao-thun-dinosaur-03",
    size: ["m"]
  },
  {
    title: "Áo thun Polo 04",
    price: '194000',
    image: [img.product.product_4_1, img.product.product_4_2],
    categorySlug: "ao-thun",
    colors: ["white", "orange", "blue"],
    slug: "ao-thun-polo-04",
    size: ["xl"]
  },
  {
    title: "Áo thun Polo 05",
    price: '194000',
    image: [img.product.product_5_1, img.product.product_5_2],
    categorySlug: "ao-thun",
    colors: ["white", "pink"],
    slug: "ao-thun-polo-05",
    size: ["xxl"]
  },
  {
    title: "Áo thun Polo 06",
    price: '194000',
    image: [img.product.product_6_1, img.product.product_6_2],
    categorySlug: "ao-thun",
    colors: ["black"],
    slug: "ao-thun-polo-06",
    size: ["s", "m", "xl"]
  },
  {
    title: "Áo somi caro 07",
    price: '194000',
    image: [img.product.product_7_1, img.product.product_7_2],
    categorySlug: "ao-somi",
    colors: ["white", "red", "orange", "blue"],
    slug: "ao-somi-caro-07",
    size: ["l", "xl"]
  },
  {
    title: "Áo somi dài tay 08",
    price: '194000',
    image: [img.product.product_8_1, img.product.product_8_2],
    categorySlug: "ao-somi",
    colors: ["white", "red", "black"],
    slug: "ao-somi-dai-tay-08",
    size: ["s", "m", "xl"]
  },
  {
    title: "Áo somi tay dài 09",
    price: '194000',
    image: [img.product.product_9_1, img.product.product_9_2],
    categorySlug: "ao-somi",
    colors: ["white", "blue"],
    slug: "ao-somi-tay-dai-09",
    size: ["m"]
  },
  {
    title: "Quần jean phong cách 10",
    price: '194000',
    image: [img.product.product_10_1, img.product.product_10_2],
    categorySlug: "quan-jean",
    colors: ["blue", "black"],
    slug: "quan-jean-phong-cach-10",
    size: ["l"]
  },
  {
    title: "Quần jean 11",
    price: '194000',
    image: [img.product.product_11_1, img.product.product_11_2],
    categorySlug: "quan-jean",
    colors: ["blue", "black"],
    slug: "quan-jean-11",
    size: ["s", "m", "xl"]
  },
  {
    title: "Quần jean 12",
    price: '194000',
    image: [img.product.product_12_1, img.product.product_12_2],
    categorySlug: "quan-jean",
    colors: ["blue"],
    slug: "quan-jean-12",
    size: ["s", "m", "xl"]
  },
  {
    title: "Áo thun Dinosaur 13",
    price: '189000',
    image: [img.product.product_1_1, img.product.product_1_2, img.product.product_1_3],
    categorySlug: "ao-thun",
    colors: ["white", "red"],
    slug: "ao-thun-dinosaur-13",
    size: ["s", "m", "xl"]
  },
  {
    title: "Áo thun Dinosaur 14",
    price: '159000',
    image: [img.product.product_2_1, img.product.product_2_2],
    categorySlug: "ao-thun",
    colors: ["white", "blue"],
    slug: "ao-thun-dinosaur-14",
    size: ["s", "m"]
  },
  {
    title: "Áo thun Dinosaur 15",
    price: '190000',
    image: [img.product.product_3_1, img.product.product_3_2],
    categorySlug: "ao-thun",
    colors: ["red", "blue"],
    slug: "ao-thun-dinosaur-15",
    size: ["xl"]
  },
  {
    title: "Áo somi dài tay 16",
    price: '194000',
    image: [img.product.product_8_1, img.product.product_8_2],
    categorySlug: "ao-somi",
    colors: ["blue", "black"],
    slug: "ao-somi-dai-tay-16",
    size: ["m", "xl"]
  },
  {
    title: "Áo somi tay dài 17",
    price: '194000',
    image: [img.product.product_9_1, img.product.product_9_2],
    categorySlug: "ao-somi",
    colors: ["white", "blue"],
    slug: "ao-somi-tay-dai-17",
    size: ["s", "l", "xl"]
  },
  {
    title: "Quần jean phong cách 18",
    price: '194000',
    image: [img.product.product_10_1, img.product.product_10_2],
    categorySlug: "quan-jean",
    colors: ["blue", "black"],
    slug: "quan-jean-phong-cach-18",
    size: ["s", "m", "l", "xl"]
  },
]

export default products;
