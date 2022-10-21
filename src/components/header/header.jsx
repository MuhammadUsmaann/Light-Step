import React from "react";
import { DemoOfChat } from "../chatpopup/chatpopup";
import DropDownComp from "./dropdown";
import ShareDropdown from "./dropdown/sharedropdown";
const HeaderComponent = () => {
  return (
    <>
      <div className="px-4 py-3 my-header">
        <div className="d-flex justify-content-end align-items-center">
          <DemoOfChat/>
          <DropDownComp text="Have a feedback?" mystyle="mr-3"></DropDownComp>

          <ShareDropdown />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="font-weight-600 font-28">
            Analyze deviation for Memory Utilization
          </h1>
          <p className="text-link-style font-12 font-weight-600">
            Investigating a deviation
          </p>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
