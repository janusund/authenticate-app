// React Native version using ScrollView and styled cards
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const schedule = [
  {
    time: '6:00 AM',
    title: '☀️ Rising',
    description: 'Wash face, drink CCF tea, take herbs (1hr before eating)',
  },
  {
    time: '8:00–9:00 AM',
    title: '🥣 Breakfast',
    description: '',
  },
  {
    time: '9:00–11:30 AM',
    title: '🧘 Morning Care',
    description: 'Walk, body scrub + shower, stretch, study',
  },
  {
    time: 'Noon',
    title: '🍛 Lunch',
    description: 'LARGEST MEAL',
  },
  {
    time: '1:00–5:30 PM',
    title: '📚 Afternoon Care',
    description: 'Appointments, study, organize, focus time',
  },
  {
    time: '6:00 PM',
    title: '🍽️ Dinner',
    description: 'Smaller meal. Family time.',
  },
];

export default function DailySchedule() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📅 Daily Routine</Text>
      {schedule.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.time}>{item.time}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      ))}
      <Text style={styles.footer}>🌟 Enjoy!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  time: {
    fontSize: 14,
    color: '#888',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 4,
  },
  description: {
    fontSize: 14,
    color: '#444',
  },
  footer: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
});
