interface ColorFamily {
  name: string;
}

interface ThumbnailImage {
  alt: string;
  url: string;
}

interface ShopifyProductEu {
  variants: {
    edges: {
      node: {
        price: number;
      };
    }[];
  };
}

// export interface ProductCardProps {
//   name: string;
//   price: number;
//   colorFamily: ColorFamily;
//   thumbnailImage: {
//     file: ThumbnailImage;
//   };
//   categoryTags: string[];
//   shopifyProductEu: ShopifyProductEu;
// }

export interface ProductCardProps {
  name: string;
  node_locale: string;
  thumbnailImage: string;
  price: number;
  colorFamily: { name: string }[];
  categoryTags: string[];
}
[];
