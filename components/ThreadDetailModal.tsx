import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Modal } from './ui/Modal';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Separator } from './ui/Separator';
import { Ionicons } from '@expo/vector-icons';
import { ThreadDetail } from '../types';

interface ThreadDetailModalProps {
  visible: boolean;
  onClose: () => void;
  thread: ThreadDetail | null;
  onPin: () => void;
  onMarkSolved: () => void;
  onRecordVoice: () => void;
  onGenerateTranscript: () => void;
}

export const ThreadDetailModal: React.FC<ThreadDetailModalProps> = ({
  visible,
  onClose,
  thread,
  onPin,
  onMarkSolved,
  onRecordVoice,
  onGenerateTranscript,
}) => {
  if (!thread) return null;

  return (
    <Modal visible={visible} onClose={onClose} title={thread.title}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.authorText}>
            Asked by {thread.author} • {thread.createdAt}
          </Text>
        </View>

        <View style={styles.questionSection}>
          <Text style={styles.questionText}>{thread.body}</Text>
          <View style={styles.tagsContainer}>
            {thread.tags.map((tag) => (
              <Badge key={tag} variant="secondary" size="sm" style={styles.tag}>
                {tag}
              </Badge>
            ))}
          </View>
        </View>

        <Card style={styles.answerCard}>
          <CardHeader>
            <View style={styles.answerHeader}>
              <CardTitle style={styles.answerTitle}>Tutor Answer</CardTitle>
              <Ionicons name="checkmark-circle" size={16} color="#10b981" />
            </View>
            <CardDescription>
              Structured steps, final result, and optional voice explanation (with AI transcript)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <View style={styles.stepsContainer}>
              {thread.steps.map((step, index) => (
                <View key={index} style={styles.stepItem}>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>{index + 1}</Text>
                  </View>
                  <View style={styles.stepContent}>
                    <Text style={styles.stepTitle}>{step.title}:</Text>
                    <Text style={styles.stepText}>{step.text}</Text>
                  </View>
                </View>
              ))}
            </View>
            <Separator style={styles.separator} />
            <View style={styles.finalAnswerContainer}>
              <Text style={styles.finalAnswerLabel}>Final:</Text>
              <Text style={styles.finalAnswerText}>{thread.final}</Text>
              <Badge variant="secondary" style={styles.reactionsBadge}>
                <Ionicons name="thumbs-up" size={12} color="#6b7280" />
                <Text style={styles.reactionsText}>{thread.reactions}</Text>
              </Badge>
            </View>
          </CardContent>
          <CardFooter style={styles.actionsContainer}>
            <Button
              title="Record voice"
              onPress={onRecordVoice}
              variant="outline"
              size="sm"
              style={styles.actionButton}
            />
            <Button
              title="AI transcript"
              onPress={onGenerateTranscript}
              variant="outline"
              size="sm"
              style={styles.actionButton}
            />
            <Button
              title="Mark solved"
              onPress={onMarkSolved}
              variant="outline"
              size="sm"
              style={styles.actionButton}
            />
            <Button
              title="Pin"
              onPress={onPin}
              variant="outline"
              size="sm"
              style={styles.actionButton}
            />
          </CardFooter>
        </Card>

        {thread.attachments.length > 0 && (
          <Card style={styles.attachmentsCard}>
            <CardHeader>
              <CardTitle style={styles.attachmentsTitle}>Attachments</CardTitle>
            </CardHeader>
            <CardContent>
              {thread.attachments.map((attachment, index) => (
                <View key={index} style={styles.attachmentItem}>
                  <Ionicons
                    name={attachment.type === 'image' ? 'image' : 'document-text'}
                    size={16}
                    color="#6b7280"
                  />
                  <Text style={styles.attachmentName}>{attachment.name}</Text>
                </View>
              ))}
            </CardContent>
          </Card>
        )}
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 16,
  },
  authorText: {
    fontSize: 14,
    color: '#6b7280',
  },
  questionSection: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  tag: {
    marginRight: 4,
  },
  answerCard: {
    marginBottom: 16,
  },
  answerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  answerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  stepsContainer: {
    gap: 16,
  },
  stepItem: {
    flexDirection: 'row',
    gap: 12,
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#1f2937',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  stepText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  separator: {
    marginVertical: 16,
  },
  finalAnswerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  finalAnswerLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  finalAnswerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    flex: 1,
  },
  reactionsBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  reactionsText: {
    fontSize: 12,
    color: '#6b7280',
  },
  actionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  actionButton: {
    flex: 1,
    minWidth: 100,
  },
  attachmentsCard: {
    marginBottom: 16,
  },
  attachmentsTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  attachmentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 8,
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    marginBottom: 4,
  },
  attachmentName: {
    fontSize: 14,
    color: '#374151',
  },
});
