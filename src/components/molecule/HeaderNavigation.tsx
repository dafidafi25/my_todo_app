import ArrowLeft from '@assets/icons/ArrowLeft';
import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import colors from '@themes/Colors';
import text from '@styles/text';

interface IHeaderNavigationProps {
  color?: 'white' | 'green';
  title: string;
}

const HeaderNavigation: React.FC<IHeaderNavigationProps> = ({
  color = 'green',
  title,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
        <Text
          style={[text.sectionTitle, color !== 'green' && styles.textWhite]}
        >
          {title}
        </Text>
      </View>

      <View style={styles.icon}>
        <ArrowLeft
          color={color === 'green' ? colors.primary : colors.white}
          width={39}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { top: '3%' },
  textWhite: { color: colors.white },
  icon: { position: 'absolute', top: 9, right: 15 },
});

export default HeaderNavigation;
