// const database = require('../models');
// const Sequelize = require('sequelize');

const { PessoasServices, MatriculasServices } = require('../services');
const pessoasServices = new PessoasServices();
const matriculasServices = new MatriculasServices();


class PessoaController {
    
    static async pegaTodasAsPessoasAtivas(req, res) {
        try {
            const todasAsPessoasAtivas = await pessoasServices.pegaRegistrosAtivos();
            return res.status(200).json(todasAsPessoasAtivas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros();
            return res.status(200).json(todasAsPessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const umaPessoa = await pessoasServices.pegaUmRegistro(id);
                return res.status(200).json(umaPessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body;
        try {
            const novaPessoaCriada = await pessoasServices.criaRegistro(novaPessoa);
            return res.status(200).json(novaPessoaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } 

    static async atualizarPessoa(req, res) {
        const { id } = req.params;
        const atualizaPessoa = req.body;
        try {
            await pessoasServices.atualizaRegistro(atualizaPessoa, id);
            const pessoaAtualizada = await pessoasServices.pegaUmRegistro(id);
            return res.status(200).json(pessoaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaPessoa(req, res) {
        const { id } = req.params;
        try {
            await pessoasServices.apagaRegistro(id);
            return res.status(200).json( { mensagem: `id ${id} deltado`});
        } catch (error) {
            return res.status(500).json(error.message); 
        }
    }

    static async restauraPessoa(req, res) {
        const { id } = req.params;
        try {
            await pessoasServices.restauraRegistro(id);
            return res.status(200).json( { mensagem: `id ${id} restaurado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            const umaMatricula = await matriculasServices.pegaUmaMatricula(estudanteId, matriculaId);
            return res.status(200).json(umaMatricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaMatricula(req, res) {
        const { estudanteId } = req.params;
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
        try {
            const novaMatriculaCriada = await matriculasServices.criaRegistro(novaMatricula);
            return res.status(200).json(novaMatriculaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } 

    static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        const novasInfos = req.body;
        try {
            await matriculasServices.atualizaMatricula(novasInfos, estudanteId, matriculaId);
            const MatriculaAtualizada = await matriculasServices.pegaUmaMatricula(estudanteId, matriculaId);
            return res.status(200).json(MatriculaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } 
    
    static async deletaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            await matriculasServices.deletaMatricula(estudanteId, matriculaId);
            return res.status(200).json(`Matricula ${matriculaId} do estudante de id ${estudanteId} excluida com sucesso.`);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } 
    
    static async restauraMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            await matriculasServices.restauraMatricula(estudanteId, matriculaId);
            return res.status(200).json(`Matricula ${matriculaId} do estudante de id ${estudanteId} foi restaurada`);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async pegaMatriculas(req, res) {
        const { estudanteId } = req.params;
        try {
            const pessoa = await pessoasServices.pegaUmRegistro(estudanteId);
            const matriculas = await pessoa.getAulasMatriculadas()            
            return res.status(200).json(matriculas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } 
    
    static async pegaMatriculasPorTurma(req, res) {
        const { turmaId } = req.params;
        try {
            const todasAsMatriculas = await matriculasServices.pegaTodasAsMatriculas(turmaId);
            return res.status(200).json(todasAsMatriculas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } 
    
    static async pegaTurmasLotadas(req, res) {
        try {
            const turmasLotadas = await matriculasServices.pegaAsTurmasLotadas();
            return res.status(200).json(turmasLotadas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } 
    
    static async cancelaPessoa(req, res) {
        const { estudanteId } = req.params;
        try {
            await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteId));    
            return res.status(200).json({ message: `Matriculas ref. estudante ${estudanteId} canceladas`})
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } 

}


module.exports = PessoaController;