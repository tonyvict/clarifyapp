import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import { ChannelList } from '../components/ChannelList';
import { SearchBar } from '../components/SearchBar';
import { ThreadCard } from '../components/ThreadCard';
import { ThreadRow } from '../components/ThreadRow';
import { ThreadDetailModal } from '../components/ThreadDetailModal';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Ionicons } from '@expo/vector-icons';
import { CHANNELS, THREADS, THREAD_DETAILS } from '../data/mockData';
import { Channel, ThreadDetail } from '../types';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  // State
  const [activeChannel, setActiveChannel] = useState<Channel>(CHANNELS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedThread, setSelectedThread] = useState<ThreadDetail | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
          <Button
            title="Sample"
            onPress={handleOpenSampleThread}
            size="sm"
          />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Channel Selection */}
        <View style={styles.section}>
          <ChannelList
            channels={CHANNELS}
            activeChannel={activeChannel}
            onChannelSelect={handleChannelSelect}
          />
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
});
