
<template>
    <v-container style="margin-top: 100px">
        <v-row style="margin: 0" class="mt-n6">
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver()">
                    Volver
                </v-btn>
            </v-col>

            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                <div class="text-center black--text font-weight-Normal">
                    <h1>Cotizaciones Activas</h1>
                </div>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="mt-3">
                <v-row justify="center">
                    <v-dialog v-model="dialog" fullscreen persistent hide-overlay transition="dialog-bottom-transition">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="deep-orange" dark v-bind="attrs" v-on="on">
                                <v-icon> mdi-plus-circle-outline </v-icon>Crear cotización
                            </v-btn>
                        </template>

                        <v-card>
                            <v-toolbar dark>
                                <div v-if="get === 0">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn icon dark @click="cancelar()" v-bind="attrs" v-on="on">
                                                <v-icon>mdi-close</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Cancelar</span>
                                    </v-tooltip>
                                </div>
                                <div v-if="get === 1">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn icon dark @click="cancelar2()" v-bind="attrs" v-on="on">
                                                <v-icon>mdi-close</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Cerrar</span>
                                    </v-tooltip>
                                </div>
                                <v-toolbar-title v-if="BtnEditar === 0 && get === 0">Crear Cotización</v-toolbar-title>
                                <v-toolbar-title v-if="BtnEditar === 1">Editar Cotización</v-toolbar-title>
                                <v-toolbar-title v-if="get === 1">Información Cotización</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <div v-if="get === 0">
                                    <v-toolbar-items>
                                        <v-btn v-if="BtnEditar === 0" dark text @click="crearcotizacion()">
                                            <v-icon> mdi-plus-circle-outline </v-icon>Guardar
                                        </v-btn>
                                        <v-btn v-if="BtnEditar === 1" dark text @click="editarCoti()">
                                            <v-icon> mdi-plus-circle-outline </v-icon>Guardar Cambios
                                        </v-btn>
                                    </v-toolbar-items>
                                </div>
                            </v-toolbar>

                            <v-list three-line subheader>
                                <v-row style="margin: 0">
                                    <v-col cols="12" xs="12" sm="12" md="2" lg="2" xl="3" class="text-center">
                                        <img height="300" width="300 "
                                            src="https://agenciapublicadeempleo.sena.edu.co/imgLayout/logos/LogoSENA-naranja_vector.png" />
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="3">
                                        <div class=" text-center black--text font-italic text-decoration-underline ">
                                            <h1>Oferta de servicios</h1>
                                        </div>
                                        <div class=" text-center black--text mt-2">
                                            <h3>{{ cotiDescripcion }}</h3>
                                        </div>
                                        <div class=" text-center black--text mt-2">
                                            <h3>NIT: {{ cotiNit }}</h3>
                                        </div>
                                        <div class=" text-center black--text mt-2">
                                            <h3>Dirección: {{ cotiDireccion }}</h3>
                                        </div>
                                        <div class=" text-center black--text mt-2">
                                            <h3>Teléfono: {{ cotiTelefono }}</h3>
                                        </div>
                                        <div class=" text-center black--text mt-2">
                                            <h3>Correo electrónico: {{ cotiCorreo }}</h3>
                                        </div>
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="12" md="2" lg="2" xl="3" class="mt-3">
                                        <div class="text-center black--text headline">
                                            <h4>Cotización No.</h4>
                                        </div>
                                        <div v-if="BtnEditar === 0" class="text-center red--text font-italic headline">
                                            {{ numeroactual }}
                                        </div>
                                        <div v-if="BtnEditar === 1" class="text-center red--text font-italic headline">
                                            {{ numeroCoti }}
                                        </div>
                                        <div class="text-center black--text headline mt-10">
                                            <h4>Fecha de emisión:</h4>
                                        </div>
                                        <v-text-field v-if="get === 0" v-model="fechaEmision" type="date" outlined
                                            dense>
                                        </v-text-field>
                                        <div v-if="get === 1" class=" text-center black--text mt-2">
                                            <h3>{{ fechaEmision.slice(0, 10) }}</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="12" sm="12" md="2" lg="2" xl="3" class="mt-3">
                                        <div class="text-center black--text">
                                            <h3>Código</h3>
                                        </div>
                                        <div class="text-center black--text">
                                            <h3>{{ caliCodigo }}</h3>
                                        </div>
                                        <div class="text-center black--text mt-10">
                                            <h3>Aprobación</h3>
                                        </div>
                                        <div class="text-center black--text">
                                            <h3>{{ caliaprobacion }}</h3>
                                        </div>
                                        <div class="text-center black--text mt-10">
                                            <h3>Versión</h3>
                                        </div>
                                        <div class="text-center black--text">
                                            <h3>{{ caliVersion }}</h3>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-list>
                            <v-divider></v-divider>

                            <v-container fluid>
                                <v-row style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722; "
                                    class="mx-5">
                                    <v-col cols="12">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>1. Datos del cliente</h3>
                                        </div>
                                    </v-col>
                                </v-row>

                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Cliente</h3>
                                        </div>
                                    </v-col>

                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0 text-center">
                                        <v-btn v-if="botones == 1" color="deep-orange" dark class="my-3"
                                            @click="Elegircliente()">
                                            Elegir cliente
                                        </v-btn>
                                        <v-row style="margin:0">
                                            <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"></v-col>
                                            <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4">
                                                <div v-if="botones == 0"
                                                    class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                                    hide-details>
                                                    {{ nombre }}
                                                </div>
                                            </v-col>
                                            <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4" class="text-right">
                                                <div v-if="get === 0">
                                                    <v-tooltip v-if="botones === 0" bottom>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-icon dark class="my-3" color="red" rounded v-bind="attrs"
                                                                v-on="on" @click="borrarclientes()">
                                                                mdi-close-circle
                                                            </v-icon>
                                                        </template>
                                                        <span>Eliminar los datos del cliente</span>
                                                    </v-tooltip>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>NIT/ C.C.</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{ documento }}
                                        </div>
                                    </v-col>
                                </v-row>


                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange ">
                                            <h3>Dirección</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{ direccion }}
                                        </div>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Ciudad</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{ ciudad.ciudad }}
                                        </div>
                                    </v-col>
                                </v-row>


                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Departamento</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{ ciudad.departamento }}
                                        </div>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Teléfono</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{ telefono }}
                                        </div>
                                    </v-col>
                                </v-row>

                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Contacto</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{ nombrecontacto }}
                                        </div>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Cargo</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{ cargo }}
                                        </div>
                                    </v-col>
                                </v-row>

                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Celular</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{ celular }}
                                        </div>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Correo electrónico</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{ email }}
                                        </div>
                                    </v-col>
                                </v-row>

                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Validez de la oferta</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field v-if="get === 0" class="mt-5" v-model="validezOferta" type="date"
                                            outlined dense>
                                        </v-text-field>
                                        <div v-if="get === 1" class="pa-0 ma-0 font-weight-black text-center my-3"
                                            full-width hide-details>
                                            {{ validezOferta.slice(0, 10) }}
                                        </div>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Entrega de resultados</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field v-if="get === 0" class="mt-5" v-model="entregaResultados"
                                            type="date" outlined dense> </v-text-field>
                                        <div v-if="get === 1" class="pa-0 ma-0 font-weight-black text-center my-3"
                                            full-width hide-details>
                                            {{ entregaResultados.slice(0, 10) }}
                                        </div>
                                    </v-col>
                                </v-row>

                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Elaborador por</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{ recep.nombre }} {{ recep.apellidos }}
                                        </div>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Cargo</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{ recep.rol }}
                                        </div>
                                    </v-col>
                                </v-row>

                                <v-row class="mx-5"
                                    style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722; border-top: 0px;">
                                    <v-col cols="12" xs="0" sm="0" md="4" lg="4" xl="4">
                                    </v-col>
                                    <v-col cols="12" xs="6" sm="6" md="4" lg="4" xl="4">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>2. Propuesta técnica y económica</h3>
                                        </div>
                                    </v-col>
                                    <v-col class="text-right" cols="12" xs="6" sm="6" md="4" lg="4" xl="4">
                                        <!-- <div v-if="get === 0">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn color="white black--text" dark @click="dialog7 = true">
                                                        Agregar ensayo
                                                        <v-icon color="deep-orange" rounded v-bind="attrs" v-on="on">
                                                            mdi-beaker
                                                        </v-icon>
                                                    </v-btn>
                                                </template>
                                                <span>Crear nuevo ensayo</span>
                                            </v-tooltip>
                                        </div> -->
                                        <!-- <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn @click="dialog7=true" v-bind="attrs" v-on="on">
                                                    <v-icon dark class="my-3" color="red" rounded>
                                                        mdi-beaker
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Crear nuevo ensayo</span>
                                        </v-tooltip> -->
                                    </v-col>
                                </v-row>

                                <!-- item 1 -->
                                <v-row class="mx-5"
                                    style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722; border-top: 0px;">
                                    <v-col cols="12" xs="0" sm="4" md="4" lg="4" xl="4">
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="4" md="4" lg="4" xl="4">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Ítem 1</h3>
                                        </div>
                                    </v-col>
                                    <v-col class="text-right" cols="12" xs="4" sm="4" md="4" lg="4" xl="4">
                                        <div v-if="get === 0">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn color="white" dark @click="dialog4 = true">
                                                        <v-icon color="deep-orange" rounded v-bind="attrs" v-on="on">
                                                            mdi-plus-circle
                                                        </v-icon>
                                                    </v-btn>
                                                </template>
                                                <span>Añadir ensayo</span>
                                            </v-tooltip>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row style=" margin: 0;" class="mx-5">
                                    <v-col cols="12" class="ma-0 pa-0">
                                        <v-simple-table>
                                            <template v-slot:default>
                                                <thead style="  background-color: #ff5722; border-top: 0px;">
                                                    <tr>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px;"
                                                            class="text-center white--text">
                                                            <h2> Código de referencia </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Descripción del ensayo </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Unidades </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Técnica analítica </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Método analítico </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Limite de cuantificación </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Costo del ensayo </h2>
                                                        </th>
                                                    </tr>
                                                </thead>

                                                <tbody v-if="MostrarEditar === 0">
                                                    <tr class="text-center" v-for="(ensayo, i) in ensayosSeleccionados"
                                                        :key="i">
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">
                                                            {{ ensayo.ensayo }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.descripcion }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.unidades }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.tecnica }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.metodo }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.limiteCuantificacion }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            ${{ Intl.NumberFormat("de-DE").format(ensayo.costo) }}
                                                            <v-icon v-if="get === 0" dark class="ml-9" color="red"
                                                                rounded @click="eliminarEnsayos(i, ensayo)">
                                                                mdi-close-circle
                                                            </v-icon>
                                                        </td>
                                                    </tr>
                                                    <tr v-if="ensayosSeleccionados.length <= 0">
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px;"
                                                            class="text-right white--text">
                                                            <h2> Costo del ítem 1 </h2>
                                                        </td>
                                                        <td style=" border: solid 1px; border-color: black; border-left:0px;"
                                                            class="pa-0 ma-0">
                                                            ${{ Intl.NumberFormat("de-DE").format(costo) }}
                                                        </td>
                                                    </tr>
                                                </tbody>


                                                <tbody v-if="MostrarEditar === 1">
                                                    <tr class="text-center" v-for="(ensayo, i) in ensayosSeleccionados"
                                                        :key="i">
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">
                                                            {{ ensayo.ensayo.ensayo }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.ensayo.descripcion }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.ensayo.unidades }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.ensayo.tecnica }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.ensayo.metodo }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.ensayo.limiteCuantificacion }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            ${{ Intl.NumberFormat("de-DE").format(ensayo.costoEnsayo) }}
                                                            <v-icon v-if="get === 0" dark class="ml-9" color="red"
                                                                rounded @click="eliminarEnsayos(i, ensayo)">
                                                                mdi-close-circle
                                                            </v-icon>
                                                        </td>
                                                    </tr>
                                                    <tr v-if="ensayosSeleccionados.length <= 0">
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px;"
                                                            class="text-right white--text">
                                                            <h2> Costo del ítem 1 </h2>
                                                        </td>
                                                        <td style=" border: solid 1px; border-color: black; border-left:0px;"
                                                            class="pa-0 ma-0">
                                                            ${{ Intl.NumberFormat("de-DE").format(costo) }}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-col>
                                </v-row>
                                <!-- item 2 -->
                                <v-row class="mx-5"
                                    style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722; border-top: 0px;">
                                    <v-col cols="12" xs="0" sm="4" md="4" lg="4" xl="4">
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="4" md="4" lg="4" xl="4">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Ítem 2</h3>
                                        </div>
                                    </v-col>
                                    <v-col class="text-right" cols="12" xs="4" sm="4" md="4" lg="4" xl="4">
                                        <div v-if="get === 0">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn color="white" dark @click="dialog5 = true">
                                                        <v-icon color="deep-orange" rounded v-bind="attrs" v-on="on">
                                                            mdi-plus-circle
                                                        </v-icon>
                                                    </v-btn>
                                                </template>
                                                <span>Añadir ensayo</span>
                                            </v-tooltip>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row style=" margin: 0;" class="mx-5">
                                    <v-col cols="12" class="ma-0 pa-0">
                                        <v-simple-table>
                                            <template v-slot:default>
                                                <thead style="  background-color: #ff5722; border-top: 0px;">
                                                    <tr>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px;"
                                                            class="text-center white--text">
                                                            <h2> Código de referencia </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Descripción del ensayo </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Unidades </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Técnica analítica </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Método analítico </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Limite de cuantificación </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Costo del ensayo </h2>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody v-if="MostrarEditar2 === 0">
                                                    <tr class="text-center" v-for="(ensayo, i) in ensayosSeleccionados2"
                                                        :key="i">
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">
                                                            {{ ensayo.ensayo }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.descripcion }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.unidades }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.tecnica }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.metodo }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.limiteCuantificacion }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            ${{ Intl.NumberFormat("de-DE").format(ensayo.costo) }}
                                                            <v-icon v-if="get === 0" dark class="ml-9" color="red"
                                                                rounded @click="eliminarEnsayos2(i, ensayo)">
                                                                mdi-close-circle
                                                            </v-icon>
                                                        </td>
                                                    </tr>
                                                    <tr v-if="ensayosSeleccionados2.length <= 0">
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px;"
                                                            class="text-right white--text">
                                                            <h2> Costo del ítem 2 </h2>
                                                        </td>
                                                        <td style=" border: solid 1px; border-color: black; border-left:0px;"
                                                            class="pa-0 ma-0">
                                                            ${{ Intl.NumberFormat("de-DE").format(costo2) }}
                                                        </td>
                                                    </tr>
                                                </tbody>

                                                <tbody v-if="MostrarEditar2 === 1">
                                                    <tr class="text-center" v-for="(ensayo, i) in ensayosSeleccionados2"
                                                        :key="i">
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">
                                                            {{ ensayo.ensayo.ensayo }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.ensayo.descripcion }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.ensayo.unidades }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.ensayo.tecnica }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.ensayo.metodo }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.ensayo.limiteCuantificacion }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            ${{ Intl.NumberFormat("de-DE").format(ensayo.costoEnsayo) }}
                                                            <v-icon v-if="get === 0" dark class="ml-9" color="red"
                                                                rounded @click="eliminarEnsayos2(i, ensayo)">
                                                                mdi-close-circle
                                                            </v-icon>
                                                        </td>
                                                    </tr>
                                                    <tr v-if="ensayosSeleccionados2.length <= 0">
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px;"
                                                            class="text-right white--text">
                                                            <h2> Costo del ítem 2 </h2>
                                                        </td>
                                                        <td style=" border: solid 1px; border-color: black; border-left:0px;"
                                                            class="pa-0 ma-0">
                                                            ${{ Intl.NumberFormat("de-DE").format(costo2) }}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-col>
                                </v-row>
                                <!-- item 3 -->
                                <v-row class="mx-5"
                                    style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722; border-top: 0px;">
                                    <v-col cols="12" xs="0" sm="4" md="4" lg="4" xl="4">
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="4" md="4" lg="4" xl="4">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Ítem 3</h3>
                                        </div>
                                    </v-col>
                                    <v-col class="text-right" cols="12" xs="4" sm="4" md="4" lg="4" xl="4">
                                        <div v-if="get === 0">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn color="white" dark @click="dialog6 = true">
                                                        <v-icon color="deep-orange" rounded v-bind="attrs" v-on="on">
                                                            mdi-plus-circle
                                                        </v-icon>
                                                    </v-btn>
                                                </template>
                                                <span>Añadir ensayo</span>
                                            </v-tooltip>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row style=" margin: 0;" class="mx-5">
                                    <v-col cols="12" class="ma-0 pa-0">
                                        <v-simple-table>
                                            <template v-slot:default>
                                                <thead style="  background-color: #ff5722; border-top: 0px;">
                                                    <tr>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px;"
                                                            class="text-center white--text">
                                                            <h2> Código de referencia </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Descripción del ensayo </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Unidades </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Técnica analítica </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Método analítico </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Limite de cuantificación </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Costo del ensayo </h2>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody v-if="MostrarEditar3 === 0">
                                                    <tr class="text-center" v-for="(ensayo, i) in ensayosSeleccionados3"
                                                        :key="i">
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">
                                                            {{ ensayo.ensayo }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.descripcion }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.unidades }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.tecnica }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.metodo }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.limiteCuantificacion }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            ${{ Intl.NumberFormat("de-DE").format(ensayo.costo) }}
                                                            <v-icon v-if="get === 0" dark class="ml-9" color="red"
                                                                rounded @click="eliminarEnsayos3(i, ensayo)">
                                                                mdi-close-circle
                                                            </v-icon>
                                                        </td>
                                                    </tr>
                                                    <tr v-if="ensayosSeleccionados3.length <= 0">
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px;"
                                                            class="text-right white--text">
                                                            <h2> Costo del ítem 3 </h2>
                                                        </td>
                                                        <td style=" border: solid 1px; border-color: black; border-left:0px;"
                                                            class="pa-0 ma-0">
                                                            ${{ Intl.NumberFormat("de-DE").format(costo3) }}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right:0px; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px;"
                                                            class="text-right white--text">
                                                            <h2> Subtotal - Descuento </h2>
                                                        </td>
                                                        <td style=" border: solid 1px; border-color: black; border-left:0px;  border-top:0px;"
                                                            class="pa-0 ma-0">
                                                            ${{ Intl.NumberFormat("de-DE").format(sumar) }}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right:0px; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;"
                                                            class="text-center white--text">
                                                            <h2 class="mb-10">Observaciones de la propuesta técnica y
                                                                económica</h2>
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px;"
                                                            class="text-right white--text">
                                                            <h2> Descuento </h2>
                                                        </td>
                                                        <td v-if="get === 0"
                                                            style=" border: solid 1px; border-color: black; border-left:0px;  border-top:0px;"
                                                            class="pa-0 ma-0">
                                                            <v-text-field hide-details v-model="descuento"
                                                                type="number">
                                                            </v-text-field>
                                                        </td>
                                                        <td v-if="get === 1"
                                                            style=" border: solid 1px; border-color: black; border-left:0px;  border-top:0px;"
                                                            class="pa-0 ma-0">
                                                            ${{ Intl.NumberFormat("de-DE").format(descuento) }}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px;  border-right: 0px;  border-top: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-left: 0px; border-right: 0px;  border-top: 0px;">
                                                        </td>
                                                        <td class="text-center"
                                                            style="background-color: #ff5722; border: solid 1px; width: 500px; border-left: 0px; border-right: 0px;  border-top: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-left: 0px; border-right: 0px;  border-top: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-left: 0px; border-right: 0px;  border-top: 0px;">

                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px;  border-top: 0px;"
                                                            class="text-right white--text">
                                                            <h2> IVA </h2>
                                                        </td>
                                                        <td style=" border: solid 1px; border-color: black; border-left:0px;  border-top:0px;  border-top: 0px;"
                                                            class="pa-0 ma-0">
                                                            <div>{{ iva }}%</div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right: 0px; ">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px; border-top: 0px;">
                                                            <v-textarea hide-details style="background-color: white;"
                                                                v-model="cotiObservacion" auto-grow filled
                                                                color="deep-orange" label="Observacion" rows="1">
                                                            </v-textarea>
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px; border-top: 0px;">

                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px;"
                                                            class="text-right white--text">
                                                            <h2> Total </h2>
                                                        </td>
                                                        <td style=" border: solid 1px; border-color: black; border-left:0px;  border-top:0px;"
                                                            class="pa-0 ma-0">
                                                            ${{ Intl.NumberFormat("de-DE").format(resultIva) }}
                                                        </td>
                                                    </tr>
                                                </tbody>

                                                <tbody v-if="MostrarEditar3 === 1">
                                                    <tr class="text-center" v-for="(ensayo, i) in ensayosSeleccionados3"
                                                        :key="i">
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">
                                                            {{ ensayo.ensayo.ensayo }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.ensayo.descripcion }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.ensayo.unidades }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.ensayo.tecnica }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.ensayo.metodo }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            {{ ensayo.ensayo.limiteCuantificacion }}
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            ${{ Intl.NumberFormat("de-DE").format(ensayo.costoEnsayo) }}
                                                            <v-icon v-if="get === 0" dark class="ml-9" color="red"
                                                                rounded @click="eliminarEnsayos3(i, ensayo)">
                                                                mdi-close-circle
                                                            </v-icon>
                                                        </td>
                                                    </tr>
                                                    <tr v-if="ensayosSeleccionados3.length <= 0">
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px;"
                                                            class="text-right white--text">
                                                            <h2> Costo del ítem 3 </h2>
                                                        </td>
                                                        <td style=" border: solid 1px; border-color: black; border-left:0px;"
                                                            class="pa-0 ma-0">
                                                            ${{ Intl.NumberFormat("de-DE").format(costo3) }}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right:0px; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px;"
                                                            class="text-right white--text">
                                                            <h2> Subtotal - Descuento </h2>
                                                        </td>
                                                        <td style=" border: solid 1px; border-color: black; border-left:0px;  border-top:0px;"
                                                            class="pa-0 ma-0">
                                                            ${{ Intl.NumberFormat("de-DE").format(sumar) }}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right:0px; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;"
                                                            class="text-center white--text">
                                                            <h2 class="mb-10">Observaciones de la propuesta técnica y
                                                                económica</h2>
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px;"
                                                            class="text-right white--text">
                                                            <h2> Descuento </h2>
                                                        </td>
                                                        <td v-if="get === 0"
                                                            style=" border: solid 1px; border-color: black; border-left:0px;  border-top:0px;"
                                                            class="pa-0 ma-0">
                                                            <v-text-field v-model="descuento" type="number">
                                                            </v-text-field>
                                                        </td>
                                                        <td v-if="get === 1"
                                                            style=" border: solid 1px; border-color: black; border-left:0px;  border-top:0px;"
                                                            class="pa-0 ma-0">
                                                            ${{ Intl.NumberFormat("de-DE").format(descuento) }}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right:0px;  border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-right:0px; border-left: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-right:0px; border-left: 0px; border-top: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-right:0px; border-left: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-right:0px; border-left: 0px; border-top: 0px;">

                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px;"
                                                            class="text-right white--text">
                                                            <h2> IVA </h2>
                                                        </td>
                                                        <td style=" border: solid 1px; border-color: black; border-left:0px;  border-top:0px;"
                                                            class="pa-0 ma-0">
                                                            <div>{{ iva }}%</div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px; border-top: 0px;">
                                                            <v-textarea hide-details style="background-color: white;"
                                                                v-model="cotiObservacion" auto-grow filled
                                                                color="deep-orange" label="Observacion" rows="1">
                                                            </v-textarea>
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px; border-top: 0px;">

                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px;"
                                                            class="text-right white--text">
                                                            <h2> Total </h2>
                                                        </td>
                                                        <td style=" border: solid 1px; border-color: black; border-left:0px;  border-top:0px;"
                                                            class="pa-0 ma-0">
                                                            ${{ Intl.NumberFormat("de-DE").format(resultIva) }}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-col>
                                </v-row>
                                <v-row style=" margin: 0;" class="mx-5">
                                    <v-col cols="12" xs="6" sm="6" md="4" lg="4" xl="4">
                                        <v-btn div v-if="get === 0" color="red" dark @click="cancelar()">
                                            <v-icon>mdi-close</v-icon> Cancelar
                                        </v-btn>
                                        <v-btn div v-if="get === 1" color="red" dark @click="cancelar2()">
                                            <v-icon>mdi-close</v-icon> Cerrar
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="12" xs="0" sm="0" md="4" lg="4" xl="4"></v-col>
                                    <v-col cols="12" xs="6" sm="6" md="4" lg="4" xl="4" class="text-right">
                                        <div v-if="get === 0">
                                            <v-btn v-if="BtnEditar === 0" dark color="green" @click="crearcotizacion()">
                                                <v-icon> mdi-plus-circle-outline </v-icon>Guardar
                                            </v-btn>
                                            <v-btn v-if="BtnEditar === 1" dark color="green" @click="editarCoti()">
                                                <v-icon> mdi-plus-circle-outline </v-icon>Guardar Cambios
                                            </v-btn>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-dialog>
                </v-row>
            </v-col>
        </v-row>
        <v-row style="margin: 0">
            <v-col cols="12">
                <template>
                    <v-card>
                        <v-card-title>
                            Buscar cotización
                            <v-spacer></v-spacer>
                            <v-radio-group v-model="cotis" row>
                                <v-radio @click="listar()" color="orange" label="En proceso" value="2"></v-radio>
                                <v-radio @click="listar()" color="green" label="Confirmadas" value="1"></v-radio>
                                <v-radio @click="listar()" color="red" label="Rechazadas" value="0"></v-radio>
                            </v-radio-group>
                            <v-spacer></v-spacer>
                            <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar cliente" single-line
                                hide-details></v-text-field>
                        </v-card-title>
                        <v-data-table :headers="headers2" :items="cotizaciones" :search="search">
                            <template v-slot:[`item.fecha`]="{ item }">
                                {{ fechaSalida(item.fecha_emision) }}
                            </template>
                            <template v-slot:[`item.opciones`]="{ item }">
                                <template v-if="item.estado === 2">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon color="green" rounded v-bind="attrs" v-on="on"
                                                @click="activar(item._id)">
                                                mdi-check-circle
                                            </v-icon>
                                        </template>
                                        <span>Comfirmar</span>
                                    </v-tooltip>
                                </template>
                                <!--activarRe()-->
                                <template v-if="item.estado === 1">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon color="orange" rounded v-bind="attrs" v-on="on"
                                                @click="activarRe(item._id)">
                                                mdi-minus-circle
                                            </v-icon>
                                        </template>
                                        <span>Cambiar a estado "En proceso..."</span>
                                    </v-tooltip> 
                                 </template>
                                <template v-if="item.estado === 0">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon color="orange" rounded v-bind="attrs" v-on="on"
                                                @click="desactivar(item._id)">
                                                mdi-minus-circle
                                            </v-icon>
                                        </template>
                                        <span>Cambiar a estado "En proceso..."</span>
                                    </v-tooltip>
                                </template>
                                <template>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon class="ml-3" color="blue" @click="editar(item)" rounded
                                                v-bind="attrs" v-on="on">
                                                mdi-pencil
                                            </v-icon>
                                        </template>
                                        <span>Editar</span>
                                    </v-tooltip>
                                </template>
                                <template>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon class="ml-3" color="black" @click="traerDatos(item)" rounded
                                                v-bind="attrs" v-on="on">
                                                mdi-printer
                                            </v-icon>
                                        </template>
                                        <span>Imprimir cotización</span>
                                    </v-tooltip>
                                </template>
                            </template>
                            <template v-slot:[`item.estado`]="{ item }">
                                <span class="orange--text" v-if="item.estado === 2">En proceso...</span>
                                <span class="green--text" v-if="item.estado === 1">Comfirmada</span>
                                <span class="red--text" v-if="item.estado === 0">Rechazada</span>
                            </template>
                        </v-data-table>
                    </v-card>
                </template>
            </v-col>
        </v-row>
        
        <v-row style="margin:0px">
            <v-col class="text-left" cols="12">
                <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver()">
                    Volver
                </v-btn>
            </v-col>
        </v-row>
        <v-dialog v-model="dialog2" max-width="1000px">
            <v-card>
                <template>
                    <v-card>
                        <v-card-title>
                            Seleccione un cliente
                            <v-spacer></v-spacer>
                            <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar cliente" single-line
                                hide-details></v-text-field>
                        </v-card-title>
                        <v-data-table :headers="headers" :items="clientes" :search="search">
                            <template v-slot:[`item.agregar`]="{ item }">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon color="green" rounded v-bind="attrs" v-on="on"
                                            @click="seleccionarclientes(item)">
                                            mdi-plus-circle
                                        </v-icon>
                                    </template>
                                    <span>Añadir cliente</span>
                                </v-tooltip>
                            </template>
                        </v-data-table>
                    </v-card>
                </template>
                <div class="text-center mt-3">
                    <h2>¿ Desea crear un nuevo cliente ?</h2>
                </div>
                <v-card-actions>
                    <v-row style="margin:0">
                        <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4">
                            <v-btn color="green" rounded dark @click="aceptar()">
                                Crear
                            </v-btn>
                        </v-col>
                        <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4" class="text-right">
                        </v-col>
                        <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4" class="text-right">
                            <v-btn color="red" @click="dialog2 = false" rounded dark>
                                Cerrar
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-dialog>


        <v-dialog v-model="dialog3" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark>
                    <v-btn icon dark @click="dialog3 = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Crear nuevo cliente</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items v-if="si === 2">
                        <v-btn dark text @click="crearContacto()">
                            <v-icon> mdi-plus-circle-outline </v-icon>Guardar
                        </v-btn>
                    </v-toolbar-items>
                    <v-toolbar-items v-if="si === 0">
                        <v-btn dark text @click="crearCliente()">
                            <v-icon> mdi-plus-circle-outline </v-icon>Guardar
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>

                <div v-if="si === 2">
                    <v-row style="margin:0">
                        <v-col cols="12" xs="0" sm="0" md="2" lg="2" xl="2"></v-col>
                        <v-col class="text-center" cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
                            <h1>Ingrese los datos del contacto del cliente</h1>
                        </v-col>
                        <v-col cols="12" xs="0" sm="0" md="2" lg="2" xl="2"></v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" xs="0" sm="0" md="2" lg="2" xl="2"> </v-col>

                        <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" class="items-center">
                            <br><br>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Tipo de persona:
                                </span>
                                <span>
                                    <v-select :items="tipos" v-model="tipoPersona" label="Tipo de persona">
                                    </v-select>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Nombres:
                                </span>
                                <span>
                                    <v-text-field v-model="nombre" label="Nombres" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1  black--text font-weight-Normal">
                                    Apellidos:
                                </span>
                                <span>
                                    <v-text-field v-model="apellidos" label="Apellidos" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Documento:
                                </span>
                                <span>
                                    <v-text-field v-model="documento" label="Documento" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Dirección:
                                </span>
                                <span>
                                    <v-text-field v-model="direccion" label="Dirección" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Ciudad:
                                </span>
                                <v-autocomplete class="mt-2" v-model="ciudad" :items="Municipio" :filter="customFilter"
                                    item-text="ciudad" item-value="_id" label="Ciudad">
                                </v-autocomplete>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Celular:
                                </span>
                                <span>
                                    <v-text-field v-model="celular" label="Telefono" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Correo:
                                </span>
                                <span>
                                    <v-text-field v-model="email" label="Correo" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                            <div v-if="tipoPersona === 'Juridica'">
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Cargo:
                                </span>
                                <span>
                                    <v-text-field v-model="cargo" label="Telefono" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                            <div v-if="tipoPersona === 'Juridica'">
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Telefono:
                                </span>
                                <span>
                                    <v-text-field v-model="telefono" label="Telefono" type="text">
                                    </v-text-field>
                                </span>
                            </div>

                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-row style="margin:0">
                            <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4">
                                <v-btn color="green" @click="crearContacto()" rounded dark>
                                    Crear
                                </v-btn>
                            </v-col>
                            <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4" class="text-right">
                            </v-col>
                            <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4" class="text-right">
                                <v-btn color="red" @click="dialog3 = false" rounded dark>
                                    Cancelar
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </div>

                <div v-if="si === 0">
                    <v-row style="margin:0">
                        <v-col cols="12" xs="0" sm="0" md="2" lg="2" xl="2"></v-col>
                        <v-col class="text-center" cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
                            <h1>Ingresar los datos del cliente</h1>
                        </v-col>
                        <v-col cols="12" xs="0" sm="0" md="2" lg="2" xl="2"></v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" xs="0" sm="0" md="2" lg="2" xl="2"> </v-col>
                        <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" class="items-center">
                            <br><br>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Tipo de persona:
                                </span>
                                <span>
                                    <v-select :items="tipos" v-model="tipoPersona" label="Tipo de persona">
                                    </v-select>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Nombres:
                                </span>
                                <span>
                                    <v-text-field v-model="nombre" label="Nombres" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1  black--text font-weight-Normal">
                                    Apellidos:
                                </span>
                                <span>
                                    <v-text-field v-model="apellidos" label="Apellidos" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Documento:
                                </span>
                                <span>
                                    <v-text-field v-model="documento" label="Documento" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Contacto:
                                </span>
                                <v-autocomplete class="mt-2" v-model="contacto" :items="contactos"
                                    :filter="customFilter2" item-text="nombre" item-value="_id" label="Contactos">
                                </v-autocomplete>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Dirección:
                                </span>
                                <span>
                                    <v-text-field v-model="direccion" label="Dirección" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Ciudad:
                                </span>
                                <v-autocomplete class="mt-2" v-model="ciudad" :items="Municipio" :filter="customFilter"
                                    item-text="ciudad" item-value="_id" label="Ciudad">
                                </v-autocomplete>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Celular:
                                </span>
                                <span>
                                    <v-text-field v-model="celular" label="Celular" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Correo:
                                </span>
                                <span>
                                    <v-text-field v-model="email" label="Correo" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                            <div v-if="tipoPersona === 'Juridica'">
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Cargo:
                                </span>
                                <span>
                                    <v-text-field v-model="cargo" label="Cargo" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                            <div v-if="tipoPersona === 'Juridica'">
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Telefono:
                                </span>
                                <span>
                                    <v-text-field v-model="telefono" label="Telefono" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-row style="margin:0">
                            <v-col cols="12" xs="4" sm="4" md="4" lg="4" xl="4">
                                <v-btn color="green" @click="crearCliente()" rounded dark>
                                    Crear
                                </v-btn>
                            </v-col>
                            <v-col cols="12" xs="4" sm="4" md="4" lg="4" xl="4" class="text-right">
                            </v-col>
                            <v-col cols="12" xs="4" sm="4" md="4" lg="4" xl="4" class="text-right">
                                <v-btn color="red" @click="dialog3 = false" rounded dark>
                                    Cancelar
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </div>

            </v-card>
        </v-dialog>
        <!-- ensayo -->
        <v-dialog v-model="dialog4" max-width="1000px">
            <v-card>
                <template>
                    <v-card>
                        <v-card-title>
                            Seleccione un ensayo
                            <v-spacer></v-spacer>
                            <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar ensayo" single-line
                                hide-details></v-text-field>
                        </v-card-title>
                        <v-data-table :headers="headers3" :items="ensayos" :search="search">
                            <template slot="item.agregar" slot-scope="props">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon color="green" rounded v-bind="attrs" v-on="on"
                                            @click="seleccionarEnsayos(props.item)">
                                            mdi-plus-circle
                                        </v-icon>
                                    </template>
                                    <span>Añadir ensayo</span>
                                </v-tooltip>
                            </template>
                            <template v-slot:[`item.ensayocosto`]="{ item }">
                                <template>
                                    ${{ Intl.NumberFormat("de-DE").format(item.costo) }}
                                </template>
                            </template>
                        </v-data-table>
                    </v-card>
                </template>
                <v-card-actions>
                    <v-row style="margin:0">
                        <v-col cols="12" class="text-center">
                            <v-btn color="red" @click="dialog4 = false" rounded dark>
                                Cerrar
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- 2 -->
        <v-dialog v-model="dialog5" max-width="1000px">
            <v-card>
                <template>
                    <v-card>
                        <v-card-title>
                            Seleccione un ensayo
                            <v-spacer></v-spacer>
                            <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar ensayo" single-line
                                hide-details></v-text-field>
                        </v-card-title>
                        <v-data-table :headers="headers3" :items="ensayos" :search="search">
                            <template slot="item.agregar" slot-scope="props">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon color="green" rounded v-bind="attrs" v-on="on"
                                            @click="seleccionarEnsayos2(props.item)">
                                            mdi-plus-circle
                                        </v-icon>
                                    </template>
                                    <span>Añadir ensayo</span>
                                </v-tooltip>
                            </template>
                            <template v-slot:[`item.ensayocosto`]="{ item }">
                                <template>
                                    ${{ Intl.NumberFormat("de-DE").format(item.costo) }}
                                </template>
                            </template>
                        </v-data-table>
                    </v-card>
                </template>
                <v-card-actions>
                    <v-row style="margin:0">
                        <v-col cols="12" class="text-center">
                            <v-btn color="red" @click="dialog5 = false" rounded dark>
                                Cerrar
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- 3 -->
        <v-dialog v-model="dialog6" max-width="1000px">
            <v-card>
                <template>
                    <v-card>
                        <v-card-title>
                            Seleccione un ensayo
                            <v-spacer></v-spacer>
                            <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar ensayo" single-line
                                hide-details></v-text-field>
                        </v-card-title>
                        <v-data-table :headers="headers3" :items="ensayos" :search="search">
                            <template slot="item.agregar" slot-scope="props">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon color="green" rounded v-bind="attrs" v-on="on"
                                            @click="seleccionarEnsayos3(props.item)">
                                            mdi-plus-circle
                                        </v-icon>
                                    </template>
                                    <span>Añadir ensayo</span>
                                </v-tooltip>
                            </template>
                            <template v-slot:[`item.ensayocosto`]="{ item }">
                                <template>
                                    ${{ Intl.NumberFormat("de-DE").format(item.costo) }}
                                </template>
                            </template>
                        </v-data-table>
                    </v-card>
                </template>
                <v-card-actions>
                    <v-row style="margin:0">
                        <v-col cols="12" class="text-center">
                            <v-btn color="red" @click="dialog6 = false" rounded dark>
                                Cerrar
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- ensayos -->

        <!-- <v-dialog v-model="dialog7" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark>
                    <v-btn icon dark @click="dialog7 = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Crear nuevo ensayo</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="crearEnsayo()">
                            <v-icon> mdi-plus-circle-outline </v-icon>Guardar
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <div>
                    <v-row style="margin:0">
                        <v-col cols="12" xs="0" sm="0" md="2" lg="2" xl="2"></v-col>
                        <v-col class="text-center" cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
                            <h1>Ingresar los del ensayo</h1>
                        </v-col>
                        <v-col cols="12" xs="0" sm="0" md="2" lg="2" xl="2"></v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" xs="0" sm="0" md="2" lg="2" xl="2"> </v-col>
                        <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" class="items-center">
                            <br><br>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Número del ensayo:
                                </span>
                                <span>
                                    <v-text-field v-model="ensayo" label="Número del ensayo" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Metodo:
                                </span>
                                <span>
                                    <v-text-field v-model="metodo" label="Metodo" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1  black--text font-weight-Normal">
                                    Tecnica:
                                </span>
                                <span>
                                    <v-text-field v-model="tecnica" label="Tecnica" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Valor Minimo:
                                </span>
                                <span>
                                    <v-text-field v-model="valorMinimo" label="Valor Minimo" type="number">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Valor Maximo:
                                </span>
                                <span>
                                    <v-text-field v-model="valorMaximo" label="Valor Maximo" type="number">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Unidades:
                                </span>
                                <span>
                                    <v-text-field v-model="unidades" label="Unidades" type="number">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    costo:
                                </span>
                                <span>
                                    <v-text-field v-model="costo4" label="costo" type="number">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Descripcion:
                                </span>
                                <span>
                                    <v-text-field v-model="descripcion" label="Descripcion" type="text">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Limite de cuantificación:
                                </span>
                                <span>
                                    <v-text-field v-model="limiteCuantificacion" label="Limite de cuantificación"
                                        type="number">
                                    </v-text-field>
                                </span>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Titular:
                                </span>
                                <v-autocomplete class="mt-2" v-model="titular" :items="soloUsuarios"
                                    :filter="customFilter" item-text="nombre" item-value="_id" label="Titular">
                                </v-autocomplete>
                            </div>
                            <div>
                                <span class="text-center display-1 black--text font-weight-Normal">
                                    Suplente:
                                </span>
                                <v-autocomplete class="mt-2" v-model="suplente" :items="soloUsuarios"
                                    :filter="customFilter" item-text="nombre" item-value="_id" label="Suplente">
                                </v-autocomplete>
                            </div>
                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-row style="margin:0">
                            <v-col cols="12" xs="4" sm="4" md="4" lg="4" xl="4">
                                <v-btn color="green" @click="crearEnsayo()" rounded dark>
                                    Crear
                                </v-btn>
                            </v-col>
                            <v-col cols="12" xs="4" sm="4" md="4" lg="4" xl="4" class="text-right">
                            </v-col>
                            <v-col cols="12" xs="4" sm="4" md="4" lg="4" xl="4" class="text-right">
                                <v-btn color="red" @click="dialog7 = false" rounded dark>
                                    Cancelar
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </div>
            </v-card>
        </v-dialog> -->
        <template>
            <v-row justify="center">
                <v-dialog v-model="dialog8" persistent max-width="600px">
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">Digite el motivo del rechazo</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="motivo" label="Motivo*" required></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog8 = false">
                                Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="confirmar()">
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </template>
    </v-container>
