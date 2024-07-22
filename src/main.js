import { Client, Events, GatewayIntentBits } from "discord.js"
import vueInit from "@/core/vue"

import { loadCommands } from "@/core/loader";
loadCommands ()


import dotenv from "dotenv"
dotenv.config ();

vueInit ();

const client = new Client
(
  {
    intents:
    [
      GatewayIntentBits.Guilds
    ]
  }
);

client.once
(
  Events.ClientReady, readyClient =>
  {
	  console.log ( `Ready! Logged in as ${ readyClient.user.tag }` );
  }
);

client.login ( process.env.TOKEN );