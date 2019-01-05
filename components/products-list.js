import ProductsWrapper from "../components/product-wrapper";

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      productsPerPage: 4,
      totalProducts: props.json.count,
      maxProducts: 100,
      lastProduct: 1
    };
  }

  pages = () => {
    const { productsPerPage, totalProducts } = this.state;
    let products = Array.from(this.props.json.results);

    let pagesArray = [];
    let tempArray = [];
    let index = 0;

    while (products.length) {
      tempArray = products.splice(0, this.state.productsPerPage);
      pagesArray.push(<ProductsWrapper results={tempArray} />);
    }

    return pagesArray[this.state.currentPage - 1];
  };

  pagination = () => {
    let pages = [];
    let pagesCount = this.props.json.count / this.state.productsPerPage;
    let isDisabled = "";
    if (pagesCount <= 1) {
      pagesCount = 1;
      isDisabled = " disabled";
    }

    for (let i = 0; i < pagesCount; i++) {
      let isActive = i + 1 == this.state.currentPage ? " active" : "";
      pages.push(
        <li key={i} className={"page-item" + isActive + isDisabled}>
          <a className="page-link" onClick={() => this.setState({ currentPage: i + 1 })}>
            {i + 1}
          </a>
        </li>
      );
    }

    return <ul className="pagination justify-content-center">{pages}</ul>;
  };

  render() {
    return (
      <div className="col-xs-12">
        {this.pages()}
        {this.pagination()}
      </div>
    );
  }
}

export default ProductList;
