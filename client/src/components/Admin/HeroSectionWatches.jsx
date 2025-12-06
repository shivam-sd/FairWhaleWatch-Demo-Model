import React, { useState } from "react";
import axios from "axios";

const HeroSectionWatches = () => {
  const [formData, setFormData] = useState({
    description: "",
    lowprice: "",
    highprice: "",
  });

  const [image, setImage] = useState(null);
  const [hoverImage, setHoverImage] = useState(null);

  const [preview1, setPreview1] = useState(null);
  const [preview2, setPreview2] = useState(null);

  const [loading, setLoading] = useState(false); // 🔥 Loader State Added

  // Handle input fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image preview
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

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !hoverImage) {
      alert("Please upload both images!");
      return;
    }

    setLoading(true);  // 🔥 Show loader

    const data = new FormData();
    data.append("description", formData.description);
    data.append("lowprice", formData.lowprice);
    data.append("highprice", formData.highprice);
    data.append("image", image);
    data.append("hoverimage", hoverImage);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URI}admin/herowatch`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Watch Added Successfully!");
      console.log(res.data);

      // Reset form
      setFormData({
        description: "",
        lowprice: "",
        highprice: "",
      });
      setImage(null);
      setHoverImage(null);
      setPreview1(null);
      setPreview2(null);

    } catch (err) {
      console.log("Error adding watch:", err);
      alert("Failed to add watch!");
    } finally {
      setLoading(false); // 🔥 Hide loader
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow p-6 rounded mt-10 relative">

      {/* 🔥 Loader Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center rounded">
          <div className="loader border-4 border-gray-300 border-t-blue-600 w-10 h-10 rounded-full animate-spin"></div>
        </div>
      )}

      <h2 className="text-2xl font-semibold text-center mb-6">
        Add Hero Section Watch
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
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
            <label className="block font-medium">Low Price</label>
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
            <label className="block font-medium">High Price</label>
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
          <label className="block font-medium">Main Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full"
            accept="image/*"
            required
          />
          {preview1 && (
            <img
              src={preview1}
              alt="Preview"
              className="w-32 h-32 object-cover mt-3 rounded"
            />
          )}
        </div>

        {/* Hover Image */}
        <div>
          <label className="block font-medium">Hover Image</label>
          <input
            type="file"
            onChange={handleHoverImageChange}
            className="w-full"
            accept="image/*"
            required
          />
          {preview2 && (
            <img
              src={preview2}
              alt="Preview"
              className="w-32 h-32 object-cover mt-3 rounded"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}  // 🔥 disable during loading
          className={`w-full p-2 rounded text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Uploading..." : "Add Watch"}
        </button>
      </form>
    </div>
  );
};

export default HeroSectionWatches;
