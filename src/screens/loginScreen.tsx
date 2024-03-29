import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useInput from '../hook/useInput';
import InputField from '../components/InputField';
import Button from '../components/Button';

export interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const [username, handleUsernameChange] = useInput<string>('');
  const [password, handlePasswordChange] = useInput<string>('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>登入</Text>
      <InputField
        placeholder="用戶名"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <InputField
        placeholder="密碼"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
      <Button title="登入" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default LoginScreen;