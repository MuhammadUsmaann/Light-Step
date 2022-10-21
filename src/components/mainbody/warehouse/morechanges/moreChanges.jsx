import React, { useState } from "react";
import subarrowicon from "../../../../images/lessthansubicon.svg";
import attributeWMChangeGraph from "../../../../images/attributechangegraph.png";
import ShareDropdown from "../../../header/dropdown/sharedropdown";
import AddtoNoteBook from "../../../header/dropdown/addtonotebook";

const MoreChanges = (props) => {
  const { data,key } = props;
  const [detailCheck, setDetailCheck] = useState(false);
  const [dsblCustomerCheckbox, setdsblCustomerCheckbox] = useState(true);
  return (
    <>
      <div key={key} className="card border-0 rounded-0  border-t-default text-light-gray">
        <div className="card-header border-0 bg-white p-0" id="heading0_1">
          <div
            className="p-3 pl62px cr-p"
            data-toggle="collapse"
            data-target={`#${data.id}`}
            aria-expanded="false"
            aria-controls={data.id}
          >
            <div className="row m-0">
              <div className="p-0 col-3">
                <p className="font-14 text-dark-grey font-weight-600">
                  <img
                    src={subarrowicon}
                    alt=""
                    className=" sub-collapse-icon"
                  />

                  <span className="pl-2">{data.name}</span>
                </p>
              </div>
              <div className="p-0 col-2">
                <div className="d-inline-block">
                  <div className="d-flex align-items-center  font-14 font-weight-600 ">
                    <div className="border rounded17 px-2 py-1 d-flex align-items-center">
                      <svg
                        height="16px"
                        width="16px"
                        viewBox="0 0 24 24"
                        className="C9Y-Icon-base C9Y-Icon-font icon-upstream"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM9 3a3 3 0 1 1 4 2.83v4.24A7.001 7.001 0 0 1 12 24a7 7 0 0 1-1-13.93V5.83A3.001 3.001 0 0 1 9 3ZM6.75 17a5.25 5.25 0 1 0 10.5 0 5.25 5.25 0 0 0-10.5 0ZM12 20.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"
                          fill="#566381"
                        ></path>
                      </svg>
                      <p>2</p>
                    </div>

                    <p className="font-14 font-weight-400 pl-2">{data.service}</p>
                  </div>
                </div>
              </div>
              <div className="p-0 col-2">
                <p className=" font-14 font-weight-400">{data.operation}</p>
              </div>
              <div className="p-0 col-2">
                <p className=" font-14 font-weight-400">{data.baseline}</p>
              </div>
              <div className="p-0 col-2">
                <p className=" font-14 font-weight-400">{data.deviation}</p>
              </div>
              <div className="p-0 col-1">
                <p className=" font-14 font-weight-600">{data.change}</p>
              </div>
            </div>
          </div>
          <div
            className=" collapse "
            id={data.id}
            aria-labelledby="heading0_1"
          >
            <div className="card-body pl62px px-3 pt-0 pb-3">
              <div className="d-flex align-items-center justify-content-between py-3 border-t-default ">
                <div className="d-flex align-items-center custom-toggle-input-main">
                  <h5 className="font-14 font-weight-600 text-dark-grey">
                    <svg
                      viewBox="0 0 24 24"
                      className="C9Y-Icon-base C9Y-Icon-font icon-layers mr-1"
                    >
                      <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="font-weight-400">
                      {" "}
                      Show comparison to{" "}
                    </span>{" "}
                    customer != {data.name}
                  </h5>
                  <input
                    type="checkbox"
                    className="custom-toggle-input ml-2"
                    onChange={() => {
                      setdsblCustomerCheckbox(!dsblCustomerCheckbox);
                    }}
                  />

                  <div className="d-flex align-items-center pl-4">
                    <input type="checkbox" disabled={dsblCustomerCheckbox} />
                    <p className="pl-2 font-weight-600">
                      {" "}
                      <span className="font-weight-400">Group by</span> customer
                    </p>
                  </div>
                </div>
                <ShareDropdown/>
                {/* <DropDownComp text="Share" style="" /> */}
              </div>

              <div className="row m-0 pt-2">
                <div className="col-12 p-0">
                  <div className="">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="font-14 font-weight-600 text-dark-grey">
                        p99 Latency
                      </h5>
                      <AddtoNoteBook/>
                      {/* <DropDownComp text="Add to notebook"  /> */}
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-2">
                    <label className="d-flex align-items-center cr-p">
                      Show span samples
                      <input
                        type="checkbox"
                        className="custom-toggle-input2 ml-2"
                        onChange={() => setDetailCheck(!detailCheck)}
                      />
                    </label>

                    {detailCheck ? (
                      <>
                        <div className=" pl-4">
                          <label className="d-flex align-items-center  font-weight-400 font-12 cr-p">
                            <input type="checkbox" className="mr-2" />
                            <div className="green-circle"></div>
                            Spans without errors
                          </label>
                        </div>

                        <div className=" pl-4">
                          <label className="d-flex align-items-center  font-weight-400 font-12 cr-p">
                            <input type="checkbox" className="mr-2" />
                            <div className="triangle-icon">▲</div>
                            Spans with errors
                          </label>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>{" "}
                  <img
                    src={attributeWMChangeGraph}
                    alt="graph"
                    className="w-100 px-2 h-75"
                  />
                </div>
              </div>

              <div className="row m-0 pt-2">
                <div className="col-12 p-0">
                  <div className="">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="font-14 font-weight-600 text-dark-grey">
                        Rate
                      </h5>
                      <AddtoNoteBook/>
                      {/* <DropDownComp text="Add to notebook"  /> */}
                    </div>
                  </div>
                  <div></div>
                  <img
                    src={attributeWMChangeGraph}
                    alt="graph"
                    className="w-100 px-2 h-75"
                  />
                </div>
              </div>

              <div className="row m-0 pt-2">
                <div className="col-12 p-0">
                  <div className="">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="font-14 font-weight-600 text-dark-grey">
                        Error %
                      </h5>
                      <AddtoNoteBook/>
                      {/* <DropDownComp text="Add to notebook"  /> */}
                    </div>
                  </div>
                  <div></div>
                  <img
                    src={attributeWMChangeGraph}
                    alt="graph"
                    className="w-100 px-2 h-75"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreChanges;
