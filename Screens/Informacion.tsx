import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  StatusBar, 
  Image, 
  Dimensions,
  Linking
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('window');

type RootStackParamList = {
  'Camara': undefined;
};

type IniaInfoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Camara'>;

export default function IniaInfoScreen() {
  const navigation = useNavigation<IniaInfoScreenNavigationProp>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoToBrowser = () => {
    const url = 'https://www.gob.pe/institucion/inia/noticias/888912-andahuaylas-se-convierte-en-la-novena-zona-de-agrobiodiversidad-del-peru-para-el-mundo';
    
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log("No se puede abrir la URL: " + url);
        }
      })
      .catch((err) => console.error('Error al intentar abrir la URL:', err));
  };

  const handleGoToCamera = () => {
    navigation.navigate('Camara');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2D3748" />
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Informacion del INIA</Text>
        
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        
        <View style={styles.iniaCard}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop'
              }}
              style={styles.circularImage}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.iniaTitle}>Instituto Nacional de Innovación Agraria</Text>
          
          <Text style={styles.description}>
            promueve proyectos de investigación para la conservación de recursos genéticos en zona de Agrobiodiversidad de Andahuaylas
          </Text>
        </View>

        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <View style={styles.peruFlag}>
              <View style={styles.flagRed} />
              <View style={styles.flagWhite} />
              <View style={styles.flagRed} />
            </View>
            <View style={styles.logoTextContainer}>
              <Text style={styles.peruText}>PERÚ</Text>
              <Text style={styles.ministryText}>Ministerio de Desarrollo Agrario y Riego</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.browserButton} 
          onPress={handleGoToBrowser}
        >
          <Text style={styles.browserButtonText}>Ver en navegador</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.cameraButton} 
          onPress={handleGoToCamera}
        >
          <Text style={styles.cameraButtonText}>Ir a camara</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D3748',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    flex: 1,
    textAlign: 'center',
    marginLeft: -40, // Compensar el espacio del botón para centrar
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  iniaCard: {
    backgroundColor: '#4A5568',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 40,
  },
  imageContainer: {
    marginBottom: 20,
  },
  circularImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#718096',
  },
  iniaTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 22,
  },
  description: {
    fontSize: 14,
    color: '#CBD5E0',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  logoSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A5568',
    borderRadius: 12,
    padding: 16,
    width: '100%',
  },
  peruFlag: {
    flexDirection: 'row',
    width: 48,
    height: 32,
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 16,
  },
  flagRed: {
    flex: 1,
    backgroundColor: '#DC2626',
  },
  flagWhite: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  logoTextContainer: {
    flex: 1,
  },
  peruText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 2,
  },
  ministryText: {
    fontSize: 12,
    color: '#CBD5E0',
    lineHeight: 16,
  },
  bottomContainer: {
    paddingHorizontal: 30,
    paddingBottom: 40,
    gap: 12,
  },
  browserButton: {
    backgroundColor: '#4A5568',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#718096',
  },
  browserButtonText: {
    color: '#CBD5E0',
    fontSize: 16,
    fontWeight: '500',
  },
  cameraButton: {
    backgroundColor: '#2bc812',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#2bc812',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  cameraButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});