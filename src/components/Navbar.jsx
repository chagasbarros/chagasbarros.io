import SearchInput from "./SearchInput";


function Navbar() {
    return(
        <header className="container-pagina">
        <nav className="container">
            <div className="row align-items-center">
    
                <div className="col-auto d-flex align-items-center p-0">
                    <div className="d-flex  justify-content-start align-items-center m-0">
                        <img src="\Vector.svg" alt="simbolo da logo" />
                        <img src="\DigitalStore.svg" alt="texto da logo" className="mt-2 ms-2" />
                    </div>
                </div>

                <div className="col flex-grow-1 px-4">
                    <SearchInput />
                    
                </div>

                <div className="col-auto d-flex align-items-center gap-3">
                    <a href="#" className="h5 p-2 text-dark ">Cadastre-se</a>
                    <button className="">Entrar</button>
                    <img src="\public\Buy.svg" alt="carrinho" className="" />
                </div>

            </div>

            <div className="row">
              <div className="d-flex mt-5 p-0">
                <a href="Home" className="text-decoration-none fs-5 fw-semibold text-secondary">Home</a>
                <a href="Produtos" className="text-decoration-none ms-5 fs-5 fw-normal text-secondary">Produtos</a>
                <a href="Categorias" className="text-decoration-none ms-5 fs-5 fw-normal text-secondary">Categorias</a>
                <a href="Meus Pedidos" className="text-decoration-none ms-5 fs-5 fw-normal text-secondary">Meus Pedidos</a>
              </div>
            </div>
          
        </nav>
      </header>
    )
}

export default Navbar;