<template>
    <v-container style="margin-top: 100px">
      <v-row style="margin: 0" class="mt-n6">
        <v-col cols="4">
          <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver()">
            Volver
          </v-btn>
        </v-col>
  
        <v-col cols="4">
          <div class="text-center black--text font-weight-Normal">
            <h1>COTIZACIONES</h1>
          </div>
        </v-col>
  
        <v-col cols="4" class="mt-3">
          <v-row justify="center">
            <v-dialog
              v-model="dialog"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="deep-orange" dark v-bind="attrs" v-on="on">
                  <v-icon> mdi-plus-circle-outline </v-icon>Crear Cotización
                </v-btn>
              </template>
  
              <v-card>
                <v-toolbar dark>
                  <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Crear Cotización</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn dark text @click="dialog = false">
                      <v-icon> mdi-plus-circle-outline </v-icon>Guardar
                    </v-btn>
                  </v-toolbar-items>
                </v-toolbar>
  
                <v-list three-line subheader>
                  <v-row style="margin: 0">
                    <v-col cols="2" align="center">
                      <br>
                      <v-img
                        height="165px"
                        width="165px"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/1200px-Sena_Colombia_logo.svg.png"
                      ></v-img>
                    </v-col>
  
                    <v-col class="py-4 text-center black--text" cols="6">
                      <h4>
                        <u><em>Oferta de servicios</em> </u>
                      </h4>
                      <em
                        >Laboratorio de Caracterización Fisicoquímica de Alimentos
                        del Centro Agroturístico <br />
                        “LABFICAT” de San Gil, Santander <br />
                        NIT: 899.999.034 <br />
                        Dirección: Calle 22 No. 09 – 82, San Gil, Santander <br />
                        Teléfono: (607) 7248113 <br />
                        Correo electrónico: labficat@sena.edu.co </em
                      ><br />
                    </v-col>
  
                    <v-col cols="2" class="mt-5">
                      <div class="text-center black--text headline">
                        <h4>Cotización No.</h4>
                      </div>
                      <div class="text-center red--text font-italic headline">
                        xxxx-xxxxvx
                      </div>
  
                      <div class="text-center black--text headline mt-10">
                        <h4>Fecha de emisión:</h4>
                      </div>
                      <v-text-field type="date" outlined dense> </v-text-field>
                    </v-col>
                    <v-col class="py-4 text-center black--text" cols="2">
                      <h6>Codigo</h6>
                      <h6>CAT-ST-OC-F-002</h6>
                      <br />
                      <h6>Aprobacion</h6>
                      <h6>2021-08-30</h6>
                      <h6>Version</h6>
                      <h6>1</h6>
                    </v-col>
                  </v-row>
                </v-list>
  
                <v-divider></v-divider>
  
                <v-container align-center justify-center class="mx-1 mt-n15">
                  <v-row
                    style="
                      margin: 0;
                      border: solid 1px;
                      border-color: black;
                      background-color: #ff5722;
                    "
                    class="mx-5"
                  >
                    <v-col cols="12">
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h5>1. Datos del cliente</h5>
                      </div>
                    </v-col>
                  </v-row>
  
                  <v-row style="margin: 0" class="mx-5">
                    <v-col
                      style="
                        background-color: #ff5722;
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                      "
                      cols="2"
                    >
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h5>Cliente</h5>
                      </div>
                    </v-col>
  
                    <v-col
                      cols="4"
                      style="
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      class="pa-0 ma-0"
                    >
                      <v-text-field class="pa-0 ma-0" full-width hide-details>
                      </v-text-field>
                    </v-col>
                    <v-col
                      style="
                        background-color: #ff5722;
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      cols="2"
                    >
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h5>NIT/ C.C.</h5>
                      </div>
                    </v-col>
                    <v-col
                      cols="4"
                      style="s
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      class="pa-0 ma-0"
                    >
                      <v-text-field
                        class="pa-0 ma-0"
                        full-width
                        hide-details
                        filled
                        disabled
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
  
                  <v-row style="margin: 0" class="mx-5">
                    <v-col
                      style="
                        background-color: #ff5722;
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                      "
                      cols="2"
                    >
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h5>Dirección</h5>
                      </div>
                    </v-col>
                    <v-col
                      cols="4"
                      style="
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      class="pa-0 ma-0"
                    >
                      <v-text-field
                        class="pa-0 ma-0"
                        full-width
                        hide-details
                        filled
                        disabled
                      >
                      </v-text-field>
                    </v-col>
                    <v-col
                      style="
                        background-color: #ff5722;
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      cols="2"
                    >
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h5>Ciudad</h5>
                      </div>
                    </v-col>
                    <v-col
                      cols="4"
                      style="
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      class="pa-0 ma-0"
                    >
                      <v-text-field
                        class="pa-0 ma-0"
                        full-width
                        hide-details
                        filled
                        disabled
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
  
                  <v-row style="margin: 0" class="mx-5">
                    <v-col
                      style="
                        background-color: #ff5722;
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                      "
                      cols="2"
                    >
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h5>Departamento</h5>
                      </div>
                    </v-col>
                    <v-col
                      cols="4"
                      style="
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      class="pa-0 ma-0"
                    >
                      <v-text-field
                        class="pa-0 ma-0"
                        full-width
                        hide-details
                        filled
                        disabled
                      >
                      </v-text-field>
                    </v-col>
                    <v-col
                      style="
                        background-color: #ff5722;
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      cols="2"
                    >
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h5>Teléfono</h5>
                      </div>
                    </v-col>
                    <v-col
                      cols="4"
                      style="
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      class="pa-0 ma-0"
                    >
                      <v-text-field
                        class="pa-0 ma-0"
                        full-width
                        hide-details
                        filled
                        disabled
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
  
                  <v-row style="margin: 0" class="mx-5">
                    <v-col
                      style="
                        background-color: #ff5722;
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                      "
                      cols="2"
                    >
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h5>Contacto</h5>
                      </div>
                    </v-col>
                    <v-col
                      cols="4"
                      style="
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      class="pa-0 ma-0"
                    >
                      <v-text-field
                        class="pa-0 ma-0"
                        full-width
                        hide-details
                        filled
                        disabled
                      >
                      </v-text-field>
                    </v-col>
                    <v-col
                      style="
                        background-color: #ff5722;
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      cols="2"
                    >
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h5>Cargo</h5>
                      </div>
                    </v-col>
                    <v-col
                      cols="4"
                      style="
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      class="pa-0 ma-0"
                    >
                      <v-text-field
                        class="pa-0 ma-0"
                        full-width
                        hide-details
                        filled
                        disabled
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
  
                  <v-row style="margin: 0" class="mx-5">
                    <v-col
                      style="
                        background-color: #ff5722;
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                      "
                      cols="2"
                    >
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h5>Celular</h5>
                      </div>
                    </v-col>
                    <v-col
                      cols="4"
                      style="
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      class="pa-0 ma-0"
                    >
                      <v-text-field
                        class="pa-0 ma-0"
                        full-width
                        hide-details
                        filled
                        disabled
                      >
                      </v-text-field>
                    </v-col>
                    <v-col
                      style="
                        background-color: #ff5722;
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      cols="2"
                    >
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h6>Correo electrónico</h6>
                      </div>
                    </v-col>
                    <v-col
                      cols="4"
                      style="
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      class="pa-0 ma-0"
                    >
                      <v-text-field
                        class="pa-0 ma-0"
                        full-width
                        hide-details
                        filled
                        disabled
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
  
                  <v-row style="margin: 0" class="mx-5">
                    <v-col
                      style="
                        background-color: #ff5722;
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                      "
                      cols="2"
                    >
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h6>Validez de la oferta</h6>
                      </div>
                    </v-col>
                    <v-col
                      cols="4"
                      style="
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      class="pa-0 ma-0"
                    >
                      <v-text-field
                        class="pa-0 ma-0"
                        full-width
                        hide-details
                        filled
                        disabled
                      >
                      </v-text-field>
                    </v-col>
                    <v-col
                      style="
                        background-color: #ff5722;
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      cols="2"
                    >
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h6>Entrega de resultados</h6>
                      </div>
                    </v-col>
                    <v-col
                      cols="4"
                      style="
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      class="pa-0 ma-0"
                    >
                      <v-text-field
                        class="pa-0 ma-0"
                        full-width
                        hide-details
                        filled
                        disabled
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
  
                  <v-row style="margin: 0" class="mx-5">
                    <v-col
                      style="
                        background-color: #ff5722;
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                      "
                      cols="2"
                    >
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h5>Elaborador por</h5>
                      </div>
                    </v-col>
                    <v-col
                      cols="4"
                      style="
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      class="pa-0 ma-0"
                    >
                      <v-text-field
                        class="pa-0 ma-0"
                        full-width
                        hide-details
                        filled
                        disabled
                      >
                      </v-text-field>
                    </v-col>
                    <v-col
                      style="
                        background-color: #ff5722;
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      cols="2"
                    >
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h5>Cargo</h5>
                      </div>
                    </v-col>
                    <v-col
                      cols="4"
                      style="
                        border: solid 1px;
                        border-color: black;
                        border-top: 0px;
                        border-left: 0px;
                      "
                      class="pa-0 ma-0"
                    >
                      <v-text-field
                        class="pa-0 ma-0"
                        full-width
                        hide-details
                        filled
                        disabled
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
  
                  <v-row
                    class="mx-5"
                    style="
                      margin: 0;
                      border: solid 1px;
                      border-color: black;
                      background-color: #ff5722;
                      border-top: 0px;
                    "
                  >
                    <v-col cols="12">
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h5>2. Propuesta técnica y económica</h5>
                      </div>
                    </v-col>
                  </v-row>
  
                  <!-- item 1 -->
                  <v-row
                    class="mx-5"
                    style="
                      margin: 0;
                      border: solid 1px;
                      border-color: black;
                      background-color: #ff5722;
                      border-top: 0px;
                    "
                  >
                    <v-col cols="12">
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h5>Ítem 1</h5>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row style="margin: 0" class="mx-5">
                    <v-col cols="12" class="ma-0 pa-0">
                      <v-simple-table>
                        <template v-slot:default>
                          <thead
                            style="background-color: #ff5722; border-top: 0px"
                          >
                            <tr>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Código de referencia</h4>
                              </th>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-left: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Descripción del ensayo</h4>
                              </th>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-left: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Unidades</h4>
                              </th>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-left: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Técnica analítica</h4>
                              </th>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-left: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Método analítico</h4>
                              </th>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-left: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Limite de cuantificación</h4>
                              </th>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-left: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Costo del ensayo</h4>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                "
                              >
                                
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                              >
                              
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                              >
                              
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                              >
                               
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                              >
                                
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                              >
                                
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                              >
                                g
                              </td>
                            </tr>
                            <tr>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-right: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-right: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-right: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-right: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-right: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                "
                                class="text-right white--text"
                              >
                                <h4>Costo del ítem 1</h4>
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                "
                                class="pa-0 ma-0"
                              >
                                <v-text-field
                                  class="pa-0 ma-0"
                                  type="number"
                                  full-width
                                  hide-details
                                >
                                </v-text-field>
                              </td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-col>
                  </v-row>
              
                  <v-row
                    class="mx-5"
                    style="
                      margin: 0;
                      border: solid 1px;
                      border-color: black;
                      background-color: #ff5722;
                      border-top: 0px;
                    "
                  >
                    <v-col cols="12">
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h5>Ítem 2</h5>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row style="margin: 0" class="mx-5">
                    <v-col cols="12" class="ma-0 pa-0">
                      <v-simple-table>
                        <template v-slot:default>
                          <thead
                            style="background-color: #ff5722; border-top: 0px"
                          >
                            <tr>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Código de referencia</h4>
                              </th>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-left: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Descripción del ensayo</h4>
                              </th>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-left: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Unidades</h4>
                              </th>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-left: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Técnica analítica</h4>
                              </th>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-left: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Método analítico</h4>
                              </th>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-left: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Limite de cuantificación</h4>
                              </th>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-left: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Costo del ensayo</h4>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                "
                              >
                                
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                              >
                                
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                              >
                                
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                              >
                                
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                              >
                                
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                              >
                                
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                              >
                                
                              </td>
                            </tr>
                            <tr>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-right: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-right: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-right: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-right: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-right: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                "
                                class="text-right white--text"
                              >
                                <h4>Costo del ítem 2</h4>
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                "
                                class="pa-0 ma-0"
                              >
                                <v-text-field
                                  class="pa-0 ma-0"
                                  type="number"
                                  full-width
                                  hide-details
                                >
                                </v-text-field>
                              </td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-col>
                  </v-row>
                  <!-- item 3 -->
                  <v-row
                    class="mx-5"
                    style="
                      margin: 0;
                      border: solid 1px;
                      border-color: black;
                      background-color: #ff5722;
                      border-top: 0px;
                    "
                  >
                    <v-col cols="12">
                      <div
                        class="text-center white--text text-no-wrap deep-orange"
                      >
                        <h5>Ítem 3</h5>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row style="margin: 0" class="mx-5">
                    <v-col cols="12" class="ma-0 pa-0">
                      <v-simple-table>
                        <template v-slot:default>
                          <thead
                            style="background-color: #ff5722; border-top: 0px"
                          >
                            <tr>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Código de referencia</h4>
                              </th>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-left: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Descripción del ensayo</h4>
                              </th>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-left: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Unidades</h4>
                              </th>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-left: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Técnica analítica</h4>
                              </th>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-left: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Método analítico</h4>
                              </th>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-left: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Limite de cuantificación</h4>
                              </th>
                              <th
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-left: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>Costo del ensayo</h4>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                "
                              >
                                a
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                              >
                                b
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                              >
                                c
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                              >
                                d
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                              >
                                e
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                              >
                                f
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                              >
                                g
                              </td>
                            </tr>
                            <tr>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-right: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-right: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-right: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-right: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-right: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                "
                                class="text-right white--text"
                              >
                                <h4>Costo del ítem 3</h4>
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                "
                                class="pa-0 ma-0"
                              >
                                <v-text-field
                                  class="pa-0 ma-0"
                                  type="number"
                                  full-width
                                  hide-details
                                >
                                </v-text-field>
                              </td>
                            </tr>
  
                            <tr>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-top: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border-bottom: 0px;
                                  border-top: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border-bottom: 0px;
                                  border-top: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border-bottom: 0px;
                                  border-top: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border-bottom: 0px;
                                  border-top: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                "
                                class="text-right white--text"
                              >
                                <h4>Subtotal</h4>
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-top: 0px;
                                "
                                class="pa-0 ma-0"
                              >
                                <v-text-field
                                  class="pa-0 ma-0"
                                  type="number"
                                  full-width
                                  hide-details
                                >
                                </v-text-field>
                              </td>
                            </tr>
  
                            <tr>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-top: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border-bottom: 0px;
                                  border-top: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border-bottom: 0px;
                                  border-top: 0px;
                                "
                                class="text-center white--text"
                              >
                                <h4>
                                  Observaciones de la propuesta técnica y
                                  económica
                                </h4>
                              </td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border-bottom: 0px;
                                  border-top: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border-bottom: 0px;
                                  border-top: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                "
                                class="text-right white--text"
                              >
                                <h4>IVA</h4>
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-top: 0px;
                                "
                                class="pa-0 ma-0"
                              >
                                <v-text-field
                                  class="pa-0 ma-0"
                                  type="number"
                                  full-width
                                  hide-details
                                >
                                </v-text-field>
                              </td>
                            </tr>
  
                            <tr>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-right: 0px;
                                  border-top: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-right: 0px;
                                  border-top: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-right: 0px;
                                  border-top: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-right: 0px;
                                  border-top: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-right: 0px;
                                  border-top: 0px;
                                "
                              ></td>
                              <td
                                style="
                                  background-color: #ff5722;
                                  border: solid 1px;
                                  border-color: black;
                                  border-top: 0px;
                                "
                                class="text-right white--text"
                              >
                                <h4>Total</h4>
                              </td>
                              <td
                                style="
                                  border: solid 1px;
                                  border-color: black;
                                  border-left: 0px;
                                  border-top: 0px;
                                "
                                class="pa-0 ma-0"
                              >
                                <v-text-field
                                  class="pa-0 ma-0"
                                  type="number"
                                  full-width
                                  hide-details
                                >
                                </v-text-field>
                              </td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-dialog>
          </v-row>
        </v-col>
      </v-row>
      <v-row style="margin: 0">
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <v-simple-table class="mb-15" align-center justify-center>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Codigo de cotización</th>
                  <th class="text-left">Nombre completo del cliente</th>
                  <th class="text-left">Documento</th>
                  <th class="text-left">Fecha</th>
                  <th class="text-left">Otros</th>
                  <th class="text-left">Editar</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cotizacion, i) in cotizaciones" :key="i">
                  <td>{{ cotizacion.numero_cotizacion }}</td>
                  <td>
                    {{ cotizacion.idCliente.nombre }}
                    {{ cotizacion.idCliente.apellidos }}
                  </td>
                  <td>{{ cotizacion.idCliente.documento }}</td>
                  <td>{{ cotizacion.fecha_emision.slice(0, 10) }}</td>
                  <td>
                    <v-btn
                      color="success"
                      class="mr-3"
                      v-if="cotizacion.estado === 1"
                      rounded
                      @click="desactivar(cotizacion._id)"
                    >
                      Activo
                    </v-btn>
                    <v-btn
                      color="error"
                      v-if="cotizacion.estado === 0"
                      rounded
                      @click="activar(cotizacion._id)"
                    >
                      Desactivado
                    </v-btn>
                  </td>
                  <td>
                    <v-btn color="deep-orange" rounded dark>
                      <v-icon> mdi-border-color </v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    // https://laboratorio-jjai-2.herokuapp.com/api
    name: "PageCoti",
    data() {
      return {
        cotizaciones: [],
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      };
    },
    methods: {
      Volver() {
        this.$router.push("/");
      },
      listar() {
        axios
          .get("http://localhost:4000/api/cotizacion/listarTodasLasCotizaciones")
          .then((response) => {
            this.cotizaciones = response.data.coti;
            console.log(this.cotizaciones);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      detalles(cotizacion) {
        this.$store.dispatch("", cotizacion);
        this.$router.push("/DetallesCotizacion");
      },
      desactivar(id) {
        let header = { headers: { "token": this.$store.state.token } };
        console.log(header);
        axios
          .put(`http://localhost:4000/api/cotizacion/activar/${id}`, {}, header)
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
        let header = { headers: { "token": this.$store.state.token } };
        axios
          .put(`http://localhost:4000/api/cotizacion/desactivar/${id}`, {}, header)
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
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    created() {
      this.listar();
    },
  };
  </script>