<template>
    <v-container>
        <v-row style="margin: 0px;">
            <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10" class="mt-15">
                <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver1()">
                    Volver
                </v-btn>
            </v-col>

        </v-row>
        <v-row>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12"> 
                <v-select
                v-model="selecionadoColor"
                :items="Colores"
                label="Seleccione un color" 
                ></v-select>
            </v-col>
        </v-row>

        <v-row align="center" justify="center">
            <v-col v-if="selecionadoColor===''"
            cols="12" xs="12" sm="12" md="12" lg="12" xl="12" >
                        <div class="text-center black--text font-weight-Normal" >
                            <h1>Por favor selecciona una opción</h1>
                        </div>
            </v-col>

            <v-col v-if="selecionadoColor==='Color Logo'"
            cols="12" xs="12" sm="12" md="12" lg="12" xl="12" >
                        <div class="text-center black--text font-weight-Normal" >
                            <h1>Color del logo "SENA"</h1>
                        </div>
            </v-col>

            <v-col v-if="selecionadoColor==='Color Logo'" 
            cols="12" xs="12" sm="12" md="12" lg="12" xl="12" 
            class="text-center  flex-column align-center justify-center">
                <div id="mascara" v-bind:style='{ background: `${color}` }'>
                </div>
            </v-col>  

            <v-col v-if="selecionadoColor==='Color Interfaz'"
            cols="12" xs="12" sm="12" md="12" lg="12" xl="12" >
                        <div class="text-center black--text font-weight-Normal" >
                            <h1>Color del interfaz</h1>
                        </div>
            </v-col>

            <v-col v-if="selecionadoColor==='Color Formatos'"
            cols="12" xs="12" sm="12" md="12" lg="12" xl="12" >
                        <div class="text-center black--text font-weight-Normal" >
                            <h1>Color de los formatos</h1>
                        </div>
            </v-col>
        
            <!-- <v-col v-if="selecionadoColor==='Color Temporal'"
            cols="12" xs="12" sm="12" md="12" lg="12" xl="12" >
                        <div class="text-center black--text font-weight-Normal" >
                            <h1>Color Temporal</h1>
                        </div>
            </v-col> -->

            <v-col cols="5" xs="5" sm="5" md="5" lg="5" xl="5" >
            </v-col>
            <v-col cols="7" xs="7" sm="7" md="7" lg="7" xl="7" >
                <v-color-picker class="ml-n3" v-model="color" hide-inputs ></v-color-picker>
            </v-col> 
 
        <div v-if="selecionadoColor==='Color Logo'">
            <v-btn dark v-bind:style='{ background: `${color}` }' @click="GuardarL()">
                        Guardar Color del Logo
            </v-btn>
        </div>

        <div v-if="selecionadoColor==='Color Interfaz'">
            <v-btn dark v-bind:style='{ background: `${color}` }' @click="GuardarI()">
                        Guardar Color del Interfaz
            </v-btn>
        </div>

        <div v-if="selecionadoColor==='Color Formatos'">
            <v-btn dark v-bind:style='{ background: `${color}` }' @click="GuardarF()">
                        Guardar Color de los Formatos
            </v-btn>
        </div>
        <!-- <div v-if="selecionadoColor==='Color Temporal'">
            <v-btn dark v-bind:style='{ background: `${color}` }' @click="GuardarF()">
                        Guardar Color Temporal
            </v-btn>
        </div> -->
        </v-row>


    </v-container>
