module.exports = function (name, upper) {

return `
/* @flow */

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class ${upper} extends Component {
  constructor(props: Object) {
    super(props);

    this.state = {/* add your state */};
  }

  render(): Object {
    return (
        <View></View>
    );
  }
}

${upper}.propTypes = {
    /* fill out proptypes */
};

const styles = StyleSheet.create({
  /* add styles */
});

export default ${upper};
`

}