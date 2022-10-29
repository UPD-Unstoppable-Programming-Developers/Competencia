const axios = require("axios");

const __API_REST_PUBLIC = "https://mqjl9s6vf4.execute-api.eu-west-1.amazonaws.com/prod/v1/hackday/public/event";
const __API_REST_PRIVATE = "https://mqjl9s6vf4.execute-api.eu-west-1.amazonaws.com/prod/v1/hackday/private/event";

(async () => {
    const config = {
        method: 'get',
        url: __API_REST_PUBLIC,
        headers: {
            'Accept': 'application/json'
        }
    }

    // Como se ha incluido en la header el Accept para json lo que se nos retorna es un objeto JSON. Podría no ser así y se tendría que 
    // realizar un JSON.parse de la data del response.
    const { data } = await axios(config);
    // Con esto llegamos al mensaje que el bus emite. Este es un JSON en formato String
    const { payload: { data: { onCreateHackathonEvents: { event } } } } = data; // = const event = data.payload.data.onCreateHackathonEvents.event
    // Como el mensaje está en formato String lo tenemos que convertir en un objeto JSON para
    // poder llegar a la propiedad que queremos.
    // Con esto conseguimos los eventos del mensaje
    const { detail: { events } } = JSON.parse(event) // = const events = JSON.parse(event).detail.events
    
    // Cada uno de los eventos tiene la información contenida en una propieda detail.evenBody. Esta es la información
    // con la que tenemos que trabjar.
    events.forEach(el => {
        const { detail: { eventBody}} = el;
        console.log(eventBody)
    });
})()