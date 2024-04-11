import CustomAppBar from "./components/AppBar";
import ContactUs from "./pages/ContactUS";
import Footer from "./components/Footer";
import OfficeLocation from "./pages/OfficeLocation";
import Services from "./pages/Services";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <CustomAppBar />
      <Home />
      <Services />
      <OfficeLocation />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
