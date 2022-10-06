interface colorFamily {
  name: string;
}

interface thumbnailImage {
  alt: string;
  url: string;
}

interface shopifyProductEu {
  variants: {
    edges: {
      node: {
        price: number;
      };
    }[];
  };
}

export interface ProductCardProps {
  name: string;
  price: number;
  colorFamily: colorFamily;
  thumbnailImage: {
    file: thumbnailImage;
  };
  categoryTags: string[];
  shopifyProductEu: shopifyProductEu;
}
