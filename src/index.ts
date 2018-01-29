import {IMyType} from "./@types";
import {debug} from "./commons";

export function generatePanda(): IMyType {
    return {
        name: "kungFu",
        type: "bear"
    };

}

(async () => {
    const panda = generatePanda();
    debug(panda);
})();
