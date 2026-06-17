import { useState } from "react";
import { Router as WouterRouter, Switch, Route } from "wouter";
import LandingPage from "@/pages/LandingPage";
import LoadingModal from "@/pages/LoadingModal";
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
        {appState === "chat" ? (
          <ChatPage phone={phoneNumber} onReset={handleReset} />
        ) : (
          <div className="relative">
            <LandingPage onTrack={handleTrack} isLoading={appState === "loading"} />
            {appState === "loading" && (
              <LoadingModal phone={phoneNumber} onComplete={handleLoadingComplete} />
            )}
          </div>
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
