
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
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <template>
          <v-card>
            <template>
              <v-card>
                <v-card-title>
                  Lista de movimientos
                  <v-spacer></v-spacer>
                  <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar usuario" single-line
                    hide-details>
                  </v-text-field>
                </v-card-title>
                <v-data-table :headers="headers" :items="infoBitacora" :search="search">
                  <template v-slot:[`item.fechas`]="{item}">
                    <template>
                      {{fechaSalida(item.fecha)}}
                    </template>
                  </template>
                </v-data-table>
              </v-card>
            </template>
          </v-card>
        </template>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>

  </v-container>
</template>
        
<script>
import axios from "axios";
export default {
  name: 'PageBitacora',
  data: () => ({
    infoBitacora: [],
    search: '',
    headers: [
      {
        text: 'Nombre del usuario',
        align: 'start',
        sortable: false,
        value: "idUsuario.nombre",
      },
      {
        text: 'Inserción de datos',
        align: 'start',
        sortable: false,
        value: 'idPost',
      },
      {
        text: 'Edición de datos',
        align: 'start',
        sortable: false,
        value: 'idPut',
      },
      {
        text: 'Navegador',
        align: 'start',
        sortable: false,
        value: 'navegador',
      },
      {
        text: 'Ip',
        align: 'start',
        sortable: false,
        value: 'ip',
      },
      {
        text: 'Fecha',
        align: 'start',
        sortable: false,
        value: 'fechas',
      },
    ],

  }),
  methods: {
    Volver1() {
      
      this.$router.push("/ConfiguracionAdmin");
    },
    listar() {
      axios.get(`https://app-laboratorio.vercel.app/api/cotizacion/traerBitacora`)
        .then((response) => {
          console.log(response);
          this.infoBitacora = response.data.bitacora.reverse()
          console.log(this.infoBitacora);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fechaSalida(r) {
      let d = new Date(r);
      return d.toLocaleDateString() + " - " + d.toLocaleTimeString();
    },
  },
  created() {
    this.listar();
  },
}
</script>
      