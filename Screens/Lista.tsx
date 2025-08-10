import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  StatusBar, 
  Image, 
  FlatList,
  TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  'Informacion': undefined;
};

type OtrasVariedadesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Informacion'>;

interface Variety {
  id: string;
  name: string;
  image: string;
}

const varieties: Variety[] = [
  {
    id: '1',
    name: 'Mula Muña',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=100&h=100&fit=crop'
  },
  {
    id: '2',
    name: 'Inca Muña',
    image: 'https://images.unsplash.com/photo-1574482620131-8b96ebbd227c?w=100&h=100&fit=crop'
  },
  {
    id: '3',
    name: 'Hatun Muña',
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=100&h=100&fit=crop'
  },
  {
    id: '4',
    name: 'Isi Muña',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&h=100&fit=crop'
  }
];

interface OtrasVariedadesScreenProps {
  navigation: OtrasVariedadesScreenNavigationProp;
}

export default function OtrasVariedadesScreen({ navigation }: OtrasVariedadesScreenProps) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNavigateToInformation = () => {
    navigation.navigate('Informacion'); 
  };

  const renderVarietyItem = ({ item }: { item: Variety }) => (
    <View style={styles.varietyItem}>
      <Image
        source={{ uri: item.image }}
        style={styles.varietyImage}
        resizeMode="cover"
      />
      <Text style={styles.varietyName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1F2937" />
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Otras Variedades</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar"
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>

      <View style={styles.varietiesNavContainer}>
        <TouchableOpacity style={styles.navArrow}>
          <Ionicons name="chevron-back" size={20} color="white" />
        </TouchableOpacity>
        
        <View style={styles.varietiesNav}>
          <Text style={styles.varietiesNavText}>Variedades</Text>
        </View>
        
        <TouchableOpacity style={styles.navArrow}>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.varietiesCard}>
          <FlatList
            data={varieties}
            renderItem={renderVarietyItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.infoButton} 
          onPress={handleNavigateToInformation}
        >
          <Text style={styles.infoButtonText}>Ver información del INIA</Text>
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
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(55, 65, 81, 0.8)',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  varietiesNavContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  navArrow: {
    padding: 10,
  },
  varietiesNav: {
    backgroundColor: 'rgba(55, 65, 81, 0.8)',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  varietiesNavText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  varietiesCard: {
    backgroundColor: 'rgba(55, 65, 81, 0.8)',
    borderRadius: 20,
    padding: 20,
    flex: 1,
  },
  varietyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  varietyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  varietyName: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
  },
  infoButton: {
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
  infoButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});