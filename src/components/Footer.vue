<template>
  <v-footer color="black" padless app>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="black"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col class=" black py-2 text-center white--text" cols="12">
        
        <h5> Laboratorio de Caracterización Fisicoquímica de Alimentos del Centro Agroturístico “LABFICAT” de San Gil, Santander <br />
        NIT: 899.999.034 <br />
        Dirección: Calle 22 No. 09 – 82, San Gil, Santander <br />
        Teléfono: (607) 7248113 <br />
        Correo electrónico: labficat@sena.edu.co <br /></h5>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "PageFooter",
  data: () => ({
    links: [],
  }),
};
</script>
