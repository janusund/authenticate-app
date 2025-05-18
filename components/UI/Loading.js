import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Modal } from 'react-native';

const Loading = ({ visible, message }) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <ActivityIndicator size="large" color="#ffffff" />
          {message ? <Text style={styles.message}>{message}</Text> : null}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    alignItems: 'center',
  },
  message: {
    marginTop: 10,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Loading;
