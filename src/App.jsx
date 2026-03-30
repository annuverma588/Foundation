import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <AppRouter />
      <Navbar />
      <Footer />
      
    </div>
  );
}