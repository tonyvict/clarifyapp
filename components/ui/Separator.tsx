import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface SeparatorProps {
  style?: ViewStyle;
  vertical?: boolean;
}

export const Separator: React.FC<SeparatorProps> = ({ style, vertical = false }) => {
  return (
    <View
      style={[
        styles.separator,
        vertical ? styles.vertical : styles.horizontal,
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#e5e7eb',
  },
  horizontal: {
    height: 1,
    width: '100%',
  },
  vertical: {
    width: 1,
    height: '100%',
  },
});
