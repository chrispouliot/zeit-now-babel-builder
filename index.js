import { transformFile } from "@babel/core"


exports.analyze = ({ files, entrypoint }) => {
  return files[entrypoint].digest
}

exports.build = async ({ files, entrypoint, config }) => {
  const { code } = await transformFile(entrypoint, config)
  return { [entrypoint]: code }
}
