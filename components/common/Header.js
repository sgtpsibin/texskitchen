import React from "react";

const menus = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Order Now",
    url: "/#order",
  },
  {
    label: "About us",
    url: "/#about",
  },
];

const Header = props => {
  return (
    <>
      <nav className="header">
        <img
          src="/static/images/texskitchen.png"
          alt="texskitchen-logo"
          className="header__logo"
        />
        <ul className="header__menus">
          {menus.map((menu, index) => (
            <li key={index} className="header__menu">
              <a href={menu.url} title={menu.label}>
                {menu.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        .header {
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header__logo {
          width: 150px;
          height: 100px;
        }
        .header__menus {
          list-style: none;
          display: flex;
          align-self: stretch;
          align-items: center;
        }
        .header__menu {
          padding: 0px 20px;
          cursor: pointer;
        }
        .header__menu:hover {
          color: #000;
        }
        .header__menu a {
          font-size: 0.9rem;
          color: #1c1b1b;
          text-decoration: none;
        }

        @media screen and (max-width: 768px) {
          .header__menus {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
