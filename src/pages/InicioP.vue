<template>
  <v-container>
      <v-row class="my-13">
         
          
          <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
              <v-card color="orange lighten-3" dark >
                  <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                          <v-card-title class="text-h5 text--primary">Registro <br> Nuevo </v-card-title>
                          
                          <v-card-actions>
                              <v-btn class="ml-2 mt-5 text--primary" outlined rounded to="/aggusuario">
                                  
                                  Agregar Usuario
                              </v-btn>
                          </v-card-actions>
                      </div>
                      <v-avatar class="ml-n7 mr-5 mt-4 " size="125">
                          <img height=90% src="data:image/jpeg;base64,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" alt="John">
                      </v-avatar>
                  </div>
              </v-card>
          </v-col>

          <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
              <v-card color="orange lighten-3" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                          <v-card-title class="text-h5 text--primary">Lista de <br> Muestras </v-card-title>
                         
                          <v-card-actions>
                              <v-btn class="ml-2 mt-5 text--primary" outlined rounded @click="Listar()" to="/Muestras">
                                 
                                  Muestras
                              </v-btn>
                          </v-card-actions>
                      </div>
                      <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                          <img src="https://carpermor.com.mx/hs-fs/hubfs/CARPERMOR/Iconos%20%C3%A1rea%20del%20laboratorio/recepcion-de-muestras.jpg?width=1700&height=1148&name=recepcion-de-muestras.jpg" alt="John">
                      </v-avatar> 
                  </div>
              </v-card>
          </v-col>
          
          <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
              <v-card color="orange lighten-3" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                          <v-card-title class="text-h5 text--primary">Clientes <br> Nuevo</v-card-title>
                          
                          <v-card-actions>
                              <v-btn class="ml-2 mt-5 text--primary" outlined rounded to="/clientes">
                                  
                                  Clientes
                              </v-btn>
                          </v-card-actions>
                      </div>
                      <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                          <img   src="https://cdn-icons-png.flaticon.com/512/2051/2051943.png" alt="John">
                      </v-avatar>
                  </div>
              </v-card>
          </v-col>

          
          <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
              <v-card color="orange lighten-3" dark >
                  <div class="d-flex flex-no-wrap justify-space-between">
                      <div>

                          <v-card-title class="text-h5 text--primary"> Nueva<br>Cotizaciones </v-card-title>
                         
                          <v-card-actions>

                              <v-btn class="ml-2 mt-5 text--primary" outlined rounded to="/cotizacion">
                                  
                                  Agregar Cotizacion
                              </v-btn>
                          </v-card-actions>
                      </div>
                      <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                          <img src="https://cdn-icons-png.flaticon.com/512/2038/2038948.png" alt="John">
                      </v-avatar>
                  </div>
              </v-card>
          </v-col>

          <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
              <v-card color="orange lighten-3" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                          <v-card-title class="text-h5 text--primary">Configuracion <br> Parametrización</v-card-title>
                         
                          <v-card-actions>
                              <v-btn class="ml-2 mt-5 text--primary" outlined rounded to="/ConfiguracionAdmin" >
                                  
                                  Ver Configuracion
                              </v-btn>
                          </v-card-actions>
                      </div>
                      <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                          <img  height=90% src="https://cdn-icons-png.flaticon.com/512/1756/1756647.png" alt="John">
                      </v-avatar>
                  </div>
              </v-card>
          </v-col>

      </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'PageHome',
  data: () => ({
  }),
}
</script>