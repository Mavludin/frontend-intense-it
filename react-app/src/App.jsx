import { useEffect, useState } from "react";
import "./App.css";
import { Blog } from "./components/Blog";
import { Dashboard } from "./components/Dashboard";
import { useIsOnline } from "./hooks/useIsOnline";
import { Post } from "./components/Post";

function App() {
  const isOnline = useIsOnline()

  console.log(isOnline)

  return (
    <div className="app">
      {/* <Blog /> */}

      {/* <Dashboard /> */}

      <Post id="1" />
    </div>
  );
}

export default App;
