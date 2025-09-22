import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  style,
  textStyle,
}) => {
  const badgeStyle = [
    styles.badge,
    styles[variant],
    styles[size],
    style,
  ];

  const textStyleCombined = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    textStyle,
  ];

  return (
    <View style={badgeStyle}>
      <Text style={textStyleCombined}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  default: {
    backgroundColor: '#1f2937',
  },
  secondary: {
    backgroundColor: '#f3f4f6',
  },
  success: {
    backgroundColor: '#d1fae5',
  },
  warning: {
    backgroundColor: '#fef3c7',
  },
  error: {
    backgroundColor: '#fee2e2',
  },
  sm: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  md: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  text: {
    fontWeight: '500',
  },
  defaultText: {
    color: '#ffffff',
  },
  secondaryText: {
    color: '#374151',
  },
  successText: {
    color: '#065f46',
  },
  warningText: {
    color: '#92400e',
  },
  errorText: {
    color: '#991b1b',
  },
  smText: {
    fontSize: 10,
  },
  mdText: {
    fontSize: 12,
  },
});
