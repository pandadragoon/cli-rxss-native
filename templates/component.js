module.exports = function(name, upper){

return `
/* @flow */

import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const ${upper} = (props: Object): Object => {
    return (
        <View></View>
    );
}

${upper}.propTypes = {
/* fill out propTypes */
};

const styles = StyleSheet.create({
  /* add styles */
});

export default ${upper};
`
}