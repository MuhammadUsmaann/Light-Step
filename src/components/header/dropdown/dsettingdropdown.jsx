import React, { useState } from "react";

const DisplaySettingDropdown = () => {
  const [check1, setcheck1] = useState(false);
  const [check2, setcheck2] = useState(false);

  return (
    <>
      <div className="dropdown">
        <button
          className={`custom-btn-style text-light-gray rounded font-weight-600 font-12 position-relative h-32px mr-2 w-140px `}
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Display Setting
        </button>
        <div
          className={`dropdown-menu custom-drop-menu p-0`}
          aria-labelledby="dropdownMenuButton"
        >
          <div className="dropdown-item h-100 w-100 p-4 " href="#">
            <div className="row m-0 pb-4 pt-2">
              <div className="p-0 col-2">
                <svg
                  width="45"
                  height="50"
                  viewBox="0 0 45 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="6"
                    y="13"
                    width="1.5"
                    height="37"
                    fill="#828CA1"
                  ></rect>
                  <path
                    d="M13 7.07807C13 10.4454 10.3033 13.1561 7 13.1561C3.69672 13.1561 1 10.4454 1 7.07807C1 3.71076 3.69672 1 7 1C10.3033 1 13 3.71076 13 7.07807Z"
                    fill="white"
                    stroke="#828CA1"
                    stroke-width="1.5"
                  ></path>
                  <rect
                    x="37"
                    y="13"
                    width="1.5"
                    height="37"
                    fill="#828CA1"
                  ></rect>
                  <path
                    d="M44 7.07807C44 10.4454 41.3033 13.1561 38 13.1561C34.6967 13.1561 32 10.4454 32 7.07807C32 3.71076 34.6967 1 38 1C41.3033 1 44 3.71076 44 7.07807Z"
                    stroke="#828CA1"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </div>

              <div className="p-0 col-8">
                <p className="font-14 text-light-gray font-weight-600">
                  Show deployment markers
                </p>
                <p className="font-12 text-light-gray">
                  <span className=" text-link-style">Deployments</span> in the
                  time window selected
                </p>
              </div>
              <div className="p-0 col-2 text-center">
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="custom-toggle-input2 ml-2 mr-2"
                    onChange={() => {
                      setcheck1(!check1);
                    }}
                  />
                  {check1 ? <p>On</p> : <p>Off</p>}
                </div>
              </div>
            </div>
            <div className="row m-0">
              <div className="p-0 col-2 pt-1">
                <svg
                  width="50"
                  height="33.5"
                  viewBox="0 0 50 33.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="22.5"
                    height="32.5"
                    fill="#8A3EF2"
                    fill-opacity="0.05"
                    stroke="#8A3EF2"
                    stroke-width="0.5"
                    stroke-dasharray="2 1"
                  ></rect>
                  <rect
                    x="26"
                    y="0.5"
                    width="22.5"
                    height="32.5"
                    fill="#48AAF9"
                    fill-opacity="0.05"
                    stroke="#48AAF9"
                    stroke-width="0.5"
                    stroke-dasharray="2 1"
                  ></rect>
                </svg>
              </div>

              <div className="p-0 col-8">
                <p className="font-14 text-light-gray font-weight-600">
                  Show baseline/deviation areas
                </p>
                <p className="font-12 text-light-gray w-75">
                  Highlight the baseline and deviation areas on
                </p>
                <p className="font-12 text-light-gray w-75">
                  the attribute charts
                </p>
              </div>
              <div className="p-0 col-2 text-center">
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="custom-toggle-input2 ml-2 mr-2"
                    onChange={() => {
                      setcheck2(!check2);
                    }}
                  />
                  {check2 ? <p>On</p> : <p>Off</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplaySettingDropdown;
