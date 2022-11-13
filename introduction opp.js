const mail = {
  form: "grandrx041@gmail.com",
  sendMessage: (msg, to) => {
    console.log(`${msg}, ${to}`);
  },

  saveContact: function (addr) {
    console.log(`email saved ${addr}`);
  },
};

console.log(mail.form);
mail.sendMessage("halo", mail.form);
