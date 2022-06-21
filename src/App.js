import Button from "./components/Button/Button";
import Paragraph from "./components/Paragraph/Paragraph";

function App() {
  return (
    <>
    <header className="header">
      <p className="header-p">Hello World</p>
      <h1 className="header-button">
        <Button>
          BUTTON
        </Button>
      </h1>
    </header>
    <Paragraph background="#00ffff" color="#000000">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    </Paragraph>
    <footer className="footer">
      <p className="footer-p">Hello footer</p>
    </footer>
    </>
  );
}

export default App;
