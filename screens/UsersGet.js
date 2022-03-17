import { TextInput, ScrollView, StyleSheet, Text, View,Image } from "react-native";
import React, { useEffect, useState } from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import axios from "axios";

const UsersGet = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [website, setWebsite] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    var config = {
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users/",
    };
    axios(config)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
        //console.log(users)
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <View style={styles.Top}>
        <View style={styles.headerofget}>
          <Text style={styles.innerofget}>Users</Text>
        </View>
        <View style={styles.bar}>
            <Image source={require("./../assets/search.png")} style={{height:30,width:30}} />
          <TextInput
            style={styles.input}
            onChangeText={(event) => {
              setSearchTerm(event);
            }}
            placeholder={"Search.."}
          />
        </View>
      </View>
      <ScrollView>
        {users
          .filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((props) => {
            return (
              <View style={styles.inlinehouse}>
                <Text>{props.name}</Text>
                <Text>{props.email}</Text>
                <Text>{props.phone}</Text>
                <Text style={styles.txt1}>{props.website}</Text>
              </View>
            );
          })}
      </ScrollView>
    </>
  );
};

export default UsersGet;

const styles = StyleSheet.create({
  Top: {
    display: "flex",
    flexDirection: "column",
    // minHeight: hp("100%"),
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
  },
  headerofget: {
    backgroundColor: "white",
    height: 50,
    width: wp("98%"),
    marginTop: 40,
    marginLeft: 2,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  innerofget: {
    fontSize: 25,
  },
  inlinehouse: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 2,
  },
  txt1: {
    marginBottom: 50,
    backgroundColor: "blue",
    color: "white",
  },
  okay: {
    width: 350,
    marginLeft: 3,
  },
  bar: {
    marginLeft: 3,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
    alignItems:'center',
    height:60,
  },
  input:{
      width:'85%'
  }
});
