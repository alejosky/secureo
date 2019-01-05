import "isomorphic-unfetch";

async function getProducts(source = "https://products-l76c3gq0b.now.sh/products.json") {
  const res = await fetch(source);
  const json = await res.json();
  return { json };
}

async function getProduct(query) {
  const { json } = await getProducts();

  const { id: slug } = query;
  const products = Array.from(json.results);
  let product = products.filter(p => p.slug.de == slug); // I got stuck here because I thought this returns an object but returns an array *facepalm*

  if (product.length == 1) {
    product = product[0];
  } else {
    console.error("slug not unique: " + product.length);
    // redirect to error... maybe?
  }

  return { product };
}

export { getProduct, getProducts };
