//Network call code
function doNetworkCall(){
    const URL = 'https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json'
    const promise = fetch(URL);
    console.log('Promise is', promise);
    promise.then(function(response){
        console.log(response);
    }).catch(function(err){
        console.log('Error', err);
    });
    console.log('Good Bye ');
}