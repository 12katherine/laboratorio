  <template>
    <v-container-fluid>
        <v-img src="https://senasofiaplus.xyz/wp-content/uploads/2018/02/Captura-de-pantalla-completa-23022018-045434-p.m..bmp.jpg">
            <v-row class="b"></v-row>
            <v-row class=" mt-n8">
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="orange darken-1">
                                <v-toolbar-title>Resgistro Usuario</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <!-- <v-form>
                                    <v-text-field v-model="nombre" label="Nombre" type="text"></v-text-field>
                                    <v-text-field v-model="apellidos" label="Apellidos" type="text"></v-text-field>
                                    <v-text-field v-model="documento" label="documento" type="text"></v-text-field>
                                    <v-text-field v-model="direccion" label="Direccion" type="text"></v-text-field>
                                    <v-text-field v-model="telefono" label="Telefono" type="text"></v-text-field>
                                    <v-text-field v-model="email" label="Email" type="text"></v-text-field>
                                    <v-text-field v-model="password" label="Password" type="password"></v-text-field>
                                    
                                </v-form> -->
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="orange darken-1" @click=volver()>Volver</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn color="orange darken-1" to="InicioP">Guardar</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-row>
            <v-row class="b"></v-row>
        </v-img>
    </v-container-fluid>
</template>


<script>
import axios from "axios"
export default {
    name: 'PageRegistro',
    data: () => ({
        nombre: "",
        apellidos: "",
        direccion:"",
        telefono:"",
        email: "",
        password: "",
    }),
    methods: {
        registro() {
            
        
            axios.post("http://localhost:4000/api/usuarios/login",{
                // nombre: this.nombre,
                // apellido: this.apellidos,
                // documento: this.documento,
                // telefono: this.telefono,
                email: this.email,
                password: this.password,
            })
                .then(response => {
                    console.log(response.data);
                    this.$swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Registro exitoso",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.$router.push("/")
                })
                .catch(error => {
                    console.log(error);
                    this.$swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: error.response.data.errors[0].msg,
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
        },
        volver() {
            this.$router.push("/")
        }
    }
}
</script>

<style>
/* .a2 {
    height: 100%;
    margin: 0;
    background-image: url("https://www.todofondos.net/wp-content/uploads/1920x1080-Fondo-de-pantalla-Aesthetic.jpg")
} */

.b {
    height: 15%;
    margin: 0;
}

/* .c {
    height: 70%;
    margin: 0;
}

.d {
    margin: 0;
}

.bodyyyyy {
    font-family: sans-serif;
    display: grid;
    top: auto;
    min-height: 100%;
    grid-template-rows: auto 1fr auto;
    align-items: center;
} */
</style>