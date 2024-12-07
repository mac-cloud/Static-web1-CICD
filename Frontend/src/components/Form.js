import React, { useState } from "react";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const Form = () => {
  const [file1, setFile1] = useState(null); // Traffic dataset
  const [file2, setFile2] = useState(null); // Population dataset
  const [result, setResult] = useState(null);
  const [trainingPlot, setTrainingPlot] = useState(null);
  const [predictionPlot, setPredictionPlot] = useState(null);
  const [trainingPlot2, setTrainingPlot2] = useState(null);
  const [predictionPlot2, setPredictionPlot2] = useState(null);

  const handleFile1Change = (e) => setFile1(e.target.files[0]);
  const handleFile2Change = (e) => setFile2(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!file1 || !file2) {
      alert("Please upload both datasets!");
      return;
    }
  
    const formData1 = new FormData();
    const formData2 = new FormData();
  
    formData1.append("file", file1); 
    formData2.append("file", file2);
  
    try {
      // Define the requests in an array
      const requests = [
        {
          url: "http://127.0.0.1:8000/run-model/",
          formData: formData1,
          errorMessage: "Traffic dataset request failed"
        },
        {
          url: "http://127.0.0.1:8000/population-prediction/",
          formData: formData2,
          errorMessage: "Population dataset request failed"
        }
      ];
  
      // Execute both requests concurrently using Promise.all
      const responses = await Promise.all(
        requests.map(async (request) => {
          try {
            console.log("Sending request to:", request.url);
  
            // Perform the POST request to the respective endpoint
            const response = await axios.post(request.url, request.formData, {
              headers: { "Content-Type": "multipart/form-data" },
            });
  
            console.log(`Response from ${request.url}:`, response.data);
            return response.data; // Return the response data directly
          } catch (error) {
            console.error(`Error from ${request.url}:`, error.response?.data || error.message);
            return null; // Return null for failed requests
          }
        })
      );
  
      // Destructure responses
      const [response1, response2] = responses;
  
      // Handle responses
      if (response1 && response2) {
        console.log("Traffic dataset response:", response1);
        console.log("Population dataset response:", response2);
  
        setResult(response1); // Assuming you want to set the result based on response1
        
        // Check if plot data exists and update the state
        if (response1.training_plot && response1.prediction_plot) {
          setTrainingPlot(`data:image/png;base64,${response1.training_plot}`);
          setPredictionPlot(`data:image/png;base64,${response1.prediction_plot}`);
           setTrainingPlot2(`data:image/png;base64,${response2.training_plot2}`);
          setPredictionPlot2(`data:image/png;base64,${response2.prediction_plot2}`);
        } else {
          console.error("Missing plot data in response1");
        }
      } else {
        console.error("One or both requests failed.");
        alert("Failed to fetch data from the server. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred when running the model:", error);
      alert("An error occurred. Please try again.");
    }
  };
  
  return (
    
    <div style={{ textAlign: "center", marginTop: "50px", color: "blue" }}>
    
      <h1>Run Prediction Models</h1>
      <div>
        <h2 style={{ fontSize: "19px", color: "black" }}>Upload Traffic Dataset</h2>
        <input type="file" onChange={handleFile1Change} />
      </div>
      <div>
        <h2 style={{ fontSize: "19px", color: "black" }}>Upload Population Dataset</h2>
        <input type="file" onChange={handleFile2Change} />
      </div>
      <button
        onClick={handleSubmit}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          backgroundColor: "blue",
          borderRadius: "18px",
        }}
      >
        Run Models
      </button>

      {result && (
        
        <div style={{ marginTop: "20px",  display: "flex", maxWidth: "100%"}}>
          <h2>Results</h2>
          <p>RMSE: {result.rmse}</p>
          <h3 style={{ color: "black"}}>Traffic Pattern</h3>
          {trainingPlot && (
            <div>
              <h3>Training History</h3>
              <img
                src={trainingPlot}
                alt="Training Loss vs Validation Loss"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
           
          )}

          {predictionPlot && (
            <div>
              <h3>Prediction vs Actual</h3>
              <img
                src={predictionPlot}
                alt="Prediction vs Actual"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          )}


         <h3 style={{ color: "black"}}>Population Projection</h3>
          {trainingPlot2 && (
            <div style={{ display: "block"}}>
              <h3>Training History</h3>
              <img
                src={trainingPlot2}
                alt="Training Loss vs Validation Loss"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          )}

          {predictionPlot2 && (
            <div>
              <h3>Prediction vs Actual</h3>
              <img
                src={predictionPlot2}
                alt="Prediction vs Actual"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  
  );
};

export default Form;
