import App from "cerebral";
import Devtools from "cerebral/devtools";

const app = App(
  {
    state: {
      hello: "world"
    },
    providers: {}
  },
  {
    devtools: Devtools({
      host: "192.168.50.197:9999"
    })
  }
);

export default () => app;
