import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../Styles/Colors";

const CustomModal = ({
  modalVisible,
  setModalVisible,
  handleEdit,
  todoSelected,
  handleDelete,
}) => {
  const [editingItem, setEditingItem] = useState("");
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.closeBtn}
          >
            <Text style={styles.text}>X</Text>
          </TouchableOpacity>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setEditingItem}
              defaultValue={todoSelected.todo}
            />
            <View style={styles.btnsContainer}>
              <TouchableOpacity
                onPress={() => {
                  handleEdit(editingItem);
                  setModalVisible(!modalVisible);
                }}
                style={{
                  backgroundColor: "#FBB02D",
                  padding: 8,
                  marginRight: 5,
                }}
              >
                <Text style={{ color: "white" }}>Editar Juego</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleDelete}
                style={{ backgroundColor: "red", padding: 8 }}
              >
                <Text style={{ color: "white" }}>Eliminar Juego</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: 300,
    backgroundColor: colors.white,
  },
  closeBtn: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: "red",
    borderRadius: 50,
  },
  text: {
    color: colors.white,
  },
  input: {
    borderRadius: 8,
    borderWidth: 2,
    width: 200,
    marginRight: 10,
    marginVertical: 20,
    paddingHorizontal: 8,
    fontSize: 18,
    height: 35,
    backgroundColor: colors.gray,
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
});
