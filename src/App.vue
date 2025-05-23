<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/"
          >TP3: Vue CLI - Router / Formularios</router-link
        >
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Formulario</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/usuarios"
                >Usuarios</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container my-4 flex-grow-1">
      <router-view />
    </main>

    <footer class="text-center py-3 bg-light border-top">
      Programación en Nuevas Tecnologías 2 - TP3 @ Gastón Kopplin Alva
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
