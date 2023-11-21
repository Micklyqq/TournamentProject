import { Link, useMatch } from "react-router-dom";

function CustomNavLink({ children, to }) {
  const match = useMatch(to);
  return (
    <li className={match ? "active-link" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  );
}

export default CustomNavLink;
