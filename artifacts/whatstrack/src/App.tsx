import { useState } from "react";
import { Router as WouterRouter, Switch, Route } from "wouter";
import LandingPage from "@/pages/LandingPage";
import LoadingModal from "@/pages/LoadingModal";
import ChatPage from "@/pages/ChatPage";
import videoSrc from "@assets/YouCut_20260617_183725898_1781726520015.mp4";

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
              <>
                {/* Pre-buffer video while loading animation plays */}
                <video src={videoSrc} preload="auto" style={{ display: "none" }} />
                <LoadingModal phone={phoneNumber} onComplete={handleLoadingComplete} />
              </>
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
