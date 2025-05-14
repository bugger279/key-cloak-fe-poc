import { Protected } from "./components/protected";
import { Public } from "./components/public";

import useAuth from "./hooks/useAuth";

function App() {
  const [isLogin, token] = useAuth();
  return isLogin ? <Protected token={token} /> : <Public />;
}

export default App;