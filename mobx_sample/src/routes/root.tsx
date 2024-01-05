import { Outlet, Link } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden />
            <div className="sr-only" aria-live="polite" />
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              {/* <a href="/contacts/1">Your Name</a> */}
              <Link to="contacts/1">Your Name</Link>
            </li>
            <li>
              {/* <a href="/contacts/2">Your Friend</a> */}
              <Link to="contacts/2">Your Friend</Link>
            </li>
            <li>
              <Link to="ModalSample">모달 샘플</Link>
            </li>
            <li>
              <Link to="MobxExample">mobx샘플</Link>
            </li>
            <li>
              <Link to="Song">song</Link>
            </li>
            <li>
              <Link to="Chan">chan</Link>
            </li>
            <li>
              <Link to="Mark">Mark</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
