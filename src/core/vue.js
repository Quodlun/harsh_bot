import { createApp } from "vue";
import { createPinia } from "pinia";

export default () =>
{
  console.log ( "Veu init." );
  const vue = createApp ( {} );

  const pinia = createPinia ();
  vue.use ( pinia );
}