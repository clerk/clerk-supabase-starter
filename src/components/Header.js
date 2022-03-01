import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/clerk-react';
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
              <SignInButton mode="modal" />
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
