<template>
  <v-container-fluid style="margin-top: 100px">
    <v-row style="margin: 0" class="mt-n6">
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver()">
          Volver
        </v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="mt-3">
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="mt-3">
        <template>
          <v-row justify="center">
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="deep-orange" dark v-bind="attrs" v-on="on" class="center">
                  Crear Muestra
                </v-btn>
              </template>
              <v-card>
                <v-toolbar dark>
                  <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Crear Muestra</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn dark text @click="dialog = false"> Guardar </v-btn>
                  </v-toolbar-items>
                </v-toolbar>
                <v-list three-line subheader>
                  <v-container-fluid>
                    <v-row style="margin: 0">
                      <!-- <v-col cols="12" xs="12" sm="12" md="2" lg="2" xl="2" class="text-left">
                        <img height="200" width="200"
                          src="https://agenciapublicadeempleo.sena.edu.co/imgLayout/logos/LogoSENA-naranja_vector.png" />
                      </v-col> -->
                      <v-col cols="12" xs="12" sm="12" md="10" lg="10" xl="10">
                        <v-row>
                          <v-col cols="10">
                            <div class="text-center black--text">
                              <h3>RECEPCIÓN DE MUESTRAS</h3>
                            </div>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="10">
                            <div class="text-center black--text mt-2">
                              <h3>CENTRO AGROTURISTICO - SAN GIL, SANTANDER</h3>
                              <h3>LABORATORIO LABFICAT</h3>
                              <br />
                            </div>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="3">
                            <div class="text-center black--text mt-2">
                              <h3>CÓDIGO:</h3>
                              <h3>CAT-ST-MI-002</h3>
                            </div>
                          </v-col>
                          <v-col cols="4">
                            <div class="text-center black--text mt-2">
                              <h3>APROBACIÓN:</h3>
                              <h3>2022-04-01</h3>
                            </div>
                          </v-col>
                          <v-col cols="5">
                            <div class="text-center black--text mt-2">
                              <h3>VERSIÓN:</h3>
                              <h3>2</h3>
                            </div>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-container-fluid>
                  <v-subheader></v-subheader>
                </v-list>
                <v-divider></v-divider>
                <v-list three-line subheader>
                  <v-container-fluid class="mx-5 mt-n15">
                    <v-row style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722"
                      class="mx-5">
                      <v-col>
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Datos del solicitante</h3>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Solicitante</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                        <h3 class="mt-3">{{datos.nombre}} {{datos.apellidos}}</h3>
                      </v-col>
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Departamento</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                        <h3 class="mt-3">{{datos.ciudad.departamento}}</h3>
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>NIT/C.C.</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                        <h3 class="mt-3">{{datos.documento}}</h3>
                      </v-col>
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Contacto</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                        <h3 class="mt-3">{{NombreContacto1}}</h3>




                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Dirección</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                        <h3 class="mt-3">{{datos.direccion}}</h3>
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
                        class="pa-0 ma-0 text-center">
                        <h3 class="mt-3">{{datos.telefono}}</h3>
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Ciudad</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                        <h3 class="mt-3">{{datos.ciudad.ciudad}}</h3>
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
                        class="pa-0 ma-0 text-center">
                        <h3 class="mt-3">{{datos.email}}</h3>
                      </v-col>
                    </v-row>
                    <v-row class="mx-5"
                      style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722; border-top: 0px;">
                      <v-col cols="12" xs="0" sm="4" md="4" lg="4" xl="4">
                      </v-col>
                      <v-col cols="12" xs="8" sm="4" md="4" lg="4" xl="4">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Datos de la muestra</h3>
                        </div>
                      </v-col>
                      <v-col class="text-right" cols="12" xs="4" sm="4" md="4" lg="4" xl="4">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn color="white" class="ma-2" dark @click="dialog2 = true">
                              <v-icon color="deep-orange" rounded v-bind="attrs" v-on="on">
                                mdi-plus-circle
                              </v-icon>
                            </v-btn>
                          </template>
                          <span>Añadir ítem</span>
                        </v-tooltip>
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
                                  <h2> Código de </h2>
                                  <h2> muestra </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Municipio de </h2>
                                  <h2> recolección </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Dirección de toma </h2>
                                  <h2> de muestra </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Lugar de toma de </h2>
                                  <h2> muestra </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Muestra </h2>
                                  <h2> recolectada por </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Procedimiento </h2>
                                  <h2> de </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Tipo de muestra</h2>
                                  <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                      <v-btn color="white" class="ma-2" dark @click="dialog3 = true">
                                        <v-icon color="deep-orange" rounded v-bind="attrs" v-on="on">
                                          mdi-plus-circle
                                        </v-icon>
                                      </v-btn>
                                    </template>
                                    <span>Añadir tipo de la muestra</span>
                                  </v-tooltip>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Matriz de la </h2>
                                  <h2> muestra </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Fecha y hora de </h2>
                                  <h2> recolección </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Cotización </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Ítem de </h2>
                                  <h2> la </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Observaciones </h2>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(datosss, i ) in mostrasDatos" :key="i">
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">
                                  <h3>{{datosss.codMuestra}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{datosss.munRecoleccion}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{datosss.direccionTomaMuestra}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{datosss.lugarTomaMuestra}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{datosss.muestraRecolectadaPor}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{datosss.procedimientoMuestreo}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{datosss.tipoMuestra}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{datosss.matrizMuestra}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{datosss.fechaRecoleccion}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{datosss.cotizacion}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{datosss.item}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <v-icon dark class="mr-20" color="red" rounded
                                       @click="eliminarMuestra(i, datosss)">
                                       mdi-close-circle
                                  </v-icon>
                                  

                                </td>
                              </tr>
                            </tbody>
                          </template>

                        </v-simple-table>
                      </v-col>
                    </v-row>
                    <v-row style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722"
                      class="mx-5">
                      <v-col cols="6">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Observaciones prestablecidas</h3>
                        </div>
                      </v-col>
                      <v-col cols="6">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Condiciones del servicio</h3>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0 " class="mx-5" >
                      <v-col style="border: solid 1px; border-color: black; border-top: 0px;" cols="1">
                        <div class="text-center ">
                          <body-1>1</body-1>
                        </div>
                      </v-col>
                      <v-col style="padding: 0 ;border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;" cols="5">
                        <div style="margin: 0 ;border: solid 1px; border-color: black; border-top: 0px; border-left: 0px; border-right: 0px;" class="text-center">
                          <h5>Recipientes de recolección inadecuados.</h5>
                        </div>
                        <div style="margin: 0 ; border: solid 1px; border-color: black; border-top: 0px;border-left: 0px; border-right: 0px;" class="text-center">
                          <h5>Envase roto, abierto o agujerado.</h5>
                        </div>
                      </v-col>
                      <v-col style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        cols="6">
                        <div class="text-left ">
                          <body-1>El solicitante al afirmar la presente acta de recepción de muestras acepta lo
                            siguiente:</body-1>
                          <br>
                          <body-1>1. Que a las muestras se le realicen todos los ensayos de acuerdo al ítem de la
                            cotización indicado en el presente formato y los mismos sean reportados en el respectivo
                            informe de los resultados.</body-1>
                          <br>
                          <body-1>2.</body-1>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Quien entrega las muestras</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                      </v-col>
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h4>Fecha y hora de recepción de muestras</h4>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0">
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>C.C.</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                      </v-col>
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Quien recibe las muestras</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0">
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Firma</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                      </v-col>
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Firma</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0">
                      </v-col>
                    </v-row>
                  </v-container-fluid>
                </v-list>
              </v-card>
            </v-dialog>
          </v-row>
        </template>
      </v-col>
    </v-row>
    <v-row style="margin: 0" class="mt-n6">
      <v-col v-for="(muestras, i) in infoMuestras" :key="i" cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>

          <v-card-title> 
            <div class="ml-4">{{muestras.codMuestra}}</div>
          </v-card-title>

          <v-card-text>
            <div class="text-subtitle-1 ml-4">Nombre: {{datos.nombre}} {{datos.apellidos}}</div>
            <div class="text-subtitle-1 ml-4">Ciudad: {{datos.ciudad.ciudad}}</div>          
            <div class="text-subtitle-1 ml-4">Correo: {{datos.email}}</div>       
            <div class="text-subtitle-1 ml-4">Estado: {{datos.estado}}</div>           
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col class="text-left" >
                <v-btn color="deep-orange lighten-2" text class="ma-2" dark @click="dialog4 = true">Ver muestra</v-btn>
              </v-col>
              <v-col class="text-right">
                <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn color="white" class="ma-2">
                              <v-icon color="deep-orange" rounded v-bind="attrs" v-on="on">
                                mdi-pencil
                              </v-icon>
                            </v-btn>
                          </template>
                          <span>Editar muestra</span>
                        </v-tooltip>
              </v-col>
            </v-row>
           

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog2" max-width="500px">
      <v-card class="">
        <v-card-title class="text-h5">
          Datos de la muestra
        </v-card-title>
        <v-col cols="12">
          <v-autocomplete v-model="seleccionadoCiudad" :items="Municipio" item-text="ciudad" item-value="_id" filled
            rounded dense label="Municipio de recolección" @click="listarCiudad()"></v-autocomplete>
          <v-text-field v-model="direccionM" label="Dirección de toma de muestra*" filled rounded dense></v-text-field>
          <v-text-field v-model="lugarM" label="Lugar de toma de muestra*" filled rounded dense>
          </v-text-field>
          <v-text-field v-model="recolectadaPor" label="Muestra recolectada por*" filled rounded dense></v-text-field>
          <v-text-field v-model="procedimiento" label="Procedimiento de*" filled rounded dense>
          </v-text-field>
          <v-autocomplete v-model="tipoM" :items="listarTipos" item-text="tipos" item-value="_id" filled
            rounded dense label="Tipo de muestra" @click="listarTiposs()"></v-autocomplete>
          <v-text-field v-model="matrizM" label="Matriz de la muestra*" filled rounded dense>
          </v-text-field>
          <v-text-field v-model="fecha" type="date" label="Fecha y hora de recolección*" filled rounded dense>
          </v-text-field>
          <v-text-field v-model="cotizacion" value="aa" :label="cotizacion2.numero_cotizacion" disabled filled rounded
            dense></v-text-field>

          <v-select v-model="item" filled rounded dense label="Items" :items="seleccionarItem" item-text="items" @click="listarItems()"></v-select>
          <!-- <v-text-field v-model="observacion" label="Observaciones" filled rounded dense></v-text-field> -->
        </v-col>
        <v-card-actions class="mt-n7">
          <v-btn color="success" @click="Guardar()">
            Añadir datos
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    <v-dialog v-model="dialog4" >
      <v-card>
                <v-toolbar dark>
                  <v-btn icon dark @click="dialog4 = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Muestra </v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-list three-line subheader>
                  <v-container-fluid>
                    <v-row style="margin: 0">
                      <v-col cols="12" xs="12" sm="12" md="2" lg="2" xl="2" class="text-left">
                        <img height="200" width="200"
                          src="https://agenciapublicadeempleo.sena.edu.co/imgLayout/logos/LogoSENA-naranja_vector.png" />
                      </v-col>
                      <v-col cols="12" xs="12" sm="12" md="10" lg="10" xl="10">
                        <v-row>
                          <v-col cols="10">
                            <div class="text-center black--text">
                              <h3>RECEPCIÓN DE MUESTRAS</h3>
                            </div>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="10">
                            <div class="text-center black--text mt-2">
                              <h3>CENTRO AGROTURISTICO - SAN GIL, SANTANDER</h3>
                              <h3>LABORATORIO LABFICAT</h3>
                              <br />
                            </div>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="3">
                            <div class="text-center black--text mt-2">
                              <h3>CÓDIGO:</h3>
                              <h3>CAT-ST-MI-002</h3>
                            </div>
                          </v-col>
                          <v-col cols="4">
                            <div class="text-center black--text mt-2">
                              <h3>APROBACIÓN:</h3>
                              <h3>2022-04-01</h3>
                            </div>
                          </v-col>
                          <v-col cols="5">
                            <div class="text-center black--text mt-2">
                              <h3>VERSIÓN:</h3>
                              <h3>2</h3>
                            </div>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-container-fluid>
                  <v-subheader></v-subheader>
                </v-list>
                <v-divider></v-divider>
                <v-list three-line subheader>
                  <v-container-fluid class="mx-5 mt-n15">
                    <v-row style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722"
                      class="mx-5">
                      <v-col>
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Datos del solicitante</h3>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Solicitante</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                        <h3 class="mt-3">{{datos.nombre}} {{datos.apellidos}}</h3>
                      </v-col>
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Departamento</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                        <h3 class="mt-3">{{datos.ciudad.departamento}}</h3>
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>NIT/C.C.</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                        <h3 class="mt-3">{{datos.documento}}</h3>
                      </v-col>
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Contacto</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                        <h3 class="mt-3">{{NombreContacto1}}</h3>

                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Dirección</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                        <h3 class="mt-3">{{datos.direccion}}</h3>
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
                        class="pa-0 ma-0 text-center">
                        <h3 class="mt-3">{{datos.telefono}}</h3>
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Ciudad</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                        <h3 class="mt-3">{{datos.ciudad.ciudad}}</h3>
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
                        class="pa-0 ma-0 text-center">
                        <h3 class="mt-3">{{datos.email}}</h3>
                      </v-col>
                    </v-row>
                    <v-row class="mx-5"
                      style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722; border-top: 0px;">
                      <v-col cols="12" xs="0" sm="4" md="4" lg="4" xl="4">
                      </v-col>
                      <v-col cols="12" xs="8" sm="4" md="4" lg="4" xl="4">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Datos de la muestra</h3>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row style=" margin: 0;" class="mx-5">
                      <v-col cols="12" class="ma-0 pa-0">
                        <v-simple-table>
                          <template v-slot:default>
                            <thead style="  background-color: #ff5722; border-top: 0px;">
                              <tr>
                                <th style="border: solid 1px; border-color: black; border-top: 0px;"
                                  class="text-center white--text">
                                  <h2> Código de </h2>
                                  <h2> muestra </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Municipio de </h2>
                                  <h2> recolección </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Dirección de toma </h2>
                                  <h2> de muestra </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Lugar de toma de </h2>
                                  <h2> muestra </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Muestra </h2>
                                  <h2> recolectada por </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Procedimiento </h2>
                                  <h2> de </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Tipo de muestra</h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Matriz de la </h2>
                                  <h2> muestra </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Fecha y hora de </h2>
                                  <h2> recolección </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Cotización </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Ítem de </h2>
                                  <h2> la </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                  class="text-center white--text">
                                  <h2> Observaciones </h2>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(ver, i ) in mostrasDatoss" :key="i">
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">
                                  <h3>{{ver.codMuestra}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{ver.munRecoleccion}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{ver.direccionTomaMuestra}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{ver.lugarTomaMuestra}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{ver.muestraRecolectadaPor}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{ver.procedimientoMuestreo}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{ver.tipoMuestra}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{ver.matrizMuestra}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{ver.fechaRecoleccion}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{ver.cotizacion}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                  <h3>{{ver.item}}</h3>
                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                </td>
                              </tr>
                            </tbody>
                          </template>

                        </v-simple-table>
                      </v-col>
                    </v-row>
                    <v-row style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722"
                      class="mx-5">
                      <v-col cols="6">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Observaciones prestablecidas</h3>
                        </div>
                      </v-col>
                      <v-col cols="6">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Condiciones del servicio</h3>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col style="border: solid 1px; border-color: black; border-top: 0px;" cols="1">
                        <div class="text-center ">
                          <body-1>1</body-1>
                        </div>
                      </v-col>
                      <v-col style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        cols="5">
                        <div class="text-center ">
                          <body-1>1</body-1>
                        </div>
                      </v-col>
                      <v-col style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        cols="6">
                        <div class="text-left ">
                          <body-1>El solicitante al afirmar la presente acta de recepción de muestras acepta lo
                            siguiente:</body-1>
                          <br>
                          <body-1>1. Que a las muestras se le realicen todos los ensayos de acuerdo al ítem de la
                            cotización indicado en el presente formato y los mismos sean reportados en el respectivo
                            informe de los resultados.</body-1>
                          <br>
                          <body-1>2.</body-1>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Quien entrega las muestras</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                      </v-col>
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h4>Fecha y hora de recepción de muestras</h4>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0">
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>C.C.</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                      </v-col>
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Quien recibe las muestras</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0">
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Firma</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                      </v-col>
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Firma</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0">
                      </v-col>
                    </v-row>
                  </v-container-fluid>
                </v-list>
              </v-card> 
    </v-dialog>

    <v-dialog v-model="dialog3" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">
          <span>Añadir tipo muestra</span>
        </v-card-title>
        <v-col cols="12">
        <v-text-field v-model="agregaTipoM" label="Tipo muestra" filled rounded dense></v-text-field>
      </v-col>
        <v-card-actions>
          <v-btn color="primary" text @click="guardar2()">
            Agregar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container-fluid>
</template>



<script>
import axios from "axios";
export default {
  name: "PageListamuestra",
  data() {
    return {
      datos: this.$store.state.muestras,
      datos2: [],
      contacto: "",
      loading: false,
      selection: 1,
      dialog: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      infoMuestras: [],
      Municipio: [],
      NombreContacto1: "",
      ApellidoContacto1: "",
      direccionM: "",
      lugarM: "",
      recolectadaPor: "",
      procedimiento: "",
      tipoM: "",
      matrizM: "",
      fecha: "",
      cotizacion: "",
      item: "",
      agregaTipoM: "",
      numeroactual: "",
      numerocoti: 0,
      cotizacion2: [],
      infoItem2: [],
      idCoti: "",
      itemsCoti: [],
      infoMuestraa: [],
      seleccionarItem:[],
      listarTipos:[],
      mostrasDatos:[],
      mostrasDatoss:[],


      seleccionadoCiudad: "",

    };
  },
  methods: {
    infoMuestraa1() {
      this.infoMuestraa.push()
    },
    eliminarMuestra(index) {
      this.mostrasDatos.splice(index, 1)
    },
    NombreContacto() {
      if (this.datos.contacto) {
        this.NombreContacto1 = this.datos.contacto.nombre
      } else {
        this.NombreContacto1 = ""
      }
    },
    cliente() {
      console.log("hola");
      console.log(this.datos._id);
      console.log(this.datos);
    },
    Volver() {
      this.$router.push("/Muestras");
    },
    reserve() {
      this.loading = true;
    },
    listar() {
      axios
        .get(`https://app-laboratorio.vercel.app/api/datmuestra/listarMuestras`)
        .then((response) => {
          this.infoMuestras = response.data.muestras;
          this.mostrasDatoss=response.data.muestras
        })
        .catch((error) => {
          console.log(error);
        });
    },

    listarCiudad() {
      axios.get("https://app-laboratorio.vercel.app/api/ciudad/CiudadDepartamento")
        .then(response => {
          response.data.ciudad.forEach(city => {
            this.Municipio.push(city)
          })

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
    Guardar() {
      let header = { headers: { "token": this.$store.state.token } }
      axios.post(`https://app-laboratorio.vercel.app/api/datmuestra/insertar`, {
        solicitante: this.datos._id,
        munRecoleccion: this.seleccionadoCiudad,
        direccionTomaMuestra: this.direccionM,
        lugarTomaMuestra: this.lugarM,
        muestraRecolectadaPor: this.recolectadaPor,
        procedimientoMuestreo: this.procedimiento,
        tipoMuestra: this.tipoM,
        matrizMuestra: this.matrizM,
        fechaRecoleccion: this.fecha,
        cotizacion: this.idCoti,
        item: this.item,

      }, header)
        .then((response) => {
          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: response.data.msg,
            showConfirmButton: false,
            timer: 1500,
          });
          this.mostrasDatos.push(response.data.coti)
          this.seleccionadoCiudad = ""
          this.direccionM = ""
          this.lugarM = ""
          this.recolectadaPor = ""
          this.procedimiento = ""
          this.tipoM = ""
          this.matrizM = ""
          this.cotizacion = ""
          this.item = ""
          this.dialog2 = false

          
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

    },

    guardar2(){
      axios.post(`https://app-laboratorio.vercel.app/api/Tipo_muestra/`, {
        tipos: this.agregaTipoM,
      })
        .then((response) => {
          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: response.data.msg,
            showConfirmButton: false,
            timer: 1500,
          });
          this.dialog3 = false
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
    },

    guardar3(){
      axios.post(`https://app-laboratorio.vercel.app/api/datmuestra/insertar`, {})
    },

    traerCotizacion() {
      let header = { headers: { "token": this.$store.state.token } }
      axios.get(`https://app-laboratorio.vercel.app/api/cotizacion/buscarNombre/${this.datos._id}`, header)
        .then(response => {
          this.cotizacion2 = response.data.coti[0]
          this.idCoti = this.cotizacion2._id
          this.infoItem();
          this.listarItems();
        })
        .catch(error => {
          console.log(error);
        })
    },
    info() {
      axios.get(`https://app-laboratorio.vercel.app/api/cotizacion/traerInfo`)
        .then((response) => {
          this.datos2 = response.data.info
          this.numerocoti = this.datos2[0].codMuestra
          let date = new Date();
          let output = String(date.getFullYear());
          if (this.numerocoti.toString().length === 1) {
            this.numeroactual = `000${this.numerocoti + 1}-${output}`
          } else if (this.numerocoti.toString().length === 2) {
            this.numeroactual = `00${this.numerocoti + 1}-${output}`
          } else if (this.numerocoti.toString().length === 3) {
            this.numeroactual = `0${this.numerocoti + 1}-${output}`
          } else if (this.numerocoti.toString().length === 4) {
            this.numeroactual = `${this.numerocoti + 1}-${output}`
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    infoItem() {
      let header = { headers: { "token": this.$store.state.token } }
      axios.get(`https://app-laboratorio.vercel.app/api/cotizacion/listarporIdCoti/${this.idCoti}`, header)
        .then((response) => {
          this.itemsCoti.push(response.data.items)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    listarItems(){
      let header = { headers: { "token": this.$store.state.token } }
      axios.get(`https://app-laboratorio.vercel.app/api/cotizacion/listarporIdCoti/${this.idCoti}`, header)
        .then((response) => {
          this.seleccionarItem=response.data.items
        })
        .catch((error) => {
          console.log(error);
        });

    },
    listarTiposs(){      
      axios.get(`https://app-laboratorio.vercel.app/api/datmuestra/listarMuestras`)
        .then((response) => {
            this.listarTipos=response.data.tipo
        })
        .catch((error) => {
          console.log(error);
        });

    },

  },
  created() {
    this.cliente();
    this.listarCiudad();
    this.listar();
    this.NombreContacto();
    this.traerCotizacion();
    this.info();
    this.listarTiposs();

  },

};
</script>
 