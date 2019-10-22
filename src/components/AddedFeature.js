import React from 'react';

const AddedFeature = props => {
  const handleRemove = (e, item) => {
    props.removeFeature(item)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={(e) => handleRemove(e, props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
