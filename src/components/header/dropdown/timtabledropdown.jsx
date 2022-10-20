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
          <div className="dropdown-item border-bottom  w-100 py-4 pl-4 pr-2" href="#">
            <div className="d-flex justify-content-between pb-2">
              <label className="numberlabel">
                <span className="pr-2">Last</span>
                <input type="number" className="input-type-number" placeholder="10"/>
                <span className="pl-2">minutes</span>
              </label>
              <div class=" text-muted d-flex align-items-center "><p className="pr-1">⇧</p> <p>M</p></div>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <label className="numberlabel">
                <span className="pr-2">Last</span>
                <input type="number" className="input-type-number" placeholder="10"/>
                <span className="pl-2">hour</span>
              </label>
              <div class=" text-muted d-flex align-items-center "><p className="pr-1">⇧</p> <p>H</p></div>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <label className="numberlabel">
                <span className="pr-2">Last</span>
                <input type="number" className="input-type-number" placeholder="10"/>
                <span className="pl-2">day</span>
              </label>
              <div class=" text-muted d-flex align-items-center "><p className="pr-1">⇧</p> <p>D</p></div>
            </div>
            <div className="d-flex justify-content-between">
              <label className="numberlabel">
                <span className="pr-2">Last</span>
                <input type="number" className="input-type-number" placeholder="10"/>
                <span className="pl-2">week</span>
              </label>
              <div class=" text-muted d-flex align-items-center "><p className="pr-1">⇧</p> <p>W</p></div>
            </div>
            
          </div>
          <div className="dropdown-item  w-100 pt-4 pl-4 pr-2" href="#">
            <div className="d-flex justify-content-between pb-2">
              <label className="numberlabel">
                <span className="pr-2">Last</span>
                <input type="number" className="input-type-number" placeholder="10"/>
                <span className="pl-2">minutes</span>
              </label>
              <div class=" text-muted d-flex align-items-center "><p className="pr-1">⇧</p> <p>M</p></div>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <label className="numberlabel">
                <span className="pr-2">Last</span>
                <input type="number" className="input-type-number" placeholder="10"/>
                <span className="pl-2">hour</span>
              </label>
              <div class=" text-muted d-flex align-items-center "><p className="pr-1">⇧</p> <p>H</p></div>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <label className="numberlabel">
                <span className="pr-2">Last</span>
                <input type="number" className="input-type-number" placeholder="10"/>
                <span className="pl-2">day</span>
              </label>
              <div class=" text-muted d-flex align-items-center "><p className="pr-1">⇧</p> <p>D</p></div>
            </div>
            <div className="d-flex justify-content-between">
              <label className="numberlabel">
                <span className="pr-2">Last</span>
                <input type="number" className="input-type-number" placeholder="10"/>
                <span className="pl-2">week</span>
              </label>
              <div class=" text-muted d-flex align-items-center "><p className="pr-1">⇧</p> <p>W</p></div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeTableDropdown;
