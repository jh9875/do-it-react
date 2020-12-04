import React from 'react';
import PropTypes from 'prop-types';

class ChildCompenent extends React.Component {
  render() {
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;

    return (
      <div>
        <span>불리언 값: {boolValue}</span>
        <span>숫자 값: {numValue}</span>
        <span>배열 값: {arrayValue}</span>
        <span>객체 값: {objValue}</span>
        <span>노드 값: {nodeValue}</span>
        <span>함수 값: {funcValue}</span>
      </div>
    );
  }
}

ChildCompenent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default ChildCompenent;
