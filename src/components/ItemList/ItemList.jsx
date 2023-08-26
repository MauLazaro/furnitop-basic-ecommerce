import Item from "./../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="products-json">
      {products.map((p) => (
        <Item products={p} key={p.id} />
      ))}
    </div>
  );
};

export default ItemList;
