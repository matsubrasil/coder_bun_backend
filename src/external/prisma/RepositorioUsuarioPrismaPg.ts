import Usuario from '@/core/usuario/model/Usuario'
import RepositorioUsuario from '@/core/usuario/service/RepositorioUsuario'
import prisma from '@/core/lib/prisma'

export default class RepositorioUsuarioPrismaPg implements RepositorioUsuario {
  async consultarTodos(): Promise<Usuario[]> {
    return await prisma.usuario.findMany()
  }

  async obterUsuarioPorId(id: number): Promise<Usuario | null> {
    return await prisma.usuario.findFirstOrThrow({
      where: {
        id,
      },
    })
  }

  async consultarPorEmail(email: string): Promise<Usuario | null> {
    return await prisma.usuario.findUnique({ where: { email } })
  }

  async criar(usuario: Usuario): Promise<Usuario> {
    //console.log('RepositorioUsuarioPrismaPg', usuario)
    return await prisma.usuario.create({ data: usuario })
  }
}
