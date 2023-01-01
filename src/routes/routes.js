import login from "../components/Login.vue"


import iniciop from "../pages/InicioP.vue"
import clientes from "../pages/Clientes.vue"
import Registro from "../pages/RegistroLogin.vue"
import OrdenServicio from "../pages/OrdenServicio.vue"
import Calidad  from "../pages/Calidad.vue";
import cotizacion from '../pages/Cotizacion.vue';
import RecepcionMuestras from "../pages/RecepcionMuestras.vue"
import ConfiguracionAdmin from "../pages/ConfiguracionAdmin.vue"
import AgreCiudades from '../pages/AgreCiudades.vue'
import Ensayo from '../pages/Ensayo.vue';
import ListaM from '../pages/ListaMuestras.vue';
import Log  from '../pages/Bitacora.vue';
import Setup from '../pages/Setup.vue';
import Color from "../pages/Color.vue";
import AggUsuario from '../pages/AggUsuario.vue';
import Muestras from '../pages/Muestras.vue';
import Perfilpersona from "../pages/Perfilpersona.vue";




export const routes = [
    { path: "/", component: login },
    
    
    { path: "/Registro", component: Registro },
    { path: "/iniciop", component: iniciop },

    { path: "/clientes", component: clientes},
    {path: '/Calidad', component: Calidad}, 
    { path: "/OrdenServicio", component: OrdenServicio },
    { path: '/Cotizacion', component: cotizacion },
    
    {path: '/perfilpersona', component: Perfilpersona},
    { path: '/RecepcionMuestras', component: RecepcionMuestras },
    { path: '/ConfiguracionAdmin', component: ConfiguracionAdmin },
    { path: '/AgreCiudades', component: AgreCiudades},
    {path: '/aggusuario', component: AggUsuario},
    {path: '/setup', component: Setup},
    {path: '/ListaM', component: ListaM},
    {path: '/EnsayoLab', component: Ensayo},
    {path: '/log', component: Log},
    {path: '/Muestras', component: Muestras},
    {path: '/color', component: Color},
]       