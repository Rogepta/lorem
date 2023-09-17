import Header from "./layout/header/Header";
import SectionOrder from "./layout/sections/sectionOrder/SectionOrder";
import SectionPromo from "./layout/sections/sectionPromo/SectionPromo";
import Footer from "./layout/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <SectionPromo />
        <SectionOrder />
      </main>
      <Footer />
    </>
  );
}

export default App;
