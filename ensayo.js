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
        //console.log(eventBody.data)
    });

    // Evento - Información estado de los agentes
    function datos_json(){
         // Evento - Información estado de los agentes
         //ID
        for(i=0; i < events[0].detail.eventBody.service.users.length; i++){
        var id=(events[0].detail.eventBody.service.users[i].id);
        //console.log(id);
        }
        // nombre agente 
        for(i=0; i < events[0].detail.eventBody.service.users.length; i++){
        var name=(events[0].detail.eventBody.service.users[i].name);
        //console.log(name);
        }






        //retornar el METRIC
        var rMemberUsersCount=(events[0].detail.eventBody.data.metrics[0].stats.count)
        console.log(rMemberUsersCount);
       // for(i=1; i < events[0].detail.eventBody.data.metrics.length; i++){
        //for (a=0; a < events[0].detail.eventBody.data.metrics.stats.length; a++){
        
       // var metric=(events[0].detail.eventBody.data.metrics[i].metric);

        var rActiveMembers=( events[0].detail.eventBody.data.metrics[1].usersId);
        var rOnQueueUsers_interacting=(events[0].detail.eventBody.data.metrics[2].usersId);
        var rOnQueueUsers_idle=(events[0].detail.eventBody.data.metrics[3].usersId);
        var rOnQueueUsers_acw=(events[0].detail.eventBody.data.metrics[4].usersId);
        
        
        
        console.log(rActiveMembers);
        console.log(rOnQueueUsers_interacting);
        console.log(rOnQueueUsers_idle);
        console.log(rOnQueueUsers_acw);
        



        //retornar el count 
        var coutn=(events[0].detail.eventBody.data.metrics[4].stats.count);
       // console.log(coutn);
        ///console.log(x);
        
        // console.log(nombre_evento)
        //console.log(metric_coutn)


        // ------------------------------------------------------------
        //intdicadores
        // id y nombres

        var indica_id_name=(events[1].detail.eventBody.service.users);
        //console.log(indica_id_name);
       // console.log("la cantidad es ",events[1].detail.eventBody.service.users.length);

            // data 
        /*
        var metrics_aEvents=(events[1].detail.eventBody.data);  
        console.log(metrics_aEvents) 
        console.log(events[1].detail.eventBody.data.)
        */
        
    }
    datos_json();
})()