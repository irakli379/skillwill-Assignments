import "./App.css";

function App({ image, title, author, description, characters }) {
  return (
    <div class="container">
      <header>
        <img src={image} alt="Book Cover" class="book-cover" />
        <h1>{title}</h1>
        <h2>{author}</h2>
      </header>
      <main>
        <section class="chapter">{description}</section>
        <section class="chapter">
          <ul>
            {characters.map(function (char) {
              return <li> {char} </li>;
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
