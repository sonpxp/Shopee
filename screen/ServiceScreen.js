import React, { useState } from 'react';
import { YellowBox } from 'react-native';
import { StyleSheet, Text, View, ProgressBarAndroid, FlatList, TouchableOpacity, ImageBackground, Image,ScrollView } from 'react-native';
YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);


export default function ServiceScreen({ navigation, route }) {
  const { user } = route.params;
  const [services, setService] = useState(null);
  fetch('http://192.168.7.105:8000/api/getAllService')
    .then((response) => response.json())
    .then((json) => {
      setService(json);
    })
    .catch((error) => {
      alert(error)
    })


  if (services != null) {
    return (
      <ScrollView>
      <View>
          {/* <ImageBackground
            imageStyle={{ borderRadius: 30 }}
            style={style.boxName}
            source={{
              uri:
                "https://images.unsplash.com/photo-1530906622963-8a60586a49c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            }}
          >
            <Image
              style={style.ava}
              source={{
                uri:
                  "https://www.haig-brown.co.uk/cmsAdmin/uploads/unknown-5.jpeg"
              }}
            />
            <Text style={style.txtBoxName}>{user.fullname}</Text>

          </ImageBackground> */}

          <View style={style.container}>
            
            <FlatList
              style={{flex:1}}
              data={services}
          
              renderItem={({ item }) => (
                <View style={style.backgrounds}>
                  <View style={style.line}>
                    <View style={style.row}>
                      <View style={style.images}>
                        <Image style={style.images} source={{ uri: 'http://192.168.7.105:8000/' + item.image.split('/')[1] }} />
                      </View>

                      <View style={style.info}>
                        <Text style={style.name}>{item.service_name}</Text>
                        <Text style={style.txtprice} >💸 {item.price}</Text>
                        <Text style={style.txtprice} >⏰ {item.price}</Text>

                        <View style={style.row2}>
                          <TouchableOpacity
                            style={style.btnDetail}
                            onPress = {() => navigation.navigate('Cart',{services:item})}
                          >
                            <Text style={style.txt}>🛒 Buy</Text>
                          </TouchableOpacity>

                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item._id}
            />
          </View>
      </View>
      </ScrollView>
  

    );
  } else {
    return (
      <View style={style.container}>
        <ProgressBarAndroid></ProgressBarAndroid>
      </View>
    );
  }
}

const style = StyleSheet.create({
 
  imageBackground: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 16,
    width: "100%",
    height: 150,
    backgroundColor: 'black',
    padding: 24
  },
  icon: {
    height: 50,
    width: 50
  },
  txtprice: {
    color: '#393e46',
    marginTop: 2,
    fontSize: 18,
  },
  btnGoBack: {
    marginBottom: 18,
    justifyContent: "center",
    height: 60,
    margin: 18,
    borderWidth: 1,
    borderRadius: 30,
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
    height: 250
  },
  line: {
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    borderRadius: 10,
    borderColor: "white",
    backgroundColor: "white",
    marginTop: 24,
    borderWidth: 1,
    padding: 18,
    width: 380,
    flexDirection: "row"
  },

  btnDetail: {
    width: 100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderColor: "#00adb5",
    backgroundColor: "#00adb5",
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
    marginTop: 12,
  },
  name: {
    color: "#222831",
    fontWeight: "bold",
    fontSize: 24,
  },
  images: {
    height: 100,
    width: 100,
    marginTop: 8,
    borderRadius: 5
  },
  info: {
    marginLeft: 16
  },
  ava: {
    marginBottom: 16,
    borderWidth: 5,
    borderColor: "white",
    width: 120,
    height: 120,
    borderRadius: 70
  },
  titleInput: {
    fontWeight: "bold",
    color: "#473051",
    fontWeight: "bold",
    fontSize: 15
  },
  viewBg: {
    width: '100%',
    height: '100%',
  },
  btnAddBookModal: {
    justifyContent: "center",
    height: 50,
    width: "45%",
    margin: 18,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#36abb5",
    backgroundColor: "#36abb5"
  },
  viewBtn: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnSwitch: {
    margin: 18,
  },
  input: {
    margin: 18,
    color: "black",
    marginTop: 16,
    height: 60,
    fontSize: 25,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#fcf5e9',
    borderColor: "#fdfaf4",
    paddingHorizontal: 20
  },
  textTile: {
    marginBottom: 32,
    fontWeight: 'bold',
    fontSize: 35,
    color: "black",
    textAlign: "center",
  },
  viewAddBook: {
    margin: 16,
    flex: 1,
    marginTop: 16,
    justifyContent: 'center',
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
    height: 50,
    width: "45%",
    margin: 18,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#ea526f",
    backgroundColor: "#ea526f"
  },
  txt: {
    justifyContent:'center',
    alignItems:'center',
    color: 'white',
    fontSize: 20,
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
    borderWidth: 1
  },
  txtBoxName: {
    color: "#eeeeee",
    fontSize: 30,
    fontWeight: "bold"
  },
  boxName: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    margin: 8
  },
  imageBackground: {
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    height: 150
  }

});
