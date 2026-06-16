import { useState } from "react";
import { Router as WouterRouter, Switch, Route } from "wouter";
import LandingPage from "@/pages/LandingPage";
import LoadingPage from "@/pages/LoadingPage";
import ChatPage from "@/pages/ChatPage";

export type AppState = "landing" | "loading" | "chat";

function Router() {
  const [appState, setAppState] = useState<AppState>("landing");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleTrack = (phone: string) => {
    setPhoneNumber(phone);
    setAppState("loading");
  };

  const handleLoadingComplete = () => {
    setAppState("chat");
  };

  const handleReset = () => {
    setAppState("landing");
    setPhoneNumber("");
  };

  return (
    <Switch>
      <Route path="/">
        {appState === "landing" && (
          <LandingPage onTrack={handleTrack} />
        )}
        {appState === "loading" && (
          <LoadingPage phone={phoneNumber} onComplete={handleLoadingComplete} />
        )}
        {appState === "chat" && (
          <ChatPage phone={phoneNumber} onReset={handleReset} />
        )}
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
