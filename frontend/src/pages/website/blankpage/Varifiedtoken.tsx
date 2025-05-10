import React, { useState } from "react";

const Varifiedtoken = () => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      setResponseData({ error: "Token not found in URL." });
      return;
    }

    setLoading(true);
    setResponseData(null);

    try {
      const response = await fetch(
        `http://localhost:5000/api/tempuser/getUser?token=${token}`,
      );

      const data = await response.json();

      if (response.ok) {
        setResponseData(data);
      } else {
        setResponseData({ error: data.message || "Request failed." });
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseData({ error: "An error occurred while verifying." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <button
        onClick={handleVerify}
        disabled={loading}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {loading ? "Verifying..." : "Verify Token"}
      </button>

      {responseData && (
        <pre
          style={{
            marginTop: "1rem",
            backgroundColor: "#f0f0f0",
            padding: "1rem",
            borderRadius: "8px",
            maxWidth: "600px",
            overflowX: "auto",
            textAlign: "left",
          }}
        >
          {JSON.stringify(responseData, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default Varifiedtoken;
