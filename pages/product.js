import Layout from "../components/layout";
import Price from "../components/product/prices";
import { getProduct } from "../actions/get-products";

class Product extends React.Component {
  static async getInitialProps({ query }) {
    return getProduct(query);
  }

  render() {
    const { product } = this.props;
    const { name, masterVariant, description, metaTitle } = product;
    const { prices, images, attributes } = masterVariant;
    const shortDescription = () => ({ __html: attributes[0].value });

    return (
      <Layout title={`Secureo - ${product.metaTitle.de}`}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="product-gallery">
                <img className="img-responsive" src={images[0].url} alt="test" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="product-description">
                <h1>{name.de}</h1>
                <Price prices={prices} />
                <hr />
                <h3>Description</h3>
                <p dangerouslySetInnerHTML={shortDescription()} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Product;

/**
 * (19) ["id", "version", "productType", "name", "description", "categories", "categoryOrderHints", "slug", "metaTitle", "metaDescription", "masterVariant", "variants", "searchKeywords", "hasStagedChanges", "published", "key", "taxCategory", "createdAt", "lastModifiedAt"]
 */
