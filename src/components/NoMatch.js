import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <main className="app">
      <h2>Page not found - 404</h2>
      <p>
        Return to the <Link to="/">homepage</Link>
      </p>
    </main>
  );
};

export default NoMatch;
