import { createServer} from "node:http"

// criar o servidor
const server = createServer((req,res) => {
    res.end("Olá, tá funcionando!")
})

server.listen(3000, () => {
    console.log("Servidor iniciado!")
})