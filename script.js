const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const foo = await prisma.foo.findMany({
    include: {
      telephone: true
    }
  });
  console.log("foo", foo)

  const telephone = await prisma.telephone.findMany({
    include: {
      foos: true
    }
  });
  console.log("telephone", telephone)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })