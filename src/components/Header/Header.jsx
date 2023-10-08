// Header.jsx

import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">This is Header!</h1>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">
              Link 1
            </a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">
              Link 2
            </a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">
              Link 3
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
