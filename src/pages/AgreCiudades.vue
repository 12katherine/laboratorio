<template>
  <v-container class="mt-15 mb-15">
    <v-row>
      <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10">
        <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver1()">
          Volver
        </v-btn>
      </v-col>
    </v-row>
    <v-row style="margin: 0">

      <v-col cols="2"></v-col>
      <v-col cols="8">
        <template>
          <v-card>
            <template>
              <v-card>
                <v-card-title>
                  TABLA CIUDADES
                </v-card-title>
                <v-data-table :headers="headers" :items="ciudad" :search="search"></v-data-table>
              </v-card>
            </template>
          </v-card>
        </template>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
   
  </v-container>
</template>
    
<script>
import axios from 'axios';
export default {
  name: 'AggCiudad',
  data: () => ({
    ciudad: [],

    codigodepartamento: "",
    departamento: "",
    ciudadd: "" ,
    codCiudad: "",
    search: '',
    dialogo: false,
    headers: [
      {
        text: 'CODIGO DEPARTAMENTO',
        align: 'start',
        value: "coddepartamento",
      },
      {
        text: 'DEPARTAMENTO',
        align: 'start',
        sortable: false,
        value: 'departamento',
      },
      {
        text: 'CIUDAD',
        align: 'start',
        sortable: false,
        value: 'ciudad',
      },
      {
        text: 'CODIGO CIUDAD',
        align: 'start',
        value: 'codciudad',
      },
    ],
  }),
  methods: {
    Volver1() {
      this.$router.push("/ConfiguracionAdmin");
    },
    listar() {
      axios.get(`https://app-laboratorio.vercel.app/api/ciudad/CiudadDepartamento`)
        .then((response) => {
          console.log(response);
          this.ciudad = response.data.ciudad
          console.log(this.ciudad);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    
  },
  created() {
    this.listar();
  }
}
</script>
  