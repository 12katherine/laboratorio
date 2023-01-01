<template>
  <v-container class="mt-15 mb-15">
    <v-row>
      <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10">
        <v-btn class="mt-n3" outlined color="black" @click="Volver1()">
          Volver
        </v-btn>
      </v-col>
    </v-row>
    <v-row style="margin-top:3px">
      <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
        <v-card color="orange lighten-4" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5 text--primary">Setup</v-card-title>
              <v-card-actions>
                <v-btn class="ml-2 mt-5 text--primary" outlined rounded @click="Setup()">
                  
                  Ver informacion
                </v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ml-n7 mr-5 mt-4 mb-3" size="120">
              <img src="https://cdn-icons-png.flaticon.com/512/1817/1817897.png" alt=" ver mas">
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
        <v-card color="orange lighten-4" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5 text--primary">Ciudades</v-card-title>
              <v-card-actions>
                <v-btn class="ml-2 mt-5 text--primary" outlined rounded @click="AggCiudades()">
                  
                  Ver informacion
                </v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ml-n7 mr-5 mt-4 mb-3" size="120">
              <img src="https://cdn-icons-png.flaticon.com/512/3301/3301591.png" alt="John">
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
        <v-card color="orange lighten-4" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5 text--primary">Ensayo</v-card-title>
              <v-card-actions>
                <v-btn class="ml-2 mt-5 text--primary" outlined rounded @click="ensayo()">
                  
                  Agregar Ensayos
                </v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ml-n7 mr-5 mt-4 mb-3" size="120">
              <img src="https://img2.freepng.es/20181209/ttf/kisspng-writing-thesis-essay-education-publication-professional-lab-report-assistance-online-buyessay-5c0d902cdd8d82.3534477915443927489075.jpg" alt="John">
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
        <v-card color="orange lighten-4" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5 text--primary">Bitacora</v-card-title>
              <v-card-actions>
                <v-btn class="ml-2 mt-5 text--primary" outlined rounded @click="Log()">
                 
                  Ver movimientos
                </v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ml-n7 mr-5 mt-4 mb-3" size="120">
              <img src="https://static.vecteezy.com/system/resources/previews/006/430/311/non_2x/a-trendy-flat-editable-icon-of-logbook-vector.jpg" alt="John">
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
        <v-card color="orange lighten-4" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5 text--primary">Calidad</v-card-title>
              <v-card-actions>
                <v-btn class="ml-2 mt-5 text--primary" outlined rounded @click="Calidad()">
                  Editor de versiones
                </v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ml-n7 mr-5 mt-4 mb-3" size="120">
              <img src="https://cdn-icons-png.flaticon.com/512/2621/2621317.png" alt="John">
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PageConfiguracion",
  data: () => ({
    show: false,
  }),
  methods: {
    Cotizaciones() {
      this.$router.push("/");
    },
    Volver1() {
      this.$router.push("/inicioP");
    },
    Setup() {
      this.$router.push("/setup");
    },
    AggCiudades() {
      this.$router.push("/AgreCiudades");
    },
    Log() {
      this.$router.push("/log");
    },
    ensayo() {
      this.$router.push("/EnsayoLab")
    },
    Calidad() {
      this.$router.push("/Calidad")
    },

  },
};
</script>
