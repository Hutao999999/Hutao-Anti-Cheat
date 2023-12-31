import * as UI from "@minecraft/server-ui"
import { Hutao } from "../lib/import"
import { AntiCheat } from "./adminMenu/antiCheat"
import { DeadMessage } from "./adminMenu/deadMessage"

export class AdminMenu {
  open(player) {
    new UI.ActionFormData()
      .title(Hutao.Player.getLanguage(player).adminMenuTitle)
      .button(`§1${Hutao.Player.getLanguage(player).antiCheat}`, `textures/ui/icon_setting`)
      .button(`§1${Hutao.Player.getLanguage(player).deadMessage}`, `textures/ui/chat_send`)
      .show(player)
      .then(res => {
        if (res.canceled) {
          if (res.cancelationReason == "UserBusy") return this.open(player)
        }

        if (res.selection == 0) new AntiCheat().open(player)
        if (res.selection == 1) new DeadMessage().open(player)
      })
  }
}