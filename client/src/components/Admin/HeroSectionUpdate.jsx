import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const HeroSectionUpdate = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    subheading: "",
    heading: "",
    usecode: "",
  });

  const [loading, setLoading] = useState(true);

  // Fetch details by ID
  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URI}admin/herosection/details`
        );

        const d = res.data.details[0]; 

        setFormData({
          subheading: d.subheading || "",
          heading: d.heading || "",
          usecode: d.usecode || "",
        });

      } catch (err) {
        console.log("Error fetching details:", err);
      } finally {
        setLoading(false);
      }
    };

    getDetails();
  }, [id]);

  // Handle update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BASE_URI}admin/herosection/update/${id}`,
        formData
      );

      alert("Hero Section Updated Successfully!");
      console.log(res.data);
      navigate("/admindashboard");

    } catch (err) {
      console.log("Update Error:", err);
      alert("Failed to update!");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Update Hero Section
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Subheading */}
        <div>
          <label className="block font-medium mb-1">Subheading</label>
          <input
            type="text"
            value={formData.subheading}
            onChange={(e) =>
              setFormData({ ...formData, subheading: e.target.value })
            }
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Heading */}
        <div>
          <label className="block font-medium mb-1">Heading</label>
          <input
            type="text"
            value={formData.heading}
            onChange={(e) =>
              setFormData({ ...formData, heading: e.target.value })
            }
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Usecode */}
        <div>
          <label className="block font-medium mb-1">Use Code</label>
          <textarea
            rows="5"
            value={formData.usecode}
            onChange={(e) =>
              setFormData({ ...formData, usecode: e.target.value })
            }
            className="w-full border p-2 rounded"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default HeroSectionUpdate;
