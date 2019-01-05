import Link from "next/link";
import Price from "../components/product/prices";

const ProductCell = props => {
  //console.log(Object.keys(props.product)); // This helped me a lot!!!

  const { product } = props;
  const { id, name, slug, masterVariant, description, metaTitle } = product;
  const { prices, images } = masterVariant;

  return (
    <div className="col-sm-3">
      <Link as={`/product/${slug.de}`} href={`/product?id=${slug.de}`}>
        <a>
          <div className="product-cell">
            <img className="img-responsive" src={images[0].url} alt="test" />
            <h2>{name.de}</h2>
            <Price prices={prices} />
            <br />
          </div>
        </a>
      </Link>
    </div>
  );
};

const ProductsWrapper = props => {
  const products = props.results;
  const productList = products.map((product, index) => (
    <ProductCell key={index.toString()} product={product} />
  ));

  return <div className="product-wrapper row">{productList}</div>;
};

export default ProductsWrapper;
