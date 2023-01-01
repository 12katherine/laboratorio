
<template>
    <v-container class="mt-15 mb-15">
        <v-row>
            <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10">
                <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver1()">
                    Volver
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" xs="0" sm="0" md="1" lg="1" xl="1"></v-col>
            <v-col cols="12" xs="12" sm="12" md="10" lg="10" xl="10">
                <v-select v-model="valor" :items="TipoCalidad" dense filled rounded label="Seleccione la calidad">
                </v-select>
                <template v-if="valor===1">
                    <v-card>
                        <template>
                            <v-card>
                                <v-card-title>
                                    Calidad informe de resultados
                                </v-card-title>
                                <v-data-table :headers="headers" :items="calidad">
                                    <template v-slot:[`item.editar`]="{item}">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon color="blue" rounded v-bind="attrs" v-on="on"
                                                    @click="editarC(item)">
                                                    mdi-border-color
                                                </v-icon>
                                            </template>
                                            <span>Editar informacion</span>
                                        </v-tooltip>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </template>
                    </v-card>
                </template>
                <template v-if="valor===2">
                    <v-card>
                        <template>
                            <v-card>
                                <v-card-title>
                                    Calidad instructivo toma de muestras
                                </v-card-title>
                                <v-data-table :headers="headers2" :items="calidad">
                                    <template v-slot:[`item.editar`]="{item}">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon color="blue" rounded v-bind="attrs" v-on="on"
                                                    @click="editarC(item)">
                                                    mdi-border-color
                                                </v-icon>
                                            </template>
                                            <span>Editar informacion</span>
                                        </v-tooltip>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </template>
                    </v-card>
                </template>
                <template v-if="valor===3">
                    <v-card>
                        <template>
                            <v-card>
                                <v-card-title>
                                    Calidad listado de muestras
                                </v-card-title>
                                <v-data-table :headers="headers3" :items="calidad">
                                    <template v-slot:[`item.editar`]="{item}">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon color="blue" rounded v-bind="attrs" v-on="on"
                                                    @click="editarC(item)">
                                                    mdi-border-color
                                                </v-icon>
                                            </template>
                                            <span>Editar informacion</span>
                                        </v-tooltip>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </template>
                    </v-card>
                </template>
                <template v-if="valor===4">
                    <v-card>
                        <template>
                            <v-card>
                                <v-card-title>
                                    Calidad oferta de servicios
                                </v-card-title>
                                <v-data-table :headers="headers4" :items="calidad">
                                    <template v-slot:[`item.editar`]="{item}">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon color="blue" rounded v-bind="attrs" v-on="on"
                                                    @click="editarC(item)">
                                                    mdi-border-color
                                                </v-icon>
                                            </template>
                                            <span>Editar informacion</span>
                                        </v-tooltip>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </template>
                    </v-card>
                </template>
                <template v-if="valor===5">
                    <v-card>
                        <template>
                            <v-card>
                                <v-card-title>
                                    Calidad orden de servicios
                                </v-card-title>
                                <v-data-table :headers="headers5" :items="calidad">
                                    <template v-slot:[`item.editar`]="{item}">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon color="blue" rounded v-bind="attrs" v-on="on"
                                                    @click="editarC(item)">
                                                    mdi-border-color
                                                </v-icon>
                                            </template>
                                            <span>Editar informacion</span>
                                        </v-tooltip>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </template>
                    </v-card>
                </template>
                <template v-if="valor===6">
                    <v-card>
                        <template>
                            <v-card>
                                <v-card-title>
                                    Calidad recepcion de muestras
                                </v-card-title>
                                <v-data-table :headers="headers6" :items="calidad">
                                    <template v-slot:[`item.editar`]="{item}">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon color="blue" rounded v-bind="attrs" v-on="on"
                                                    @click="editarC(item)">
                                                    mdi-border-color
                                                </v-icon>
                                            </template>
                                            <span>Editar informacion</span>
                                        </v-tooltip>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </template>
                    </v-card>
                </template>
                <template v-if="valor===7">
                    <v-card>
                        <template>
                            <v-card>
                                <v-card-title>
                                    Calidad seguimiento
                                </v-card-title>
                                <v-data-table :headers="headers7" :items="calidad">
                                    <template v-slot:[`item.editar`]="{item}">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon color="blue" rounded v-bind="attrs" v-on="on"
                                                    @click="editarC(item)">
                                                    mdi-border-color
                                                </v-icon>
                                            </template>
                                            <span>Editar informacion</span>
                                        </v-tooltip>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </template>
                    </v-card>
                </template>
            </v-col>
            <v-col cols="12" xs="0" sm="0" md="1" lg="1" xl="1"></v-col>
        </v-row>
        <div></div>
    </v-container>
