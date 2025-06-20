export function PostForm() {
  return (
    <div className="bg-white mt-30 rounded-lg shadow-md p-6">
      <h3 className="text-xl text-center font-bold mb-4">ADD YOUR POST HERE</h3>
      <form action="">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title: </label>
          <input
            type="text"
            placeholder="Specific name of visited place/site"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Location: </label>
          <input
            type="text"
            placeholder="Country - City"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Author: </label>
          <input
            type="text"
            placeholder="Author's name"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

         <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Author's photo:
          </label>
          <input
            type="file"
            name="location_photo"
            accept="image/*"
            required
            class="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                      file:rounded file:border-0 file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100
                      cursor-pointer"
          ></input>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">StartDate: </label>
          <input
            type="date"
            placeholder="Visiting time or period"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">EndDate: </label>
          <input
            type="date"
            placeholder="Visiting time or period"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Thumbnail:
          </label>
          <input
            type="file"
            name="location_photo"
            accept="image/*"
            required
            class="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                      file:rounded file:border-0 file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100
                      cursor-pointer"
          ></input>
        </div>

        <div className="mb-4">
          <label htmlFor="">Summary: </label>
          <textarea
            name=""
            id=""
            placeholder="Leave your massege here"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded"
        >
          Submit your post
        </button>
      </form>
    </div>
  );
}
