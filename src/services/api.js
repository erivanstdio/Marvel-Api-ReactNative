import axios from "axios";
import md5 from "md5";

const publicKey = '852d811eb90811a9038fcb8f50ba5558'
const privateKey = '52a539eab722e3aec1e4ac975699d70eabc85802'
const time = Number(new Date());
const url = 'http://gateway.marvel.com/v1/public/characters?'

const urlHelp = `${url}ts=${time}&apikey=${publicKey}&hash=${hash}`


const hash = md5(time + privateKey + publicKey)

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public',
    params: {
        ts: time,
        apikey: publicKey,
        hash: hash,
        orderBy: '-modified',
    }
})

const busca = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public',
    params: {
        ts: time,
        apikey: publicKey,
        hash: hash,
        limit: 20,
        orderBy: '-modified',
    }
})


export default api;