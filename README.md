# 🔐 Simple Authentication App

A simple and intuitive React Native application that demonstrates secure login and logout techniques using Firebase Authentication and real-time database integration.

---

## ✨ Features

- User authentication: **Login**, **Sign Up**, and **Logout** using Firebase Authentication
- Secure token handling with **Axios** and **React Context**
- Real-time Firebase Database integration with secured access rules
- Persistent login using [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/install/)
- Smooth user experience with a prolonged **SplashScreen**
- Modular architecture using reusable components and utilities

---

## 🔧 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new Firebase project
3. Generate a Web SDK configuration
4. Enable **Email/Password Authentication** under the **Authentication** tab
5. Create a **Realtime Database** and set access rules
6. Store your Firebase configuration in a `.env` file for security

---

## 🧱 Tech Stack

- React Native  
- Expo  
- Firebase Authentication  
- Firebase Realtime Database  
- Async Storage  
- Axios  

---

## 🚀 Installation

```bash
git clone <repository-url>
cd authenticator-appr
npm install
npm start
```

> **Note**: Ensure you have Node.js, Expo CLI, and a device simulator or the Expo Go app installed.

---

## 📁 Project Structure

```
/components       # Reusable UI components  
/screens          # Login, Signup, Welcome screen layouts  
/store            # Context-based auth token management  
/utils            # Utility functions  
/constants        # Reused app-wide constants  
/App.js           # Application entry point  
```

---

## 🌐 Async Storage References

- [Async Storage Installation Guide](https://react-native-async-storage.github.io/async-storage/docs/install/)
- [Async Storage GitHub Repo](https://github.com/react-native-async-storage/async-storage/tree/main/packages/default-storage)
- [React Native Directory Storage Listing](https://reactnative.directory/?search=storage)
- [Async Storage Documentation](https://reactnative.dev/docs/asyncstorage)

---
