import { useContext, useState } from "react";
import { context } from "../provider";

export default function ButtonHandler() {
    const [_counter, dispatch] = useContext(context);
    const [type, setType] = useState({
      action: "+",
    });
    return (
      <>
        <button onClick={() => dispatch(type)}>{type.action} 1</button>
        <input
          type="checkbox"
          name="ckk"
          onChange={(e) => {
            if (e.target.checked)
              setType({
                action: "-",
              });
            else
              setType({
                action: "+",
              });
          }}
        />
        <label >Minus</label>
      </>
    );
  } 