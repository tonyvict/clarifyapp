import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

export const ProfileScreen: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Sign Out', 
          style: 'destructive',
          onPress: async () => {
            try {
              await logout();
            } catch (error) {
              Alert.alert('Error', 'Failed to sign out');
            }
          }
        }
      ]
    );
  };

  const handleEditProfile = () => {
    Alert.alert('Edit Profile', 'Profile editing feature coming soon!');
  };

  const handleChangePassword = () => {
    Alert.alert('Change Password', 'Password change feature coming soon!');
  };

  const handleNotifications = () => {
    Alert.alert('Notifications', 'Notification settings coming soon!');
  };

  const handleHelp = () => {
    Alert.alert('Help & Support', 'Help center coming soon!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* User Info Card */}
        <View style={styles.section}>
          <Card style={styles.userCard}>
            <CardContent>
              <View style={styles.userInfo}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>
                    {user?.email?.charAt(0).toUpperCase() || 'U'}
                  </Text>
                </View>
                <View style={styles.userDetails}>
                  <Text style={styles.userName}>
                    {user?.email?.split('@')[0] || 'User'}
                  </Text>
                  <Text style={styles.userEmail}>{user?.email}</Text>
                </View>
                <TouchableOpacity onPress={handleEditProfile} style={styles.editButton}>
                  <Ionicons name="pencil-outline" size={20} color="#6b7280" />
                </TouchableOpacity>
              </View>
            </CardContent>
          </Card>
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Card style={styles.settingsCard}>
            <CardHeader>
              <CardTitle style={styles.sectionTitle}>Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <View style={styles.settingsList}>
                <TouchableOpacity style={styles.settingItem} onPress={handleChangePassword}>
                  <View style={styles.settingIcon}>
                    <Ionicons name="lock-closed-outline" size={20} color="#6b7280" />
                  </View>
                  <Text style={styles.settingText}>Change Password</Text>
                  <Ionicons name="chevron-forward" size={16} color="#d1d5db" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingItem} onPress={handleNotifications}>
                  <View style={styles.settingIcon}>
                    <Ionicons name="notifications-outline" size={20} color="#6b7280" />
                  </View>
                  <Text style={styles.settingText}>Notifications</Text>
                  <Ionicons name="chevron-forward" size={16} color="#d1d5db" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingItem} onPress={handleHelp}>
                  <View style={styles.settingIcon}>
                    <Ionicons name="help-circle-outline" size={20} color="#6b7280" />
                  </View>
                  <Text style={styles.settingText}>Help & Support</Text>
                  <Ionicons name="chevron-forward" size={16} color="#d1d5db" />
                </TouchableOpacity>
              </View>
            </CardContent>
          </Card>
        </View>

        {/* App Info */}
        <View style={styles.section}>
          <Card style={styles.infoCard}>
            <CardContent>
              <View style={styles.appInfo}>
                <View style={styles.appIcon}>
                  <Text style={styles.appIconText}>T</Text>
                </View>
                <View style={styles.appDetails}>
                  <Text style={styles.appName}>Tutor Q&A</Text>
                  <Text style={styles.appVersion}>Version 1.0.0</Text>
                </View>
              </View>
            </CardContent>
          </Card>
        </View>

        {/* Logout Button */}
        <View style={styles.section}>
          <Button
            title="Sign Out"
            onPress={handleLogout}
            variant="outline"
            style={styles.logoutButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  content: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  userCard: {
    marginBottom: 0,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1f2937',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#6b7280',
  },
  editButton: {
    padding: 8,
    borderRadius: 8,
  },
  settingsCard: {
    marginBottom: 0,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  settingsList: {
    gap: 0,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  settingIcon: {
    width: 24,
    alignItems: 'center',
    marginRight: 16,
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
  },
  infoCard: {
    marginBottom: 0,
  },
  appInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1f2937',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  appIconText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  appDetails: {
    flex: 1,
  },
  appName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  appVersion: {
    fontSize: 14,
    color: '#6b7280',
  },
  logoutButton: {
    borderColor: '#ef4444',
  },
});
