import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import { addFeature } from '../actions/carActions';

const AdditionalFeatures = props => {
  const handleAdd = (item) => {
    props.addFeature(item)
  }
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} handleAdd={handleAdd} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

const mapDispatchToProps = {
  addFeature
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeatures);
