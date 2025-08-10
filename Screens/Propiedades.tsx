import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  StatusBar, 
  Image, 
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('window');

type RootStackParamList = {
  'Lista': undefined;
  'Camara': undefined;
};

type PropertiesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Lista' | 'Camara'>;

interface CircularProgressProps {
  percentage?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage = 89 }) => {
  const size = 120;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View style={styles.progressContainer}>
      <Svg width={size} height={size} style={styles.progressSvg}>
        <Defs>
          <LinearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#8B5CF6" />
            <Stop offset="50%" stopColor="#EC4899" />
            <Stop offset="100%" stopColor="#84CC16" />
          </LinearGradient>
        </Defs>
        
        <Path
          d={`M ${size/2}, ${strokeWidth/2}
             a ${radius},${radius} 0 1,1 0,${2 * radius}
             a ${radius},${radius} 0 1,1 0,-${2 * radius}`}
          fill="none"
          stroke="#374151"
          strokeWidth={strokeWidth}
        />
        
        <Path
          d={`M ${size/2}, ${strokeWidth/2}
             a ${radius},${radius} 0 1,1 0,${2 * radius}
             a ${radius},${radius} 0 1,1 0,-${2 * radius}`}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${size/2} ${size/2})`}
        />
      </Svg>
      
      <View style={styles.progressTextContainer}>
        <Text style={styles.progressNumber}>{percentage}</Text>
        <Text style={styles.progressLabel}>Accuracy</Text>
      </View>
    </View>
  );
};

export default function PropertiesScreen() {
  const navigation = useNavigation<PropertiesScreenNavigationProp>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleMaximize = () => {
    console.log('Maximizar');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1F2937" />
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Propiedades</Text>
          <View style={styles.statusDot} />
        </View>
        
        <TouchableOpacity style={styles.maximizeButton} onPress={handleMaximize}>
          <Ionicons name="expand-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.plantCard}>
          <View style={styles.plantImageContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300&h=300&fit=crop'
              }}
              style={styles.plantImage}
              resizeMode="cover"
            />
          </View>

          <View style={styles.infoSection}>
            <CircularProgress percentage={89} />
            
            <Text style={styles.plantName}>Mula Muña</Text>
            
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, { width: '89%' }]} />
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.varietiesButton} 
          onPress={() => navigation.navigate('Lista')}
        >
          <Text style={styles.varietiesButtonText}>Mostrar otras variedades</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.cameraButton} 
          onPress={() => navigation.navigate('Camara')}
        >
          <Text style={styles.cameraButtonText}>Volver a la cámara</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2937',
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
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginRight: 8,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#F59E0B',
  },
  maximizeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  plantCard: {
    backgroundColor: 'rgba(55, 65, 81, 0.8)',
    borderRadius: 24,
    padding: 20,
    marginTop: 20,
  },
  plantImageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  plantImage: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  infoSection: {
    alignItems: 'center',
  },
  progressContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  progressSvg: {
    transform: [{ rotate: '0deg' }],
  },
  progressTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  progressLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
  plantName: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginBottom: 20,
  },
  progressBarContainer: {
    width: '100%',
    alignItems: 'center',
  },
  progressBarBackground: {
    width: '80%',
    height: 8,
    backgroundColor: '#374151',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#84CC16',
    borderRadius: 4,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 15,
  },
  varietiesButton: {
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
  varietiesButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  cameraButton: {
    backgroundColor: '#EF4444',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#EF4444',
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