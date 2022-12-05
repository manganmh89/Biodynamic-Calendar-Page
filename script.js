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
        $results.text(phaseName(data.currentConditions.moonphase));
    });
}
function phaseName (inp) {

        if (inp === 0) {
            return "new moon"
        }
        else if (inp < 0.25){
            return "waxing crescent"	
        } 
        else if (inp === 0.25){
            return "first quarter"
        }
        else if (inp < 0.5){
            return "waxing gibbous"
        }
        else if (inp === 0.5){
            return "full moon"
        }
        else if (inp < 0.75){
            return "waning gibbous"
        }
        else if (inp ===0.75){
            return "last quarter"
        }
        else if (inp < 1){
            return "waning crescent"
        }
        else if (inp === 1){
            return "full moon"
        }
};

