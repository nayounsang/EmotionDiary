import { NUMRGB } from "../types/types";
import { ScoreType } from "../types/types";


export const mixColor = (score: ScoreType) => {

    const yellowColor: NUMRGB = [255, 255, 0].map(x => x * score.positive);
    const blueColor: NUMRGB = [0, 0, 255].map(x => x * score.negative);
    const tempColor: NUMRGB = [yellowColor[0], yellowColor[1], blueColor[2]];
    const greyColor: NUMRGB = [yellowColor[0] * 0.2989, yellowColor[1] * 0.5870, blueColor[2] * 0.1140];
    const subColor: NUMRGB = [tempColor[0] - greyColor[0], tempColor[1] - greyColor[1], tempColor[2] - greyColor[2]].map(x => x * score.neutral);
    return [tempColor[0] - subColor[0], tempColor[1] - subColor[1], tempColor[2] - subColor[2]];
}

export const convertColorNumtoFormat = (color: NUMRGB) => {
    const strColorArray: Array<string> = color.map(x => x.toString());
    return "rgb" + "(" + strColorArray[0] + "," + strColorArray[1] + "," + strColorArray[2] + ")";
}

export const colorValue = (color: NUMRGB) => {
    const regularization: NUMRGB = color.map(x => x / 255);
    return Math.max(...regularization);
}

