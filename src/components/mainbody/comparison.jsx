import React from "react";
import DropDownComp from "../header/dropdown";
import graphimg from "../../images/comparisonaccordiangraph.png";
import comparisongraph2 from "../../images/comparisongraph2.png";
import DisplaySettingDropdown from "../header/dropdown/dsettingdropdown";
import TimeTableDropdown from "../header/dropdown/timtabledropdown";
const Comparison = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center pt-3">
        <div className="d-flex justify-content-between align-items-center">
          <p className="font-14 font-weight-600 text-light-gray">
            Selections for comparison
          </p>
          <DropDownComp text="View query" style="h-32px ml-3 " />
        </div>

        <div className="d-flex justify-content-between align-items-center">
         <DisplaySettingDropdown/>

         <TimeTableDropdown/>
        </div>
      </div>

      <div className="row m-0 pt-2">
        <div className="col-6 p-0">
          <div className="border py-3 px-4 h-100 mr-3 rounded">
            <div className="d-flex justify-content-between align-items-center">
              <div className="">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="box bg-purple"></div>
                  <h5 className="font-14 font-weight-600 text-dark-grey">
                    Baseline (default)
                  </h5>
                </div>
                <p
                  className="font-12 font-weight-400 text-lightest-grey cr-p"
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Expand chart
                </p>
              </div>
              <div className="text-right">
                <p className="font-14 font-weight-600 text-dark-grey">
                  Oct 17 3:17 AM - 3:46 AM
                </p>
                <p className="font-12 font-weight-400 text-lightest-grey ">
                  2 days ago
                </p>
              </div>
            </div>
            <div className="collapse" id="collapseExample">
              <div className="card card-body px-0 border-0">
                <img src={graphimg} alt="graph" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 p-0">
          <div className="border py-3 px-4 h-100 rounded">
            <div className="d-flex justify-content-between align-items-center">
              <div className="">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="box bg-light-blue"></div>
                  <h5 className="font-14 font-weight-600 text-dark-grey">
                    Deviation (selected)
                  </h5>
                </div>
                <p
                  className="font-12 font-weight-400 text-lightest-grey cr-p"
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Expand chart
                </p>
              </div>
              <div className="text-right">
                <p className="font-14 font-weight-600 text-dark-grey">
                  Oct 17 3:17 AM - 3:46 AM
                </p>
                <p className="font-12 font-weight-400 text-lightest-grey ">
                  2 days ago
                </p>
              </div>
            </div>
            <div className="collapse" id="collapseExample">
              <div className="card card-body px-0 border-0">
                <img src={graphimg} alt="graph" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src={comparisongraph2}
        alt="comparisongraph2"
        className="w-100 pt-1"
      />
    </>
  );
};

export default Comparison;
