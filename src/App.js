import './App.css';
import TabComponent from './TabComponent';
import TabItem from './TabItem';

function App() {
  return (
    <div className="App">
      
      <TabComponent>
        <TabItem header="home">
          <p>HI I am Home</p>
          <h1>Hi am HOME</h1>
          <h3>hola hola </h3>
        </TabItem>
        <TabItem header="contact us">
          <p>Hi I am contact</p>
          <h1>Hi am contact</h1>
        </TabItem>
        <TabItem header="categories">
          <p>Hi I am categories</p>
          <h1>Hi am categories</h1>
        </TabItem>
      </TabComponent>
    </div>
  );
}

export default App;
