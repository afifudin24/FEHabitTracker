const TableLoader = () => {
    return (
      <div className="overflow-x-auto animate-pulse mt-10">
        <table className="min-w-full bg-bg-card table-auto shadow-md rounded-lg overflow-hidden">
          <thead className="bg-primary">
            <tr className="text-left text-text-light">
              <th className="px-4 py-3">No</th>
              <th className="px-4 py-3">Habits</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 hidden md:table-cell">Period</th>
              <th className="px-4 py-3 hidden md:table-cell">Target</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, i) => (
              <tr key={i} className="border-b border-gray-200">
                <td className="px-4 py-4">
                  <div className="h-4 w-6 bg-gray-300 rounded"></div>
                </td>
                <td className="px-4 py-4">
                  <div className="h-4 w-32 bg-gray-300 rounded"></div>
                </td>
                <td className="px-4 py-4 text-center">
                  <div className="h-4 w-4 mx-auto bg-gray-300 rounded-full"></div>
                </td>
                <td className="px-4 py-4 hidden md:table-cell">
                  <div className="h-4 w-20 bg-gray-300 rounded mx-auto"></div>
                </td>
                <td className="px-4 py-4 hidden md:table-cell">
                  <div className="h-4 w-16 bg-gray-300 rounded mx-auto"></div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex gap-2 justify-center">
                    <div className="h-4 w-4 bg-gray-300 rounded"></div>
                    <div className="h-4 w-4 bg-gray-300 rounded"></div>
                    <div className="h-4 w-4 bg-gray-300 rounded"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TableLoader;
  