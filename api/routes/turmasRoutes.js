const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();

router.get('/turmas', TurmaController.pegaTodasAsTurmas);
router.get('/turmas/:id', TurmaController.pegaUmaTurma);
router.post('/turmas', TurmaController.criaUmaTurma);
router.put('/turmas/:id', TurmaController.atualizaUmaTurma);
router.delete('/turmas/:id', TurmaController.deletaUmaTurma);
router.post('/turmas/:id/restaura', TurmaController.restauraUmaTurma);

module.exports = router;