import tianna from './tianna_small_img.jpg';
import album from './album.png';
import book from './book.png';
import pericles from './pericles.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img style = {{"width" : "30vw"}} src={tianna} alt="blond girl with glasses and yellow bow in hair" />
        <p>
          Hello! My name is Tianna!
        </p>
        <p style = {{"width" : "50vw", "font-size" : "25px"}}>
          I am 23 years old, I live in Idaho, and I have a goldendoodle. My favorite passtimes are cooking, art and coding!
        </p>
        </header>
        <body style = {{"width" : "100vw"}}>
          <p>I have done some graphic design work this semester. Take a look!
          </p>
          <img style = {{"float": "right", "padding-right" : "5vw", "width" : "30vw"}} src={album} alt="album cover with bold shapes" />
          <img style = {{"float": "right", "padding-right" : "5vw", "width" : "25vw"}} src={book} alt="illustration of plants growing out of books" />
          <img style = {{"float": "left", "padding-left" : "5vw", "width" : "25vw", "margin-bottom": "10vh"}} src={pericles} alt="a poster with a shadowed man wearing a crown" />
        </body>
    </div>
  );
}

export default App;
