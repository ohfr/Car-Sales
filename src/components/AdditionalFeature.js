import React from 'react';

const AdditionalFeature = props => {
  const handleAdd = (e, item) => {
    props.addFeature(item)
    console.log(item)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={(e) => handleAdd(e, props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
