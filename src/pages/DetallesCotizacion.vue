<template>
  <v-container class="mt-11">
    <v-card class="mx-auto" max-width="1500">
      <v-toolbar color="" >
        <v-toolbar-title>xxxxxxxxxxxxNum codi</v-toolbar-title>

        <v-spacer></v-spacer>

        <h1>codigo de calidad</h1>
      </v-toolbar>

      <v-toolbar color="deep-orange" dark>
        <v-toolbar-title>Datos del cliente</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-icon class="mr-5">
            mdi-magnify
        </v-icon>
        
        <v-icon>
           mdi-pencil
        </v-icon>
        
      </v-toolbar>
      <v-toolbar color="" >
        <v-toolbar-title>Item</v-toolbar-title>

      </v-toolbar>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  // https://laboratorio-jjai-2.herokuapp.com/api
  name: "DetallesCotizacion",

  data() {
    return {
      titulo: "",
      peliculas: [],
    };
  },
  methods: {
    listar() {
      let header = { headers: { "x-token": this.$store.state.token } };
      axios
        .get(`${this.$store.state.backend}/peliculas`, header)
        .then((response) => {
          console.log(this.$store.state.datos.rol);
          this.peliculas = response.data.pelicula;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    detalles(p) {
      this.$store.dispatch("setPelicula", p);
      this.$router.push("/detalles");
    },
    // buscar(){
    //     this.$router.push("/search")
    //     this.$store.state.titulo=this.titulo
    // }
  },
  created() {
    this.listar();
  },
};
</script>
<style>
.body2 {
  margin: 30px;
  font-family: sans-serif;
  display: grid;
  top: auto;
  min-height: 78vh;
  grid-template-rows: auto 1fr auto;
  align-items: center;
}
</style>
