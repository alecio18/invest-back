const Medias = require('./medias')

Medias.methods(['get', 'post', 'put', 'delete'])
/**
 * Trazer o elemento atualizado após o post
 * validar os dados durante o post
 */
Medias.updateOptions({ new: true, runValidators: true })

module.exports = Medias