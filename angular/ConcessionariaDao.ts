import { DaoInterface } from './DaoInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao<T> implements DaoInterface<T> {
    
    nomeTabela: string = 'tb_concessionaria'

    inserir(object: T): boolean {
        console.log('lógica de insert')
        return true
    }

    atualizar(object: T): boolean {
        console.log('lógica update')
        return true
    }

    remover(id: number): T {
        console.log('lógica delete')
        return Object()
    }

    selecionar(id: number): T {
        console.log('lógica select')
        return Object()
    }

    selecionarTodos(): [T] {
        console.log('lógica getAll') 
        return [Object()]
    }
}