import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item";
import "./collection.scss";

const CollectionPage = (props) => {
  const params = useParams();
  const collection = useSelector(selectCollection(params.collectionId));
  console.log(collection);

  return (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
