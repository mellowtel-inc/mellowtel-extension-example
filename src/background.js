import Mellowtel from "mellowtel";
import {CONFIGURATION_KEY, DISABLE_LOGS, MAX_DAILY_RATE} from "./constants";


let mellowtel;

(async () => {
    mellowtel = new Mellowtel(CONFIGURATION_KEY, {
        disableLogs: DISABLE_LOGS,
        MAX_DAILY_RATE: MAX_DAILY_RATE
    });
    await mellowtel.initBackground();
})();


chrome.runtime.onInstalled.addListener(async function(details) {
    console.log("Extension Installed or Updated");
    // If you want to handle first install and updates differently
    if(details.reason === "install"){
        // call a function to handle a first install
        await mellowtel.generateAndOpenOptInLink();
    }
});