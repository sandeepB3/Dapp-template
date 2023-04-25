import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CandidatesList  from '../Components/CandidatesList';

const elections = [
  {
    id: 1,
    name: 'Election 1',
    candidates: [
      {
        id: 1,
        name: 'John Doe',
        party: 'Democratic Party',
        // photo: require('../assets/party_logo/BJP_logo.svg'),
      },
      {
        id: 2,
        name: 'Jane Smith',
        party: 'Republican Party',
        // photo: require('../assets/party_logo/aap.png'),
      },
      {
        id: 3,
        name: 'Bob Johnson',
        party: 'Green Party',
        // photo: require('../assets/party_logo/congress.png'),
      },
    ],
  },
  {
    id: 2,
    name: 'Election 2',
    candidates: [
      {
        id: 4,
        name: 'Alice Lee',
        party: 'Libertarian Party',
        // photo: require('../assets/party_logo/BJP_logo.svg'),
      },
      {
        id: 5,
        name: 'Tom Wilson',
        party: 'Independent Party',
        // photo: require('../assets/party_logo/Shivsena.webp'),
      },
    ],
  },
];

const DetailsElection = ({ electionName }) => {

  const election = elections.find((e) => e.name===electionName);

  return (
  
     
        <View style={styles.container} key={election.id}>
          <View style={styles.header}>
            <Text style={styles.electionName}>{election.name}</Text>
            <Text style={styles.infoText}>Election Information</Text>
          </View>
          <View style={styles.candidatesContainer}>
            {election.candidates.map((candidate) => (
              <CandidatesList candidate={candidate} key={candidate.id} />
            ))}
          </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFC',
    paddingHorizontal: 12,
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#6B46C1',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  electionName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    color: '#FFF',
    fontSize: 16,
  },
  candidatesContainer: {
    marginBottom: 20,
  },
});

export default DetailsElection;
