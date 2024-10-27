import { useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState(false);
  return (
    <div className="w-full h-16 bg-purple-600">
      <button onClick={() => setTheme(!theme)}>Dark Theme</button>
    </div>
  );
}

export default Navbar;
