import Mellowtel from "mellowtel";
import {CONFIGURATION_KEY, DISABLE_LOGS, MAX_DAILY_RATE} from "./constants";

(async () => {
    const mellowtel = new Mellowtel(CONFIGURATION_KEY,{
        disableLogs: DISABLE_LOGS,
        MAX_DAILY_RATE: MAX_DAILY_RATE
    })
    await mellowtel.initContentScript();
})();