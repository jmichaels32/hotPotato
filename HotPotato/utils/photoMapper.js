import * as Const from "../constants.js";

export const mapPhoto = (name) => {
    console.log(name.length);
    switch(name) {
        case "Jack":
            return Const.jackImagePath;
        case "Daphne":
            return Const.daphneImagePath;
        case "Michael": 
            return Const.michaelImagePath;
        case "Asha":
            return Const.ashaImagePath;
        default:
            return Const.jackImagePath;
    }
        
} 
