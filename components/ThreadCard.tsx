import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardHeader, CardTitle, CardFooter } from './ui/Card';
import { Badge } from './ui/Badge';
import { Ionicons } from '@expo/vector-icons';

interface ThreadCardProps {
  thread: {
    id: string;
    title: string;
    tags: string[];
    author: string;
    createdAt: string;
    solved: boolean;
    reactions: number;
    pinned?: boolean;
  };
  onPress: () => void;
}

export const ThreadCard: React.FC<ThreadCardProps> = ({ thread, onPress }) => {
  return (
    <Card style={styles.card} onPress={onPress}>
      <CardHeader>
        <View style={styles.header}>
          <CardTitle style={styles.title}>
            {thread.pinned && <Ionicons name="bookmark" size={16} color="#3b82f6" />}
            {thread.title}
          </CardTitle>
        </View>
        <View style={styles.tagsContainer}>
          {thread.tags.map((tag) => (
            <Badge key={tag} variant="secondary" size="sm" style={styles.tag}>
              {tag}
            </Badge>
          ))}
        </View>
      </CardHeader>
      <CardFooter style={styles.footer}>
        <Text style={styles.metaText}>
          by {thread.author} • {thread.createdAt}
        </Text>
        <View style={styles.reactionsContainer}>
          <Ionicons name="thumbs-up" size={12} color="#6b7280" />
          <Text style={styles.reactionsText}>{thread.reactions}</Text>
        </View>
      </CardFooter>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 4,
    marginHorizontal: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 8,
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 8,
  },
  tag: {
    marginRight: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  metaText: {
    fontSize: 11,
    color: '#6b7280',
    flex: 1,
  },
  reactionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  reactionsText: {
    fontSize: 11,
    color: '#6b7280',
  },
});
