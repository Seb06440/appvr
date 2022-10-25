import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import * as React from "react";
import { userContext } from "../context/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PublicProfil from "./PublicProfil";
import Comment from "./Comment";
function Post(props) {
  const { pseudo } = React.useContext(userContext);

  const [select, setSelect] = React.useState(false);
  const [select2, setSelect2] = React.useState(false);
  const [select3, setSelect3] = React.useState(false);
  const [postComment, setPostComment] = React.useState("");

  const [commentList, setCommentList] = React.useState([]);
  const [likeList, setLikeList] = React.useState([]);

  const imageName = props.content.image;
  React.useEffect(() => {
    setCommentList(props.content.commentaire);
    setLikeList(props.content.like);
  }, [props.content.commentaire, props.content.like]);

  function click() {
    setSelect(true);
  }
  function click2() {
    setSelect2(true);
  }
  function click3() {
    setSelect3(true);
  }
  function clickOff() {
    setSelect(false);
  }
  function clickOff2() {
    setSelect2(false);
  }
  function clickOff3() {
    setSelect3(false);
  }
  async function clickLike() {
    const token = await AsyncStorage.getItem("Token");
    const url = "http://192.168.1.19:3005/posts/postlike";

    const userLike = {
      pseudo: pseudo,
      postId: props.content._id,
    };
    console.log(props.content._id);
    const data = JSON.stringify(userLike);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "bearer " + token,
        "Content-Type": "application/json",
      },
      body: data,
    });
    let result = await response.json();
    const res = JSON.stringify(result);
    if (res !== '{"message":"Echec"}') {
      console.log("like publié");
      const newLikeListe = likeList.concat({
        pseudo: pseudo,
      });
      setLikeList(newLikeListe);

      // navigate("/");
    } else {
      console.log("Impossible d'envoyer un like");
    }
  }
  async function handleSubmit() {
    const token = await AsyncStorage.getItem("Token");

    const url = "http://192.168.1.19:3005/posts/postcom";

    const userLike = {
      pseudo: pseudo,
      postId: props.content._id,
      message: postComment,
    };
    console.log(props.content._id);
    const data = JSON.stringify(userLike);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "bearer " + token,
        "Content-Type": "application/json",
      },
      body: data,
    });
    let result = await response.json();
    const res = JSON.stringify(result);
    if (res !== '{"message":"Echec"}') {
      console.log("like publié");
      const newCommentListe = commentList.concat({
        pseudo: pseudo,
        message: postComment,
      });
      setCommentList(newCommentListe);
      setSelect(false);

      // navigate("/");
    } else {
      console.log("Impossible d'envoyer un commentaire");
    }
  }
  return (
    <View style={styles.container}>
      {select3 ? (
        <View>
          <PublicProfil content={props.content.pseudo} />
          <Pressable
            //style={styles.signUpBtn}
            title="Pas encore inscrit??"
            onPress={() => clickOff3()}
          >
            <Image
              style={styles.LikeLogo}
              source={require("C:/Users/seb 2/Desktop/Formation Javascript Fullstack/reac native/appvr/assets/image/exitlogo.png")}
            ></Image>
          </Pressable>
        </View>
      ) : (
        <View>
          {select ? (
            <View>
              <TextInput
                style={styles.inputModal}
                onChangeText={setPostComment}
                value={postComment}
                placeholder="password"
                color="#07a8ff"
                multiline="true"
              />
              <Pressable
                //style={styles.signUpBtn}
                title="Pas encore inscrit??"
                onPress={() => handleSubmit()}
              >
                <Text style={styles.text}>Envoyer Com</Text>
              </Pressable>
              <Pressable
                //style={styles.signUpBtn}
                title="Pas encore inscrit??"
                onPress={() => clickOff()}
              >
                <Image
                  style={styles.LikeLogo}
                  source={require("C:/Users/seb 2/Desktop/Formation Javascript Fullstack/reac native/appvr/assets/image/exitlogo.png")}
                ></Image>
              </Pressable>
            </View>
          ) : (
            <View>
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
              <Pressable
                //style={styles.signUpBtn}
                title="Pas encore inscrit??"
                onPress={() => click3()}
              >
                <Text style={styles.text}>{props.content.pseudo}</Text>
              </Pressable>
              <View style={styles.container3}>
                <Pressable
                  //style={styles.signUpBtn}
                  title="Pas encore inscrit??"
                  onPress={() => clickLike()}
                >
                  <Image
                    style={styles.LikeLogo}
                    source={require("C:/Users/seb 2/Desktop/Formation Javascript Fullstack/reac native/appvr/assets/image/likebtn.png")}
                  ></Image>

                  <Text style={styles.text}>({likeList.length})</Text>
                </Pressable>
                <Pressable
                  //  style={styles.signUpBtn}
                  title="Pas encore inscrit??"
                  onPress={() => click()}
                >
                  <Image
                    style={styles.LikeLogo}
                    source={require("C:/Users/seb 2/Desktop/Formation Javascript Fullstack/reac native/appvr/assets/image/addcombtn.png")}
                  ></Image>
                </Pressable>
                {select2 ? (
                  <View>
                    <Text style={styles.text}>Commentaire</Text>
                    {commentList.map((item) => (
                      <Comment content={item} />
                    ))}
                    <Pressable
                      // style={styles.signUpBtn}
                      title="Pas encore inscrit??"
                      onPress={() => clickOff2()}
                    >
                      <Image
                        style={styles.LikeLogo}
                        source={require("C:/Users/seb 2/Desktop/Formation Javascript Fullstack/reac native/appvr/assets/image/flechetop.png")}
                      ></Image>
                    </Pressable>
                  </View>
                ) : (
                  <Pressable
                    // style={styles.signUpBtn}
                    title="Pas encore inscrit??"
                    onPress={() => click2()}
                  >
                    <Image
                      style={styles.LikeLogo}
                      source={require("C:/Users/seb 2/Desktop/Formation Javascript Fullstack/reac native/appvr/assets/image/commBtn.png")}
                    ></Image>
                    <Text style={styles.text}>({commentList.length})</Text>
                  </Pressable>
                )}
              </View>
            </View>
          )}
        </View>
      )}
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
  LikeLogo: {
    width: 50,
    height: 50,
    marginRight: 40,
    marginLeft: 40,
  },
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    // alignItems: "center",
    margin: 10,
  },
  container3: {
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
  },
});
export default Post;
