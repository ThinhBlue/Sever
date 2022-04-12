import { StyleSheet, Text, View, TextInput, Pressable, ToastAndroid } from 'react-native'
import React, { useState, useContext }from 'react'
import { UserContext } from '../UserContext'

const Login = (props) => {
  const { navigation } = props;
  const { onRegister } = useContext(UserContext);

  const [email, setEmail] = useState('thinhblue@gmail.com');
  const [password, setPassword] = useState('1');
  const [cornfimpassword, setcornfimpassword] = useState('1');

  const login = async () => {
    if (!email || !password || email.trim().length == 0 || password.trim().length == 0 ||
    !cornfimpassword || cornfimpassword.trim().length==0) {
      ToastAndroid.show('Vui long nhap day du thong tin', ToastAndroid.CENTER);
      return;
    }
    if (password, cornfimpassword){
        ToastAndroid.show('mat khau khnog giong nhau', ToastAndroid.CENTER);
    }
    const res = await onRegister(email, password, cornfimpassword);
    if (res == false) {
      ToastAndroid.show('Dang ky thanh cong, dang chuyen huong', ToastAndroid.CENTER);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput 
        value={email}
        onChangeText={setEmail}
        placeholder='Email'
        style={styles.textInput}
      />
      <TextInput 
        value={password}
        onChangeText={setPassword}
        placeholder='Password'
        style={styles.textInput}
        secureTextEntry
      />
      <Pressable
        style={styles.button}
        onPress={login}
      >
        <Text style={styles.buttonLabel}>Login</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonLabel}>Login</Text>
      </Pressable>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  buttonLabel: {
    color: 'yellow',
    fontSize: 20,
    fontWeight: '700',
    justifyContent: 'center',
    marginVertical: 8,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'black',
    borderRadius: 8,
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 8,
    padding: 4
  },
  container: {
    flex: 1,
    padding: 32
  }
})
