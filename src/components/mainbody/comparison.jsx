import React from "react";
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

          <button
            className="custom-border-light rounded font-12 font-weight-600 bg-white h-32px ml-3"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            View query
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header border-0">
                  <h5
                    class="modal-title font-24 font-weight-600"
                    id="exampleModalLabel"
                  >
                    Memory Utilization
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body text-light-gray border-0 pt-0">
                  <p className="font-14 font-weight-600 pb-3">Query</p>

                  <div className="d-flex justify-content-left">
                    <div className="rounded mt-2 blocka">a</div>
                    <div className=" border-bottom-div"></div>
                    <div className=" border-left-div mr-3"></div>
                    <div className="cr-notallowed  bg-light py-4 px-3">
                      <p className="pb-3">
                        <span className="pr-2">
                          <svg
                            viewBox="0 0 24 24"
                            className="C9Y-Icon-base C9Y-Icon-font icon-search tss-rcbbdp-icon"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                          </svg>
                        </span>
                        Metric memory.utilized{" "}
                      </p>
                      <p className="pb-3">
                        <span className="pr-2">
                          <svg
                            viewBox="0 0 24 24"
                            className="C9Y-Icon-base C9Y-Icon-font icon-filter tss-rcbbdp-icon"
                          >
                            <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"></path>
                          </svg>
                        </span>
                        Filter (service = "warehouse")
                      </p>
                      <p className="pb-3">
                        <span className="pr-2">
                          <svg
                            viewBox="0 0 24 24"
                            className="C9Y-Icon-base C9Y-Icon-font icon-clock tss-rcbbdp-icon"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 6v6l4 2"></path>
                          </svg>
                        </span>
                        Aggregate last
                      </p>
                      <p className="pb-3">
                        <span className="pr-2">
                          <svg
                            viewBox="0 0 24 24"
                            className="C9Y-Icon-base C9Y-Icon-font icon-layers tss-rcbbdp-icon"
                          >
                            <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                          </svg>
                        </span>
                        Group by host aggregated by the sum of all values
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <DisplaySettingDropdown />

          <TimeTableDropdown />
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
