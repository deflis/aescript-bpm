import "extendscript-es5-shim-ts";
import { createWindowAndPanel, BPMPanel } from "./window";
import { BPM } from "./bpm";
import { getCompotion } from "./util";

const [panel, window] = createWindowAndPanel(globalThis);

const bpmPanel = new BPMPanel(panel);

let button: Button;
if (window instanceof Panel) {
  button = window.add("button");
  button.text = "Reinit";
  button.hide();
}

function init() {
  try {
    const bpm = new BPM(getCompotion());
    bpmPanel.init(bpm);
    panel.show();
  } catch (e) {
    if (window instanceof Window) {
      alert("コンポジションを開いてください");
      window.close();
    } else {
      panel.hide();
      button.show();
      button.onClick = () => {
        button.hide();
        init();
        window.layout.layout();
        window.layout.resize();
      };
    }
  }
}

init();

if (window instanceof Window) {
  window.show();
} else {
  window.layout.layout();
  window.layout.resize();
}
