import React, { useState } from "react";
import "./SecondNav.css";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Input,
  DropdownItem,
} from "reactstrap";

export default function SecondNav() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    "Automotive",
    "Baby,kids",
    "Beauty,massage",
    "Books",
    "sports",
    "Elctronics",
    "Health",
    "House ,Garden",
    "Training & Courses",
    "Clouthing & Fashion ",
  ]);
  const [navItem, setNavItem] = useState([
    "Whats New",
    "Trending",
    "For You",
    "Shop Products",
  ]);
  return (
    <div>
      <div className="second-nav-display">
        <Nav pills className="second-nav mt-2">
          <Dropdown
            nav
            toggle={function noRefCheck() {
              setOpen(!open);
            }}
            isOpen={open}
          >
            <div className="second-toogle">
              <DropdownToggle nav className="drop-second">
                Browse Categories{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-caret-down"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                  </svg>
                </span>
              </DropdownToggle>
            </div>
            <DropdownMenu className="menue2">
              <DropdownItem header className="header-second">
                Activities ,Events & Outdoor{" "}
                <span className="arrow-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-caret-right"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                  </svg>
                </span>
              </DropdownItem>
              {items.map((item, i) => (
                <DropdownItem className="branch-header" key={i}>
                  {item}
                  <span className="arrow-right">
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-caret-right"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                    </svg>
                  </span>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          {navItem.map((nav) => (
            <NavItem key={nav} className="mt-2 mx-4 item">
              {nav}
            </NavItem>
          ))}
          <div className="search-bar mt-2 ">
            <span className="search-icon">
              <svg
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
            <Input
              bsSize="sm"
              placeholder="Search GrabOne"
              className="search-second"
            />
          </div>
        </Nav>
      </div>
    </div>
  );
}
