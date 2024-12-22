import Mellowtel from "mellowtel";
import {CONFIGURATION_KEY, DISABLE_LOGS, MAX_DAILY_RATE} from "./constants";

document.addEventListener('DOMContentLoaded', async () => {
    const supportDeveloperToggle = document.getElementById('supportDeveloperToggle');
    const mellowtel = new Mellowtel(CONFIGURATION_KEY,{
        disableLogs: DISABLE_LOGS,
        MAX_DAILY_RATE: MAX_DAILY_RATE
    });

    supportDeveloperToggle.checked = await mellowtel.getOptInStatus();

    supportDeveloperToggle.addEventListener('change', async (e) => {
        if (e.target.checked) {
            console.log('Opting in!');
            await mellowtel.optIn();
            await mellowtel.start();
        } else {
            console.log("Opting out!")
            await mellowtel.optOut();
        }
    });

    document.getElementById('mellowtelOptOutSettings').addEventListener('click', async () => {
        // open settings page
        await mellowtel.openUserSettingsInPopupWindow();
    });
});