</template>
<script>
import axios from "axios";
export default {
    name: 'PageCalidad',
    data: () => ({
        search: '',
        calidad: [],
        valor: 0,
        dialog2: false,
        TipoCalidad: [
            { text: "Informe de resultados", value: 1 },
            { text: "Instructivo toma de muestras", value: 2 },
            { text: "Listado de muestras", value: 3 },
            { text: "Oferta de servicios", value: 4 },
            { text: "Orden de servicios", value: 5 },
            { text: "Recepcion de muestras", value: 6 },
            { text: "Seguimiento", value: 7 },
        ],
        headers: [
            {
                text: 'Aprobación',
                sortable: false,
                align: 'start',
                value: "InformeResultado[0].aprobacion",
            },
            {
                text: 'Codigo',
                align: 'start',
                sortable: false,
                value: 'InformeResultado[0].codigo',
            },
            {
                text: 'Versión',
                align: 'start',
                sortable: false,
                value: 'InformeResultado[0].version',
            },
            {
                text: 'Editar',
                align: 'start',
                sortable: false,
                value: 'editar',
            },
        ],
        headers2: [
            {
                text: 'Aprobación',
                sortable: false,
                align: 'start',
                value: "InstructivoTomaMuestras[0].aprobacion",
            },
            {
                text: 'Codigo',
                align: 'start',
                sortable: false,
                value: 'InstructivoTomaMuestras[0].codigo',
            },
            {
                text: 'Versión',
                align: 'start',
                sortable: false,
                value: 'InstructivoTomaMuestras[0].version',
            },
            {
                text: 'Editar',
                align: 'start',
                sortable: false,
                value: 'editar',
            },
        ],
        headers3: [
            {
                text: 'Aprobación',
                sortable: false,
                align: 'start',
                value: "ListadoMuestras[0].aprobacion",
            },
            {
                text: 'Codigo',
                align: 'start',
                sortable: false,
                value: 'ListadoMuestras[0].codigo',
            },
            {
                text: 'Versión',
                align: 'start',
                sortable: false,
                value: 'ListadoMuestras[0].version',
            },
            {
                text: 'Editar',
                align: 'start',
                sortable: false,
                value: 'editar',
            },
        ],
        headers4: [
            {
                text: 'Aprobación',
                sortable: false,
                align: 'start',
                value: "OfertaServicios[0].aprobacion",
            },
            {
                text: 'Codigo',
                align: 'start',
                sortable: false,
                value: 'OfertaServicios[0].codigo',
            },
            {
                text: 'Versión',
                align: 'start',
                sortable: false,
                value: 'OfertaServicios[0].version',
            },
            {
                text: 'Editar',
                align: 'start',
                sortable: false,
                value: 'editar',
            },
        ],
        headers5: [
            {
                text: 'Aprobación',
                sortable: false,
                align: 'start',
                value: "OrdenServicio[0].aprobacion",
            },
            {
                text: 'Codigo',
                align: 'start',
                sortable: false,
                value: 'OrdenServicio[0].codigo',
            },
            {
                text: 'Versión',
                align: 'start',
                sortable: false,
                value: 'OrdenServicio[0].version',
            },
            {
                text: 'Editar',
                align: 'start',
                sortable: false,
                value: 'editar',
            },
        ],
        headers6: [
            {
                text: 'Aprobación',
                sortable: false,
                align: 'start',
                value: "RecepcionMuestras[0].aprobacion",
            },
            {
                text: 'Codigo',
                align: 'start',
                sortable: false,
                value: 'RecepcionMuestras[0].codigo',
            },
            {
                text: 'Versión',
                align: 'start',
                sortable: false,
                value: 'RecepcionMuestras[0].version',
            },
            {
                text: 'Editar',
                align: 'start',
                sortable: false,
                value: 'editar',
            },
        ],
        headers7: [
            {
                text: 'Aprobación',
                sortable: false,
                align: 'start',
                value: "Seguimiento[0].aprobacion",
            },
            {
                text: 'Codigo',
                align: 'start',
                sortable: false,
                value: 'Seguimiento[0].codigo',
            },
            {
                text: 'Versión',
                align: 'start',
                sortable: false,
                value: 'Seguimiento[0].version',
            },
            {
                text: 'Editar',
                align: 'start',
                sortable: false,
                value: 'editar',
            },
        ],
    }),
    methods: {
        listar() {
            axios.get("https://app-laboratorio.vercel.app/api/calidad/listar")
                .then((response) => {
                    console.log(response);
                    this.calidad = response.data.listado
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        editarC(){
            axios.put(`https://app-laboratorio.vercel.app/api/cotizacion/activar/{}`, {
                ListadoMuestras:[
                    {

                    }
                ],
                InformeResultado:[
                    {

                    }
                ],
                RecepcionMuestras:[
                    {

                    }
                ],
                OrdenServicio:[
                    {

                    }
                ],
                InstructivoTomaMuestras:[
                    {

                    }
                ],
                Seguimiento:[
                    {

                    }
                ],
                

            })
                .then((response) => {
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.listar();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        Volver1() {
            this.$router.push("/ConfiguracionAdmin");
        },
    },
    created() {
        this.listar();
    }
}
</script>