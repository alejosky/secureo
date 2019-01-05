import Layout from "../components/layout";
import ProductList from "../components/products-list";
import { getProducts } from "../actions/get-products";
import "../css/style.scss";

const Index = props => (
  <Layout>
    <div className="container">
      <div className="row">
        <aside className="col-sm-3 hidden">
          <h2>Filters</h2>
        </aside>
        <ProductList json={props.json} />
      </div>
    </div>
  </Layout>
);

Index.getInitialProps = () => getProducts();

export default Index;
