module.exports = function(name, upper){

return `
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { observer } from 'mobx-react';


class ${name} extends Component {
  render() {
    let { /* store name */ } = this.props;
    return (
      <View></View>
    );
  }
}

${name}.propTypes = {
/* fill out props */
};

const styles = StyleSheet.create({
  /* add styles */
});

const ${upper} = observer(['/* store name */'], ${name});

export { ${name} };
export default ${upper};
`;

}