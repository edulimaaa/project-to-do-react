import { Link } from "react-router-dom";

function List({ id, name, list }) {
  return (
    <li>
      <Link to={`/${id}`}>{name}</Link>
    </li>
  );
}

export default List;
