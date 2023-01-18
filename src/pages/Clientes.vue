<template>

    <v-container class="mt-13">
        <v-row>
            <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10">
                <v-btn class="ml-4" outlined color="red darken-3" @click="Volver1()">
                    Volver
                </v-btn>
            </v-col>
            <v-col cols="5" xs="7" sm="4" md="2" lg="2" xl="2">
                <v-dialog v-model="dialog">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on">
                            Nuevo Cliente
                        </v-btn>
                    </template>
                    <v-card>
                        <v-row>
                            <v-col cols="5"></v-col>
                            <v-col cols="6">
                                <h1 class="ml-10 mb-n9 mt-1"> Datos Cliente </h1>
                            </v-col>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-select v-model="selecionadoTipo" :items="tipoPersona" dense filled
                                                rounded label="Tipo Persona"></v-select>
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
                                            <v-select v-model="selecionadoRol" :items="rolPersona" dense filled rounded
                                                label="Rol">
                                            </v-select>
                                        </v-col>

                                        <v-col cols="6" sm="6" class="mt-n7">
                                            <v-text-field v-model="nombre" label="Nombre*" filled rounded dense>
                                            </v-text-field>
                                        </v-col>

                                        <v-col cols="6" sm="6" class="mt-n7">
                                            <v-text-field v-model="apellidos" label="Apellidos*" persistent-hint
                                                required filled rounded dense></v-text-field>
                                        </v-col>
                                        <v-col cols="12" v-if="selecionadoRol === 'CLIENTE'" >
                                            <v-autocomplete class="mt-n7" v-model="contacto" :items="contactos" :filter="customFilter2"
                                            item-text="nombre" item-value="_id" label="Contacto" filled rounded dense>
                                            </v-autocomplete>
                                        </v-col>

                                        <v-col cols="12" class="mt-n7">
                                            <v-text-field v-model="documento" label="Documento*" filled rounded dense>
                                            </v-text-field>
                                        </v-col>

                                        <v-col cols="6" sm="6" class="mt-n7">
                                            <v-autocomplete v-model="seleccionadoCiudad" :items="Municipio"
                                                item-text="ciudad" item-value="_id" filled rounded dense label="Ciudad"
                                                @click="listarCiudad()">
                                            </v-autocomplete>
                                        </v-col>
                                        <v-col cols="6" sm="6" class="mt-n7">
                                            <v-text-field v-model="direccion" label="Dirección*" filled rounded dense>
                                            </v-text-field>
                                        </v-col>

                                        <v-col cols="6" sm="6" class="mt-n7">
                                            <v-text-field v-model="email" label="Email*" filled rounded dense>
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="6" class="mt-n7">
                                            <v-text-field v-model="celular" label="Celular*" filled rounded dense>
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>

                            </v-card-text>
                        </v-row>
                        <v-card-actions class="mt-n7">
                            <v-spacer></v-spacer>
                            <v-btn class="mr-15" outlined color="red darken-3" @click="Volver()">
                                Cancelar
                            </v-btn>
                            <v-btn color="success" @click="Guardar()"> Guardar Datos </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
        <div>
            <v-dialog v-model="dialog2" persistent max-width="1000px">
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
                                    <v-select v-model="selecionadoRol" :items="rolPersona" dense filled rounded
                                        label="Rol">
                                    </v-select>
                                </v-col>

                                <v-col cols="6" sm="6" class="mt-n7">
                                    <v-text-field v-model="nombre" label="Nombre*" filled rounded dense></v-text-field>
                                </v-col>
                                
                                <v-col cols="6" sm="6" class="mt-n7">
                                    <v-text-field v-model="apellidos" label="Apellidos*" persistent-hint required filled
                                        rounded dense></v-text-field>
                                </v-col>

                                <v-col cols="12" v-if="selecionadoRol === 'CLIENTE'" >
                                    <v-autocomplete class="mt-n7" v-model="contacto" :items="contactos" 
                                    :filter="customFilter2"
                                    item-text="nombre" item-value="_id" label="Contacto" filled rounded dense>
                                    </v-autocomplete>
                                </v-col>

                                <v-col cols="12" sm="12" class="mt-n7">
                                    <v-text-field v-model="documento" label="Documento*" disabled filled rounded dense>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="6" sm="6" class="mt-n7">
                                    <v-autocomplete v-model="seleccionadoCiudad" :items="Municipio" 
                                    item-text="ciudad" item-value="_id" filled rounded dense label="Ciudad" 
                                    @click="listarCiudad()">
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

                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions class="mt-n11">
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="cerrar()">
                            Close
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="editar()">
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
        <template>
            <v-col cols="12">
                <v-card>
                    <v-card-title>
                        Clientes
                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                            hide-details></v-text-field>
                    </v-card-title>

                    <v-data-table :headers="headers" :items="clientes" :search="search">
                        <template v-slot:[`item.estado`]="{ item }">
                            <span class="green--text" v-if="item.estado === 1"> Activo</span>
                            <span class="red--text" v-else>Inactivo</span>
                        </template>
                        <template v-slot:[`item.opciones`]="{ item }">
                            <span v-if="item.estado === 1">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon color="error" rounded v-bind="attrs" v-on="on"
                                            @click="desactivar(item._id)">
                                            mdi-shield-off
                                        </v-icon>
                                    </template>
                                    <span>Inactivar</span>
                                </v-tooltip>

                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon color="blue" rounded v-bind="attrs" v-on="on" @click="sacarid(item)">
                                            mdi-pencil
                                        </v-icon>
                                    </template>
                                    <span>Editar</span>
                                </v-tooltip>

                            </span>
                            <span v-else>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon color="success" rounded v-bind="attrs" v-on="on"
                                            @click="activar(item._id)">
                                            mdi-shield-check-outline
                                        </v-icon>
                                    </template>
                                    <span>Activar</span>
                                </v-tooltip>

                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon color="blue" rounded v-bind="attrs" v-on="on" @click="sacarid(item)">
                                            mdi-pencil
                                        </v-icon>
                                    </template>
                                    <span>Editar</span>
                                </v-tooltip>
                            </span>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>

        </template>

    </v-container>
