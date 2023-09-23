import CasoDeUso from '@/core/shared/CasoDeUso'
import Usuario from '@/core/usuario/model/Usuario'
import RepositorioUsuario from './RepositorioUsuario'

export default class ObterUsuarioPorId
  implements CasoDeUso<number, Usuario | null>
{
  constructor(readonly repositorio: RepositorioUsuario) {}

  executar(id: number): Promise<Usuario | null> {
    return this.repositorio.obterUsuarioPorId(id)
  }
}
