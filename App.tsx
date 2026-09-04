import { useState } from "react";

import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [item, setItem] = useState("");
  const [shoppingList, setShoppingList] = useState<string[]>([]);

  const handleAdd = () => {
    if (item.trim() === "") {
      return;
    }

    setShoppingList([...shoppingList, item]);
    setItem("");
  };

  const handleClear = () => {
    setShoppingList([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={item}
        onChangeText={setItem}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={styles.buttonText}>CLEAR</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Shopping List</Text>

      <FlatList
        data={shoppingList}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 100,
  },
  input: {
    width: 150,
    height: 28,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 4,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 45,
  },
  button: {
    backgroundColor: "#2196f3",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  title: {
    color: "blue",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 5,
  },
  listItem: {
    fontSize: 16,
  },
});