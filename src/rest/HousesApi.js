const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";


class HousesApi {
    get = async () => {
        try {
            console.log("Inside Try Block Of HousesAPI get funcation")
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log("Oops, looks like fetchHouses has an issue", e)
        }
    }

    put = async (house) => {
        try {
            console.log("Inside Try Block Of put funcation")
            console.log(house)
            console.log("HOUSES_ENDPOINT: " + HOUSES_ENDPOINT + house._id)
            console.log("house._id: " + house._id)
            
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });

            console.log("The body is: " + JSON.stringify(house))
            // console.log(" resp.json(): " +  resp.json())
            console.log("At The End OF Try Block Of put funcation")
            return await resp.json();
        } catch(e) {
            console.log("Oops, looks like updating houses has an issue", e)
        }
    }
}


export const housesApi = new HousesApi();