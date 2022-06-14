import { createServer, Socket } from 'net'
import { wait } from './lib/wait.js';

const SOCKET_PORT = 8080;
const secret = 'df00511160834911a662d104787c8289'

// This is a hardcoded string in the socket /shrug
const salt = '"$P@_/gKR`y:mv)6K"'

const client = new Socket();

client.connect({ port: SOCKET_PORT, host: '127.0.0.1', })

client.on('data', (data) => {
  console.log('GOT SOME DATA')
  console.log(data.toString())
})

client.on('error', e => {
  console.error(e)
})

client.on('connect', async () => {
  console.log('Client connected')
  client.write(JSON.stringify({ header: 'JOIN', room: 'test', name: "jefke", payload: { msg: 'hey' } }));
  client.end()
});

client.on('end', async () => {
  console.log('Received FIN')
})

client.on('close', async function () {
  await wait(5);
  client.connect({ port: SOCKET_PORT, host: '127.0.0.1', });
});