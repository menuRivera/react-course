const { response } = require("express")

const createUser = (req, res = response) => {
    const { name, email, password } = req.body

    res.json({ ok: true, method: 'createUser' })
}

const loginUser = (req, res = response) => {
    const { email, password } = req.body

    res.json({ ok: true, method: 'createUser' })
}

const revalidateToken = (req, res = response) => {
    res.json({ ok: true, method: 'revalidate' })
}

module.exports = {
    createUser,
    loginUser,
    revalidateToken
}