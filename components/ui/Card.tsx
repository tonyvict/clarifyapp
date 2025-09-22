import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  style?: any;
  onPress?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, style, onPress }) => {
  const CardComponent = onPress ? TouchableOpacity : View;
  
  return (
    <CardComponent style={[styles.card, style]} onPress={onPress}>
      {children}
    </CardComponent>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  style?: any;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, style }) => (
  <View style={[styles.cardHeader, style]}>
    {children}
  </View>
);

interface CardContentProps {
  children: React.ReactNode;
  style?: any;
}

export const CardContent: React.FC<CardContentProps> = ({ children, style }) => (
  <View style={[styles.cardContent, style]}>
    {children}
  </View>
);

interface CardFooterProps {
  children: React.ReactNode;
  style?: any;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, style }) => (
  <View style={[styles.cardFooter, style]}>
    {children}
  </View>
);

interface CardTitleProps {
  children: React.ReactNode;
  style?: any;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, style }) => (
  <Text style={[styles.cardTitle, style]}>
    {children}
  </Text>
);

interface CardDescriptionProps {
  children: React.ReactNode;
  style?: any;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, style }) => (
  <Text style={[styles.cardDescription, style]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 4,
  },
  cardHeader: {
    padding: 16,
    paddingBottom: 8,
  },
  cardContent: {
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  cardFooter: {
    padding: 16,
    paddingTop: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  cardDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
});
