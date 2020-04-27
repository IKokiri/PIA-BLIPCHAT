// import colors from "./colors-data.json";

export class Color {

    static getColors() {

        var colors;
        
        return new Promise((resolve, reject) => {
            fetch('http://www.colr.org/json/scheme/latest', {
            method: 'GET',
            }).then(res=>res.json())
            .then(res =>{
                colors = res
                if (colors) {
                    resolve(colors);
                } else {
                    reject();
                }
            });
        });
    }
}