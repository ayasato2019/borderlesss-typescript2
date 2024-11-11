import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import githubIcon from '../assets/images/github-mark.svg';
import twitterIcon from '../assets/images/x-logo.png';
// import noteIcon from '../assets/images/note-icon.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <header className="header">
      <div className="relative selection:bg-rose-700 selection:text-amber-500 px-2 lg:px-4 py-4 lg:py-8 flex justify-between items-center lg:justify-center flex-wrap w-full lg:w-auto lg:flex-col">
        <h1 className="logo px-5 lg:mt-4 lg:px-4">
          <Link to="/">BORDERLESSS</Link> {/* <a>タグから<Link>タグに変更 */}
        </h1>

        <button
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-controls="main-navigation"
          id="hamburger-button"
          className="mr-4 w-6 h-6 cursor-pointer lg:hidden"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1L61.1 224zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L64 352c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16l0 16c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-16z" />
          </svg>
        </button>

        <nav
          className={`header-nav-wrap flex w-full h-0 lg:block absolute lg:static top-14 left-0 lg:opacity-100 ease-out lg:z-0 pl-4 lg:pl-0 lg:h-auto invisible lg:visible ${isMenuOpen ? 'active' : ''}`}
          aria-labelledby="main-navigation"
        >
          <h2 className="sr-only">メインナビゲーション</h2>
          <ul className="header-nav-list" role="menu">
            {["/works/", "/service/", "/blog/"].map((link, index) => (
              <li key={index} className="w-full lg:w-auto">
                <Link to={link} className="header-nav-link flex p-4 lg:pl-4 ease-out font-en cursor-pointer break-keep w-full h-full dark:text-white">{link.slice(1, -1).toUpperCase()}</Link>
              </li>
            ))}
            <li className="w-full lg:w-auto">
              <Link to="/contact/" className="header-nav-link flex p-4 lg:pl-4 ease-out font-en cursor-pointer break-keep h-full dark:text-white bg-rose-700 text-center lg:bg-inherit rounded-full w-auto mx-auto lg:mx-0 mt-8 lg:mt-0 hover:bg-amber-300 lg:hover:bg-inherit">CONTACT</Link>
            </li>
            <li className="w-full lg:w-auto">
              <Link to="/privacy-policy/" className="flex p-4 text-slate-500 font-en cursor-pointer ease-out break-keep h-full justify-center lg:justify-start text-xs w-full lg:w-auto dark:text-white">Privacy Policy</Link>
            </li>
            <li className="sns-buttons flex gap-2 p-4 mg:p-0 items-center justify-center">
              <Link to="https://github.com/ayasato2019" className="block w-10 h-10 overflow-hidden p-2 lg:p-2 max-w-20">
                <img src={githubIcon} alt="GitHubのロゴ" />
              </Link>
              <Link to="https://x.com/borderlesss_aya" className="block w-10 h-10 overflow-hidden p-3 lg:p-3 max-w-20">
                <img src={twitterIcon} alt="X旧Twitterのロゴ" />
              </Link>
              {/* <Link to="https://note.com/borderlesss_aya" className="block w-10 h-10 overflow-hidden lg:p-0 max-w-20">
                <img src={noteIcon} alt="noteのロゴ" />
              </Link> */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
