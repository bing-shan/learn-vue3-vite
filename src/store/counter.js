import {defineStore} from "pinia";
import {computed, ref} from "vue";
import axios from "axios";
export const useCounterStore = defineStore("counter",() => {
    //state:
    let age = ref(0);
    const API_URL = 'http://geek.itheima.net/v1_0/channels';

    const changeAge = () => {
        age.value++
    };

    //getters:
    const doubleAge = computed(() => age.value*2);

    //actions:
    const list = ref([])
    const getList = async () => {
        const res = await axios.get(API_URL);
        list.value = res.data.data.channels;
    }

    return {
        age,
        doubleAge,
        changeAge,
        list,
        getList
    }
})