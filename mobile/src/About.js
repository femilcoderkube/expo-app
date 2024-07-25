import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import {
  GoogleSignin,
  isErrorWithCode,
  statusCodes,
} from "@react-native-google-signin/google-signin";

const About = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "723643581380-ca9jumkcqvcmmlf0uqabhkls8r1vm3gl.apps.googleusercontent.com",
      offlineAccess: true,
      forceCodeForRefreshToken: true,
      iosClientId:
        "723643581380-57ghomb76acct4trb7kpmoqdfihfeb4p.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    });
  }, []);

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("userIfo", userInfo);
      setUser(userInfo);
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            // user cancelled the login flow
            console.log("err", error);
            break;
          case statusCodes.IN_PROGRESS:
            console.log("err", error);
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log("err", error);
            // play services not available or outdated
            break;
          default:
            console.log("err", error);
          // some other error happened
        }
      } else {
        console.log("err", error);
        // an error that's not related to google sign in occurred
      }
    }
  };

  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          _signIn();
        }}
      >
        <Text>Dashboard</Text>
      </TouchableOpacity>

      <Text>Login User</Text>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>{user?.user?.email}</Text>
        <Text>{user?.user?.name}</Text>
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            overflow: "hidden",
          }}
        >
          <Image
            src={user?.user?.photo}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default About;
