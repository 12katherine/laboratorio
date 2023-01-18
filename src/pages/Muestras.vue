<template>
  <v-container style="margin-top: 100px">
    <v-row style="margin: 0">
      <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10">
        <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver1()">
          Volver
        </v-btn>
      </v-col>
      
      <v-col cols="12" xs="10" sm="10" md="10" lg="10" xl="10">
        <template>
          <v-card>
            <v-card-title>
              CLIENTES
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="clientes" :search="search">
              <template v-slot:[`item.opciones`]="{ item }">
                <template v-if="item.estado === 1"> desactivar </template>
                <template v-else> activar </template>
                <template> editar </template>
              </template>
              <template v-slot:[`item.estado`]="{ item }">
                <span v-if="item.estado">Activo</span>
                <span v-else>Inactivo</span>
              </template>
              <template v-slot:[`item.muestras`]="{ item }">
                <v-btn @click="pagmuestras(item)"> Ver Muestras</v-btn>
              </template>
            </v-data-table>
          </v-card>
        </template>
      </v-col>
      <v-col cols="12" xs="1" sm="1" md="1" lg="1" xl="1"></v-col>
    </v-row>
  </v-container>
</template>
    
<script>
import axios from "axios";
export default {
  name: "PageMuestras",
  data: () => ({
    search: "",
    clientes: [],
    headers: [
      {text: "Nombres",
        align: "start",
        sortable: false,
        value: "nombre",
      },
      {
        text: "Apellidos",
        align: "start",
        sortable: false,
        value: "apellidos",
      },
      {
        text: "Correo",
        align: "start",
        sortable: false,
        value: "email",
      },
      {
        text: "C.C.",
        align: "start",
        sortable: false,
        value: "documento",
      },
      {
        text: "Estado",
        align: "start",
        sortable: false,
        value: "estado",
      },
      {
        text: "Opciones",
        align: "start",
        sortable: false,
        value: "opciones",
      },
      {
        text: "Muestras",
        align: "start",
        sortable: false,
        value: "muestras",
      },
    ],
  }),
  methods: {
    Volver() {
      this.$router.push("/ConfiguracionAdmin");
    },
    usuarios() {
      let header = { headers: { token: this.$store.state.token } };
      axios
        .get("https://app-laboratorio.vercel.app/api/usuarios/ListarSoloUsuarios", header)
        .then((response) => {
          this.clientes = response.data.usuarios;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    pagmuestras(datos) {
      console.log(datos);
      this.$store.dispatch("setMuestras", datos);
      this.$router.push("/ListaM");
    },
    Volver1() {
      this.$router.push("/inicioP");
    },
  },
  created() {
    this.usuarios();
  },
};
</script>