// src/components/SearchInput.jsx

function SearchInput() {
    return (
      <div className="position-relative">
        <input
          type="search"
          className="form-control p-3 backgroundInput"
          placeholder="Pesquisar produtos..."
        />
        <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3 text-secondary"></i>
      </div>
    );
  }
  
  export default SearchInput;
  