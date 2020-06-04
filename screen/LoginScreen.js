import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";


export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // fetch('http://192.168.100.10:8080/api/getAccount')
  // .then((response) => response.json())
  // .then((json) => {
  //   setAccounts(json)
  // })
  // .catch((error) => {
  //   alert(error)
  // })

  function validateFrom() {
    if (username == "") {
      alert("Please insert your username");
    } else if (password == "") {
      alert("Please insert your password! ");
    } else {
      fetch("http://192.168.7.105:8000/api/signin", {
        method: "post",
        body: new URLSearchParams({
          username: username,
          password: password,
        }).toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          navigation.navigate("Service", { user: json });
        })
        .catch((error) => {
          alert("Username or password is incorect");
        });
    }
  }
  return (
    <View style={style.container}>
      <Text style={style.textTile}>Login</Text>
      <Text style={style.titleInput}>Email: </Text>

      <TextInput
        placeholder="Anderson Berlus"
        style={style.input}
        value={username}
        keyboardType="default"
        onChangeText={(value) => setUsername(value)}
      />
      <Text style={style.titleInput}>Password: </Text>

      <TextInput
        keyboardType="default"
        secureTextEntry={true}
        style={style.input}
        placeholder="*******"
        value={password}
        onChangeText={(value) => setPassword(value)}
      />

      <TouchableOpacity style={style.btn} onPress={() => validateFrom()}>
        <Text style={style.txt}>Log in</Text>
      </TouchableOpacity>

      <View style={style.register}>
        <Text style={style.txthave}>Don't have an acount?</Text>

        <Text style={style.register} onPress={() => navigation.navigate("SignUp")}> Sign Up</Text>
      </View>

    </View>
  );
}

const style = StyleSheet.create({
  titleInput: {
    fontWeight: "bold",
    color: "#696969",
    marginLeft: 30,
    marginTop: 18,
    fontWeight: "bold",
    fontSize: 15,
  },
  register: {
    textAlign: "right",
    marginRight: 20,
    marginTop: 0,
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "flex-end",
    color: "black",
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    color: "white",
    justifyContent: "center",
  },
  btn: {
    marginTop: 50,
    borderColor: "#0396FF",
    backgroundColor: "#0396FF",
    margin: 18,
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
    borderRadius: 10,
    height: 55,
    textAlign: "center",
    borderWidth: 1,
  },
  input: {
    borderColor: "#696969",
    height: 42,
    width: "85%",
    marginLeft: 30,
    borderBottomWidth: 1,
  },
  bg: {
    width: "100%",
    height: "100%",
  },
  button: {
    alignItems: "center",
    fontSize: 30,
    padding: 10,
    color: "blue",
    margin: 20,
  },
  textTile: {
    fontSize: 40,
    marginLeft: 30,
    marginBottom: 75,
    color: "black",
    alignItems: "flex-end",
    marginTop: 100,
  },
  txthave: {
    textAlign: "right",
    marginRight: 20,
    marginTop: 0,
    fontSize: 15,
    alignItems: "flex-end",
    color: "black",
  },
});
