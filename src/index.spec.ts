import {generatePanda} from "./index";

describe('#generatePanda', () => {

    it('should return the a kung-fu panda', () => {
        expect(generatePanda()).toEqual({
            name: "kungFu", type: "bear"
        });
    });

    it('shouldnt be null', () => {
        expect(generatePanda()).not.toBe(null);
    });

});
