import { usePushNotifications } from "@/usePushNotifications";
import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { useNavigate } from "react-router-dom";
import Constants from "expo-constants";

export default function Dashboard() {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),

    onError: (err) => console.log(err),
  });

  // const { expoPushToken, notification } = usePushNotifications();
  // const data = JSON.stringify(notification, undefined, 2);
  // console.log("expoPushToken", expoPushToken);

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        login();
      }}
    >
      Dashboard
    </div>
  );
}
