import path from 'path';
import { Command } from "commander";
import { serve } from "@my-book/local-api";

const isProduction = process.env.NODE_ENV === 'production';

export const serveCommand = new Command()
  .command("serve [filename]")
  .description("open a file for editing")
  .option("-p, --port <number>", "port to run server on", "4005")
  .action(async (filename = "notebook.js", args: { port: string }) => {
    try{
      const dir = path.join(process.cwd(), path.dirname(filename))
      await serve(parseInt(args.port), path.basename(filename), dir, !isProduction);
      console.log(`Opened ${filename}.  Please navigate to http://localhost:${args.port} to edit the file.`)
    } catch(err) {
      if (err.code === 'EADDRINUSE'){
        console.error('Post is in use, please try a different port "mybook server -p {enter port number}"')
      } else {
      console.error(`The problem is ${err.message}`)
    }
    process.exit(1)
  }});
