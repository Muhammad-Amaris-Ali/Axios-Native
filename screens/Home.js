import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React,{useState} from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DatePicker from "react-native-date-picker";

const Home = (props) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <ScrollView>
      <View style={styles.homemain}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => props.navigation.navigate("Get")}
        >
          <Text style={{ color: "white" }}>Add Profiles</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn2}
          onPress={() => props.navigation.navigate("Post")}
        >
          <Text style={{ color: "white" }}>View Profiles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => setOpen(true)}
        >
          <Text style={{ color: "white" }}>Open</Text>
        </TouchableOpacity>

        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homemain: {
    display: "flex",
    flexDirection: "column",
    minHeight: hp("100%"),
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "red",
    color: "white",
    borderRadius: 10,
    width: 140,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  btn2: {
    backgroundColor: "blue",
    color: "white",
    borderRadius: 10,
    width: 140,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});
