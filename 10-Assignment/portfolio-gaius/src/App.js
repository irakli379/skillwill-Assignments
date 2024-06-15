import logo from "./profile.jpg";

function App() {
  return (
    <div class="portfolio-container">
      <header>
        <h1>Gaius Marius</h1>
        <p>Roman general and statesman</p>
      </header>
      <section class="profile">
        <img src={logo} alt="Gaius Marius" />
        <div class="profile-text">
          <h2>About Gaius</h2>
          <p>
            Gaius Marius (Latin: [ˈɡaːiʊs ˈmariʊs]; c. 157 BC – 13 January 86
            BC) was a Roman general and statesman. Victor of the Cimbric and
            Jugurthine wars, he held the office of consul an unprecedented seven
            times.
          </p>
          <p>
            In the 19th century,[1] Marius was credited with the so-called
            Marian reforms, including the shift from militia levies to a
            professional soldiery; improvements to the pilum (a kind of
            javelin); and changes to the logistical structure of the Roman army.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
