
import './App.css';
import {Brand, Cta, Navbar} from './components';
import {Footer, Blog, Possibilty, Features, WhatGPT3, Header} from './containers'

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
      <Navbar />
      <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilty />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
