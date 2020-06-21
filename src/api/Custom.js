// import cust from "./colors-data.json";

export class Custom {

    static getCustom() {

        var custom;
        
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/', {
            method: 'GET',
            }).then(res=>res.json())
            .then(res =>{
                custom = res
                if (custom) {
                    resolve(custom);
                } else {
                    reject();   
                }
            });
        });
    }


    static setCustom(json) {

        const requestOptions = {
            method: 'POST',
            headers: { 
                // "Content-Type": "application/x-www-form-urlencoded"
                // "Content-Type": "application/x-www-form-urlencoded"
            },
            // body: JSON.stringify(json)
        };
        fetch('http://localhost:3000/'+json, requestOptions)
            .then(response => response.json())
            .then(data => this.setState());
    }
}