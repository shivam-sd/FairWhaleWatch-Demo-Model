import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HeroSectionDetails = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroSectionDetails = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URI}admin/herosection/details`
        );

        console.log(res.data.details[0]);
        setData(res.data.details[0]);
      } catch (err) {
        console.log("Error in Fetching Details in Hero Section");
      } finally {
        setLoading(false);
      }
    };

    fetchHeroSectionDetails();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!data) return <p className="text-center mt-10">No data found!</p>;

  return (
    <div className="flex items-center flex-col gap-10">
      <h1 className="bg-red-400 text-white w-full text-center p-2">Details</h1>

      <div className="space-y-2 text-lg">
        <p>
          Sub Heading:{" "}
          <span className="text-gray-500">{data.subheading}</span>
        </p>
        <p>
          Heading: <span className="text-gray-500">{data.heading}</span>
        </p>
        <p>
          Use Code: <span className="text-gray-500">{data.usecode}</span>
        </p>
      </div>

      <Link
        to={`/herosection/update/${data._id}`}
        className="text-xl p-2 rounded-2xl bg-blue-500 text-white"
      >
        Update
      </Link>
    </div>
  );
};

export default HeroSectionDetails;
