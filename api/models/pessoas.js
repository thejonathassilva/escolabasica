'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pessoas.hasMany(models.Turmas, {
        foreignKey: 'docente_id'
      });      
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id',
        scope: { 
          status: 'confirmado' 
        },
        as: 'aulasMatriculadas'
      });
    }
  }
  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function(dado) {
          if (dado.length < 3) {
            throw new Error('O campo deve conter mais de 3 caracteres');
          }; 
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'dado do tipo e-mail inválido'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        cadastroCerto: function(dado) {
          if (dado != 'estudante' && dado != 'docente') {
            throw new Error('Defina uma atribuição a pessoa');
          }
        }
      }
    }
  },
   {
    sequelize,
    modelName: 'Pessoas',
    paranoid: true,
    defaultScope: {
      where: {
        ativo: true
      }
    },
      scopes: {
        todos: { 
          where: {}
        },
    }
  });
  return Pessoas;
};