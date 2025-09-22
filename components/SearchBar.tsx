import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, CardContent } from './ui/Card';
import { Input } from './ui/Input';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = "Search questions or tags…",
}) => {
  return (
    <Card style={styles.container}>
      <CardContent style={styles.content}>
        <View style={styles.inputContainer}>
          <Ionicons name="search" size={16} color="#9ca3af" style={styles.searchIcon} />
          <Input
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={styles.input}
            containerStyle={styles.inputWrapper}
          />
        </View>
      </CardContent>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
  content: {
    paddingTop: 0,
  },
  inputContainer: {
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    left: 12,
    top: 12,
    zIndex: 1,
  },
  inputWrapper: {
    marginVertical: 0,
  },
  input: {
    paddingLeft: 40,
    borderRadius: 12,
    fontSize: 16,
  },
});
