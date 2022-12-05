///////////
// ELEMENTS REF'D / CACHED ELEMENTS
// ///////////
// const $title = $( '#title' )
// const $for = $( '#for' )
// const $temperature = $( '#temperature' )
// const $feels = $( '#feels' )
// const $weather = $( '#weather' )
// const $main = $( 'main')
const $results = $('#results')
const $form = $('form')
const $input = $( 'input[type="text"]' )
//const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${($input.val())}?unitGroup=us&key=K4CKEF7AFMK69N9VWWMWYDTPG&contentType=json`;

///////////
// EVENT LISTENERS
///////////
$form.on('submit', handleGetData)
///////////
// FUNCTIONS
///////////

function handleGetData(event) {
    console.log($input.val())
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${($input.val())}?key=K4CKEF7AFMK69N9VWWMWYDTPG`;
    event.preventDefault();
    userInput = ($input.val())
    if(userInput === '') return;

    $input.val('')

    $.ajax( URL ).then( ( data ) => {
        console.log( data );
        $results.text(data.currentConditions.moonPhase);
        
        // if (data.currentConditions.moonPhase === 0) {
        //     data.currentConditions.moonPhase ="new moon"
        // }
        // else if (data.currentConditions.moonPhase < 0.25){
        //     data.currentConditions.moonPhase ="waxing crescent"	
        // } 
        // else if (data.currentConditions.moonPhase === 0.25){
        //     data.currentConditions.moonPhase ="first quarter"
        // }
        // else if (data.currentConditions.moonPhase < 0.5){
        //     data.currentConditions.moonPhase ="waxing gibbous"
        // }
        // else if (data.currentConditions.moonPhase === 0.5){
        //     data.currentConditions.moonPhase ="full moon"
        // }
        // else if (data.currentConditions.moonPhase < 0.75){
        //     data.currentConditions.moonPhase ="waning gibbous"
        // }
        // else if (data.currentConditions.moonPhase ===0.75){
        //     data.currentConditions.moonPhase ="last quarter"
        // }
        // else if (data.currentConditions.moonPhase < 1){
        //     data.currentConditions.moonPhase ="waning crescent"
        // }
        // else if (data.currentConditions.moonPhase === 1){
        //     data.currentConditions.moonPhase ="full moon"
        // }
    })
}
