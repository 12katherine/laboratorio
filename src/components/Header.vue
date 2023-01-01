<template>
  <div class="">
    <v-toolbar
      dark
      prominent
      src=""
      color="black"
     
    >
    
    <v-app-bar-nav-icon @click="drawer = !drawer" color="FF5733">
      
      </v-app-bar-nav-icon>
     
      
      <div>
        <v-img
          height="90px"
          width="90px"
          src="https://tramiteinformativo.com/wp-content/uploads/2022/08/logo-sena-verde-png-sin-fondo.png"
        ></v-img>

        <div style="float: left; margin-right: 200px">
         
          <p   class="text-xs-center">
            LABORATORIO🔬 LABFICAT
          </p>
          
          <!-- <span class="navbar-brand text-white"><strong>LABORATORIO🔬</strong>LABFICAT</span> -->
        </div>
      </div>
      
      <v-row justify="left" >
       
        <v-btn
          v-for="link in links"
          :key="link"
          color="deep-orange "
          text
          rounded
          class="my-2"
          
        >
        
          {{ link }}
          <v-spacer></v-spacer>
        </v-btn>
       
        
      </v-row>
      <v-spacer></v-spacer>
     
      <v-btn icon>
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon color="white" v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
              
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
        
            </v-list-item>
              <div class="col v-center">
                <v-btn color="orange" to="ConfiguracionAdmin">Configuracion</v-btn>
              </div>
             
             
               <div class="col v-center">
                <v-btn class=" mb-4" color="red" to="/">Salir</v-btn>
            </div>  
          </v-list>
          
        </v-menu>
      </v-btn>
    </v-toolbar>

    <div justify="center" no-gutters>
      <v-navigation-drawer
        dark
        tile
        flat
        color="#14100e"
        app
        v-model="drawer"
        temporary
      >
        <v-list>
          <v-container fluid>
            <v-layout justify-center align-center>
              <v-flex shrink>
                <div>
                  <span>
                    
                      <v-img
                        height="120px"
                        width="120px"
                        src="https://tramiteinformativo.com/wp-content/uploads/2022/08/logo-sena-verde-png-sin-fondo.png"
                      ></v-img>
                   
                  </span>
                </div>
              </v-flex>
            </v-layout>
          </v-container>

          <v-list-item
            v-for="([icon, text, ruta], i) in items"
            :key="i"
            link
            :href="ruta"
          >
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: "InicioHeader",
  data: () => ({
    
    total: 0,

    links: [],
    drawer: false,
    items: [
      ["mdi-account-check", "INICIO", "/iniciop"],
      // ["mdi-clock-start", "Registro", "/"],
      ["mdi-clipboard-account", "COTIZACION", "/cotizacion"],
      ["mdi-archive", "CONFIGURACION", "/ConfiguracionAdmin"],
      ["mdi-contacts", "INICIAR SESION", "/"],
      ["mdi-account-key", "SALIR", "/"],
    ],
  }),
  
};

</script>


