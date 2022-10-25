import { View, Text, StyleSheet, Image } from "react-native";

function Post(props) {
  const imageName = props.content.image;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.content.title}</Text>
      {imageName ? (
        <Image
          style={styles.image}
          source={{
            uri: `http://192.168.1.19:3005/postimages/${imageName}`,
          }}
        ></Image>
      ) : (
        <View></View>
      )}
      <Text style={styles.text}>{props.content.message}</Text>
      <Text style={styles.text}>{props.content.pseudo}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 65,
  },
  text: {
    color: "whitesmoke",
    fontWeight: "bold",
    fontSize: 20,
  },
  image: {
    width: 380,
    height: 200,
  },
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
export default Post;
