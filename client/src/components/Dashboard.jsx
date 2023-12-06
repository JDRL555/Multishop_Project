import React, {useState} from "react";

export default function Dashboard() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
  <div>
      <h1>hola</h1>
        <div className="dropdown">
          <button onClick={toggleDropdown}>Trigger</button>
          {isOpen && (
            <ul className="dropdown-content">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
            )}
         </div>
  </div>
    

  )


}