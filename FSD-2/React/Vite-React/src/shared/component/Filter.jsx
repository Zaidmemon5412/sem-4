// import React from 'react';

function Navbar({ setCategory }) {
  return (
    <>
      <div className="Filter">
        
        <div className="Filter-links">
          <button onClick={() => setCategory("all")}>All</button>

          <button onClick={() => setCategory("electronics")}>
            Electronics
          </button>

          <button onClick={() => setCategory("jewelery")}>Jewelery</button>

          <button onClick={() => setCategory("men's clothing")}>Men's</button>

          <button onClick={() => setCategory("women's clothing")}>
            Women's
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
