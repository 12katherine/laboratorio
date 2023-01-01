<template>
    <v-container fluid class="">
      <div v-if="this.$store.state.token">
        <v-row class="columna">
          <v-col cols="12" class="mt-15">
            <center>
              <h1 class="white--text">Datos Personales</h1>
            </center>
          </v-col>
  
          <v-col cols="12" class="d-flex justify-center">
            <img class="mt-2 ml-13 circular--landscape" src="https://cdn.vuetifyjs.com/images/john.jpg" />
          </v-col>
  
          <v-col cols="5"></v-col>
  
          <v-col cols="3" class="ml-n10 box">
            <h2 class="ml-15 mr-n5">
              {{ $store.state.datos.nombre }}
              <br />
              {{ $store.state.datos.apellidos }}
            </h2>
            <h4 class="grey-darken-1--text ml-15">
              Ciudad:
              {{ $store.state.datos.ciudad }}
            </h4>
            <h3 class="ml-15">
              Celular:
              {{ $store.state.datos.celular }}
            </h3>
            <h3 class="ml-15">
              Tipo Persona: {{ $store.state.datos.tipoPersona }}
            </h3>
            <h3 class="ml-15">Rol: {{ $store.state.datos.rol }}</h3>
            <h3 class="ml-15">Direccion: {{ $store.state.datos.direccion }}</h3>
            <h3 class="ml-15">Documento: {{ $store.state.datos.documento }}</h3>
          </v-col>
  
          <v-col cols="4">
            <v-row>
              <v-col cols="12" class="mt-15"></v-col>
              <v-col cols="12" class="mt-15"></v-col>
  
              <v-col cols="3">
                <v-btn class="accent--text mt-15" outlined rounded @click="dialog1()">
                  <v-icon>mdi-wrench</v-icon>
                  Editar
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <div>
          <v-dialog v-model="dialog" persistent max-width="1000px">
            <v-card>
              <v-card-title>
                <span class="text-h5 mb-n2">Editar Datos Del Usuario</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-select v-model="selecionadoTipo" :items="tipoPersona" dense filled rounded
                        label="Tipo Persona"></v-select>
                    </v-col>
                    <v-col cols="6" class="mt-n7">
                      <div v-if="selecionadoTipo === 'Juridica'">
                        <v-text-field v-model="cargo" label="Cargo" filled rounded dense>
                        </v-text-field>
                      </div>
                    </v-col>
                    <v-col cols="6" class="mt-n7">
                      <div v-if="selecionadoTipo === 'Juridica'">
                        <v-text-field v-model="telefono" label="Telefono" filled rounded dense>
                        </v-text-field>
                      </div>
                    </v-col>
  
                    <v-col cols="12" class="mt-n7">
                      <v-select v-model="selecionadoRol" :items="rolPersona" dense filled rounded label="Rol">
                      </v-select>
                    </v-col>
  
                    <v-col cols="6" sm="6" class="mt-n7">
                      <v-text-field v-model="nombre" label="Nombre*" filled rounded dense></v-text-field>
                    </v-col>
  
                    <v-col cols="6" sm="6" class="mt-n7">
                      <v-text-field v-model="apellidos" label="Apellidos*" persistent-hint required filled rounded
                        dense></v-text-field>
                    </v-col>
  
                    <v-col cols="12" sm="12" class="mt-n7">
                      <v-text-field v-model="documento" label="Documento*" disabled filled rounded dense>
                      </v-text-field>
                    </v-col>
                    <v-col cols="6" sm="6" class="mt-n7">
                      <v-autocomplete v-model="seleccionadoCiudad" :items="Municipio" item-text="ciudad" item-value="_id"
                        filled rounded dense label="Ciudad" @click="listarCiudad()">
                      </v-autocomplete>
                    </v-col>
                    <v-col cols="6" sm="6" class="mt-n7">
                      <v-text-field v-model="direccion" label="Dirección*" filled rounded dense>
                      </v-text-field>
                    </v-col>
  
                    <v-col cols="6" sm="6" class="mt-n7">
                      <v-text-field v-model="email" label="Email*" filled rounded dense></v-text-field>
                    </v-col>
                    <v-col cols="6" class="mt-n7">
                      <v-text-field v-model="celular" label="Celular*" filled rounded dense>
                      </v-text-field>
                    </v-col>
                    <v-col cols="6" sm="6" class="mt-n7">
                      <v-text-field v-model="password" label="Contraseña*" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]" :type="show ? 'text' : 'password'"
                        hint="Al menos 8 carácteres" @click:append="show = !show" filled rounded dense>
                      </v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions class="mt-n11">
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="cerrar()"> Close </v-btn>
                <v-btn color="blue darken-1" text @click="editar()"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>
      <div v-if="this.$store.state.token === ''">
        <v-row>
          <v-col cols="12" class="mb-16 box2">
            <v-row>
              <v-col cols="12" class="d-flex justify-center">
                <img height="450"
                  src="https://cdn.dribbble.com/users/272763/screenshots/4576659/media/e7b35df88e9ab2a2ec158aaad703a7e9.gif" />
              </v-col>
            </v-row>
            <center style="margin: 5vw;">
              <h1 style="    color: var(--border); font-size: 2em;">Su sesión a caducado porfavor inicie sesión
                nuevamente!</h1>
              <p>
                <v-btn rounded color="green" to="/" dark>Iniciar sesión</v-btn>
              </p>
            </center>
          </v-col>
        </v-row>
  
      </div>
    </v-container>
  </template>
  <script>
  import axios from "axios";
  export default {
    name: "PagePerfil",
    data: () => ({
      dialog: false,
      search: "",
      dialog2: false,
      show: false,
      Municipio: [],
      Usuarios: [],
      usuario: {},
      id: "",
      nombre: "",
      apellidos: "",
      documento: "",
      direccion: "",
      ciudad: "",
      celular: "",
      email: "",
      password: "",
      cargo: "",
      telefono: "",
      seleccionadoCiudad: "",
      selecionadoTipo: "",
      selecionadoRol: "",
      rules: {
        required: (value) => !!value || "La contraseña Es obligatoria.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
      tipoPersona: [
        { text: "Natural", value: "Natural" },
        { text: "Juridica", value: "Juridica" },
      ],
      rolPersona: [
        { text: "CLIENTE", value: "CLIENTE" },
        { text: "ADMIN", value: "ADMIN" },
        { text: "TECNICO", value: "TECNICO" },
        { text: "SUPERVISOR", value: "SUPERVISOR" },
        { text: "CIENTIFICO", value: "CIENTIFICO" },
        { text: "RECEPCIONISTA", value: "RECEPCIONISTA" },
      ],
    }),
    methods: {
      dialog1() {
        this.dialog = true;
        //   this.id = usuario._id; 
        //   this.nombre = usuario.nombre;
        //   this.apellidos = usuario.apellidos;
        //   this.documento = usuario.documento;
        //   this.direccion = usuario.direccion;
        //   this.celular = usuario.celular;
        //   this.email = usuario.email;
        //   this.cargo = usuario.cargo;
        //   this.telefono = usuario.telefono;
        //   this.selecionadoTipo = usuario.tipoPersona;
        //   this.selecionadoRol = usuario.rol;
        //   this.contacto = usuario.contacto;
        //   this.seleccionadoCiudad = usuario.ciudad;
      },
      cerrar() {
        this.dialog = false;
      },
      editar() {
        let header = { headers: { token: this.$store.state.token } };
        axios.put(
          `https://app-laboratorio.vercel.app/usuarios/datos/${this.id}`,
          {
            tipoPersona: this.selecionadoTipo,
            cargo: this.cargo,
            rol: this.selecionadoRol,
            nombre: this.nombre,
            apellidos: this.apellidos,
            documento: this.documento,
            direccion: this.direccion,
            ciudad: this.seleccionadoCiudad,
            celular: this.celular,
            email: this.email.toUpperCase(),
            password: this.password,
          },
          header
        );
      },
    },
  };
  </script>
  <style>
  .columna {
    background-color: rgb(204, 87, 4);
    height: 150px;
  }
  .circular--landscape img {
    width: auto;
    height: 100%;
    margin-left: -50px;
  }
  .box {
    border: 10px solid rgb(204, 87, 4);
    border-radius: 1000px;
    border-top-right-radius: 50% 30%;
  }
  </style>