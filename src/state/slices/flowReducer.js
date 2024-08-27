import { createSlice } from "@reduxjs/toolkit";

class Step {
  constructor(prev, curr, next, name, title, desc) {
    this.prev = prev;
    this.id = curr;
    this.next = next;
    this.name = name;
    this.title = title;
    this.desc = desc;
  }

  get stepObj() {
    return {
      id: this.id,
      prev: this.prev,
      next: this.next,
      name: this.name,
      title: this.title,
      desc: this.desc,
    };
  }
}

const stepArr = [
  new Step(
    null,
    0,
    1,
    "siteLocation",
    "Site Location",
    "Select the site location.",
  ),
  new Step(
    0,
    1,
    null,
    "applicableSystem",
    "Applicable Systems",
    "Specify applicable systems.",
  ),
];

const initialState = {
  currentStep: stepArr[0],
  currentStepInd: 0,
};

export const flowSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    stepBackward: (state) => {
      state.currentStepInd = state.currentStep.prev;
      state.currentStep = stepArr[state.currentStep.prev].stepObj;
    },
    stepForward: (state) => {
      state.currentStepInd = state.currentStep.next;
      state.currentStep = stepArr[state.currentStep.next].stepObj;
    },
    jumpToStep: (state, action) => {
      state.currentStepInd = action.payload;
      state.currentStep = stepArr[state.currentStepInd].stepObj;
    },
  },
});

// Action creators are generated for each case reducer function
export const { stepForward, stepBackward, jumpToStep } = flowSlice.actions;

export default flowSlice.reducer;
