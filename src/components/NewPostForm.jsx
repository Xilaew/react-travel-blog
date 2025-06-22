import { useState } from "react";

export function NewPostForm() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    author: "",
    authorPhoto: "",
    startDate: "",
    endDate: "",
    thumbnail: "",
    summary: "",
    googleMapLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Post Submitted:", formData);
    alert(
      "Post submitted"
    );
  };

  return (
    <div className="min-h-screen pt-24 px-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Create a New Travel Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
        {[
          { label: "Title", name: "title" },
          { label: "Location", name: "location" },
          { label: "Author", name: "author" },
          { label: "Author Photo URL", name: "authorPhoto" },
          { label: "Start Date", name: "startDate", type: "date" },
          { label: "End Date", name: "endDate", type: "date" },
          { label: "Thumbnail Image URL", name: "thumbnail" },
          { label: "Google Map Embed Link", name: "googleMapLink" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {label}
            </label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
        ))}

        {/* Summary (textarea) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Summary
          </label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            rows="6"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            required
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
}
