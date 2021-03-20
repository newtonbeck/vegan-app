import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TProps { }

interface TState {
  hasCameraPermission: boolean
}

class App extends React.Component<TProps, TState> {

  constructor(props: TProps) {
    super(props);
    this.state = {
      hasCameraPermission: false,
    };
  }

  onBarcodeScanned = (result: BarCodeScannerResult) => {
    alert(JSON.stringify({
      data: result.data,
      type: result.type
    }));
  }

  async componentDidMount() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    this.setState({
      ...this.state,
      hasCameraPermission: status === 'granted'
    });
  }

  render() {
    if (!this.state.hasCameraPermission) {
      return (
        <View style={styles.container}>
          <Text>No camera permission</Text>
        </View>
      );
    }

    return (
      <BarCodeScanner 
        onBarCodeScanned={this.onBarcodeScanned}
        style={StyleSheet.absoluteFillObject}
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
  }
});

export default App;
