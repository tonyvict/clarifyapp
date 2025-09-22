import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { ChannelList } from '../components/ChannelList';
import { SearchBar } from '../components/SearchBar';
import { ThreadCard } from '../components/ThreadCard';
import { ThreadRow } from '../components/ThreadRow';
import { ThreadDetailModal } from '../components/ThreadDetailModal';
import { ChannelSelectionScreen } from './ChannelSelectionScreen';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Ionicons } from '@expo/vector-icons';
import { CHANNELS, THREADS, THREAD_DETAILS } from '../data/mockData';
import { Channel, ThreadDetail } from '../types';

export default function HomeScreen() {
  // State
  const [activeChannel, setActiveChannel] = useState<Channel>(CHANNELS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedThread, setSelectedThread] = useState<ThreadDetail | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showChannelSelection, setShowChannelSelection] = useState(false);

  // Get current channel threads
  const threads = THREADS[activeChannel.id] || { pinned: [], recent: [] };

  // Filter recent threads based on search query
  const filteredRecent = useMemo(() => {
    if (!searchQuery) return threads.recent;
    return threads.recent.filter(
      (thread) =>
        thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        thread.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, threads.recent]);

  // Handlers
  const handleChannelSelect = (channel: Channel) => {
    setActiveChannel(channel);
    setSearchQuery('');
    setShowChannelSelection(false);
  };

  const handleThreadPress = (threadId: string) => {
    const threadDetail = THREAD_DETAILS[threadId];
    if (threadDetail) {
      setSelectedThread(threadDetail);
      setIsModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedThread(null);
  };

  const handlePin = () => {
    console.log('Pin thread');
  };

  const handleMarkSolved = () => {
    console.log('Mark as solved');
  };

  const handleRecordVoice = () => {
    console.log('Record voice');
  };

  const handleGenerateTranscript = () => {
    console.log('Generate AI transcript');
  };

  const handleOpenSampleThread = () => {
    const sampleThread = THREAD_DETAILS['p1'];
    setSelectedThread(sampleThread);
    setIsModalVisible(true);
  };

  const handleShowChannelSelection = () => {
    setShowChannelSelection(true);
  };

  const handleBackFromChannelSelection = () => {
    setShowChannelSelection(false);
  };

  if (showChannelSelection) {
    return (
      <ChannelSelectionScreen
        channels={CHANNELS}
        activeChannel={activeChannel}
        onChannelSelect={handleChannelSelect}
        onBack={handleBackFromChannelSelection}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>T</Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.appTitle}>Tutor Q&A</Text>
              <Text style={styles.appSubtitle}>Tutor view</Text>
            </View>
          </View>
          <View style={styles.headerButtons}>
            <Button
              title="Sample"
              onPress={handleOpenSampleThread}
              size="sm"
              style={styles.sampleButton}
            />
          </View>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Channel Selection */}
        <View style={styles.section}>
          <TouchableOpacity onPress={handleShowChannelSelection}>
            <Card style={styles.currentChannelCard}>
              <CardContent>
                <View style={styles.currentChannelContent}>
                  <View style={styles.currentChannelInfo}>
                    <View style={styles.currentChannelIcon}>
                      <Text style={styles.currentChannelIconText}>
                        {activeChannel.subject.charAt(0).toUpperCase()}
                      </Text>
                    </View>
                    <View style={styles.currentChannelDetails}>
                      <Text style={styles.currentChannelName}>{activeChannel.name}</Text>
                      <Text style={styles.currentChannelSubject}>{activeChannel.subject} • {activeChannel.students} students</Text>
                    </View>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#6b7280" />
                </View>
              </CardContent>
            </Card>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.section}>
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Pinned Threads */}
        <View style={styles.section}>
          <Card style={styles.sectionCard}>
            <CardHeader>
              <CardTitle style={styles.sectionTitle}>
                <Ionicons name="bookmark" size={16} color="#3b82f6" />
                <Text style={styles.sectionTitleText}> Pinned by you</Text>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {threads.pinned.length === 0 ? (
                <Text style={styles.emptyText}>No pinned threads yet.</Text>
              ) : (
                <View style={styles.threadsList}>
                  {threads.pinned.map((thread) => (
                    <ThreadCard
                      key={thread.id}
                      thread={thread}
                      onPress={() => handleThreadPress(thread.id)}
                    />
                  ))}
                </View>
              )}
            </CardContent>
          </Card>
        </View>

        {/* Recent Threads */}
        <View style={styles.section}>
          <Card style={styles.sectionCard}>
            <CardHeader>
              <CardTitle style={styles.sectionTitle}>Recent</CardTitle>
            </CardHeader>
            <CardContent>
              {filteredRecent.length === 0 ? (
                <Text style={styles.emptyText}>
                  {searchQuery ? 'No results found.' : 'No recent threads.'}
                </Text>
              ) : (
                <View style={styles.threadsList}>
                  {filteredRecent.map((thread) => (
                    <ThreadRow
                      key={thread.id}
                      thread={thread}
                      onPress={() => handleThreadPress(thread.id)}
                    />
                  ))}
                </View>
              )}
            </CardContent>
          </Card>
        </View>
      </ScrollView>

      {/* Thread Detail Modal */}
      <ThreadDetailModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        thread={selectedThread}
        onPin={handlePin}
        onMarkSolved={handleMarkSolved}
        onRecordVoice={handleRecordVoice}
        onGenerateTranscript={handleGenerateTranscript}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1f2937',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  logoText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  titleContainer: {
    flex: 1,
  },
  appTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  appSubtitle: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  content: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionCard: {
    marginBottom: 0,
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionTitleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  emptyText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    paddingVertical: 20,
  },
  threadsList: {
    gap: 8,
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  sampleButton: {
    backgroundColor: '#3b82f6',
  },
  currentChannelCard: {
    marginBottom: 0,
  },
  currentChannelContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  currentChannelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  currentChannelIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  currentChannelIconText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  currentChannelDetails: {
    flex: 1,
  },
  currentChannelName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  currentChannelSubject: {
    fontSize: 14,
    color: '#6b7280',
  },
});
