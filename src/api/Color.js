// import colors from "./colors-data.json";

export class Color {

    static getColors() {

        var colors;
        
        return new Promise((resolve, reject) => {
            fetch('https://jonasjacek.github.io/colors/data.json', {
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