import React, { Component } from 'react';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { StyleSheet, Text, View } from 'react-native';

interface TProps {
    navigation: any // TODO: add the right type here
}

interface TState {
  hasCameraPermission: boolean,
  cameraState: CameraState,
  data?: string,
  type?: string
}

enum CameraState{
  Scanning,
  Scanned
}

class Camera extends Component<TProps, TState> {

  constructor(props: TProps) {
    super(props);
    this.state = {
      hasCameraPermission: false,
      cameraState: CameraState.Scanning
    };
  }

  onBarcodeScanned = (result: BarCodeScannerResult) => {
    this.setState({
      ...this.state,
      cameraState: CameraState.Scanned,
      data: result.data,
      type: result.type
    }, () => {
      this.props.navigation.navigate('ProductDetails')
    });
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
        onBarCodeScanned={this.state.cameraState === CameraState.Scanning ? this.onBarcodeScanned: undefined}
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

export default Camera;
