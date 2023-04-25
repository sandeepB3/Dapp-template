import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

const FingerprintScannerExample = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleFingerprintScan = async () => {
    try {
      await FingerprintScanner.authenticate({
        description: 'Scan your fingerprint to continue',
      });
      // Authentication was successful
      console.log('Authentication was successful');
    } catch (error) {
      // Authentication failed
      setErrorMessage('Authentication failed');
      console.log(error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleFingerprintScan}>
        <Text>Scan Fingerprint</Text>
      </TouchableOpacity>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

export default FingerprintScanner;
