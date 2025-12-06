import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const AddReview = () => {
  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: "",
  });

  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("review", formData.review);
    data.append("rating", formData.rating);
    data.append("image", image);

    setLoading(true);

    const res = await fetch(`${import.meta.env.VITE_BASE_URI}admin/addreview`, {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    console.log(result);
    alert(result.message);
    navigate("/admindashboard");
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto p-5 shadow-lg rounded-lg border mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Review</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />

        <textarea
          name="review"
          placeholder="Write Review"
          value={formData.review}
          onChange={handleChange}
          className="p-2 border rounded"
          rows={3}
          required
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={formData.rating}
          onChange={handleChange}
          className="p-2 border rounded"
          min="1"
          max="5"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {
            loading ? <>
            Loading...
            </> : <>
            Submit Review
            
            </>
          }
        </button>
      </form>
    </div>
  );
};

export default AddReview;