</template>

<script>
import axios from "axios";

export default {
    name: 'PageMuestras',
    data: () => ({
        clientes: [],
        contactos:[],
        Municipio: [],

        search: "",
        dialog: false,
        dialog2: false,
        usuario: {},
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

        contacto:"",
        seleccionadoCiudad: "",
        selecionadoTipo: "",
        selecionadoRol: "",
        headers: [
            {
                text: "Tipo Persona",
                align: "start",
                value: "tipoPersona",
            },
            {
                text: "Rol",
                align: "start",
                value: "rol",
            },
            {
                text: "Nombres",
                align: "start",
                value: "nombre",
            },
            {
                text: "Apellidos",
                align: "start",
                value: "apellidos",
            },
            {
                text: "C.C.",
                align: "start",
                sortable: false,
                value: "documento",
            },
            {
                text: "Correo",
                align: "start",
                sortable: false,
                value: "email",
            },
            {
                text: "Ciudad",
                align: "start",
                sortable: false,
                value: "ciudad._id",
            },
            {
                text: "Contacto",
                align: "start",
                sortable: false,
                value: "contacto.nombre",
            },
            {
                text: "Dirección",
                align: "start",
                sortable: false,
                value: "direccion",
            },
            {
                text: "Celular",
                align: "start",
                sortable: false,
                value: "celular",
            },
            {
                text: "Cargo",
                align: "start",
                sortable: false,
                value: "cargo",
            },
            {
                text: "Telefono",
                align: "start",
                sortable: false,
                value: "telefono",
            },
            {
                text: "Estado",
                align: "start",
                value: "estado",
            },
            {
                text: "Opciones",
                align: "start",
                value: "opciones",
            },
        ],
        tipoPersona: [
            { text: "Natural", value: "Natural" },
            { text: "Juridica", value: "Juridica" },
        ],
        rolPersona: [
            { text: "CLIENTE", value: "CLIENTE" },
            { text: "CONTACTO", value: "CONTACTO" },
        ],
    }),
    methods: {
        
        cerrar(){
            this.dialog = false;
            this.dialog2 = false
            this.selecionadoTipo = ""
            this.cargo = ""
            this.telefono = ""
            this.selecionadoRol = ""
            this.contacto= ""
            this.nombre = ""
            this.apellidos = ""
            this.documento = ""
            this.direccion = ""
            this.seleccionadoCiudad = ""
            this.celular = ""
            this.email = ""
        },
        Volver() {
            this.dialog = false;
            this.dialog2 = false
            this.selecionadoTipo = ""
            this.cargo = ""
            this.telefono = ""
            this.selecionadoRol = ""
            this.contacto= ""
            this.nombre = ""
            this.apellidos = ""
            this.documento = ""
            this.direccion = ""
            this.seleccionadoCiudad = ""
            this.celular = ""
            this.email = ""
        },
        usuarios() {
            axios.get('https://app-laboratorio.vercel.app/api/usuarios/ListarUsuariosContactos')

                .then((response) => {
                    this.clientes = response.data.usuarios
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        
        listarCiudad() {
            axios
                .get("https://app-laboratorio.vercel.app/api/ciudad/CiudadDepartamento")
                .then((response) => {
                    console.log(response);
                    response.data.ciudad.forEach((city) => {
                        this.Municipio.push(city);
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        desactivar(id) {
            let header = { headers: { token: this.$store.state.token } };
            axios
                .put(`https://app-laboratorio.vercel.app/api/usuarios/desactivar/${id}`, {}, header)
                .then((response) => {
                    console.log(response);
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.usuarios();
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        activar(id) {
            let header = { headers: { token: this.$store.state.token } };
            axios
                .put(`https://app-laboratorio.vercel.app/api/usuarios/activar/${id}`, {}, header)
                .then((response) => {
                    console.log(response);
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.usuarios();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        Guardar() {
            let header = { headers: { token: this.$store.state.token } };
            if (this.selecionadoTipo === "Juridica") {
                axios
                    .post(
                        `https://app-laboratorio.vercel.app/api/usuarios/`,
                        {
                            tipoPersona: this.selecionadoTipo,
                            cargo: this.cargo,
                            telefono: this.telefono,
                            rol: this.selecionadoRol,
                            nombre: this.nombre,
                            apellidos: this.apellidos,
                            documento: this.documento,
                            direccion: this.direccion,
                            ciudad: this.seleccionadoCiudad,
                            contacto:this.contacto,
                            celular: this.celular,
                            email: this.email.toUpperCase(),
                            password: this.documento,
                        },
                        header
                    )
                    .then((response) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.selecionadoTipo = "";
                        this.cargo = "";
                        this.telefono = "";
                        this.selecionadoRol = "";
                        this.nombre = "";
                        this.apellidos = "";
                        this.documento = "";
                        this.direccion = "";
                        this.seleccionadoCiudad = "";
                        this.contacto="";
                        this.celular = "";
                        this.email = "";
                        this.password = "";
                        this.dialog = false;
                        this.usuarios();
                    })
                    .catch((error) => {
                        console.log(error);
                        this.$swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: error.response.data.errores.errors[0].msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    });
            } else {
                let header = { headers: { token: this.$store.state.token } };
                axios
                    .post(
                        `https://app-laboratorio.vercel.app/api/usuarios/`,
                        {
                            tipoPersona: this.selecionadoTipo,
                            rol: this.selecionadoRol,
                            nombre: this.nombre,
                            apellidos: this.apellidos,
                            documento: this.documento,
                            direccion: this.direccion,
                            contacto:this.contacto,
                            ciudad: this.seleccionadoCiudad,
                            celular: this.celular,
                            email: this.email.toUpperCase(),
                            password: this.documento,
                        },
                        header
                    )
                    .then((response) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.selecionadoTipo = "";
                        this.selecionadoRol = "";
                        this.nombre = "";
                        this.apellidos = "";
                        this.documento = "";
                        this.direccion = "";
                        this.seleccionadoCiudad = "";
                        this.celular = "";
                        this.email = "";
                        this.password = "";
                        this.dialog = false;
                        this.usuarios()
                    })
                    .catch((error) => {
                        console.log(error);
                        this.$swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: error.response.data.errores.errors[0].msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    });
            }
        },

        editar() {
            let header = { headers: { "token": this.$store.state.token } }
            if (this.selecionadoTipo === "Juridica") {
                axios.put(`https://app-laboratorio.vercel.app/api/usuarios/datos/${this.id}`, {
                    tipoPersona: this.selecionadoTipo,
                    cargo: this.cargo,
                    telefono: this.telefono,
                    rol: this.selecionadoRol,
                    nombre: this.nombre,
                    apellidos: this.apellidos,
                    documento: this.documento,
                    contacto:this.contacto,
                    direccion: this.direccion,
                    ciudad: this.seleccionadoCiudad,
                    celular: this.celular,
                    email: this.email.toUpperCase(),
                    password: this.documento,
                }, header)
                    .then((response) => {
                        console.log(response);
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Datos Del Usuario actualizados correctamente",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.selecionadoTipo = ""
                        this.cargo = ""
                        this.telefono = ""
                        this.selecionadoRol = ""
                        this.nombre = ""
                        this.apellidos = ""
                        this.documento = ""
                        this.direccion = ""
                        this.seleccionadoCiudad = ""
                        this.celular = ""
                        this.email = ""
                        this.dialog2 = false
                        this.usuarios()
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                let header = { headers: { "token": this.$store.state.token } }
                axios.put(`https://app-laboratorio.vercel.app/api/usuarios/datos/${this.id}`, {
                    tipoPersona: this.selecionadoTipo,
                    rol: this.selecionadoRol,
                    nombre: this.nombre,
                    apellidos: this.apellidos,
                    documento: this.documento1,
                    contacto:this.contacto,
                    direccion: this.direccion,
                    ciudad: this.seleccionadoCiudad,
                    celular: this.celular,
                    email: this.email.toUpperCase(),
                    password: this.documento,
                    
                }, header)
                    .then((response) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.selecionadoTipo = ""
                        this.selecionadoRol = ""
                        this.nombre = ""
                        this.apellidos = ""
                        this.documento = ""
                        this.direccion = ""
                        this.seleccionadoCiudad = ""
                        this.celular = ""
                        this.email = ""
                        this.dialog2 = false
                    })
                    .catch((error) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: error.response.data.errores.errors[0].msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    });
            }
        },
       
        customFilter(item, queryText) {
            const textOne = item.ciudad.toUpperCase();
            const searchText = queryText.toUpperCase();

            return textOne.indexOf(searchText) > -1;
        },

        customFilter2(item, queryText) {
            const textOne = item.nombre
            const searchText = queryText
            return textOne.indexOf(searchText) > -1
        },
        sacarid(usuario) {
            console.log(usuario);
            this.id = usuario._id
            this.dialog2 = true
            this.nombre = usuario.nombre
            this.apellidos = usuario.apellidos
            this.documento = usuario.documento
            this.direccion = usuario.direccion
            this.celular = usuario.celular
            this.email = usuario.email
            this.cargo=usuario.cargo
            this.telefono=usuario.telefono
            this.selecionadoTipo= usuario.tipoPersona
            this.selecionadoRol = usuario.rol
            this.contacto = usuario.contacto
            this.seleccionadoCiudad= usuario.ciudad
        },

        listarContactos() {
            let header = { headers: { "token": this.$store.state.token } };
            axios.get("https://app-laboratorio.vercel.app/api/usuarios/ListarContactos", header)
                .then((response) => {
                    this.contacto = response.data.usuarios
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        Volver1() {
            this.$router.push("/inicioP")
        },
    },
    created() {
        this.usuarios();
        this.listarCiudad();
        this.listarContactos();
    },
}
</script>