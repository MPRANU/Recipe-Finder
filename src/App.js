import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Import Layout
import Homepage from "./pages/Homepage";
//import Recipes from "./pages/Recipes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StartCooking from "./pages/StartCooking";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/recipes" element={<Recipes />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/start-cooking" element={<StartCooking />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;





// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import RecipeList from "./components/RecipeList";
// import RecipeDetails from "./components/RecipeDetails";
// import AddRecipe from "./components/AddRecipe";
// import DeleteRecipe from "./components/DeleteRecipe";
// import Login from "./components/Login"; // ✅ Import Login Component
// import Homepage from "./pages/Homepage";

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route exact path="/" element={<Homepage />} />
//           <Route path="/recipes/:id" element={<RecipeDetails />} />
//           <Route path="/add-recipe" element={<AddRecipe />} />
//           <Route path="/delete-recipe" element={<DeleteRecipe />} />
//           <Route path="/login" element={<Login />} /> {/* ✅ Add this */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
