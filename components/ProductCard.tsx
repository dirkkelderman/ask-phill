import { ProductCardProps } from "../interfaces/product-card";
import Button from "./Button";

const ProductCard = ({
  name,
  price,
  colorFamily,
  thumbnailImage,
  categoryTags,
  shopifyProductEu,
}: ProductCardProps) => {

  const onClick = () => {
    console.log("clicked");
  };

  return (
    <div className="w-full bg-slate-400 border-2 border-black">
      <h1>ProductCard</h1>
      <p>{name}</p>
      <p>{price}</p>
      <p>{colorFamily.name}</p>
      <p>{thumbnailImage.file.alt}</p>
      <p>{categoryTags}</p>
      <p>{shopifyProductEu.variants.edges[0].node.price}</p>
      <p>Description</p>
      <Button onClick={onClick}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