</template>
<script>
import axios from "axios";
export default {
    name: "PageColores",
    data: () => ({
        type: 'hex',
        hex: '#FF00FF',
        colores: {},
        idcolor: "",
        Colores: ["Color Logo", "Color Interfaz","Color Formatos"],//,"Color Temporal"
        isEditing: false,
        selecionadoColor:""
    }),
    methods: {
        traercolor() {
            this.colores = JSON.parse(localStorage.getItem("color"))
            this.idcolor = this.colores[0]._id
            console.log(this.idcolor);
        },
        Volver1(){
            this.$router.push("/ConfiguracionAdmin")
        },
        GuardarL() {
            this.$swal.fire({
                title: '¿ Desea actualizar el color ?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`,
            }).then((result) => {   
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    axios.put(`/color/${this.idcolor}`, {
                    logo: this.color
            })
                        .then((response) => {
                            this.$swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: response.data.msg,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            this.$router.replace("/")
                            this.$store.commit("setToken", "")
                            this.$store.commit("setDatos", {})
                            localStorage.setItem("token", "")
                        })
                        .catch((error) => {
                            console.log(error);
                        });
               } 
            })
        },
        GuardarI() {
            this.$swal.fire({
                title: '¿ Desea actualizar el color ?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`,
            }).then((result) => {   
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    axios.put(`/color/${this.idcolor}`, {
                    interfaz: this.color
            })
                        .then((response) => {
                            this.$swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: response.data.msg,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            this.$router.replace("/")
                            this.$store.commit("setToken", "")
                            this.$store.commit("setDatos", {})
                            localStorage.setItem("token", "")
                        })
                        .catch((error) => {
                            console.log(error);
                        });
               } 
            })
        },
        GuardarF() {
            this.$swal.fire({
                title: '¿ Desea actualizar el color ?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`,
            }).then((result) => {   
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    axios.put(`/color/${this.idcolor}`, {
                formato: this.color
            })
                        .then((response) => {
                            this.$swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: response.data.msg,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            this.$router.replace("/")
                            this.$store.commit("setToken", "")
                            this.$store.commit("setDatos", {})
                            localStorage.setItem("token", "")
                        })
                        .catch((error) => {
                            console.log(error);
                        });
               } 
            })
        },
        GuardarT() {
            this.$swal.fire({
                title: '¿ Desea actualizar el color ?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`,
            }).then((result) => {   
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    axios.put(`/color/${this.idcolor}`, {
                    temporal: this.color
            })
                        .then((response) => {
                            this.$swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: response.data.msg,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            this.$router.replace("/")
                            this.$store.commit("setToken", "")
                            this.$store.commit("setDatos", {})
                            localStorage.setItem("token", "")
                        })
                        .catch((error) => {
                            console.log(error);
                        });
               } 
            })
        },
    },
    computed: {
        color: {
            get() {
                return this[this.type]
            },
            set(v) {
                this[this.type] = v
            },
        },
        showColor() {
            if (typeof this.color === 'string') return this.color
            return JSON.stringify(Object.keys(this.color).reduce((color, key) => {
                color[key] = Number(this.color[key].toFixed(2))
                return color
            }, {}), null, 2)
        },
        // color2: {
        //     get() {
        //         return this[this.type]
        //     },
        //     set(v) {
        //         this[this.type] = v
        //     },
        // },
        // showColor2() {
        //     if (typeof this.color2 === 'string') return this.color2
        //     return JSON.stringify(Object.keys(this.color2).reduce((color2, key) => {
        //         color2[key] = Number(this.color2[key].toFixed(2))
        //         return color2
        //     }, {}), null, 2)
        // },
        // color3: {
        //     get() {
        //         return this[this.type]
        //     },
        //     set(v) {
        //         this[this.type] = v
        //     },
        // },
        // showColor3() {
        //     if (typeof this.color3 === 'string') return this.color3
        //     return JSON.stringify(Object.keys(this.color3).reduce((color3, key) => {
        //         color3[key] = Number(this.color3[key].toFixed(2))
        //         return color3
        //     }, {}), null, 2)
        // },
    },
    created() {
        this.traercolor();
    }
}
</script>
<style>
#mascara {
    display: inline-block;
    width: 200px;
    height: 200px;
    background: url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sena_Colombia_logo.svg);
}

@supports (-webkit-mask: url("")) or (mask: url("")) {
    #mascara {
        -webkit-mask: url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sena_Colombia_logo.svg);
        mask: url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sena_Colombia_logo.svg);
        mask-size: cover;
    }
}
.centered-input >>>  label {
        text-align: center;
    }
</style>