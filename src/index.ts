import {IMyType} from "./@types";
import {log} from "./commons";

export function generatePanda(): IMyType {
    return {
        name: "kungFu",
        type: "bear"
    };

}

(async () => {
    const panda = generatePanda();
    log(panda);
})();
