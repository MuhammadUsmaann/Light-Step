import React from "react";

const ShareDropdown = () => {
    
  return (
    <>
      <div className="dropdown">
        <button
          className={`custom-btn-style text-light-gray rounded font-weight-600 font-12 position-relative  mr-1 `}
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Share
        </button>
        <div
          className={`dropdown-menu custom-share-dropdown p-0`}
          aria-labelledby="dropdownMenuButton"
        >
          <div className="dropdown-item h-100 w-100 p-4 " href="#">
            <div>
              <p className="font-18 font-weight-600">
           
                Share Change Intelligence for Memory Utilization
              </p>
              <p className="pt-2 font-14 font-weight-600"><span><svg
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="C9Y-Icon-base C9Y-Icon-font icon-link mr-0.5"
                >
                  <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3M8 12h8"></path>
                </svg></span> Link</p>

              <div className="copy-url-main d-flex mt-1">
                <input
                  onClick={(e) => {
                    navigator.clipboard.writeText(e.target.value);
                  }}
                  aria-invalid="false"
                  disabled=""
                  id=":r9:"
                  type="text"
                  class="MuiInputBase-input MuiOutlinedInput-input Mui-disabled mui-qyjgik"
                  value="https://app.lightstep.com/s/change-intelligence/1tSKw6dn5TMi"
                />
                <div className="copy-icon-div">
                <svg
                  viewBox="0 0 24 24"
                  class="C9Y-Icon-base C9Y-Icon-font icon-copy"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareDropdown;
