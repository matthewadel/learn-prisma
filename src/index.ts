import { PrismaClient } from "@prisma/client";
import * as http from "http";

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.write(`<html>
  <head>
    <title>Node.js Apps + TS</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>Lorem fasfasd </p>
  </body>
  </html>`);

    res.end();
  }
);

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //   data: {
  //     name: "Miso"
  //   }
  // })
  console.log(await prisma.Profiles.findMany())
}

main()
  .catch(async (e) => {
    console.log(e)
    prisma.$disconnect()
  })
const PORT = 5001;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
