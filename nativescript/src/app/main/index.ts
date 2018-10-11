import { AppService } from '@cerebral/angular'

import App from "cerebral";

const app = App({
  state: {
    hello: 'world'
  },
  providers: {
  }
});

export default () => app