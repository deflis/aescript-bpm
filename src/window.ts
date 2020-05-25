import { BPM } from "./bpm";
import { getCompotion } from "./util";

function createEditText(globalGroup: Group, label: string): EditText {
  const group = globalGroup.add("group");
  group.orientation = "row";
  group.add("statictext", undefined, `${label} :`, {});
  const editText = group.add("edittext", undefined, "", {});
  editText.size = [100, 20];
  return editText;
}

function setOnChange(component: EditText, func: (num: number) => void) {
  component.onChange = () => {
    const num = parseFloat(component.text);
    if (num > 0) {
      func(num);
    }
  };
}

export class BPMPanel {
  bpmObj: BPM;

  bpm: EditText;
  frame: EditText;
  offset: EditText;
  count: EditText;
  ok: Button;
  reload: Button;

  constructor(globalGroup: Group) {
    globalGroup.orientation = "column";
    this.bpm = createEditText(globalGroup, "BPM");
    this.frame = createEditText(globalGroup, "frame");
    this.offset = createEditText(globalGroup, "offset");
    this.count = createEditText(globalGroup, "count");

    const buttons = globalGroup.add("group");
    buttons.orientation = "row";
    this.ok = buttons.add("button", undefined, "OK", {});
    this.reload = buttons.add("button", undefined, "Reload", {});
  }

  init(bpmObj: BPM) {
    this.bpmObj = bpmObj;
    setOnChange(this.bpm, (num) => {
      bpmObj.setBPM(num);
      this.refresh();
    });
    setOnChange(this.frame, (num) => {
      bpmObj.setFrame(num);
      this.refresh();
    });
    setOnChange(this.offset, (num) => {
      bpmObj.setOffset(num);
      this.refresh();
    });
    setOnChange(this.count, (num) => {
      bpmObj.setCount(num);
      this.refresh();
    });
    this.ok.onClick = () => {
      bpmObj.execute();
    };
    this.reload.onClick = () => {
      bpmObj.setComposition(getCompotion());
    };
    this.refresh();
  }

  refresh() {
    this.bpm.text = this.bpmObj.getBPM().toString();
    this.frame.text = this.bpmObj.getFrame().toString();
    this.offset.text = this.bpmObj.getOffset().toString();
    this.count.text = this.bpmObj.getCount().toString();
  }
}


export function createWindowAndPanel(self: any): [Group, Window | Panel] {
  if (self instanceof Panel) {
    self.orientation = "column";
    const group = self.add("group");
    return [group, self];
  } else {
    const window = new Window("dialog", "BPM Marker");
    window.margins = 0;
    const group = window.add("group");
    return [group, window];
  }
}

