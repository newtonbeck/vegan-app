import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TProps {
  data?: string,
  type?: string
}

interface TState { }

class ProductDetails extends Component<TProps, TState> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <Text>{this.props.data}</Text>
        <Text>{this.props.type}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ProductDetails;
