import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {

  onBarcodeScanned = (result: BarCodeScannerResult) => {
    alert({
      data: result.data,
      type: result.type
    })
  }

  render(){
    return (
      <BarCodeScanner style={styles.container}
        onBarCodeScanned={this.onBarcodeScanned}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;