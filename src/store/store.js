import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store=new Vuex.Store({
    stake:{
        token:"",
        datos:{},
        cotizaciones:{},
        muestras:{}

    },

    mutations:{
        setToken(state,value){
            state.token=value
        },
        setDatos(state,datos){
            state.datos=datos
        },
        setCotizacion(state, value){
            state.cotizaciones = value
        },
        setMuestras(state, value){
            state.muestras = value
        }

    },

    actions:{
        setToken(context,value){
            context.commit("setToken",value)
        },
        setDatos(context,value){
            context.commit("setDatos", value)
        },
        setCotizacion(context,value){
            context.commit('setCotizacion',value)
        },
        setMuestras(context,value){
            context.commit('setMuestras',value)
        },
    }
});