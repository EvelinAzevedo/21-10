let nome: string = "jonh"
let idade: number = 99
let token: string = process.env.GOOGLE_DRIVE_TOKEN as string

console.log(`Olá,meu nome é ${nome} e tenho ${idade} anos.`)
console.log(`Conectando no Drive com TOKEN ${token}`)