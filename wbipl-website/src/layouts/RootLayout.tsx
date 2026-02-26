import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./layout.css";

export default function RootLayout() {
  return (
    <div className="appShell">
      <Header />
      <main className="appMain">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}