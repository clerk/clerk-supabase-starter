import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <Link to="/">Clerk + Supabase</Link>
      <nav>
        <ul>
          <li>
            <SignedOut>
              <Link to="/sign-in">Sign in</Link>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutAllUrl={window.location.href} />
            </SignedIn>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
