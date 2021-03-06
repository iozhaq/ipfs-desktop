import registerDaemon from './register-daemon'
import registerMenubar from './menubar'
import registerWebUI from './webui'
import openExternal from './open-external'
import autoLaunch from './auto-launch'
import downloadHash from './download-hash'
import ipfsStats from './ipfs-stats'
import takeScreenshot from './take-screenshot'
import appMenu from './app-menu'

export default async function () {
  let ctx = {}
  await appMenu()
  await openExternal(ctx)
  await registerDaemon(ctx) // ctx.ipfsd
  await registerMenubar(ctx) // ctx.sendToMenubar
  await registerWebUI(ctx) // ctx.sendToWebUI, ctx.launchWebUI
  await autoLaunch(ctx)
  await downloadHash(ctx)
  await takeScreenshot(ctx)
  await ipfsStats(ctx)
}
