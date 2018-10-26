import App from "cerebral";
import Devtools from "cerebral/devtools";
import { debounce, set } from "cerebral/factories";
import { props, state } from "cerebral/tags";

const Timer = () => {
  let timer;
  return context => {
    return {
      start(message) {
        console.log("start timer");
      }
    };
  };
};

const app = App(
  {
    state: {
      text: "Ready to run?",
      buttonText: "Start",
      timer: {
        // use new Date().getTime() for these
        start: 0,
        stop: 0
      },
      settings: {
        // in seconds
        walk: 0,
        run: 0,
        sprint: 0
      }
    },
    sequences: {
      start: [
        function start({ state, timer }) {
          state.set("timer.start", new Date().getTime());
          timer.start();
        }
      ],
      stop: [function stop() {}],
      onSliderChange: [
        function setSetting({ state, props }) {
          state.set("settings." + props.set, props.value);
        }
      ]
    },
    providers: {
      timer: Timer()
    }
  },
  {
    // devtools: Devtools({
    //   host: "192.168.50.197:9999"
    // })
  }
);

export default () => app;
