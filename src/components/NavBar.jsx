import React from 'react';

function NavBar() {

  return (
<div class="container-fluid nav-bar-custom">
  <header class="d-flex flex-wrap justify-content-center py-3 mb-0 text-center">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-0 link-body-emphasis text-decoration-none">
      <img src="/assets/images/logo.png" alt="Flavour Finter Logo" className='logo'  />
      <span class="fs-4 text-white">Flavour Finder</span>
    </a>

  
  </header>
</div>
  );

}


export default NavBar;