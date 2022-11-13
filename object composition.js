const canSendMessage = self => ({
    sendMessage: () => console.log('send message',self.message)
})

const isValidPhone = self => ({
    isValid: () => console.log('valid phone',self.from)
}
)

const personalEnterprise = (form,message,store) => {
    const self = {
        form,
        message,
        store
    }

    const personalEnterpriseBehavior = self => ({
        createCalatog: () => console.log('catalog has been created',self.store)
    })

    return Object.assign(self,personalEnterpriseBehavior(self),canSendMessage(self),isValidPhone(self))
}

const pe1 = personalEnterprise('grandrx041@gmail.com','halo kakak ada undangan nih','hidayat store')

pe1.createCalatog()
pe1.sendMessage()


const namaCrush = nama => ({
    namaCrush : () => console.log('nama crush saya',nama.crush)
})

const namaBestie = nama => ({
    namaBestie: () => console.log('nama bestie saya',nama.bestie)
})

const orangTerdekat = (crush,bestie,author) => {
    const nama = {
        crush,
        bestie,
        author
    }

    const pemilik = nama => ({
        namaAuthor: () => console.log('nama saya adalah',nama.author)
    })

    return Object.assign(nama,pemilik(nama),namaCrush(nama),namaBestie(nama))
}

const raihan = orangTerdekat('','asep','raihan')
raihan.namaCrush()