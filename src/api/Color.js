import colors from "./colors-data.json";

export class Color {
    static getColors() {
        return new Promise((resolve, reject) => {
            if (colors) {
                resolve(colors);
            } else {
                reject();
            }
        });
    }
}