</template>

<script>
import axios from "axios";
export default {
    name: "PageCotizacion",

    data() {
        return {
            search: '',
            search2: '',
            ciudades: [],
            cotizaciones: [],
            dialog: false,
            dialog2: false,
            dialog3: false,
            dialog4: false,
            dialog5: false,
            dialog6: false,
            dialog7: false,
            dialog8: false,
            notifications: false,
            sound: true,
            widgets: false,
            calidadOferta: [],
            datos: [],
            numerocoti: 0,
            numeroactual: "",
            clientes: [],
            nombrecontacto: "",
            clientesNombres: [],
            si: 1,
            botones: 1,
            pos: 0,
            tipoPersona: "",
            nombre: "",
            apellidos: "",
            contacto: "",
            documento: "",
            direccion: "",
            ciudad: "",
            telefono: "",
            email: "",
            celular: "",
            cargo: "",
            contactos: [],
            recep: {},
            Municipio: [],
            row: null,
            //esanyos
            costoEnsayo: 0,
            ensayos: [],
            ensayosSeleccionados: [],// item1
            ensayosSeleccionados2: [],// item2
            ensayosSeleccionados3: [],// item3
            ensayo: "",
            metodo: "",
            tecnica: "",
            valorMinimo: "",
            valorMaximo: "",
            unidades: "",
            costo: 0,
            costo2: 0,
            costo3: 0,
            costo4: 0,
            descripcion: "",
            limiteCuantificacion: 0,
            titular: "",
            suplente: "",
            responsables: {},
            soloUsuarios: [],
            //cotizacion
            fechaEmision: "",
            motivo: "",
            idCliente: "",
            idcontacto: "",
            validezOferta: "",
            entregaResultados: "",
            elaborado: "",
            itemsEnsayo: [],
            itemsEnsayo2: [],
            itemsEnsayo3: [],
            subtotal: 0,
            descuento: 0,
            iva: 0,
            idCotizacion: "",
            BtnEditar: 0,
            numeroCoti: "",
            search3: '',
            TodasCotis: [],
            get: 0,
            column: null,
            switch2: "",
            MostrarEditar: 0,
            MostrarEditar2: 0,
            MostrarEditar3: 0,
            ConstoEnsayo: 0,
            cotiObservacion: "",
            cotis: "2",
            //datos de la cotizacion
            cotiDescripcion: "",
            cotiNit: "",
            cotiDireccion: "",
            cotiTelefono: "",
            cotiCorreo: "",
            //calidad
            caliCodigo: "",
            caliaprobacion: "",
            caliVersion: "",
            //headers
            tipos: ["Natural", "Juridica"],
            idMomentaneo: "",
            headers: [
                {
                    text: 'Nombres',
                    align: 'start',
                    sortable: false,
                    value: "nombre",
                },
                {
                    text: 'Apellidos',
                    align: 'start',
                    sortable: false,
                    value: 'apellidos',
                },
                {
                    text: 'C.C. / NIT',
                    align: 'start',
                    sortable: false,
                    value: 'documento',
                },
                {
                    text: 'Tipo de persona',
                    align: 'start',
                    value: 'tipoPersona',
                },
                {
                    text: 'Correo',
                    align: 'start',
                    sortable: false,
                    value: 'email',
                },
                {
                    text: 'Añadir',
                    align: 'center',
                    sortable: false,
                    value: 'agregar',
                },
            ],
            headers2: [
                {
                    text: 'Codigo de cotización',
                    align: 'start',
                    value: "numero_cotizacion",
                },
                {
                    text: 'Nombres del cliente',
                    align: 'start',
                    sortable: false,
                    value: 'idCliente.nombre',
                },
                {
                    text: 'Apellidos del cliente',
                    align: 'start',
                    sortable: false,
                    value: 'idCliente.apellidos',
                },
                {
                    text: 'C.C. / NIT',
                    align: 'start',
                    sortable: false,
                    value: 'idCliente.documento',
                },
                {
                    text: 'Fecha',
                    align: 'start',
                    sortable: false,
                    value: 'fecha',
                },
                {
                    text: 'Estado',
                    align: 'start',
                    sortable: false,
                    value: 'estado',
                },
                {
                    text: 'Opciones',
                    align: 'start',
                    sortable: false,
                    value: 'opciones',
                },
            ],
            headers3: [
                {
                    text: 'Código de referencia',
                    align: 'start',
                    value: "ensayo",
                },
                {
                    text: 'Descripción del ensayo',
                    align: 'start',
                    sortable: false,
                    value: 'descripcion',
                },
                {
                    text: 'Costo del ensayo',
                    align: 'start',
                    sortable: false,
                    value: 'ensayocosto',
                },
                // {
                //     text: 'Tipo de persona',
                //     align: 'start',
                //     sortable: false,
                //     value: 'tipoPersona',
                // },
                // {
                //     text: 'Correo',
                //     align: 'start',
                //     sortable: false,
                //     value: 'email',
                // },
                {
                    text: 'Añadir',
                    align: 'center',
                    sortable: false,
                    value: 'agregar',
                },
            ],
        };
    },
    methods: {
        confirmar() {
            let header = { headers: { "token": this.$store.state.token } };
            axios.put(`https://app-laboratorio.vercel.app/api/cotizacion/desactivar/${this.idMomentaneo}`, {
                motivo: this.motivo
            }, header)
                .then((response) => {
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.motivo=""
                    this.dialog8 = false
                    this.listar();
                    this.listarTodasLasCotis();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        a() {
            console.log(this.column);
            console.log("a");
        },
        fechaSalida(r) {
            let d = new Date(r);
            return d.toLocaleDateString() + " - " + d.toLocaleTimeString();
        },
        Volver() {
            this.$router.push("/inicioP");
        },
        seleccionarclientes(cliente) {
            console.log(cliente);
            if (cliente.contacto) {
                this.idCliente = cliente._id
                this.idcontacto = cliente.contacto._id
                this.tipoPersona = cliente.tipoPersona
                this.nombre = cliente.nombre
                this.apellidos = cliente.apellidos
                this.contacto = cliente.contacto
                this.nombrecontacto = cliente.contacto.nombre
                this.documento = cliente.documento
                this.direccion = cliente.direccion
                this.ciudad = cliente.ciudad
                this.telefono = cliente.telefono
                this.celular = cliente.celular
                this.cargo = cliente.cargo
                this.email = cliente.email
                this.dialog2 = false
                this.botones = 0
            } else {
                this.idCliente = cliente._id
                this.tipoPersona = cliente.tipoPersona
                this.nombre = cliente.nombre
                this.apellidos = cliente.apellidos
                this.contacto = ""
                this.nombrecontacto = ""
                this.documento = cliente.documento
                this.direccion = cliente.direccion
                this.ciudad = cliente.ciudad
                this.telefono = cliente.telefono
                this.celular = cliente.celular
                this.cargo = cliente.cargo
                this.email = cliente.email
                this.dialog2 = false
                this.botones = 0
            }

        },
        borrarclientes() {
            this.idCliente = ""
            this.idcontacto = ""
            this.tipoPersona = ""
            this.nombre = ""
            this.apellidos = ""
            this.contacto = ""
            this.nombrecontacto = ""
            this.documento = ""
            this.direccion = ""
            this.ciudad = ""
            this.telefono = ""
            this.celular = ""
            this.cargo = ""
            this.email = ""
            this.dialog2 = false
            this.botones = 1
        },
        listar() {
            if (this.cotis === "2") {
                axios.get(`https://app-laboratorio.vercel.app/api/cotizacion/cotisestaenProceso`)
                    .then((response) => {
                        console.log(response);
                        this.cotizaciones = response.data.coti.reverse();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else if (this.cotis === "1") {
                this.listarConfirmadas()
            } else {
                this.listarTodasLasCotis()
            }
        },
        listarConfirmadas() {
            axios.get(`https://app-laboratorio.vercel.app/api/cotizacion/listarTodasLasCotizaciones`)
                .then((response) => {
                    console.log(response);
                    this.cotizaciones = response.data.coti.reverse();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        listarTodasLasCotis() {
            axios.get(`https://app-laboratorio.vercel.app/api/cotizacion/listarlasCotizaciones-k`)
                .then((response) => {
                    console.log(response);
                    this.cotizaciones = response.data.coti.reverse();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        desactivar(id) {
            let header = { headers: { "token": this.$store.state.token } };
            axios.put(`https://app-laboratorio.vercel.app/api/cotizacion/activar/${id}`, {}, header)
                .then((response) => {
                    console.log(response);
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.listar();
                    this.listarTodasLasCotis();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        activarRe(id) {
            let header = { headers: { "token": this.$store.state.token } };
            axios.put(`https://app-laboratorio.vercel.app/api/cotizacion/activar/${id}`, {}, header)
                .then((response) => {
                    console.log(response);
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.listar();
                    this.listarTodasLasCotis();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // activar(id) {
        //     this.$swal.fire({
        //         title: '¿La cotización fue confirmada?',
        //         showDenyButton: true,
        //         showCancelButton: true,
        //         confirmButtonText: 'Si',
        //         denyButtonText: `No`,
        //     }).then((result) => {
               
        //         if (result.isConfirmed) {
        //             let header = { headers: { "token": this.$store.state.token } };
        //             axios.put(`/cotizacion/activar2/${id}`, {}, header)
        //                 .then((response) => {
        //                     this.$swal.fire({
        //                         position: "top-end",
        //                         icon: "success",
        //                         title: response.data.msg,
        //                         showConfirmButton: false,
        //                         timer: 1500,
        //                     });
        //                     this.listar();
        //                     this.listarTodasLasCotis();
        //                 })
        //                 .catch((error) => {
        //                     console.log(error);
        //                 });
        //         } else if (result.isDenied) {
        //             this.dialog8 = true
        //             this.idMomentaneo = id
        //         }
        //     })

        // },
        calidad() {
            axios.get("https://app-laboratorio.vercel.app/api/calidad/listar")
                .then((response) => {
                    this.calidadOferta = response.data.listado[0].OfertaServicios
                    this.caliCodigo = this.calidadOferta[0].codigo
                    this.caliaprobacion = this.calidadOferta[0].aprobacion
                    this.caliVersion = this.calidadOferta[0].version
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        info() {
            axios.get("https://app-laboratorio.vercel.app/api/cotizacion/traerInfo")
                .then((response) => {
                    this.datos = response.data.info
                    this.cotiDescripcion = this.datos[0].descripcion
                    this.cotiNit = this.datos[0].nit
                    this.cotiDireccion = this.datos[0].direccion
                    this.cotiTelefono = this.datos[0].telefono
                    this.cotiCorreo = this.datos[0].correo
                    this.iva = this.datos[0].iva
                    this.numerocoti = this.datos[0].numero_cotizacion
                    let date = new Date();
                    let output = String(date.getFullYear());
                    if (this.numerocoti.toString().length === 1) {
                        this.numeroactual = `000${this.numerocoti}-${output}V${1}`
                    } else if (this.numerocoti.toString().length === 2) {
                        this.numeroactual = `00${this.numerocoti}-${output}V${1}`
                    } else if (this.numerocoti.toString().length === 3) {
                        this.numeroactual = `0${this.numerocoti}-${output}V${1}`
                    } else if (this.numerocoti.toString().length === 4) {
                        this.numeroactual = `${this.numerocoti}-${output}V${1}`
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        usuarios() {
            let header = { headers: { "token": this.$store.state.token } };
            axios.get("https://app-laboratorio.vercel.app/api/usuarios/listarClientes", header)
                .then((response) => {
                    // console.log(response);
                    this.clientes = response.data.usuarios.reverse()
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        crearContacto() {
            if (this.tipoPersona === "Juridica") {
                axios.post(`https://app-laboratorio.vercel.app/api/usuarios/`, {
                    tipoPersona: this.tipoPersona,
                    nombre: this.nombre,
                    apellidos: this.apellidos,
                    documento: this.documento,
                    direccion: this.direccion,
                    ciudad: this.ciudad,
                    celular: this.celular,
                    telefono: this.telefono,
                    cargo: this.cargo,
                    email: this.email.toUpperCase(),
                    password: this.documento,
                    rol: "CONTACTO"
                })
                    .then((response) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.si = 0
                        this.tipoPersona = ""
                        this.nombre = ""
                        this.apellidos = ""
                        this.documento = ""
                        this.direccion = ""
                        this.ciudad = ""
                        this.celular = ""
                        this.email = ""
                        this.documento = ""
                        this.telefono = ""
                        this.cargo = ""
                        this.listarContactos()
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
            } else {
                axios.post(`https://app-laboratorio.vercel.app/api/usuarios/`, {
                    tipoPersona: this.tipoPersona,
                    nombre: this.nombre,
                    apellidos: this.apellidos,
                    documento: this.documento,
                    direccion: this.direccion,
                    ciudad: this.ciudad,
                    celular: this.celular,
                    email: this.email.toUpperCase(),
                    password: this.documento,
                    rol: "CONTACTO"
                })
                    .then((response) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.si = 0
                        this.tipoPersona = ""
                        this.nombre = ""
                        this.apellidos = ""
                        this.documento = ""
                        this.direccion = ""
                        this.ciudad = ""
                        this.celular = ""
                        this.email = ""
                        this.documento = ""
                        this.telefono = ""
                        this.cargo = ""
                        this.listarContactos()
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
        aceptar() {
            this.$swal.fire({
                title: '¿ Desea ingresar los datos del contacto del cliente ?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    this.si = 2
                    this.dialog3 = !this.dialog3
                } else if (result.isDenied) {
                    this.dialog3 = !this.dialog3
                    this.si = 0
                }
            })
        },
        recepcionista() {
            this.recep = this.$store.state.datos
            this.elaborado = this.recep._id
            console.log(this.$store.state.datos);
        },
        ciudadess() {
            axios.get("https://app-laboratorio.vercel.app/api/ciudad/CiudadDepartamento")
                .then(response => {
                    console.log(response);
                    response.data.ciudad.forEach(city => {
                        this.Municipio.push(city)
                    })
                    console.log(this.Municipio);
                })
                .catch(error => {
                    console.log(error);
                })
        },

        customFilter(item, queryText) {
            const textOne = item.ciudad.toUpperCase()
            const searchText = queryText.toUpperCase()

            return textOne.indexOf(searchText) > -1
        },
        customFilter2(item, queryText) {
            const textOne = item.nombre
            const searchText = queryText

            return textOne.indexOf(searchText) > -1
        },
        listarContactos() {
            let header = { headers: { "token": this.$store.state.token } };
            axios.get(`https://app-laboratorio.vercel.app/api/usuarios/listarContactos`, header)
                .then((response) => {
                    this.contactos = response.data.usuarios.reverse()
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        crearCliente() {
            if (this.contacto === "" || this.contacto === null) {
                if (this.tipoPersona === "Juridica") {
                    axios.post(`https://app-laboratorio.vercel.app/api/usuarios/`, {
                        tipoPersona: this.tipoPersona,
                        nombre: this.nombre,
                        apellidos: this.apellidos,
                        documento: this.documento,
                        direccion: this.direccion,
                        ciudad: this.ciudad,
                        celular: this.celular,
                        telefono: this.telefono,
                        cargo: this.cargo,
                        email: this.email.toUpperCase(),
                        password: this.documento,
                    })
                        .then((response) => {
                            console.log(response);
                            this.$swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: response.data.msg,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            this.tipoPersona = ""
                            this.nombre = ""
                            this.apellidos = ""
                            this.documento = ""
                            this.direccion = ""
                            this.ciudad = ""
                            this.celular = ""
                            this.email = ""
                            this.documento = ""
                            this.telefono = ""
                            this.cargo = ""
                            this.contacto = ""
                            this.dialog3 = false
                            this.usuarios()
                        })
                        .catch((error) => {
                            this.$swal.fire({
                                position: "top-end",
                                icon: "error",
                                title: error.response.data.errores.errors[0].msg,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        })
                } else {
                    axios.post(`https://app-laboratorio.vercel.app/api/usuarios/`, {
                        tipoPersona: this.tipoPersona,
                        nombre: this.nombre,
                        apellidos: this.apellidos,
                        documento: this.documento,
                        direccion: this.direccion,
                        ciudad: this.ciudad,
                        celular: this.celular,
                        email: this.email.toUpperCase(),
                        password: this.documento,
                    })
                        .then((response) => {
                            console.log(response);
                            this.$swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: response.data.msg,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            this.tipoPersona = ""
                            this.nombre = ""
                            this.apellidos = ""
                            this.documento = ""
                            this.direccion = ""
                            this.ciudad = ""
                            this.celular = ""
                            this.email = ""
                            this.documento = ""
                            this.telefono = ""
                            this.cargo = ""
                            this.contacto = ""
                            this.dialog3 = false
                            this.usuarios()
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
            } else {
                if (this.tipoPersona === "Juridica") {
                    axios.post(`https://app-laboratorio.vercel.app/api/usuarios/`, {
                        tipoPersona: this.tipoPersona,
                        nombre: this.nombre,
                        apellidos: this.apellidos,
                        documento: this.documento,
                        direccion: this.direccion,
                        ciudad: this.ciudad,
                        contacto: this.contacto,
                        celular: this.celular,
                        telefono: this.telefono,
                        cargo: this.cargo,
                        email: this.email.toUpperCase(),
                        password: this.documento,
                    })
                        .then((response) => {
                            console.log(response);
                            this.$swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: response.data.msg,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            this.tipoPersona = ""
                            this.nombre = ""
                            this.apellidos = ""
                            this.documento = ""
                            this.direccion = ""
                            this.ciudad = ""
                            this.celular = ""
                            this.email = ""
                            this.documento = ""
                            this.telefono = ""
                            this.cargo = ""
                            this.contacto = ""
                            this.dialog3 = false
                            this.usuarios()
                        })
                        .catch((error) => {
                            this.$swal.fire({
                                position: "top-end",
                                icon: "error",
                                title: error.response.data.errores.errors[0].msg,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        })
                } else {
                    axios.post(`https://app-laboratorio.vercel.app/api/usuarios/`, {
                        tipoPersona: this.tipoPersona,
                        nombre: this.nombre,
                        apellidos: this.apellidos,
                        documento: this.documento,
                        direccion: this.direccion,
                        ciudad: this.ciudad,
                        celular: this.celular,
                        email: this.email.toUpperCase(),
                        password: this.documento,
                    })
                        .then((response) => {
                            console.log(response);
                            this.$swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: response.data.msg,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            this.tipoPersona = ""
                            this.nombre = ""
                            this.apellidos = ""
                            this.documento = ""
                            this.direccion = ""
                            this.ciudad = ""
                            this.celular = ""
                            this.email = ""
                            this.documento = ""
                            this.telefono = ""
                            this.cargo = ""
                            this.contacto = ""
                            this.dialog3 = false
                            this.usuarios()
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
            }
        },
        Elegircliente() {
            this.dialog2 = !this.dialog2
            this.search = ''
        },
        listarEnsayos() {
            axios.get(`https://app-laboratorio.vercel.app/api/ensayo`)
                .then((response) => {
                    this.ensayos = response.data.ensayo.reverse()
                    console.log("a", this.ensayos);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        seleccionarEnsayos(ensayo) {
            if (this.MostrarEditar === 1) {
                let ensayo1 = null
                // let ensayo2 = null
                // let ensayo3 = null
                ensayo1 = this.ensayosSeleccionados.find(element => element.ensayo._id === ensayo._id)
                // ensayo2 = this.ensayosSeleccionados2.find(element => element.ensayo._id === ensayo._id)
                // ensayo3 = this.ensayosSeleccionados3.find(element => element.ensayo._id === ensayo._id)

                if (ensayo1 === undefined) {//&& ensayo2 === undefined && ensayo3 === undefined
                    this.ensayosSeleccionados.push({
                        costoEnsayo: ensayo.costo,
                        ensayo: ensayo
                    })
                    this.costo += ensayo.costo
                } else {
                    this.$swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "El ensayo ya esta agregado",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            } else {
                let ensayo1 = null
                // let ensayo2 = null
                // let ensayo3 = null
                ensayo1 = this.ensayosSeleccionados.find(element => element._id === ensayo._id)
                // ensayo2 = this.ensayosSeleccionados2.find(element => element._id === ensayo._id)
                // ensayo3 = this.ensayosSeleccionados3.find(element => element._id === ensayo._id)

                if (ensayo1 === undefined) {//&& ensayo2 === undefined && ensayo3 === undefined
                    this.ensayosSeleccionados.push(ensayo)
                    this.costo += ensayo.costo
                } else {
                    this.$swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "El ensayo ya esta agregado",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            }
            // this.ensayos.splice(index, 1)
        },
        seleccionarEnsayos2(ensayo) {
            // let ensayo1 = null
            // let ensayo2 = null
            // let ensayo3 = null
            // ensayo1 = this.ensayosSeleccionados.find(element => element._id === ensayo._id)
            // ensayo2 = this.ensayosSeleccionados2.find(element => element._id === ensayo._id)
            // ensayo3 = this.ensayosSeleccionados3.find(element => element._id === ensayo._id)


            // if (ensayo1 === undefined && ensayo2 === undefined && ensayo3 === undefined) {
            //     this.ensayosSeleccionados2.push(ensayo)
            //     this.costo2 += ensayo.costo
            // } else {
            //     this.$swal.fire({
            //         position: "top-end",
            //         icon: "error",
            //         title: "El ensayo ya esta agregado",
            //         showConfirmButton: false,
            //         timer: 1500,
            //     });
            // }
            if (this.MostrarEditar2 === 1) {
                // let ensayo1 = null
                let ensayo2 = null
                // let ensayo3 = null
                // ensayo1 = this.ensayosSeleccionados.find(element => element.ensayo._id === ensayo._id)
                ensayo2 = this.ensayosSeleccionados2.find(element => element.ensayo._id === ensayo._id)
                // ensayo3 = this.ensayosSeleccionados3.find(element => element.ensayo._id === ensayo._id)

                if (ensayo2 === undefined) { //ensayo1 === undefined && && ensayo3 === undefined
                    this.ensayosSeleccionados2.push({
                        costoEnsayo: ensayo.costo,
                        ensayo: ensayo
                    })
                    this.costo2 += ensayo.costo
                } else {
                    this.$swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "El ensayo ya esta agregado",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            } else {
                // let ensayo1 = null
                let ensayo2 = null
                // let ensayo3 = null
                // ensayo1 = this.ensayosSeleccionados.find(element => element._id === ensayo._id)
                ensayo2 = this.ensayosSeleccionados2.find(element => element._id === ensayo._id)
                // ensayo3 = this.ensayosSeleccionados3.find(element => element._id === ensayo._id)

                if (ensayo2 === undefined) {//ensayo1 === undefined && && ensayo3 === undefined
                    this.ensayosSeleccionados2.push(ensayo)
                    this.costo2 += ensayo.costo
                } else {
                    this.$swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "El ensayo ya esta agregado",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            }

        },
        seleccionarEnsayos3(ensayo) {
            if (this.MostrarEditar3 === 1) {
                // let ensayo1 = null
                // let ensayo2 = null
                let ensayo3 = null
                // ensayo1 = this.ensayosSeleccionados.find(element => element.ensayo._id === ensayo._id)
                // ensayo2 = this.ensayosSeleccionados2.find(element => element.ensayo._id === ensayo._id)
                ensayo3 = this.ensayosSeleccionados3.find(element => element.ensayo._id === ensayo._id)

                if (ensayo3 === undefined) {//ensayo1 === undefined && ensayo2 === undefined && 
                    this.ensayosSeleccionados3.push({
                        costoEnsayo: ensayo.costo,
                        ensayo: ensayo
                    })
                    this.costo3 += ensayo.costo
                } else {
                    this.$swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "El ensayo ya esta agregado",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            } else {
                // let ensayo1 = null
                // let ensayo2 = null
                let ensayo3 = null
                // ensayo1 = this.ensayosSeleccionados.find(element => element._id === ensayo._id)
                // ensayo2 = this.ensayosSeleccionados2.find(element => element._id === ensayo._id)
                ensayo3 = this.ensayosSeleccionados3.find(element => element._id === ensayo._id)

                if (ensayo3 === undefined) {//ensayo1 === undefined && ensayo2 === undefined &&
                    this.ensayosSeleccionados3.push(ensayo)
                    this.costo3 += ensayo.costo
                } else {
                    this.$swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "El ensayo ya esta agregado",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            }
            // let ensayo1 = null
            // let ensayo2 = null
            // let ensayo3 = null
            // ensayo1 = this.ensayosSeleccionados.find(element => element._id === ensayo._id)
            // ensayo2 = this.ensayosSeleccionados2.find(element => element._id === ensayo._id)
            // ensayo3 = this.ensayosSeleccionados3.find(element => element._id === ensayo._id)


            // if (ensayo1 === undefined && ensayo2 === undefined && ensayo3 === undefined) {
            //     this.ensayosSeleccionados3.push(ensayo)
            //     this.costo3 += ensayo.costo
            // } else {
            //     this.$swal.fire({
            //         position: "top-end",
            //         icon: "error",
            //         title: "El ensayo ya esta agregado",
            //         showConfirmButton: false,
            //         timer: 1500,
            //     });
            // }
        },
        eliminarEnsayos(index, ensayo) {
            if (this.MostrarEditar === 1) {
                this.ensayosSeleccionados.splice(index, 1)
                this.costo -= ensayo.costoEnsayo

            } else {
                this.ensayosSeleccionados.splice(index, 1)
                this.costo -= ensayo.costo
            }
        },
        eliminarEnsayos2(index, ensayo) {
            if (this.MostrarEditar === 1) {
                this.ensayosSeleccionados2.splice(index, 1)
                this.costo2 -= ensayo.costoEnsayo

            } else {
                this.ensayosSeleccionados2.splice(index, 1)
                this.costo2 -= ensayo.costo
            }
            // if (this.MostrarEditar === 1) {
            //     this.ensayosSeleccionados2.splice(index, 1)
            //     this.costo2 -= ensayo.costoEnsayo
            // } else {
            //     this.ensayosSeleccionados2.splice(index, 1)
            //     this.costo2 -= ensayo.costo
            // }
        },
        eliminarEnsayos3(index, ensayo) {
            if (this.MostrarEditar === 1) {
                this.ensayosSeleccionados3.splice(index, 1)
                this.costo3 -= ensayo.costoEnsayo

            } else {
                this.ensayosSeleccionados3.splice(index, 1)
                this.costo3 -= ensayo.costo
            }
            // if (this.MostrarEditar === 1) {
            //     this.ensayosSeleccionados3.splice(index, 1)
            //     this.costo3 -= ensayo.costoEnsayo
            // } else {
            //     this.ensayosSeleccionados3.splice(index, 1)
            //     this.costo3 -= ensayo.costo
            // }
        },
        crearEnsayo() {
            let header = { headers: { "token": this.$store.state.token } };
            axios.post(`https://app-laboratorio.vercel.app/api/ensayo/`, {
                ensayo: this.ensayo,
                metodo: this.metodo,
                tecnica: this.tecnica,
                valorMinimo: this.valorMinimo,
                valorMaximo: this.valorMaximo,
                unidades: this.unidades,
                costo: this.costo4,
                descripcion: this.descripcion,
                limiteCuantificacion: this.limiteCuantificacion,
                responsables: {
                    titular: this.titular,
                    suplente: this.suplente,
                },
            }, header)
                .then((response) => {
                    console.log(response);
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Ensayo creado exitosamente",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.ensayo = ""
                    this.metodo = ""
                    this.tecnica = ""
                    this.valorMinimo = ""
                    this.valorMaximo = ""
                    this.unidades = ""
                    this.costo4 = ""
                    this.descripcion = ""
                    this.limiteCuantificacion = ""
                    this.dialog7 = false
                    this.listarEnsayos()
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
        },
        listarUsuarios() {
            axios.get(`https://app-laboratorio.vercel.app/api/usuarios/ListarSoloUsuarios`)
                .then((response) => {
                    console.log(response);
                    this.soloUsuarios = response.data.usuarios.reverse()
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        cancelar() {
            this.$swal.fire({
                title: 'Estas seguro?',
                text: "Los datos no se guardaran!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Cancelar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal.fire(
                        'Cancelado!',
                        'Los datos han sido borrados.',
                        'success'
                    )
                    this.fechaEmision = ""
                    this.idCliente = ""
                    this.idcontacto = ""
                    this.validezOferta = ""
                    this.entregaResultados = ""
                    this.elaborado = ""
                    this.itemsEnsayo = []
                    this.costo = 0
                    this.itemsEnsayo2 = []
                    this.costo2 = 0
                    this.itemsEnsayo3 = []
                    this.costo3 = 0
                    this.descuento = 0
                    this.ensayosSeleccionados = []
                    this.ensayosSeleccionados2 = []
                    this.ensayosSeleccionados3 = []
                    this.idCliente = ""
                    this.idcontacto = ""
                    this.tipoPersona = ""
                    this.nombre = ""
                    this.apellidos = ""
                    this.contacto = ""
                    this.nombrecontacto = ""
                    this.documento = ""
                    this.direccion = ""
                    this.ciudad = ""
                    this.telefono = ""
                    this.celular = ""
                    this.cargo = ""
                    this.cotiObservacion = ""
                    this.email = ""
                    this.BtnEditar = 0
                    this.get = 0
                    this.botones = 1
                    this.BtnEditar = 0
                    this.dialog = false
                    this.MostrarEditar = 0
                    this.MostrarEditar2 = 0
                    this.MostrarEditar3 = 0
                    this.listarEnsayos()
                }
            })
        },
        cancelar2() {
            this.fechaEmision = ""
            this.idCliente = ""
            this.idcontacto = ""
            this.validezOferta = ""
            this.entregaResultados = ""
            this.elaborado = ""
            this.itemsEnsayo = []
            this.costo = 0
            this.itemsEnsayo2 = []
            this.costo2 = 0
            this.itemsEnsayo3 = []
            this.costo3 = 0
            this.descuento = 0
            this.ensayosSeleccionados = []
            this.ensayosSeleccionados2 = []
            this.ensayosSeleccionados3 = []
            this.idCliente = ""
            this.idcontacto = ""
            this.tipoPersona = ""
            this.nombre = ""
            this.apellidos = ""
            this.contacto = ""
            this.nombrecontacto = ""
            this.documento = ""
            this.direccion = ""
            this.ciudad = ""
            this.telefono = ""
            this.celular = ""
            this.cargo = ""
            this.email = ""
            this.BtnEditar = 0
            this.cotiObservacion = ""
            this.get = 0
            this.botones = 1
            this.BtnEditar = 0
            this.dialog = false
            this.MostrarEditar = 0
            this.MostrarEditar2 = 0
            this.MostrarEditar3 = 0
            this.listarEnsayos()
        },
        crearcotizacion() {
            if (this.ensayosSeleccionados.length !== 0) {
                this.ensayosSeleccionados.forEach(ensayos => {
                    let ensayo = { ensayo: ensayos._id, costoEnsayo: ensayos.costo }
                    this.itemsEnsayo.push(ensayo)
                });
            } else {
                this.itemsEnsayo = [{ ensayo: "", costoEnsayo: 0 }]
            }
            if (this.ensayosSeleccionados2.length !== 0) {
                this.ensayosSeleccionados2.forEach(ensayos => {
                    let ensayo = { ensayo: ensayos._id, costoEnsayo: ensayos.costo }
                    this.itemsEnsayo2.push(ensayo)
                });
            }
            if (this.ensayosSeleccionados3.length !== 0) {
                this.ensayosSeleccionados3.forEach(ensayos => {
                    let ensayo = { ensayo: ensayos._id, costoEnsayo: ensayos.costo }
                    this.itemsEnsayo3.push(ensayo)
                });
            }
            if (this.contacto === "") {
                this.elaborado = this.recep._id
                let header = { headers: { "token": this.$store.state.token } };
                axios.post(`https://app-laboratorio.vercel.app/api/cotizacion/`, {
                    fecha_emision: this.fechaEmision,
                    idCliente: this.idCliente,
                    validez_oferta: this.validezOferta,
                    entrega_resultados: this.entregaResultados,
                    elabordo_por: this.elaborado,
                    items: {
                        item1: {
                            itemsEnsayo: this.itemsEnsayo,
                            costo: this.costo,
                        },
                        item2: {
                            itemsEnsayo: this.itemsEnsayo2,
                            costo: this.costo2,
                        },
                        item3: {
                            itemsEnsayo: this.itemsEnsayo3,
                            costo: this.costo3,
                        },
                    },
                    observaciones: this.cotiObservacion,
                    subtotal: this.sumar,
                    descuento: this.descuento,
                    iva: this.iva,
                    total: this.resultIva
                }, header)
                    .then((response) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Cotización creada con exito",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        console.log(response);
                        this.listar();
                        this.fechaEmision = ""
                        this.idCliente = ""
                        this.validezOferta = ""
                        this.entregaResultados = ""
                        this.elaborado = ""
                        this.itemsEnsayo = []
                        this.costo = 0
                        this.itemsEnsayo2 = []
                        this.costo2 = 0
                        this.itemsEnsayo3 = []
                        this.costo3 = 0
                        this.ensayosSeleccionados = []
                        this.ensayosSeleccionados2 = []
                        this.ensayosSeleccionados3 = []
                        this.sumar = 0
                        this.descuento = 0
                        this.resultIva = 0
                        this.BtnEditar = 0
                        this.get = 0
                        this.cotiObservacion = ""
                        this.dialog = false
                        this.listarTodasLasCotis();
                    })
                    .catch((error) => {
                        console.log(error);
                        if (error.response.data.msg === "No hay token en la peticion") {
                            this.$swal.fire({
                                position: "top-end",
                                icon: "error",
                                title: "No has iniciado sesión",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            this.$router.push("/");
                            console.log();
                        } else {
                            if (error.response.data.errores.errors[0].msg === 'Invalid value') {
                                console.log(error.response.data.errores.errors[0]);
                                this.$swal.fire({
                                    position: "top-end",
                                    icon: "error",
                                    title: "Porfavor seleccione un cliente!",
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                            } else {
                                console.log(error.response.data.errores.errors[0]);
                                this.$swal.fire({
                                    position: "top-end",
                                    icon: "error",
                                    title: error.response.data.errores.errors[0].msg,
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                            }
                        }
                        console.log(error);
                        this.itemsEnsayo = []
                    });
            } else {
                this.elaborado = this.recep._id
                let header = { headers: { "token": this.$store.state.token } };
                axios.post(`https://app-laboratorio.vercel.app/api/cotizacion/`, {
                    fecha_emision: this.fechaEmision,
                    idCliente: this.idCliente,
                    idContacto: this.idcontacto,
                    validez_oferta: this.validezOferta,
                    entrega_resultados: this.entregaResultados,
                    elabordo_por: this.elaborado,
                    items: {
                        item1: {
                            itemsEnsayo: this.itemsEnsayo,
                            costo: this.costo,
                        },
                        item2: {
                            itemsEnsayo: this.itemsEnsayo2,
                            costo: this.costo2,
                        },
                        item3: {
                            itemsEnsayo: this.itemsEnsayo3,
                            costo: this.costo3,
                        },
                    },
                    observaciones: this.cotiObservacion,
                    subtotal: this.sumar,
                    descuento: this.descuento,
                    iva: this.iva,
                    total: this.resultIva
                }, header)
                    .then((response) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Cotización creada con exito",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        console.log(response);
                        this.listar();
                        this.fechaEmision = ""
                        this.idCliente = ""
                        this.idcontacto = ""
                        this.validezOferta = ""
                        this.entregaResultados = ""
                        this.elaborado = ""
                        this.itemsEnsayo = []
                        this.costo = 0
                        this.itemsEnsayo2 = []
                        this.costo2 = 0
                        this.itemsEnsayo3 = []
                        this.ensayosSeleccionados = []
                        this.ensayosSeleccionados2 = []
                        this.ensayosSeleccionados3 = []
                        this.costo3 = 0
                        this.sumar = 0
                        this.descuento = 0
                        this.resultIva = 0
                        this.BtnEditar = 0
                        this.get = 0
                        this.cotiObservacion = ""
                        this.dialog = false
                        this.listarTodasLasCotis();
                    })
                    .catch((error) => {
                        if (error.response.data.msg === "No hay token en la peticion") {
                            this.$swal.fire({
                                position: "top-end",
                                icon: "error",
                                title: "No has iniciado sesión",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            console.log();
                            this.$router.push("/");
                        } else {
                            if (error.response.data.errores.errors[0].msg === 'Invalid value') {
                                console.log(error.response.data.errores.errors[0]);
                                this.$swal.fire({
                                    position: "top-end",
                                    icon: "error",
                                    title: "Porfavor seleccione un cliente!",
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                            } else {
                                console.log(error.response.data.errores.errors[0]);
                                this.$swal.fire({
                                    position: "top-end",
                                    icon: "error",
                                    title: error.response.data.errores.errors[0].msg,
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                            }
                        }
                        console.log(error);
                        this.itemsEnsayo = []

                    });
            }

        },
        editar(datos) {
            console.log(datos);
            if (datos.idCliente.contacto) {
                console.log("contacto");
                this.idCotizacion = datos._id
                this.fechaEmision = datos.fecha_emision.slice(0, 10)
                this.entregaResultados = datos.entrega_resultados.slice(0, 10)
                this.validezOferta = datos.validez_oferta.slice(0, 10)
                this.elaborado = this.recep._id
                this.numeroCoti = datos.numero_cotizacion
                this.idCliente = datos.idCliente._id
                this.idcontacto = datos.idCliente.contacto._id
                this.tipoPersona = datos.idCliente.tipoPersona
                this.nombre = datos.idCliente.nombre
                this.apellidos = datos.idCliente.apellidos
                this.contacto = datos.idCliente.contacto
                this.nombrecontacto = datos.idCliente.contacto.nombre
                this.documento = datos.idCliente.documento
                this.direccion = datos.idCliente.direccion
                this.ciudad = datos.idCliente.ciudad
                this.telefono = datos.idCliente.telefono
                this.celular = datos.idCliente.celular
                this.cargo = datos.idCliente.cargo
                this.email = datos.idCliente.email
                this.descuento = datos.descuento
                this.cotiObservacion = datos.observaciones
                this.BtnEditar = 1
                this.botones = 0
                this.MostrarEditar = 1
                this.MostrarEditar2 = 1
                this.MostrarEditar3 = 1
                if (this.MostrarEditar === 1) {
                    if (datos.items.item1.itemsEnsayo) {
                        this.costo = datos.items.item1.costo
                        datos.items.item1.itemsEnsayo.forEach(ensayo => {
                            this.ensayosSeleccionados.push(ensayo)
                        });
                    }
                    if (datos.items.item2.itemsEnsayo) {
                        this.costo2 = datos.items.item2.costo
                        datos.items.item2.itemsEnsayo.forEach(ensayo => {
                            this.ensayosSeleccionados2.push(ensayo)
                        })
                    }
                    if (datos.items.item3.itemsEnsayo) {
                        this.costo3 = datos.items.item3.costo
                        datos.items.item3.itemsEnsayo.forEach(ensayo => {
                            this.ensayosSeleccionados3.push(ensayo)
                        })
                    }
                } else {
                    if (datos.items.item1.itemsEnsayo) {
                        this.costo = datos.items.item1.costo
                        datos.items.item1.itemsEnsayo.forEach(ensayo => {
                            console.log(ensayo.costoEnsayo);
                            this.ensayosSeleccionados.push(ensayo.ensayo)
                        });
                    }
                    if (datos.items.item2.itemsEnsayo) {
                        this.costo2 = datos.items.item2.costo
                        datos.items.item2.itemsEnsayo.forEach(ensayo => {
                            this.ensayosSeleccionados2.push(ensayo.ensayo)
                        })
                    }
                    if (datos.items.item3.itemsEnsayo) {
                        this.costo3 = datos.items.item3.costo
                        datos.items.item3.itemsEnsayo.forEach(ensayo => {
                            this.ensayosSeleccionados3.push(ensayo.ensayo)
                        })
                    }
                }

                this.dialog = true;
            } else {
                console.log("sin");
                this.idCotizacion = datos._id
                this.fechaEmision = datos.fecha_emision.slice(0, 10)
                this.entregaResultados = datos.entrega_resultados.slice(0, 10)
                this.validezOferta = datos.validez_oferta.slice(0, 10)
                this.numeroCoti = datos.numero_cotizacion
                this.idCliente = datos.idCliente._id
                this.tipoPersona = datos.idCliente.tipoPersona
                this.elaborado = this.recep._id
                this.nombre = datos.idCliente.nombre
                this.apellidos = datos.idCliente.apellidos
                this.contacto = ""
                this.nombrecontacto = ""
                this.documento = datos.idCliente.documento
                this.direccion = datos.idCliente.direccion
                this.ciudad = datos.idCliente.ciudad
                this.telefono = datos.idCliente.telefono
                this.celular = datos.idCliente.celular
                this.cargo = datos.idCliente.cargo
                this.email = datos.idCliente.email
                this.descuento = datos.descuento
                this.cotiObservacion = datos.observaciones
                this.BtnEditar = 1
                this.botones = 0
                this.MostrarEditar = 1
                this.MostrarEditar2 = 1
                this.MostrarEditar3 = 1
                if (this.MostrarEditar === 1) {
                    if (datos.items.item1.itemsEnsayo) {
                        this.costo = datos.items.item1.costo
                        datos.items.item1.itemsEnsayo.forEach(ensayo => {
                            this.ensayosSeleccionados.push(ensayo)
                        });
                    }
                    if (datos.items.item2.itemsEnsayo) {
                        this.costo2 = datos.items.item2.costo
                        datos.items.item2.itemsEnsayo.forEach(ensayo => {
                            this.ensayosSeleccionados2.push(ensayo)
                        })
                    }
                    if (datos.items.item3.itemsEnsayo) {
                        this.costo3 = datos.items.item3.costo
                        datos.items.item3.itemsEnsayo.forEach(ensayo => {
                            this.ensayosSeleccionados3.push(ensayo)
                        })
                    }
                } else {
                    if (datos.items.item1.itemsEnsayo) {
                        this.costo = datos.items.item1.costo
                        datos.items.item1.itemsEnsayo.forEach(ensayo => {
                            console.log(ensayo.costoEnsayo);
                            this.ensayosSeleccionados.push(ensayo.ensayo)
                        });
                    }
                    if (datos.items.item2.itemsEnsayo) {
                        this.costo2 = datos.items.item2.costo
                        datos.items.item2.itemsEnsayo.forEach(ensayo => {
                            this.ensayosSeleccionados2.push(ensayo.ensayo)
                        })
                    }
                    if (datos.items.item3.itemsEnsayo) {
                        this.costo3 = datos.items.item3.costo
                        datos.items.item3.itemsEnsayo.forEach(ensayo => {
                            this.ensayosSeleccionados3.push(ensayo.ensayo)
                        })
                    }
                }
                this.dialog = true;
            }
        },
        editarCoti() {
            console.log(this.ensayosSeleccionados);
            if (this.MostrarEditar === 1) {
                if (this.ensayosSeleccionados.length !== 0) {
                    this.ensayosSeleccionados.forEach(ensayos => {
                        let ensayo = { ensayo: ensayos.ensayo._id, costoEnsayo: ensayos.ensayo.costo }
                        this.itemsEnsayo.push(ensayo)
                    });
                } else {
                    this.itemsEnsayo = [{ ensayo: "", costoEnsayo: 0 }]
                }
                if (this.ensayosSeleccionados2.length !== 0) {
                    this.ensayosSeleccionados2.forEach(ensayos => {
                        let ensayo = { ensayo: ensayos.ensayo._id, costoEnsayo: ensayos.ensayo.costo }
                        this.itemsEnsayo2.push(ensayo)
                    });
                }
                if (this.ensayosSeleccionados3.length !== 0) {
                    this.ensayosSeleccionados3.forEach(ensayos => {
                        let ensayo = { ensayo: ensayos.ensayo._id, costoEnsayo: ensayos.ensayo.costo }
                        this.itemsEnsayo3.push(ensayo)
                    });
                }
            } else {
                if (this.ensayosSeleccionados.length !== 0) {
                    this.ensayosSeleccionados.forEach(ensayos => {
                        let ensayo = { ensayo: ensayos._id, costoEnsayo: ensayos.costo }
                        this.itemsEnsayo.push(ensayo)
                    });
                } else {
                    this.itemsEnsayo = [{ ensayo: "", costoEnsayo: 0 }]
                }
                if (this.ensayosSeleccionados2.length !== 0) {
                    this.ensayosSeleccionados2.forEach(ensayos => {
                        let ensayo = { ensayo: ensayos._id, costoEnsayo: ensayos.costo }
                        this.itemsEnsayo2.push(ensayo)
                    });
                }
                if (this.ensayosSeleccionados3.length !== 0) {
                    this.ensayosSeleccionados3.forEach(ensayos => {
                        let ensayo = { ensayo: ensayos._id, costoEnsayo: ensayos.costo }
                        this.itemsEnsayo3.push(ensayo)
                    });
                }
            }

            if (this.contacto === "") {
                let header = { headers: { "token": this.$store.state.token } };
                axios.put(`https://app-laboratorio.vercel.app/api/cotizacion/${this.idCotizacion}`, {
                    fecha_emision: this.fechaEmision,
                    idCliente: this.idCliente,
                    validez_oferta: this.validezOferta,
                    entrega_resultados: this.entregaResultados,
                    elabordo_por: this.elaborado,
                    items: {
                        item1: {
                            itemsEnsayo: this.itemsEnsayo,
                            costo: this.costo,
                        },
                        item2: {
                            itemsEnsayo: this.itemsEnsayo2,
                            costo: this.costo2,
                        },
                        item3: {
                            itemsEnsayo: this.itemsEnsayo3,
                            costo: this.costo3,
                        },
                    },
                    observaciones: this.cotiObservacion,
                    subtotal: this.sumar,
                    descuento: this.descuento,
                    iva: this.iva,
                    total: this.resultIva
                }, header)
                    .then((response) => {
                        console.log(response);
                        this.listar();
                        this.fechaEmision = ""
                        this.idCliente = ""
                        this.validezOferta = ""
                        this.entregaResultados = ""
                        this.elaborado = ""
                        this.itemsEnsayo = []
                        this.costo = 0
                        this.itemsEnsayo2 = []
                        this.costo2 = 0
                        this.itemsEnsayo3 = []
                        this.ensayosSeleccionados = []
                        this.ensayosSeleccionados2 = []
                        this.ensayosSeleccionados3 = []
                        this.costo3 = 0
                        this.sumar = 0
                        this.descuento = 0
                        this.resultIva = 0
                        this.dialog = false
                        this.listarTodasLasCotis()
                    })
                    .catch((error) => {
                        console.log(error);
                        if (error.response.data.msg === "No hay token en la peticion") {
                            this.$swal.fire({
                                position: "top-end",
                                icon: "error",
                                title: "No has iniciado sesión",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            console.log();
                            this.$router.push("/");
                        } else {
                            if (error.response.data.errores.errors[0].msg === 'Invalid value') {
                                console.log(error.response.data.errores.errors[0]);
                                this.$swal.fire({
                                    position: "top-end",
                                    icon: "error",
                                    title: "Porfavor seleccione un cliente!",
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                            } else {
                                console.log(error.response.data.errores.errors[0]);
                                this.$swal.fire({
                                    position: "top-end",
                                    icon: "error",
                                    title: error.response.data.errores.errors[0].msg,
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                            }
                        }
                        console.log(error);
                        this.itemsEnsayo = []
                    });
            } else {
                let header = { headers: { "token": this.$store.state.token } };
                axios.put(`https://app-laboratorio.vercel.app/api/cotizacion/${this.idCotizacion}`, {
                    fecha_emision: this.fechaEmision,
                    idCliente: this.idCliente,
                    idContacto: this.idcontacto,
                    validez_oferta: this.validezOferta,
                    entrega_resultados: this.entregaResultados,
                    elabordo_por: this.elaborado,
                    items: {
                        item1: {
                            itemsEnsayo: this.itemsEnsayo,
                            costo: this.costo,
                        },
                        item2: {
                            itemsEnsayo: this.itemsEnsayo2,
                            costo: this.costo2,
                        },
                        item3: {
                            itemsEnsayo: this.itemsEnsayo3,
                            costo: this.costo3,
                        },
                    },
                    observaciones: this.cotiObservacion,
                    subtotal: this.sumar,
                    descuento: this.descuento,
                    iva: this.iva,
                    total: this.resultIva
                }, header)
                    .then((response) => {
                        console.log(response);
                        this.listar();
                        this.listarTodasLasCotis();
                        this.fechaEmision = ""
                        this.idCliente = ""
                        this.idcontacto = ""
                        this.validezOferta = ""
                        this.entregaResultados = ""
                        this.elaborado = ""
                        this.itemsEnsayo = []
                        this.costo = 0
                        this.itemsEnsayo2 = []
                        this.costo2 = 0
                        this.itemsEnsayo3 = []
                        this.costo3 = 0
                        this.sumar = 0
                        this.descuento = 0
                        this.resultIva = 0
                        this.ensayosSeleccionados = []
                        this.ensayosSeleccionados2 = []
                        this.ensayosSeleccionados3 = []
                        this.dialog = false
                    })
                    .catch((error) => {
                        if (error.response.data.msg === "No hay token en la peticion") {
                            this.$swal.fire({
                                position: "top-end",
                                icon: "error",
                                title: "No has iniciado sesión",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            this.$router.push("/");
                            console.log();
                        } else {
                            if (error.response.data.errores.errors[0].msg === 'Invalid value') {
                                console.log(error.response.data.errores.errors[0]);
                                this.$swal.fire({
                                    position: "top-end",
                                    icon: "error",
                                    title: "Porfavor seleccione un cliente!",
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                            } else {
                                console.log(error.response.data.errores.errors[0]);
                                this.$swal.fire({
                                    position: "top-end",
                                    icon: "error",
                                    title: error.response.data.errores.errors[0].msg,
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                            }
                        }
                        console.log(error);
                        this.itemsEnsayo = []

                    });
            }
        },
        // traerDatos(datos) {
        //     // this.$store.dispatch("setCotiImprimir", datos);
        //     // //this.$router.push("/CotiImprimir")
        //     // console.log(datos);

        // }, 
        recuperarToken() {
            localStorage.getItem("datos")
            localStorage.getItem("token")
            console.log(localStorage.getItem("datos"));
            console.log(localStorage.getItem("token"));
        }
    },
    computed: {
        sumar() {
            let subtotal = this.costo + this.costo2 + this.costo3 - this.descuento
            return subtotal
        },
        resultIva() {
            let total = this.sumar * this.iva / 100
            let total2 = total + this.sumar
            return total2
        }
    },
    created() {
        this.recuperarToken();
        this.listar();
        this.calidad();
        this.info();
        this.usuarios();
        this.recepcionista();
        this.ciudadess();
        this.listarContactos();
        this.listarEnsayos();
        this.listarUsuarios();
    },
};
</script>