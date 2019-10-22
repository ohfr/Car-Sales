import React from 'react';
import { connect } from 'react-redux';
import AddedFeature from './AddedFeature';
import { removeFeature } from '../actions/carActions';

const AddedFeatures = props => {
  const handleRemove = (item) => {
    props.removeFeature(item)
  }
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} handleRemove={handleRemove} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    features: state.car.features
  }
}

const mapDispatchToProps = {
  removeFeature
}

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeatures);
