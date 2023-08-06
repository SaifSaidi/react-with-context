import { useContext } from "react";
import { context } from "../provider";

export default function Counter() {
    // inject count value to display
    const [counter, _dispatch] = useContext(context);
    return <h1>Counter: {counter} </h1>;
  }
  