import React from "react";
import BaseCatalog from "./basecatalog";
import Catalog from "./catalog";
import ListCatalog from "./listCatalog";

const Warehouse = () => {
  return (
    <>
      <div className="pt-4 border-t-default">
        <h1 className="font-24">Biggest changes in warehouse</h1>
        <p className="font-12 text-lightest-grey">Why warehouse?</p>
      

      <div>
        <Catalog/>
        <ListCatalog/>
        <BaseCatalog/>
      </div>
      </div>
    </>
  );
};

export default Warehouse;
