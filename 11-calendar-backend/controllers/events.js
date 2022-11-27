const { response } = require("express");
const Event = require("../models/Event");

const getEvents = async (req, res = response) => {
    try {
        const events = await Event.find({})
            .populate('user', 'name')

        res.json({
            ok: true,
            events
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Contacta al admin'
        })
    }
}

const createEvent = async (req, res = response) => {
    try {
        const event = new Event(req.body)
        event.user = req.uid

        await event.save()

        res.json({
            ok: true,
            event
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        })
    }
}

const updateEvent = async (req, res = response) => {
    const eventId = req.params.id
    const { uid } = req

    try {

        const event = await Event.findById(eventId)
        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: 'El evento no existe'
            })
        }

        if (event.user.toString() != uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene permiso'
            })
        }

        const newEvent = { ...req.body, user: uid }

        const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, { new: true })

        res.json({
            ok: true,
            event: updatedEvent
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        })
    }
}

const deleteEvent = async (req, res = response) => {
    const eventId = req.params.id
    const { uid } = req

    try {
        const event = await Event.findById(eventId)
        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: 'El evento no existe'
            })
        }

        if (event.user.toString() != uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene permiso'
            })
        }
        
        await Event.findByIdAndDelete(eventId)

        res.json({
            ok: true,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        })
    }
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}