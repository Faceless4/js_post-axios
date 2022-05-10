const axios = require('axios');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function onGetResponse(res) {
    console.log(`statusCode: ${res.status}`);

}
function sendRequest() {
    const date = new Date()
    console.log(+new Date() / 1000)

    axios
        .post('http://gw.flespi.io:22025', {
            "ident": "1234",
            "timestamp": date.getTime() / 1000
        })
        .then(onGetResponse)
        .catch(error => {
            console.error(error);
        });
}
function onUserInput(n)
{
    for (let i=0,j=0; i<10; i+=2,j++)
    {
        console.log(i,j)
        setTimeout(sendRequest, 1000*n*(j))
    }
    rl.close();
}
rl.question('', onUserInput)
