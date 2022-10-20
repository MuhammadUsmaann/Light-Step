import React, { useState } from "react";
import arrowicon from "../../../images/lessthan.svg";
import PerformanceChanges from "./PerformanceChanges/performancechanges";
import MoreChanges from "./morechanges/moreChanges";

const performanceChanges = [
  {
    name: "p95 Latency",
    avg1: "137ms",
    avg2: "487ms",
    change: "High",
    id:"performancecollapse_1"
  },
  {
    name: "Rate",
    avg1: "137ms",
    avg2: "487ms",
    change: "High",
    id:"performancecollapse_2"
  },
  {
    name: "Error",
    avg1: "137ms",
    avg2: "487ms",
    change: "High",
    id:"performancecollapse_3"
  },
];
const mostChanges = [
  {
    name: "customer:Felink",
    service: "iOS",
    operation: "/api/update-catalog",
    baseline:"2.41% of traces",
    daviation:"44.22% of traces",
    change: "High",
    id: "morecollapse_1",
  },
  {
    name: "customer:Felink",
    service: "iOS",
    operation: "/api/update-catalog",
    baseline:"2.41% of traces",
    daviation:"44.22% of traces",
    change: "High",
    id: "morecollapse_2",
  },
  {
    name: "customer:Felink",
    service: "iOS",
    operation: "/api/update-catalog",
    baseline:"2.41% of traces",
    daviation:"44.22% of traces",
    change: "High",
    id: "morecollapse_3",
  },
  {
    name: "customer:Felink",
    service: "iOS",
    operation: "/api/update-catalog",
    baseline:"2.41% of traces",
    daviation:"44.22% of traces",
    change: "High",
    id: "morecollapse_4",
  },
  {
    name: "customer:Felink",
    service: "iOS",
    operation: "/api/update-catalog",
    baseline:"2.41% of traces",
    daviation:"44.22% of traces",
    change: "High",
    id: "morecollapse_5",
  },
];

const Catalog = () => {
  const [detailCheck, setDetailCheck] = useState(false);
  const [dsblCustomerCheckbox, setdsblCustomerCheckbox] = useState(true);
  return (
    <div className="py-4">
      <div className="">
        <div id="accordion">
          <div className="card">
            <div className="card-header border-0 bg-white" id="heading0">
              <h3 className="mb-0">
                <div
                  className="bg-white cr-p"
                  data-toggle="collapse"
                  data-target="#collapse0"
                  aria-expanded="false"
                  aria-controls="collapse0"
                >
                  <div className="d-flex">
                    <img
                      src={arrowicon}
                      alt=""
                      className="ml-1 mr-4 collapse-icon"
                    />
                    <div>
                      <p className="font-14 text-link-style font-weight-600">
                        warehouse
                        <svg
                          viewBox="0 0 24 24"
                          className="C9Y-Icon-base C9Y-Icon-font icon-external-link ml-1"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"></path>
                        </svg>
                      </p>
                      <p className="font-18 font-weight-600">update-catalog</p>
                    </div>
                  </div>
                </div>
              </h3>
            </div>
            <div
              id="collapse0"
              className="collapse"
              aria-labelledby="heading0"
              data-parent="#accordion"
            >
              <div className="row m-0 p-3 pl62px border-t-default">
                <div className="p-0 col-8">
                  <p className="font-18 font-weight-600">Performance changes</p>
                </div>
                <div className="p-0 col-2">
                  <p className=" font-12 font-weight-600">Average</p>
                </div>

                <div className="p-0 col-1">
                  <p className=" font-12 font-weight-600">Average</p>
                </div>
                <div className="p-0 col-1">
                  <p className=" font-14 font-weight-600">Change</p>
                </div>
              </div>
              <div className="card-body p-0 border-0 rounded-0 ">
                {performanceChanges.map((data) => {
                  return <PerformanceChanges data={data} />;
                })}

                

                {/* Attributes with the most change */}
                <div className="border-t-default px-3 pl62px pt-3 pb-2">
                  <p className="font-18 font-weight-600">
                    Attributes with the most change
                  </p>

                  <div className="row m-0 pt-3 text-light-gray">
                    <div className="col-3 p-0">
                      <p className="font-12 font-weight-600">Attributes</p>
                    </div>
                    <div className="col-2 p-0">
                      <p className=" font-12 font-weight-600">Service</p>
                    </div>
                    <div className="col-2 p-0">
                      <p className=" font-12 font-weight-600">Operation</p>
                    </div>
                    <div className="col-2 p-0">
                      <div className="d-flex align-items-center">
                        <div className="box bg-purple"></div>
                        <p className=" font-12 font-weight-600">
                          Baseline{" "}
                          <span className="font-weight-400">
                            (1,998 traces)
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-2 p-0">
                      <div className="d-flex align-items-center">
                        <div className="box bg-light-blue"></div>
                        <p className=" font-12 font-weight-600">
                          Deviation{" "}
                          <span className="font-weight-400">
                            (1,998 traces)
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-1 p-0">
                      <p className=" font-12 font-weight-600">Change</p>
                    </div>
                  </div>
                </div>

                <div className="most-changes">
                {mostChanges.map((data)=>{
                    return(
                      <MoreChanges data = {data} />
                    )
                  })}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
