export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Itschana – Raum für natürlichen Rhythmus</h1>
        <nav>
          <a href="/archiv" style={{ marginRight: "1rem" }}>Archiv</a>
          <a href="/eintrag">Goldenes Buch</a>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </>
  );
}
