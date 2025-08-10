import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation(); 

  const spinValue = new Animated.Value(0);

  useEffect(() => {
    const spin = () => {
      spinValue.setValue(0);
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => spin());
    };
    
    spin();
  }, []);

  const spinInterpolation = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handleStart = () => {
    navigation.navigate('Camara' as never); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Bienvenido a</Text>
        <Text style={styles.appName}>MUÑALYZER</Text>
        
        <View style={styles.loaderContainer}>
          <Animated.View 
            style={[
              styles.loader,
              { transform: [{ rotate: spinInterpolation }] }
            ]}
          >
            <LinearGradient
              colors={['#8B5A2B', '#DAA520', '#9ACD32', '#32CD32']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradient}
            />
          </Animated.View>
        </View>
      </View>
      
      <View style={styles.bottomContainer}>
        <Text style={styles.descriptionText}>
          Esta aplicación está diseñada para reconocer{'\n'}diferentes variedades de Muña
        </Text>
        
        <TouchableOpacity 
          style={styles.startButton}
          onPress={handleStart}
        >
          <Text style={styles.startButtonText}>EMPEZAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A5A5A',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 60,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 22,
    color: 'white',
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 10,
  },
  appName: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 80,
  },
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  gradient: {
    flex: 1,
    borderRadius: 40,
    borderWidth: 8,
    borderColor: 'transparent',
  },
  bottomContainer: {
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    opacity: 0.9,
  },
  startButton: {
    backgroundColor: '#2bc812',
    paddingVertical: 18,
    paddingHorizontal: 80,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
});