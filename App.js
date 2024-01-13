import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleInput = (text) => {
    setInput(text);
  };
  let handleSubmit = (e) => {
    if (input.trim() !== "") {
      setData((prev) => [...prev, input]);
      setInput("");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputBox}
          onChangeText={handleInput}
          value={input}
          placeholder="Type the goal.."
        />
        <Button onPress={handleSubmit} title="Add Goal" />
      </View>
      <View style={styles.goalContainer}>
        <Text>List of Goal</Text>
        <FlatList 
        data={data}
        renderItem={(itemData)=>{
          return (
            <View style={styles.viewTextContainer}>
              <Text style={styles.viewText}>{itemData.item}</Text>
            </View>
          )
        }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    marginHorizontal: 10,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 2,
    paddingBottom: 10,
    borderBottomColor: "#cccc",
    flex: 1,
  },
  inputBox: {
    borderBottomWidth: 1,
    height: 35,
    width: "70%",
    color: "#0000ff",
    padding: 10,
  },
  goalContainer: {
    flex: 5,
  },
  viewTextContainer: {
    backgroundColor: "#5e0acc",
    margin: 8,
    padding: 8,
    borderRadius: 6,
  },
  viewText: {
    color:"white",
    fontSize: 20,
    fontFamily: "",
  },
});
