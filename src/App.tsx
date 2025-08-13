import "./App.css";

export default function App() {
  return (
    <>
      <nav className="navbar">
        <h1>Meu Site</h1>
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>

      <main>
        {/* Conteúdo da página */}
      </main>

      <footer className="footer">
        <p>© 2025 Minha Empresa</p>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </footer>
    </>
  );
}
