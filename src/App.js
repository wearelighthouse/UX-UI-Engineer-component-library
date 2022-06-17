import Button from "./components/Button/Button";

function App() {
  return (
    <>
    <header className="header">
      <p className="header-p">Hello World</p>
      <h1 className="header-button">
        <Button />
      </h1>
    </header>
    <footer className="footer">
      <p className="footer-p">Hello footer</p>
    </footer>
    </>
  );
}

export default App;
