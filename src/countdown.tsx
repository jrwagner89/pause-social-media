/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { ReactDOM } from "react-dom";
import Countdown from "react-countdown";

ReactDom.render(
    <Countdown date={Date.now() + 10000} />,
    document.getElementById("root")
);
