import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [add, setAdd] = useState("");

  function handleSubmit() {
    if (username == "") {
      alert("Please insert your username");
    } else if (password == "") {
      alert("Please insert your password! ");
    } else if (fullname == "") {
      alert("Please insert your name! ");
    // } else if (phone == "") {
    //   alert("Please insert your phone! ");
    // } else if (add == "") {
    //   alert("Please insert your add! ");
    } else {
      fetch("http://192.168.7.105:8000/api/signup", {
        method: "post",
        body: new URLSearchParams({
          username: username,
          password: password,
          fullname: fullname,
          phone: phone,
          add: add,
        }).toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => response.text())
        .then((json) => {
          navigation.navigate("Login", { user: json });
          alert("Sign up successfully");
        })
        .catch((error) => {
          alert(error);
        });
    }
  }

  return (
    <View style={style.container}>
      
        <View style={style.viewAddBook}>
          <Text style={style.textTile}>Signup</Text>

          <Text style={style.titleInput}>Name: </Text>

          <TextInput
            value={fullname}
            keyboardType="default"
            placeholder="Obamaa"
            style={style.input}
            keyboardType="default"
            onChangeText={(value) => setFullName(value)}
          />

          <Text style={style.titleInput}>Email: </Text>

          <TextInput
            value={username}
            placeholder="Admin"
            style={style.input}
            keyboardType="default"
            onChangeText={(value) => setUsername(value)}
          />
          <Text style={style.titleInput}>Password: </Text>

          <TextInput
            value={password}
            placeholder="*********"
            style={style.input}
            secureTextEntry={true}
            keyboardType="default"
            onChangeText={(value) => setPassword(value)}
          />

          {/* 
          <Text style={style.titleInput}>Phone: </Text>

          <TextInput
            value={phone}
            style={style.input}
            keyboardType="numeric"
            placeholder="0973388388"
            onChangeText={value => setPhone(value)}

          />
          <Text style={style.titleInput}>Address: </Text>

          <TextInput
            value={add}
            style={style.input}
            keyboardType="default"
            placeholder="Ha Noi"
            onChangeText={value => setAdd(value)}
          /> */}

          <View style={style.viewBtn}>
            <TouchableOpacity
              style={style.btnAddBookModal}
              onPress={() => handleSubmit()}
            >
              <Text numberOfLines={2} style={style.txtGoBack}>
                Sign Up
              </Text>
            </TouchableOpacity>

          </View>
          
        </View>

    </View>
  );
}

const style = StyleSheet.create({
  titleInput: {
    marginLeft: 30,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#473051",
    fontWeight: "bold",
    fontSize: 15,
  },
  viewBg: {
    width: "100%",
    height: "100%",
  },
  btnAddBookModal: {
    justifyContent: "center",
    height: 55,
    width: "90%",
    margin: 18,
    borderWidth: 1,
    marginTop: 50,
    borderRadius: 10,
    borderColor: "#0396FF",
    backgroundColor: "#0396FF",
  },
  viewBtn: {
    justifyContent: "center",
    flexDirection: "row",
  },
  btnSwitch: {
    margin: 18,
  },
  input: {
    borderColor: "#696969",
    height: 42,
    width: "85%",
    marginLeft: 30,
    borderBottomWidth: 1,
  },
  textTile: {
    marginTop: 400,
    marginLeft: 30,
    fontSize: 40,
    color: "black",
    marginBottom: 70,
    color: "black",
    alignItems: "flex-end",
  },
  viewAddBook: {
    margin: 16,
    flex: 1,
    marginTop: 16,
    justifyContent: "center",
  },
  txtGoBack: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
  },
  btnGoBack: {
    justifyContent: "center",
    height: 50,
    width: "45%",
    margin: 18,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#ea526f",
    backgroundColor: "#ea526f",
  },
  txt: {
    fontWeight: "900",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  btnAdd: {
    marginTop: 8,
    width: 150,
    height: 30,
    alignItems: "center",
    borderColor: "#FF847C",
    backgroundColor: "#FF847C",
    color: "#FF847C",
    borderRadius: 30,
    borderWidth: 1,
  },
  ava: {
    marginTop: 32,
    borderWidth: 5,
    borderColor: "white",
    width: 120,
    height: 120,
    borderRadius: 70,
  },
  txtBoxName: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  boxName: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    height: 200,
    margin: 8,
  },
  imageBackground: {
    alignItems: "center",
    textAlign: "center",
    marginTop: 16,
    width: "100%",
    height: 150,
  },
});
