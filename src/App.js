import Button from "./components/Button/Button";
import Icon from "./components/Icon/Icon";
import Paragraph from "./components/Paragraph/Paragraph";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {
  return (
    <>
    <header className="header">
      <h1>
        UX/UI Engineer Component Library
      </h1>
    </header>
    <main>
      <div className="search-input">
        <SearchInput placeholder='Search…' label='Search Input with icon' icon='search' size='lg' onChange={() => console.log('Search Input')} />
      </div>
      <div className="button-container">
        <Button size='lg' variant='text' disabled={false} onClick={() => console.log('Text button')}>Text button</Button>
        <Button size='lg' variant='primary' disabled={false} onClick={() => console.log('Primary button')}>Primary button</Button>
        <Button size='lg' variant='secondary' disabled={false} onClick={() => console.log('Secondary button')}>Secondary button</Button>
        <Button size='lg' variant='danger' disabled={false} onClick={() => console.log('Danger button')}>Danger button</Button>
        <Button size='lg' variant='primary' disabled={false} onClick={() => console.log('Left icon button')}>
          <div className="left__icon">
              <div className="icon__wrapper" style={{width: '24px', height: '24px'}}>
                  <Icon id={'search'} strokeWidth={1} size={24} />
              </div>
              <span>Left icon</span>
          </div>
        </Button>
        <Button size='lg' variant='danger' disabled={false} onClick={() => console.log('Right icon button')}>
          <div className="right__icon">
              <span>Right icon</span>
              <div className="right-icon__wrapper" style={{width: '24px', height: '24px'}}>
                  <Icon id={'shopping-card'} strokeWidth={1} size={24} />
              </div>
          </div>
        </Button>
        <Button size='lg' disabled={true}>Desabled</Button>
      </div>
    </main>
    <Paragraph background="#00ffff" color="#000000">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    </Paragraph>
    </>
  );
}

export default App;
