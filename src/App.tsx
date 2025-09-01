import Background from "./components/Background";
import Header from "./components/Header";
import Weather from "./components/Weather";

function App() {


  return (
    <main className="relative min-h-screen">
      <Background />
      <div className="max-w-6xl mx-auto min-h-screen p-2 relative">
        <Header />
        <Weather />
      </div>
    </main>
  );
}

export default App;
