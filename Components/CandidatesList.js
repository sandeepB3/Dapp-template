import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, SafeAreaView, Button, FlatList, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

export default Candidates_list = ({candidate}) =>{
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const navigation = useNavigation();
    
  
    const handleVote = (name) => {
      setSelectedCandidate(name);
      // TODO: Send vote to server
      navigation.navigate('FingerprintScanner');
    };
    return (
        <TouchableOpacity
            key={candidate.id}
            style={[
              styles.candidateItem,
              selectedCandidate === candidate.id && styles.selectedCandidate,
            ]}
            
          >
            <View style={styles.candidatePhotoContainer}>
               
            </View>
            <View style={styles.candidateInfoContainer}>
              <Text style={styles.candidateName}>{candidate.name}</Text>
              <Text style={styles.candidateParty}>{candidate.party}</Text>
            </View>
            <View style={styles.voteButtonContainer}>
              <TouchableOpacity
                style={styles.voteButton}
                onPress={() => handleVote(candidate.name)}
              >
                <Text style={styles.voteButtonText}>Vote</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   
      candidateItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
      },
      selectedCandidate: {
        backgroundColor: '#F9FAFC',
      },
      candidatePhotoContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
        marginRight: 10,
      },
      candidatePhoto: {
        width: 50,
        height: 50,
      },
      candidateInfoContainer: {
        flex: 1,
      },
      candidateName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      candidateParty: {
        color: '#6B7280',
        marginTop: 5,
      },
      voteButtonContainer: {
        marginLeft: 10,
      },
      voteButton: {
        backgroundColor: '#6B46C1',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
      },
      voteButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
      },
})