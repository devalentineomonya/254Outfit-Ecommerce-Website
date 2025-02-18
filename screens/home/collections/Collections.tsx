import React from "react";
import { CollectionWidget } from "../widgets/CollectionWidget";

const Collections = () => {
  return (
    <section className="grid grid-cols-12 gap-5 my-5 h-fit">
      <CollectionWidget />
      <CollectionWidget />
      <CollectionWidget />
      <CollectionWidget />
      <CollectionWidget />
      <CollectionWidget />
    </section>
  );
};

export default Collections;
