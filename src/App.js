import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, useAuth } from '@clerk/clerk-react';
import { createClient } from '@supabase/supabase-js';

import './styles/App.css';

const supabaseClient = async supabaseAccessToken => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY,
    {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } }
    }
  );
  // set Supabase JWT on the client object,
  // so it is sent up with all Supabase requests
  return supabase;
};
const Example = () => {
  const { getToken } = useAuth();
  const [response, setResponse] = useState('// Click button to execute code');

  const fetchToken = async () => {
    setResponse('// Loading...');
    try {
      // TODO: Update with your JWT template name
      const token = await getToken({ template: 'supabase' });
      setResponse(token);
    } catch (e) {
      setResponse(
        '// There was an error with the request. Please contact support@clerk.dev'
      );
    }
  };

  const fetchData = async () => {
    setResponse('// Loading...');

    try {
      // TODO: Update with your JWT template name
      const supabaseAccessToken = await getToken({ template: 'supabase' });

      const supabase = await supabaseClient(supabaseAccessToken);

      const { data } = await supabase.from('your_table').select();
      const body = data ? JSON.stringify(data, null, '  ') : 'No data returned';

      setResponse(body);
    } catch (e) {
      setResponse(
        '// There was an error with the request. Please contact support@clerk.dev'
      );
    }
  };

  return (
    <div className="example">
      <div className="card">
        <button onClick={fetchToken} type="button">
          <img
            className="card-logo"
            alt="Clerk logo"
            src="/images/logo-clerk.svg"
          />
          <div>
            <h3>{`getToken({ template: 'supabase' })`}</h3>
            <p>Retrieve token from JWT template</p>
          </div>
          <svg
            className="icon-arrow"
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 17v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3M8 12l4 4 4-4M12 2v14"
              stroke="#335BF1"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="card">
        <button onClick={fetchData} type="button">
          <img
            className="card-logo"
            alt="Supabase logo"
            src="/images/logo-supabase.svg"
          />
          <div>
            <h3>supabase.from('your_table').select()</h3>
            <p>Retrieve data from Supabase</p>
          </div>
          <svg
            className="icon-arrow"
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 17v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3M8 12l4 4 4-4M12 2v14"
              stroke="#335BF1"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <pre>
        <code>{response}</code>
      </pre>
    </div>
  );
};

const App = () => (
  <main className="app">
    <h1>Welcome to your new app</h1>
    <SignedIn>
      <p>You have successfully signed in</p>
    </SignedIn>
    <SignedOut>
      <p>Sign up for an account to get started</p>
    </SignedOut>
    <div className="cards">
      <SignedIn>
        <Example />
      </SignedIn>
      <SignedOut>
        <div className="card">
          <Link to="/sign-up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="#335bf1"
              strokeWidth={2}
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <path d="M20 8v6M23 11h-6" />
            </svg>
            <div className="card-content">
              <h3>Sign up for an account</h3>
              <p>
                Sign up and sign in to explore all the features provided by
                Clerk out-of-the-box
              </p>
            </div>
            <svg
              className="icon-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="#335bf1"
              strokeWidth={2}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="card">
          <a
            href="https://dashboard.clerk.dev?utm_source=clerk-supabase-starter"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="#335bf1"
              strokeWidth={2}
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <div className="card-content">
              <h3>Configure settings for your app</h3>
              <p>
                Visit Clerk to manage instances and configure settings for user
                management, theme, and more
              </p>
            </div>
            <svg
              className="icon-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="#335bf1"
              strokeWidth={2}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </SignedOut>
    </div>
    <div className="links">
      <a
        href="https://docs.clerk.dev?utm_source=clerk-supabase-starter"
        target="_blank"
        rel="noreferrer noopener"
      >
        Read Clerk documentation
      </a>
      <a
        href="https://supabase.com/docs"
        target="_blank"
        rel="noreferrer noopener"
      >
        Read Supabase documentation
      </a>
    </div>
    <footer className="footer">
      <p>
        Powered by{' '}
        <a
          href="https://clerk.dev?utm_source=clerk-supabase-starter"
          target="_blank"
          rel="noopener noreferrer"
          title="Clerk"
        >
          <img alt="Clerk logo" src="/images/logo-clerk.svg" />
        </a>
        +
        <a
          href="https://supabase.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Supabase"
        >
          <img alt="Supabase logo" src="/images/logo-supabase.svg" />
        </a>
      </p>
    </footer>
  </main>
);

export default App;
