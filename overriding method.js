class Beja {
    constructor(author,anime){
        this._contacts = []
        this.form = author
        this.anime = anime
        this.habbit = 'matematika'
    }

    kirimPesan(pesan,tujuan,dari){
        console.log(`${pesan} untuk ${tujuan} dari ${dari}`);
        this._contacts.push(dari)
    }

    lihatSemuaContacts(){
        return this._contacts
    }
}

const beja_1 = new Beja('inti','hmmm')
// console.log(beja_1);
beja_1.kirimPesan('semangat nya','inti','a rehan')

class Wa extends Beja {
    constructor(username,bussiness,phone,anime){
        super('raihan','jujutsu')
        this.userName = username
        this.bussiness = bussiness
        this.phone = phone
    }
    kirimPesan(pesan,tujuan,dari){
        super.kirimPesan(pesan,tujuan,dari) // => mengakses method parent
        console.log('kirimin wa kamu dong')
    }

}

const __wa1 = new Wa('muhamad raihan',false,'098765434','jujutsu')
// console.log('ini adalah __wa1',__wa1);
console.log(__wa1.kirimPesan('semangat berjuang sendirinya','raihan','yourself'));