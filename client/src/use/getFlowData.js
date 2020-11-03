import { reactive, onMounted, toRefs } from "@vue/composition-api";
import axios from "axios";


export function getFlowItems() {

    const state = reactive({
        error: null,
        data: null
    })

    const getItems = async () => {
        try {
            const json = await axios("/api/FlowItems");
            state.data = json.data;
        } catch (e) {
            state.error = e;
        }
    };

    onMounted(() => {
        getItems();
    });

    return { ...toRefs(state), getItems, getFlowItems };
}