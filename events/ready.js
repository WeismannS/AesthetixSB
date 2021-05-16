const figlet = require("figlet");

module.exports = async (client) => {

    let mesg = "Aesthetix SB"

    figlet(mesg, async (err, ascii) => {
        if (err) {
            return;
        }
        console.log(ascii)
        await console.log(`${client.user.tag} Logged In, Have fun using Aesthetix`)
    })
}