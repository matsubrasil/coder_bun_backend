import Elysia from 'elysia'
import ObterUsuarioPorId from '@/core/usuario/service/ObterUsuarioPorId'

export default class ObterUsuarioPorIdController {
  constructor(
    readonly servidor: Elysia,
    readonly casoDeUso: ObterUsuarioPorId
  ) {
    servidor.get('/usuarios/:id', async ({ params }) => {
      return casoDeUso.executar(+params.id)
    })
  }
}
