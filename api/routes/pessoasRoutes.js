const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/ativas', PessoaController.pegaTodasAsPessoasAtivas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.get('/pessoas/:estudanteId/matriculas', PessoaController.pegaMatriculas);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula);  
router.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma);  
router.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas);  
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula);
router.post('/pessoas', PessoaController.criaPessoa);
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula);
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa);
router.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa);
router.put('/pessoas/:id', PessoaController.atualizarPessoa);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula);
router.delete('/pessoas/:id', PessoaController.apagaPessoa);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletaMatricula);

module.exports = router;