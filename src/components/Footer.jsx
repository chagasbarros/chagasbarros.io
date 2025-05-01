function Footer() {
    return (
      <footer className="bg-dark text-white w-100" style={{ paddingTop: '2rem' }}>
        <div className="container-global d-flex flex-wrap justify-content-between">
  
          <div className="logo-footer d-flex flex-column mb-4">
            <img src="/logo-footer.svg" alt="logo em preto e branco" className="mb-3" />
  
            <p className="paragrafo-footer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nobis incidunt consequatur in excepturi?
            </p>
  
            <div className="redes-footer mt-3">
              <a href="https://www.facebook.com/?locale=pt_BR"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a>
              <a href="https://x.com/?lang=pt"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>
  
          <div className="coluna-footer coluna-informacao mb-4">
            <h3>Informação</h3>
            <ul>
              <li>Sobre Drip Store</li>
              <li>Segurança</li>
              <li>Wishilist</li>
              <li>Blog</li>
              <li>Trabalhe Conosco</li>
              <li>Meus Pedidos</li>
            </ul>
          </div>
  
          <div className="coluna-footer mb-4">
            <h3>Categorias</h3>
            <ul>
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Bonés</li>
              <li>Headphones</li>
              <li>Tênis</li>
            </ul>
          </div>
  
          <div className="contato-footer coluna-footer mb-4">
            <h3>Contato</h3>
            <p>
              Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE, 60150-161
            </p>
            <p>(85) 3051-3411</p>
          </div>
        </div>
  
        <div className="linha-footer mx-auto my-3"></div>
  
        <div className="text-center pb-3" style={{ fontSize: '0.9rem', color: '#aaa' }}>
          © 2022 Digital College
        </div>
      </footer>
    );
  }
  
  export default Footer;
  