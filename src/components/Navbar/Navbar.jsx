import React, { useState } from "react";
import logo1 from "../../images/GrabOneLogo2.PNG";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menue, setMenue] = useState([
    "Auckland",
    "Waikato",
    "Welligton",
    "Northland",
    "Manawatu - Wanganui",
    "Tauranga",
    "Rotoua - Taupo",
    "Hawkes Bay",
    "Christchurch",
    "Taranaki",
    "Nelson - Marlborough",
    " Queenstown - Wanaka",
    " Dunedin - Invercargill",
  ]);
  const [icon, setIcon] = useState([
    {
      class: "bi bi-heart",
      d: "m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z",
    },
    {
      class: "bi bi-cart2",
      d: "M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z",
    },
    {
      class: "bi bi-person",
      d: "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z",
    },
    {
      class: "bi bi-envelope-nav",
      d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z",
    },
  ]);
  return (
    <div className="firstNav">
      <img src={logo1} alt="logo" className="logo-image" />
      <div className="postion-nav mt-2 ">
        <Nav pills>
          <nav>
            <Dropdown
              nav
              toggle={function noRefCheck() {
                setOpen(!open);
              }}
              isOpen={open}
            >
              <DropdownToggle className="toogleStyle">
                <span>
                  <svg
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </span>
                Auckland
                <span>
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </span>
              </DropdownToggle>
              <DropdownMenu>
                {menue.map((men, i) => (
                  <div className="dropStyle" key={i}>
                    <DropdownItem className="menue1">{men}</DropdownItem>
                    <DropdownItem divider />
                  </div>
                ))}
              </DropdownMenu>
            </Dropdown>
          </nav>
          <div className=" space-around d-icon">
            {icon.map((icon, i) => (
              <NavItem className="mx-4 mt-2" key={i}>
                <svg
                  width="25"
                  height="25"
                  fill="currentColor"
                  className={icon.class}
                  viewBox="0 0 16 16"
                >
                  <path d={icon.d} />
                </svg>
              </NavItem>
            ))}
          </div>
        </Nav>
      </div>
    </div>
  );
}
