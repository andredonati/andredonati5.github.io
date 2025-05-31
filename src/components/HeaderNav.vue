<template>
    <header class="header-wrapper">
      <div class="header-content">
        <h1 class="logo">Donati Designs</h1>
        <nav class="nav-links">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/about" class="nav-link">About</RouterLink>
          <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderNav',
  };
  </script>
  
  <style scoped>
  .header-wrapper {
    background-color: #1e3a8a; /* navy blue */
    color: white;
    width: 100%;
    padding: 0 0;
  }
  
  .header-content {
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
  }
  
  .logo {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .nav-links {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }
  
  .nav-link {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.2s;
  }
  
  .nav-link:hover {
    color: #93c5fd; /* light blue on hover */
  }
  </style>
  