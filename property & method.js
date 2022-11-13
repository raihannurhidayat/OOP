class Gmail {
    static isValidNumber(phone) {
        return typeof phone === 'number'
    }
    
    #form = 'raihan@gmail.com'
    constructor(){
        this.contact = [],
        this.yourProperty = 'the values'
    }

    kirimPesan(psn,ke,dari){
        console.log(`${psn} ${ke} ${dari} `);
        this.contact.push(ke)
    }
}

const pesan = new Gmail()
pesan.kirimPesan('semangat selalu meski sendirian','raihan','dimasa depan')
console.log(pesan.contact)

console.log(Gmail)
