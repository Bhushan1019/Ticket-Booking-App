import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { AuthenticationProvider } from "@/context/AuthContext";
import React from "react";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <AuthenticationProvider>
        <Slot />
      </AuthenticationProvider>
    </>
  );
}
