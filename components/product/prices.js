const Price = props => {
  const prices = props.prices;
  const price =
    prices[0].value.type === "centPrecision" ? prices[0].value.centAmount / 100 : "Free!"; // ;)

  return <h2>{price} €</h2>;
};

export default Price;
