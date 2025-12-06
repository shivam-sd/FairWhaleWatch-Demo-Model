import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const HeroWomensWatches = () => {

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    description: "",
    lowprice: "",
    highprice: "",
  });

  const [image, setImage] = useState(null);
  const [hoverImage, setHoverImage] = useState(null);

  const [preview1, setPreview1] = useState(null);
  const [preview2, setPreview2] = useState(null);

  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview1(URL.createObjectURL(file));
  };

 
  const handleHoverImageChange = (e) => {
    const file = e.target.files[0];
    setHoverImage(file);
    setPreview2(URL.createObjectURL(file));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !hoverImage) {
      alert("Both images are required!");
      return;
    }

    setLoading(true);

    const data = new FormData();
    data.append("description", formData.description);
    data.append("lowprice", formData.lowprice);
    data.append("highprice", formData.highprice);
    data.append("image", image);
    data.append("hoverimage", hoverImage);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URI}admin/herowomenwatch`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Women Watch Added Successfully!");
      console.log(res.data);

      setFormData({ description: "", lowprice: "", highprice: "" });
      setImage(null);
      setHoverImage(null);
      setPreview1(null);
      setPreview2(null);

      navigate("/admindashboard");

    } catch (err) {
      console.error("Error adding watch:", err);
      alert("Failed to add watch!");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow p-6 rounded mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Add Women Watch
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Description */}
        <div>
          <label className="font-medium">Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Prices */}
        <div className="flex gap-4">
          <div className="w-full">
            <label className="font-medium">Low Price</label>
            <input
              type="number"
              name="lowprice"
              value={formData.lowprice}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div className="w-full">
            <label className="font-medium">High Price</label>
            <input
              type="number"
              name="highprice"
              value={formData.highprice}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
        </div>

        {/* Main Image */}
        <div>
          <label className="font-medium">Main Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="w-full"
            required
          />
          {preview1 && (
            <img
              src={preview1}
              className="w-32 h-32 mt-3 object-cover rounded"
            />
          )}
        </div>

        {/* Hover Image */}
        <div>
          <label className="font-medium">Hover Image</label>
          <input
            type="file"
            onChange={handleHoverImageChange}
            accept="image/*"
            className="w-full"
            required
          />
          {preview2 && (
            <img
              src={preview2}
              className="w-32 h-32 mt-3 object-cover rounded"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-pink-600 text-white p-2 rounded hover:bg-pink-700"
        >
          {loading ? "Adding..." : "Add Women Watch"}
        </button>
      </form>
    </div>
  );
};

export default HeroWomensWatches;
