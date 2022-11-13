class Mail {
    constructor() {
        this.form = 'pengirim@gmail.com'
    }

    sendMessage(msg,to){
        console.log(`${msg} dari ${to}`)
    }
}

const mail_1 = new Mail()

console.log(mail_1.sendMessage('terus bekerja keras jangan sampai menyesal','inti'))