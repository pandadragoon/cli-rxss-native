module.exports = function(name, upper){

return `
/* @flow */

import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { observer } from 'mobx-react';

const ${name} = ({ /* add store you are using */ }): Object => {
  return (
    <View></View>
  );
};

${name}.propTypes = {
 /* add proptypes */
};
const styles = StyleSheet.create({
  /* add styles */
});

const ${upper} = observer(['/* add store you are using */'], ${name});

export { ${name} };

export default ${upper};
`;

}