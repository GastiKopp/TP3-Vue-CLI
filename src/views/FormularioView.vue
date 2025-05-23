<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="form-card">
        <div class="card-header-custom">
          <h4 class="mb-0 fs-3 fw-bold text-decoration-underline">
            Ingresar usuario
          </h4>
        </div>

        <form @submit.prevent="agregarUsuario" novalidate class="mt-4">
          <div class="mb-3">
            <label class="form-label fw-bold fs-5">Nombre</label>
            <input
              v-model="nombre"
              type="text"
              class="form-control"
              placeholder="Ej: Gastón"
            />
            <div
              v-if="errores.nombre"
              class="alert alert-danger mt-2 py-1 px-2 small"
            >
              {{ errores.nombre }}
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold fs-5">Edad</label>
            <input
              v-model.number="edad"
              type="number"
              class="form-control"
              placeholder="Ej: 25"
            />
            <div
              v-if="errores.edad"
              class="alert alert-danger mt-2 py-1 px-2 small"
            >
              {{ errores.edad }}
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold fs-5">Email</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              placeholder="Ej: ejemplo@mail.com"
            />
            <div
              v-if="errores.email"
              class="alert alert-danger mt-2 py-1 px-2 small"
            >
              {{ errores.email }}
            </div>
          </div>

          <button type="submit" class="btn btn-success">Agregar</button>
        </form>
      </div>

      <div class="table-wrapper">
        <h5 class="mt-4 fw-bold fs-4 text-decoration-underline">
          Usuarios ingresados
        </h5>
        <table class="table table-hover table-bordered" v-if="usuarios.length">
          <thead class="table-light">
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Email</th>
            </tr>
          </thead>

          <transition-group name="fade" tag="tbody">
            <tr v-for="(u, index) in usuarios" :key="index">
              <td>{{ u.nombre }}</td>
              <td>{{ u.edad }}</td>
              <td>{{ u.email }}</td>
            </tr>
          </transition-group>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormularioView",
  data() {
    return {
      nombre: "",
      edad: "",
      email: "",
      usuarios: [],
      errores: {},
    };
  },
  methods: {
    validarFormulario() {
      this.errores = {};

      if (!this.nombre) {
        this.errores.nombre = "El nombre es obligatorio";
      } else if (this.nombre.length < 5 || this.nombre.length > 15) {
        this.errores.nombre = "El nombre debe tener entre 5 y 15 caracteres";
      }

      if (!this.edad && this.edad !== 0) {
        this.errores.edad = "La edad es obligatoria";
      } else if (this.edad < 18 || this.edad > 120) {
        this.errores.edad = "La edad debe tener entre 18 y 120 años";
      }

      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.email) {
        this.errores.email = "El email es obligatorio";
      } else if (!regexEmail.test(this.email)) {
        this.errores.email = "El email no es válido";
      }

      return Object.keys(this.errores).length === 0;
    },

    agregarUsuario() {
      if (this.validarFormulario()) {
        this.usuarios.push({
          nombre: this.nombre,
          edad: this.edad,
          email: this.email,
        });
        this.nombre = "";
        this.edad = "";
        this.email = "";
        this.errores = {};
      }
    },
  },
};
</script>
