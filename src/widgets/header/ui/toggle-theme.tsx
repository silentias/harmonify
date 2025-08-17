import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export const ToggleTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    switch (theme) {
        case "dark":
            setTheme("light")
            break;
        case "light":
            setTheme("dark")
            break;
    }
  };

  return (
    <button onClick={handleThemeChange}>
        {theme == "dark" ? <Sun className="size-7"/> : <Moon className="size-7"/>}
    </button>
  );
}