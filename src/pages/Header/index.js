import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header>
            <Link to="/" className='logo'>Prime Flix</Link>
            <Link to="/favorites" className='favorites'>My movies</Link>
        </header>
    );
}

export default Header;