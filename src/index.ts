import { Elysia } from 'elysia'
import RepositorioUsuarioMemoria from './external/memoria/RepositorioUsuarioMemoria'
import RegistrarUsuario from './core/usuario/service/RegistrarUsuario'

import RepositorioUsuarioPrismaPg from './external/prisma/RepositorioUsuarioPrismaPg'
import RegistrarUsuarioController from './adapters/RegistrarUsuarioController'
import ConsultarUsuarios from './core/usuario/service/ConsultarUsuarios'
import ConsultarUsuariosController from './adapters/ConsultarUsuariosController'
import ObterUsuarioPorId from './core/usuario/service/ObterUsuarioPorId'
import ObterUsuarioPorIdController from './adapters/ObterUsuarioPorIdController'

const app = new Elysia()

// ----- Registrar Rotas
// const repositorioUsuarioEmMemoria = new RepositorioUsuarioMemoria()
// const registrarUsuario = new RegistrarUsuario(repositorioUsuarioEmMemoria)
// new RegistrarUsuarioController(app, registrarUsuario)

const repositorioUsuarioDB = new RepositorioUsuarioPrismaPg()

const registrarUsuario = new RegistrarUsuario(repositorioUsuarioDB)
new RegistrarUsuarioController(app, registrarUsuario)

const consultarUsuarios = new ConsultarUsuarios(repositorioUsuarioDB)
new ConsultarUsuariosController(app, consultarUsuarios)

const consultarUsuarioPorId = new ObterUsuarioPorId(repositorioUsuarioDB)
new ObterUsuarioPorIdController(app, consultarUsuarioPorId)

app.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
