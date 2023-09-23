-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");
