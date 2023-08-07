import { useContext, useEffect } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { themeContext } from "../../theme-provider";

export function Nav()
{
  const [themeValue, setThemeValue] = useContext(themeContext);
  const newTheme = themeValue === 'dark' ? 'light' : 'dark';
  useEffect(()=> {
    console.log('change to '+ themeValue)
  }, [themeValue])
  return <button onClick={()=>setThemeValue(newTheme)}> {themeValue === 'dark' ? <BsFillMoonFill /> : <BsFillSunFill />} </button>
}