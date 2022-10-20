import React from "react";

const TimeTableDropdown = () => {
  return (
    <>
      <div className="dropdown">
        <button
          className={`custom-btn-style text-light-gray rounded font-weight-600 font-12 position-relative h-32px mr-1 w-256px `}
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Oct 17 3:10 AM - 4:10 AM
        </button>
        <div
          className={`dropdown-menu custom-time-table p-0`}
          aria-labelledby="dropdownMenuButton"
        >
          <div
            className="dropdown-item border-bottom  w-100 py-4 pl-4 pr-2"
            href="#"
          >
            <div className="d-flex justify-content-between pb-2">
              <label className="numberlabel">
                <span className="pr-2">Last</span>
                <input
                  type="number"
                  className="input-type-number"
                  placeholder="10"
                />
                <span className="pl-2">minutes</span>
              </label>
              <div className=" text-muted d-flex align-items-center ">
                <p className="pr-1">⇧</p> <p>M</p>
              </div>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <label className="numberlabel">
                <span className="pr-2">Last</span>
                <input
                  type="number"
                  className="input-type-number"
                  placeholder="10"
                />
                <span className="pl-2">hour</span>
              </label>
              <div className=" text-muted d-flex align-items-center ">
                <p className="pr-1">⇧</p> <p>H</p>
              </div>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <label className="numberlabel">
                <span className="pr-2">Last</span>
                <input
                  type="number"
                  className="input-type-number"
                  placeholder="10"
                />
                <span className="pl-2">day</span>
              </label>
              <div className=" text-muted d-flex align-items-center ">
                <p className="pr-1">⇧</p> <p>D</p>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <label className="numberlabel">
                <span className="pr-2">Last</span>
                <input
                  type="number"
                  className="input-type-number"
                  placeholder="10"
                />
                <span className="pl-2">week</span>
              </label>
              <div className=" text-muted d-flex align-items-center ">
                <p className="pr-1">⇧</p> <p>W</p>
              </div>
            </div>
          </div>
          <div
            className="dropdown-item  border-bottom  w-100 py-4 pl-4 pr-2"
            href="#"
          >
            <div className="d-flex justify-content-between pb-2">
              <p className="">Custom time range</p>
              <div className=" text-muted d-flex align-items-center ">
                <p className="pr-1">⇧</p> <p>C</p>
              </div>
            </div>
            <div>
              <p className="font-12 font-weight-400 pb-1">From</p>
              <input
                type="date"
                id="fromdate"
                className="rounded custom-border-light outline-none timeselect-dropbtninput-btn mr-3"
              />
              <input
                type="text"
                name=""
                id="tothis"
                className="rounded custom-border-light outline-none timeselect-dropbtninput-btn"
              />
            </div>
            <div>
              <div className="d-flex justify-content-between pb-1 pt-2">
                <p className="font-12 font-weight-400 ">To</p>
                <p className="font-12 text-link-style font-weight-400 pr-5">
                  Set to now
                </p>
              </div>
              {/* <p className="font-12 font-weight-400 pb-1 pt-2">To</p> */}
              <input
                type="date"
                id="fromdate"
                className="rounded custom-border-light outline-none timeselect-dropbtninput-btn mr-3"
              />
              <input
                type="text"
                name=""
                id="tothis"
                className="rounded custom-border-light outline-none timeselect-dropbtninput-btn"
              />
            </div>
          </div>

          <div className="dropdown-item  w-100 py-4 pl-4 pr-2" href="#">
            <div className="d-flex justify-content-end ">
              <button className="custom-border-light bg-light rounded font-12 font-weight-600">
                Cancel
              </button>
              <button className="ml-3 px-2 border-0 font-12 rounded text-white bg-dark-blue font-weight-600">
                Apply ↵
              </button>
            </div>
          </div>

          <div className="dropdown-item  w-100 p-0 " href="#">
            <div className="d-flex p-2 justify-content-between font-12 font-weight-400 bg-light w-100">
              <p>Asia/Karachi (GMT +05:00)</p>
              <p className="text-link-style">
                Change
                <svg
                  viewBox="0 0 24 24"
                  className="C9Y-Icon-base C9Y-Icon-font icon-external-link ml-1"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"></path>
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeTableDropdown;
