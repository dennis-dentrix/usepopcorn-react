import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import './index.css'
import { StarRating } from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating
//         maxRating={10}
//         color="blue"
//         size={50}
//         onSetRating={setMovieRating}
//       />
//       <p>This movie was rated {movieRating}</p>
//     </div>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StarRating maxRating={5} />
    <StarRating color="red" size={30} className="text" defaultRating={3} />
  </React.StrictMode>
);
