import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Tasks Import kar rahe hain
import Task1_Counter from './tasks/Task1_Counter';
import Task2_Stopwatch from './tasks/Task2_Stopwatch';
import Task3_JokeApp from './tasks/Task3_JokeApp';
import Task4_Login from './tasks/Task4_Login';
import Task5_ShowProducts from './tasks/Task5_ShowProducts'; 
import Task6_AddToCart from './tasks/Task6_AddToCart';       
import Task7_RemoveFromCart from './tasks/Task7_RemoveFromCart';
import Task8_ContextCart from './tasks/Task8_ContextCart';
import Task9_ReducerCart from './tasks/Task9_ReducerCart'; 
import Task10_Search from './tasks/Task10_Search';
import Task11_ProtectedRoute from './tasks/Task11_ProtectedRoute';
import Task12_ToastCart from './tasks/Task12_ToastCart';
import Task13_TodoList from './tasks/Task13_TodoList';
import Task14_WeatherApp from './tasks/Task14_WeatherApp';
import Task15_FileUpload from './tasks/Task15_FileUpload';

function App() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold text-decoration-underline">
        React Practice Assignments
      </h1>
      
      {/* Yahan saare tasks ek ke niche ek dikhenge */}
      <Task1_Counter />
      <Task2_Stopwatch />
      <Task3_JokeApp />
      <Task4_Login />
      <Task5_ShowProducts />  
      <Task6_AddToCart /> 
      <Task7_RemoveFromCart />
      <Task8_ContextCart />
      <Task9_ReducerCart />
      <Task10_Search />
      <Task11_ProtectedRoute />
      <Task12_ToastCart />
      <Task13_TodoList />
      <Task14_WeatherApp />
      <Task15_FileUpload />
      
    </div>
  );
}

export default App;