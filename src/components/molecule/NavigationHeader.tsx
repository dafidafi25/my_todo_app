import ArrowLeft from '@assets/icons/ArrowLeft';
import React from 'react';
import { View, StyleSheet, Text, Pressable, SafeAreaView } from 'react-native';

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
    container: { flexDirection: 'row' },
    textContainer: { justifyContent: 'center' },
    iconContainer: {},
    color: { color: color },
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigation = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Spacer spacing={2} />
      <View style={styles.textContainer}>
        <Text style={[text.sectionTitle, styles.color]}>{title}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Pressable onPress={handleNavigation}>
          <ArrowLeft color={color} width={40} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default NavigationHeader;
