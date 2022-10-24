import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <h1>Bug Tracker</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
