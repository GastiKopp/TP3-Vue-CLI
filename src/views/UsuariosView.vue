<template>
  <div class="row justify-content-center">
    <div class="col-md-10">
      <div class="form-card">
        <div class="card-header-custom">
          <h4 class="mb-0">Usuarios desde MockAPI</h4>
        </div>

        <div v-if="cargando" class="text-center my-4">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Cargando...</span>
          </div>
          <p class="mt-2">Cargando usuarios...</p>
        </div>

        <div v-else-if="error" class="alert alert-danger my-4">{{ error }}</div>

        <div v-else class="table-responsive mt-3">
          <table class="table table-hover table-bordered">
            <thead class="table-light">
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in usuarios" :key="usuario.id">
                <td>{{ usuario.nombre }}</td>
                <td>{{ usuario.email }}</td>
                <td>{{ usuario.telefono }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "UsuariosView",
  data() {
    return {
      usuarios: [],
      cargando: true,
      error: null,
    };
  },
  mounted() {
    axios
      .get("https://68302c66f504aa3c70f6a44b.mockapi.io/usuariosFaker")
      .then((res) => {
        this.usuarios = res.data;
      })
      .catch((err) => {
        this.error = "No se pudieron cargar los usuarios";
        console.error(err);
      })
      .finally(() => {
        this.cargando = false;
      });
  },
};
</script>
