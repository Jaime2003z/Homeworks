import { useState } from 'react'
import './App.css'

function App() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const handleInputChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddCategory = () => {
    setCategories([...categories, category]);
    setCategory("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new category"
        value={category}
        onChange={handleInputChange}
      />
      <button onClick={handleAddCategory}>Add Category</button>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
