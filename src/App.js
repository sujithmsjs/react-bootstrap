import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./NavBar";
import Header from "./Header";
import TextContent from "./TextContent";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Header />
      <NavBar />
      <div className="container py-3">
        <TextContent />
      </div>
      <Footer />
    </>
  );
}
