import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Badge } from './ui/Badge';
import { Ionicons } from '@expo/vector-icons';

interface ThreadRowProps {
  thread: {
    id: string;
    title: string;
    tags: string[];
    author: string;
    createdAt: string;
    preview: string;
    solved: boolean;
    reactions: number;
  };
  onPress: () => void;
}

export const ThreadRow: React.FC<ThreadRowProps> = ({ thread, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>Q</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{thread.title}</Text>
          {thread.solved && (
            <Badge variant="success" size="sm">
              Solved
            </Badge>
          )}
        </View>
        <Text style={styles.preview} numberOfLines={1}>
          {thread.preview}
        </Text>
        <View style={styles.tagsContainer}>
          {thread.tags.map((tag) => (
            <Badge key={tag} variant="secondary" size="sm" style={styles.tag}>
              {tag}
            </Badge>
          ))}
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.timeText}>{thread.createdAt}</Text>
        <TouchableOpacity style={styles.pinButton}>
          <Ionicons name="bookmark-outline" size={16} color="#6b7280" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginVertical: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#1f2937',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 4,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1f2937',
    flex: 1,
    lineHeight: 18,
  },
  preview: {
    fontSize: 11,
    color: '#6b7280',
    marginBottom: 6,
    lineHeight: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  tag: {
    marginRight: 4,
  },
  rightSection: {
    alignItems: 'flex-end',
    gap: 6,
    minWidth: 60,
  },
  timeText: {
    fontSize: 10,
    color: '#9ca3af',
  },
  pinButton: {
    padding: 2,
  },
});
