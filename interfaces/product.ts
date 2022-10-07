export interface ProductProps {
  product: {
    node: any;
    data: {
      allContentfulProductPage: {
        edges: {
          node: {
            name: string;
            node_locale: string;
            thumbnailImage: { file: { url: string } };
            colorFamily: { name: string }[];
            categoryTags: string[];
          };
        }[];
      };
    };
  };
}
