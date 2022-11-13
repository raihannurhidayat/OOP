class Pesan {
    #_contacts = []
    constructor(author){
        this.form = author
        this.habbit = 'matematika'
    }

    kirimPesan(pesan,tujuan,dari){
        console.log(`${pesan} untuk ${tujuan} dari ${dari}`);
        this.#_contacts.push(dari)
    }

    lihatSemuaContacts(){
        return this.#_contacts
    }
}

const __pesan = new Pesan('raihan')
__pesan.kirimPesan('ini dari kamu dari masa depan semangat nya','now','future')
console.log(__pesan.lihatSemuaContacts())

class WhatsApp extends Pesan {
    constructor(author) {
        super(author);
        this.username = 'dicoding';
        this.isBussinessAccount = true;
    }
    myProfile() {
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`;
    }
}

const wa_1 = new WhatsApp('raihan')
wa_1.kirimPesan('halo cantik','inti','a rehan')
console.log(wa_1.lihatSemuaContacts(),'saya sangat menyukai :', wa_1.habbit);