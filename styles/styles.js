import * as React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 65,
  },
  containerHome: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOpen: {
    backgroundColor: "#07a8ff",
  },
  buttonValidate: {
    backgroundColor: "#07a8ff",
  },
  buttonClose: {
    backgroundColor: "orange",
    bottom: 250,
    left: 150,
  },
  signUpBtn: {
    left: 100,
    bottom: 5,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: 400,
  },
  textStyle: {
    color: "whitesmoke",
  },
  textSignUpBtn: {
    color: "#07a8ff",
  },
  modalText: {
    textAlign: "center",
    color: "whitesmoke",
    fontWeight: "bold",
    fontSize: 20,
  },
  modalTitle: {
    textAlign: "center",
    color: "whitesmoke",
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 30,
  },
  inputModal: {
    width: 300,
    height: 40,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    backgroundColor: "whitesmoke",
  },
});
export default styles;
