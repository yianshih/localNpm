import React, { RefObject } from "react";

interface IPullingInitState
  extends Partial<
    Pick<
      PullingInterval,
      "callback" | "milliSeconds" | "pauseMessage" | "startMessage"
    >
  > {}

const defaultState: Required<IPullingInitState> = {
  callback: () => {},
  milliSeconds: 1000,
  pauseMessage: "",
  startMessage: "",
};

export class PullingInterval {
  callback: Function;
  milliSeconds: number;
  interval: number | undefined;
  pauseMessage: string;
  startMessage: string;
  elementRef: RefObject<HTMLDivElement>;
  constructor(init: IPullingInitState) {
    const { callback, milliSeconds, pauseMessage, startMessage } = {
      ...defaultState,
      ...init,
    };
    this.callback = callback;
    this.milliSeconds = milliSeconds;
    this.pauseMessage = pauseMessage;
    this.startMessage = startMessage;
    this.interval = undefined;
    this.elementRef = React.createRef();
  }

  start() {
    if (this.interval) return;
    const newInterval = setInterval(this.callback, this.milliSeconds);
    this.interval = newInterval;
    this.updateElementMessage(this.startMessage);
  }

  pause() {
    clearInterval(this.interval);
    this.interval = undefined;
    this.updateElementMessage(this.pauseMessage);
  }

  updateElementMessage(message: string) {
    if (!this.elementRef?.current) return;
    this.elementRef.current.textContent = message;
  }

  updateCallback(callback: Function) {
    this.callback = callback;
    if (!this.interval) return;
    clearInterval(this.interval);
    const newInterval = setInterval(this.callback, this.milliSeconds);
    this.interval = newInterval;
    this.updateElementMessage(this.startMessage);
  }
}
