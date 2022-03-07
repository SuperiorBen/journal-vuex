import { createStore } from "vuex";
import JournalModule from "../modules/daybook/store/journal";

const store = createStore({
    modules:{
        JournalModule
    }
    
});

export default store;