import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, CircularProgress, Button } from "@mui/material";

const Recommendations = () => {
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState(null);

  // Fetch recommendations from the backend
  useEffect(() => {
    setLoading(true);
    fetch("/api/recommendations") // Ensure this points to the correct endpoint
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch recommendations");
        return response.json();
      })
      .then((data) => {
        setRecommendations(data.recommendations); // Assuming the API returns an object with "recommendations" key
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const reloadRecommendations = () => {
    setLoading(true);
    setError(null);
    // Fetch recommendations again on button click
    fetch("/api/recommendations")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch recommendations");
        return response.json();
      })
      .then((data) => {
        setRecommendations(data.recommendations);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Recommended for You
      </Typography>
      <Typography variant="body1" align="center" style={{ marginBottom: "15px", color: "green" }}>
        Everything is set! Below are your recommendations.
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        recommendations.map((item, index) => (
          <Card key={index} style={{ marginBottom: "15px" }}>
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography color="textSecondary">{item.description}</Typography>
            </CardContent>
          </Card>
        ))
      )}
      <Button variant="outlined" color="primary" onClick={reloadRecommendations} style={{ display: "block", margin: "20px auto" }}>
        Refresh Recommendations
      </Button>
    </div>
  );
};

export default Recommendations;
