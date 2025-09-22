import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Ionicons } from '@expo/vector-icons';
import { Channel } from '../types';

interface ChannelSelectionScreenProps {
  channels: Channel[];
  activeChannel: Channel;
  onChannelSelect: (channel: Channel) => void;
  onBack: () => void;
}

export const ChannelSelectionScreen: React.FC<ChannelSelectionScreenProps> = ({
  channels,
  activeChannel,
  onChannelSelect,
  onBack,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#1f2937" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Select Channel</Text>
          <Text style={styles.headerSubtitle}>Choose a class to view questions</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.channelsContainer}>
          {channels.map((channel) => (
            <TouchableOpacity
              key={channel.id}
              style={[
                styles.channelCard,
                activeChannel.id === channel.id && styles.activeChannelCard,
              ]}
              onPress={() => onChannelSelect(channel)}
            >
              <View style={styles.channelHeader}>
                <View style={[
                  styles.channelIcon,
                  activeChannel.id === channel.id && styles.activeChannelIcon
                ]}>
                  <Text style={[
                    styles.channelIconText,
                    activeChannel.id === channel.id && styles.activeChannelIconText
                  ]}>
                    {channel.subject.charAt(0).toUpperCase()}
                  </Text>
                </View>
                <View style={styles.channelInfo}>
                  <Text style={[
                    styles.channelName,
                    activeChannel.id === channel.id && styles.activeChannelName
                  ]}>
                    {channel.name}
                  </Text>
                  <Badge 
                    variant={activeChannel.id === channel.id ? "default" : "secondary"} 
                    size="sm"
                    style={styles.subjectBadge}
                  >
                    {channel.subject}
                  </Badge>
                </View>
                {activeChannel.id === channel.id && (
                  <Ionicons name="checkmark-circle" size={24} color="#10b981" />
                )}
              </View>
              
              <View style={styles.channelStats}>
                <View style={styles.statItem}>
                  <Ionicons name="people" size={16} color="#6b7280" />
                  <Text style={styles.statText}>{channel.students} students</Text>
                </View>
                <View style={styles.statItem}>
                  <Ionicons name="chatbubbles" size={16} color="#6b7280" />
                  <Text style={styles.statText}>Active discussions</Text>
                </View>
              </View>

              {activeChannel.id === channel.id && (
                <View style={styles.activeIndicator}>
                  <Text style={styles.activeText}>Currently selected</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.footer}>
          <Button
            title="Continue with selected channel"
            onPress={() => onChannelSelect(activeChannel)}
            style={styles.continueButton}
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  content: {
    flex: 1,
  },
  channelsContainer: {
    padding: 16,
    gap: 16,
  },
  channelCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  activeChannelCard: {
    borderColor: '#3b82f6',
    backgroundColor: '#f8fafc',
  },
  channelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  channelIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  activeChannelIcon: {
    backgroundColor: '#3b82f6',
  },
  channelIconText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#6b7280',
  },
  activeChannelIconText: {
    color: '#ffffff',
  },
  channelInfo: {
    flex: 1,
  },
  channelName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
    lineHeight: 22,
  },
  activeChannelName: {
    color: '#3b82f6',
  },
  subjectBadge: {
    alignSelf: 'flex-start',
  },
  channelStats: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 8,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    fontSize: 14,
    color: '#6b7280',
  },
  activeIndicator: {
    backgroundColor: '#d1fae5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  activeText: {
    fontSize: 12,
    color: '#065f46',
    fontWeight: '500',
  },
  footer: {
    padding: 16,
    paddingTop: 0,
  },
  continueButton: {
    backgroundColor: '#3b82f6',
  },
});
