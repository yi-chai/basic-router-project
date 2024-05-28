import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "1",
    title: "Clothing",
  },
  {
    id: "2",
    title: "Accessories",
  },
  {
    id: "3",
    title: "Home & Living",
  },
];

function Products() {
  return (
    <>
      <h1>My Products</h1>
      <ul>
        {PRODUCTS.map((data) => (
          <li>
            <Link to={data.id}>{data.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
