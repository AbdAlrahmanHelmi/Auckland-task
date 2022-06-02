import React from "react";
import "./Section.css";
import { Input, Button } from "reactstrap";

export default function Section() {
  return (
    <div>
      <div className="container-me">
          
        <div className="sub mt-4 ">
          <div className="message-sub ">
            Get the best deals delivered direct to your inbox each day
          </div>

          <div className="d-flex ">
            <div className="email-bar ">
              <span className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
              </span>

              <Input
                bsSize="sm"
                placeholder="Enter email adress"
                className="search-second  "
              />
            </div>
            <div className="btn enter-email ">
              <Button color="primary">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
