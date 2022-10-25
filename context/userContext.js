import { createContext, useState, useEffect } from "react";

export const userContext = createContext(
  { email: "", setEmail: () => {} },
  { pseudo: "", setPseudo: () => {} },
  { profilPicture: "", setProfilPicture: () => {} }
);

export default function UserProvider(props) {
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");

  useEffect(() => {
    async function getUser() {
      const token = AsyncStorage.getItem("User");
      console.log(token);
      const url = "http://192.168.1.19:3005/profil";
      const options = {
        method: "GET",
        headers: {
          Authorization: "bearer " + token,
        },
      };
      const response = await fetch(url, options);

      let result = await response.json();

      console.log(result);

      if (result.profil.email) {
        console.log(result);
        setEmail(result.profil.email);
        setPseudo(result.profil.pseudo);
      } else {
        console.log(result);
      }
    }

    getUser();
  }, [email]);

  return (
    <userContext.Provider
      value={{
        email,
        setEmail,
        pseudo,
        setPseudo,
      }}
    >
      {props.children}{" "}
    </userContext.Provider>
  );
}
