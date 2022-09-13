const { Router } = require('express');
const NivelController = require('../controllers/NivelController');

const router = Router();

router.get('/niveis', NivelController.pegaTodosOsNiveis);
router.get('/niveis/:id', NivelController.pegaUmNivel);
router.post('/niveis', NivelController.criaUmNivel);
router.put('/niveis/:id', NivelController.atualizaUmNivel);
router.delete('/niveis/:id', NivelController.deletaUmNivel);
router.post('/niveis/:id/restaura', NivelController.restauraUmNivel);

module.exports = router;