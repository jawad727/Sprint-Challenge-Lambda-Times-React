import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectTabHandler`, and the `tab` itself as props*/}
            {props.tabs.map(item => <Tab tab={item}
            selected={props.selected}
            changeSelected={props.changeSelected}
            />)}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;

Tabs.propTypes = {
  selected: PropTypes.string.isRequired,
  changeSelected: PropTypes.func.isRequired
}