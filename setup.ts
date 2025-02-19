import { $ } from "bnx"

const args = Bun.argv
const command = args[2]
switch (command) {
  case "init":
    await setupEnvFiles()
    await cloneSeed()
    break
  case "env":
    await setupEnvFiles()
    break
  case "full-monorepo":
    await getFullMonorepo()
    break
  case undefined:
    console.log("No command provided")
    break
  default:
    console.log("Unknown command")
    break
}

// TODO: add error checks, nice log in case folder already exists
// https://github.com/wobsoriano/bnx/issues/3
async function cloneSeed() {
  await $`git clone https://github.com/learn-anything/seed`
}

async function setupEnvFiles() {
  const currentFilePath = import.meta.path
  const grafbaseEnvPath = `${currentFilePath.replace(
    "setup.ts",
    "grafbase/.env"
  )}`
  const grfabaseEnvfileExists = await Bun.file(grafbaseEnvPath).exists()
  if (!grfabaseEnvfileExists) {
    Bun.write(
      grafbaseEnvPath,
      `LOCAL=true
EDGEDB_DSN=
PUBLIC_HANKO_API_URL=https://e879ccc9-285e-49d3-b37e-b569f0db4035.hanko.io
INTERNAL_SECRET=secret`
    )
  } else {
    console.log(`File: ${grafbaseEnvPath} already exists`)
  }
  const grafbaseEdgedbEnvPath = `${currentFilePath.replace(
    "setup.ts",
    "grafbase/edgedb/.env"
  )}`
  const grafbaseEdgedbEnvFileExists = await Bun.file(
    grafbaseEdgedbEnvPath
  ).exists()
  if (!grafbaseEdgedbEnvFileExists) {
    Bun.write(
      grafbaseEdgedbEnvPath,
      `LOCAL=true
GRAFBASE_URL=http://127.0.0.1:4000/graphql
GRAFBASE_INTERNAL_SECRET=secret
LOCAL_USER_HANKO_ID=
wikiFolderPath=
email=`
    )
  } else {
    console.log(`File: ${grafbaseEdgedbEnvPath} already exists`)
  }

  const websiteEnvFilePath = `${currentFilePath.replace(
    "setup.ts",
    "website/.env"
  )}`
  const websiteEnvFileExists = await Bun.file(websiteEnvFilePath).exists()
  if (!websiteEnvFileExists) {
    Bun.write(
      websiteEnvFilePath,
      `VITE_HANKO_API=https://e879ccc9-285e-49d3-b37e-b569f0db4035.hanko.io
VITE_GRAFBASE_API_URL=http://127.0.0.1:4000/graphql
VITE_GRAFBASE_INTERNAL_SECRET=secret`
    )
  } else {
    console.log(`File: ${websiteEnvFilePath} already exists`)
  }
  console.log(".env files created")

  // TODO: create .env file with my current content for local dev! for easy DX win
  // TODO: update readme telling users they should have the .env file already
  // if they ran `dev-setup`
  // TODO: do same for website/.env
  // and grafbase/edgedb/.env
  // update readme so its very good
  // as part of setup
  // make it accept an argument for `seed-db`
  // parse `seed/..` and fill local edgedb with content!
  // load limited connections from .json (part of seed)
  // + topics so it works and connections work too

  // as part of setup add topics etc.
  // ask to create a member/admin user automatically (default yes)
  // if yes, ask for email to use
  // if no provided use `user@email.com` as member with admin ability

  // parse args!
  // everything as part of seed repo

  // make setup fully interactive!
  // check if `edgedb` is installed and in path
  // if not, find OS, then provide user with installing
  // edgedb for them, run curl for them? or some other way

  // maybe in future have `setup -with-nix` or provide
  // flake with flox or how grafbase repo has it
}

async function getFullMonorepo() {
  await $`git clone https://github.com/learn-anything/ai`
  await $`git clone https://github.com/learn-anything/mobile`
  await $`git clone https://github.com/learn-anything/buy`
}
