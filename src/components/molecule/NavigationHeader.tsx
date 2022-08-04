import ArrowLeft from '@assets/icons/ArrowLeft';
import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';

import colors from '@themes/Colors';
import text from '@styles/text';
import Spacer from '@components/atom/Spacer';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootStackParamList from '@routers/router';

interface INavigationHeaderProps {
  title: string;
  color?: string;
}

const NavigationHeader: React.FC<INavigationHeaderProps> = ({
  title,
  color = colors.primary,
}) => {
  const styles = StyleSheet.create({
    container: {},
    textContainer: { alignSelf: 'center' },
    iconContainer: { position: 'absolute', top: 18, right: 0 },
    color: { color: color },
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigation = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Spacer />
      <View style={styles.textContainer}>
        <Text style={[text.sectionTitle, styles.color]}>{title}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Pressable onPress={handleNavigation}>
          <ArrowLeft color={color} width={40} />
        </Pressable>
      </View>
    </View>
  );
};

export default NavigationHeader;
