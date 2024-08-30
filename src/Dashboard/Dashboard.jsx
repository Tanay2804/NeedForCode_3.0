import React, { useState } from "react";
import axios from "axios";
import "./dashboard.css";
const Dashboard = () => {
    const [skill, setSkill] = useState("");
    const [results, setResults] = useState('');
    const [error, setError] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get("/api/getvolunteers", {
                Skill: `${skill}`,
            });
            const volunteerNames = response.data; // Assuming response is formatted with names per line
            setResults(volunteerNames);
            console.log(skill);
            
            setError("")
        } catch (error) {
            console.error("Error fetching volunteers:", error);
            // setError("Could not fetch volunteers. Please try again.");
            setResults([]); // Clear results on error
        }
    };

    return (
        <div
            className="volunteer-search"
            style={{
                margin: "20rem",
            }}
        >
            <h2>Search Volunteers by Skill</h2>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Enter a skill..."
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    required
                />
                <button type="submit">Search</button>
            </form>
            {error && <p className="error">{error}</p>}
            <div className="search-results">
                {results.length > 0 && (
                    results
                )}
            </div>
            {/* <div>{...results}</div> */}
        </div>
    );
};

export default Dashboard;
