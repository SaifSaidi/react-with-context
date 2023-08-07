import { createContext, useReducer } from "react";

export const context = createContext<any>(null);

export type actions = {
    action: '+' | '-'
}
export function ContextProvider({ children }: { children: any }) {
  const initValue = 1;
  return (
    <context.Provider
      value={useReducer((state: any, action: actions) => {
        console.log(action);

        switch (action.action) {
          case "+":
            return state + 1;

          case "-":
            return state - 1;

          default:
            return state;
        }
      }, initValue)}
    >
      {children}
    </context.Provider>
  );
}
