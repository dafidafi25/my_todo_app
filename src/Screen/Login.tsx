import Button from '@components/atom/Button';
import Spacer from '@components/atom/Spacer';
import TrainingTextInput from '@components/molecule/TrainingTextInput';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import RootStackParamList from '@routers/router';
import text from '@styles/text';
import colors from '@themes/Colors';
import axios from 'axios';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface ILoginProps {}

// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }

const Login: React.FC<ILoginProps> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const AuthCheck = async () => {
    const baseUrl = 'https://reqres.in';
    try {
      await axios.post(`${baseUrl}/api/login`, {
        email: username,
        password: password,
      });

      navigation.navigate('Home');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[text.header, styles.text]}>Login Screen</Text>
      <Spacer spacing={50} />
      <TrainingTextInput
        label="Username"
        fullwidth
        value={username}
        onChangeText={(newText) => setUsername(newText)}
      />
      <Spacer />
      <TrainingTextInput
        label="Password"
        fullwidth
        type="password"
        value={password}
        onChangeText={(newText) => setPassword(newText)}
      />
      <Spacer spacing={50} />
      <Button
        text="Login"
        fullwidth
        variant="secondary"
        rounded={false}
        onPress={AuthCheck}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 36,
  },
  text: { color: colors.white },
});

export default Login;
