import React from "react";
import DropDownComp from "./dropdown";
import ShareDropdown from "./dropdown/sharedropdown";
const HeaderComponent = () => {
  return (
    <>
      <div className="px-4 py-3 my-header">
        <div className="d-flex justify-content-end align-items-center">
          <DropDownComp text="Have a feedback?" style="mr-3"></DropDownComp>

          <ShareDropdown />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="font-weight-600 font-28">
            Analyze deviation for Memory Utilization
          </h1>
          <a className="text-link-style font-12 font-weight-600">
            Investigating a deviation
          </a>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
