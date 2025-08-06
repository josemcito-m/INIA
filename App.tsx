import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      {/* CameraView should not have children, so we place it directly here. */}
      <CameraView style={styles.camera} facing={facing} />

      {/* The button container is now a sibling, positioned absolutely on top of the camera. */}
      <View style={styles.buttonContainerAbsolute}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  // Original buttonContainer is no longer used for positioning children inside CameraView
  // buttonContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   backgroundColor: 'transparent',
  //   margin: 64,
  // },
  buttonContainerAbsolute: {
    position: 'absolute', // Position it absolutely relative to its parent (the main container)
    bottom: 0,            // Align to the bottom
    left: 0,              // Align to the left
    right: 0,             // Align to the right
    flexDirection: 'row', // Keep the row direction for the button
    backgroundColor: 'transparent', // Transparent background
    padding: 20,          // Add some padding from the edges
    justifyContent: 'center', // Center the button horizontally
    alignItems: 'flex-end', // Align button to the bottom of this container
  },
  button: {
    padding: 15, // Make the touchable area larger
    borderRadius: 10, // Rounded corners for the button
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background for visibility
  },
  text: {
    fontSize: 20, // Slightly smaller font for the button text
    fontWeight: 'bold',
    color: 'white',
  },
});
