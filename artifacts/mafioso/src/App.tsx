import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "./pages/Home";
import Download from "./pages/Download";

export const APK_FILENAME = "/mafioso.apk";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/download" component={Download} />
      <Route>
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl font-black gold-text mb-4">404</h1>
            <p className="text-gray-400 mb-8">الصفحة غير موجودة</p>
            <a href="/" className="px-6 py-2 bg-[#8B0000] rounded-lg text-white font-bold hover:bg-[#a01010] transition-colors">
              العودة للرئيسية
            </a>
          </div>
        </div>
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
