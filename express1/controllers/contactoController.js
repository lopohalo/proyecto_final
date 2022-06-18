const Contacto = require('../models/Contacto')

exports.crearContacto = async(req, res) => {
    try {
        let contacto
        contacto = new Contacto(req.body)
        await contacto.save()
        res.send(contacto)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.obtenerContacto = async(req, res) => {
    try {
        let contacto = await Contacto.findById(req.params.id)
        if (!contacto) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }
        res.json(contacto)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}
exports.actualizarContacto = async(req, res) => {
    try {
        const { documento, random,afiliado } = req.body

        let contacto = await Contacto.findById(req.params.id)
        if (!contacto) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }

        contacto.documento = documento
        contacto.random = random
        contacto.afiliado = afiliado


        let procesoUpdate = await Contacto.findOneAndUpdate({ _id: req.params.id }, contacto, { new: true })
        res.json(procesoUpdate)

    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}
exports.borrarContacto = async(req, res) => {
    try {
        let contacto = await Contacto.findById(req.params.id)
        if (!contacto) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }

        await Contacto.findByIdAndRemove({ _id: req.params.id })
        res.status(200).json({ mensaje: "Dato eliminado satisfactoriamente" })
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

