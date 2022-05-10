const https = require('http')
function onGetResponse(res)
{
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', d => {
        console.log(d);
    });
}
function sendRequest()
{
    console.log(+new Date()/1000)
    const req = https.request(options, onGetResponse)
    req.on('error', error => {
        console.error(error)
    })
    req.write(data);
    req.end();
}
const date = new Date()
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const params = {
    "ident": "1234",
    "timestamp": date.getTime()/1000
}
const data = JSON.stringify(params);
const options = {
    hostname: 'gw.flespi.io',
    port: 22025,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
    },
};
rl.question('kak ela?', (n) => {
    console.log(n)
    for (var i=0, j=0;i<10; i+=parseInt(n),j++)
    {
        setTimeout(sendRequest, 2000*(j))
    }
    rl.close();
});


