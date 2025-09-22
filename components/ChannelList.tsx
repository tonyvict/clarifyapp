import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Channel } from '../types';

interface ChannelListProps {
  channels: Channel[];
  activeChannel: Channel;
  onChannelSelect: (channel: Channel) => void;
}

export const ChannelList: React.FC<ChannelListProps> = ({
  channels,
  activeChannel,
  onChannelSelect,
}) => {
  return (
    <Card style={styles.container}>
      <CardHeader>
        <CardTitle style={styles.title}>Your Channels</CardTitle>
        <CardDescription>Select a class</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.channelsList}
        >
          {channels.map((channel) => (
            <TouchableOpacity
              key={channel.id}
              onPress={() => onChannelSelect(channel)}
              style={[
                styles.channelButton,
                activeChannel.id === channel.id && styles.activeChannel,
              ]}
            >
              <View style={styles.channelContent}>
                <Text
                  style={[
                    styles.channelName,
                    activeChannel.id === channel.id && styles.activeChannelText,
                  ]}
                  numberOfLines={2}
                >
                  {channel.name}
                </Text>
                <Badge variant="secondary" size="sm" style={styles.badge}>
                  {channel.subject}
                </Badge>
                <Text style={styles.studentCount}>{channel.students} students</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </CardContent>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  channelsList: {
    paddingRight: 16,
  },
  channelButton: {
    width: 160,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'flex-start',
  },
  activeChannel: {
    backgroundColor: '#1f2937',
  },
  channelContent: {
    width: '100%',
  },
  channelName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    lineHeight: 18,
  },
  activeChannelText: {
    color: '#ffffff',
  },
  badge: {
    marginBottom: 4,
  },
  studentCount: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
});
