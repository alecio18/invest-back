const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const mediasService = require('../api/tarefas/mediasService')
    mediasService.register(router, '/medias')
}