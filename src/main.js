import { Client, Events, GatewayIntentBits } from "discord.js"
import vueInit from "@/core/vue"
import { loadCommands, loadEvents } from "@/core/loader";
import dotenv from "dotenv"
import { useAppStore } from "./store/app";

vueInit ()
dotenv.config ()
loadCommands ()

const client = new Client ( { intents: [ GatewayIntentBits.Guilds ] } );

const appStore = useAppStore ()
appStore.client = client

loadEvents ()

client.login ( process.env.TOKEN );