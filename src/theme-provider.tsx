import React, {createContext, useState } from "react";

export const themeContext = createContext<any>(null)
 
export function ThemeProvider({children} : {children: React.ReactNode})
{  
    return <themeContext.Provider value={useState('dark')}>
        {children}
    </themeContext.Provider>
}