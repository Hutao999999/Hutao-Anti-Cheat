import * as setting from "../config"
import settingCommand from "./setting"
import { Hutao } from "../lib/import"
import { language } from "./language"

export const command = (player, command) => {
  if (Object.keys(setting.default.data.commands.commands).includes(command[0])) {
    if (setting.default.data.commands.commands[command[0]].state) {
      if (setting.default.data.commands.commands[command[0]] == "admin") {
        if (Hutao.Player.isAdmin(player)) {
          if (command[0] == "setting") {
            settingCommand.function(player, command)
          }
        } else {
          return Hutao.World.wrongCommand(player, command, 0)
        }
      } else {
        if (command[0] == "language") {
          language(player, command)
        }

        if (command[0] == "setting") {
          settingCommand.function(player, command)
        }
      }
    } else {
      return Hutao.World.wrongCommand(player, command, 0)
    }
  } else if (command[0] == undefined) {

  } else {
    return Hutao.World.wrongCommand(player, command, 0)
  }
}