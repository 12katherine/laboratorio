<template>
  <v-app id="inspire"
  class="login-page">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="orange darken-1">
                
                <v-toolbar-title  class="text-md-center">LABORATORIO LABFICAT</v-toolbar-title>
               </v-toolbar>
              
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    label="email"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="password"
                    type="password"
                  ></v-text-field>
                  
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                
                
                <v-btn color="orange darken-1" rounded dark @click="login()">Iniciar Sesión</v-btn>
          
                 
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "PageLogin",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      console.log(this.email);
      console.log(this.password);
      this.valido = this.email.toUpperCase();

      axios
        .post('https://app-laboratorio.vercel.app/api/usuarios/login',{
          email:this.email,
          password:this.password
        })
        .then((response) => {
          console.log(response.data);
          this.$store.dispatch("setToken", response.data.token);
          this.$store.dispatch("setDatos", response.data.usuarios);
          this.$router.push("/inicioP");
          localStorage.setItem("token", response.data.token)
        })
        
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.login-page{
    background-color: rgb(230, 242, 245);
  background-image: url("https://img.interempresas.net/fotos/2822315.jpeg");
   background-size: cover; 
  
}
</style>
