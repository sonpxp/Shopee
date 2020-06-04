import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function CartScreen({ route }) {

  const { services } = route.params
  return (
    <View style={style.container}>
      <View style={style.viewModal}>
        <View>
          <ImageBackground
            style={style.imageModal}
            source={{
              uri:
                "http://127.0.0.1:8000/" + services.image.split('/')[1]
            }}
          >
            <Text style={style.txtCheckout}>
              Checkout Service
            </Text>
          </ImageBackground>

          <Image
            style={style.total}
            source={{ uri: 'https://i.imgur.com/xbjdYkZ.png' }}
          />

          <View style={style.about}>
            <View style={style.iconView}>
              <Image
                style={style.icon}
                source={{
                  uri: "https://img.icons8.com/dusk/50/000000/elective.png"
                }}
              />

              <Text style={style.txtname}>
                Service name: {services.service_name}
              </Text>

              <Image
                style={style.icon}
                source={{
                  uri: "https://img.icons8.com/bubbles/50/000000/money.png"
                }}
              />
              <Text style={style.txtname}>
                Price: {services.price}
              </Text>
            </View>
          </View>
          <View
            style={style.btnGoBack}
          >
            <Text style={style.txtGoBack}>
            Total: {services.price}
            </Text>
          </View>
        </View>

      </View>
    </View>

  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  txtCheckout: {
    color: '#eeeeee',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 260,
    marginLeft: 160,
  },
  txtname: {
    color: '#222831',
    marginTop: 8,
    fontSize: 20,
  },
  about: {
    height: 250,
    margin: 16,
    marginTop: 100,
    borderRadius: 20,
    backgroundColor: '#e5e5e5',
  },
  total: {
    marginTop: 240,
    position: 'absolute',
    marginLeft: 32,
    width: 120,
    height: 120,
  },
  iconView: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginTop: 24,
    height: 50,
    width: 50
  },
  txtCate: {
    marginTop: 8,
    fontSize: 15
  },
  txtGoBack: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
    textAlign: "center",
    alignItems: "center"
  },
  btnGoBack: {
    justifyContent: "center",
    marginTop: 16,
    height: 60,
    width: '100%',
    padding: 16,
    borderWidth: 1,
    borderColor: "#ea526f",
    backgroundColor: "#ea526f"
  },
  underCover: {
    alignItems: "center",
    height: "35%",
    borderRadius: 30,
    margin: 16,
    marginTop: 86,
    backgroundColor: "#e4e4e4"
  },
  txtUnderCover: {
    alignItems: "center",
    marginTop: 16,
    fontSize: 15,
    fontWeight: "bold"
  },
  txtCover: {
    lineHeight: 50,
    fontWeight: "bold",
    marginLeft: 9,
    fontSize: 22,
    color: "white",
    marginTop: 190
  },
  bookCover: {
    borderRadius: 20,
    borderWidth: 1,
    marginLeft: 18,
    marginTop: 160,
    height: 150,
    width: 100
  },
  bookCoverView: {
    flexDirection: "row",
    borderRadius: 20
  },

  viewModal: {
    flex: 1
  },
  imageModal: {
    width: "100%",
    height: 300,
  },
  line: {
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    borderRadius: 30,
    borderColor: "white",
    backgroundColor: "#FFFFFF",
    marginTop: 24,
    borderWidth: 1,
    padding: 18,
    width: 380,
    flexDirection: "row"
  },
  txt: {
    fontWeight: "bold",
    color: "#ffff"
  },
  btnDetail: {
    width: 54,
    alignItems: "center",
    borderColor: "#36abb5",
    backgroundColor: "#36abb5",
    color: "white",
    borderRadius: 30,
    borderWidth: 1
  },
  btnEdit: {
    marginLeft: 16,
    width: 54,
    alignItems: "center",
    borderColor: "#99B898",
    backgroundColor: "#99B898",
    color: "white",
    borderRadius: 30,
    borderWidth: 1
  },
  btnDelete: {
    width: 54,
    alignItems: "center",
    borderColor: "#E84A5F",
    backgroundColor: "#E84A5F",
    color: "white",
    borderRadius: 30,
    borderWidth: 1,
    marginLeft: 16,
  },
  row2: {
    color: "white",
    alignItems: "center",
    marginTop: 12,
    flexDirection: "row"
  },
  name: {
    color: "#ea526f",
    fontWeight: "bold"
  },
  images: {
    height: 100,
    width: 100,
    borderRadius: 20
  },
  info: {
    marginLeft: 16
  }
});