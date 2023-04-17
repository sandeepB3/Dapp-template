import React from 'react';
import { View, ScrollView, StyleSheet,Text,Button } from 'react-native';

const ElectionScreen = () => {
  const elections = [
    { id: 1, name: 'Election 1', date: 'April 25, 2023', location: 'Andheri' },
    { id: 2, name: 'Election 2', date: 'May 1, 2023', location: 'Ghatkopar' },
    { id: 3, name: 'Election 3', date: 'May 15, 2023', location: 'Dadar' },
    { id: 4, name: 'Election 4', date: 'June 1, 2023', location: 'Mulund' },
    { id: 5, name: 'Election 5', date: 'June 15, 2023', location: 'Bandra' },
    { id: 6, name: 'Election 6', date: 'July 1, 2023', location: 'Vasai' },
  ];

  return (
    <ScrollView style={styles.container}>
      {elections.map((election) => (
        <View key={election.id} style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.name}>{election.name}</Text>
            <Text style={styles.date}>{election.date}</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.location}>{election.location}</Text>
            <Button title="View Details" />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F7F7F7',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: '#888888',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    fontSize: 16,
    color: '#888888',
  },
});

export default ElectionScreen;
