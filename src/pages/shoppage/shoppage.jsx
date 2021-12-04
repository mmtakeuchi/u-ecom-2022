import React from "react";
import { Routes, Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";

const ShopPage = (props) => {
  return (
    <div className="shop-page">
      <Routes>
        <Route path=":collectionId" element={<CollectionPage />} />
        <Route index element={<CollectionsOverview />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
