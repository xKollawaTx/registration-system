import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";

const Table = ({ columns, data, onSort, currentQuery }) => {
  const handleSort = (key) => {
    const isCurrentField = currentQuery.sortBy === key;
    const newOrder = (isCurrentField && currentQuery.order === "asc") ? "desc" : "asc";
    
    onSort({
      sortBy: key,
      order: newOrder,
      page: 1
    });
  };

  const renderSortIcon = (key) => {
    if (currentQuery.sortBy !== key) {
      return <ChevronsUpDown className="ml-1 text-black size-4" />;
    }
    return currentQuery.order === "asc" 
      ? <ChevronUp className="ml-1 text-blue-600 size-4" /> 
      : <ChevronDown className="ml-1 text-blue-600 size-4" />;
  };

  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto border border-gray-100">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-left text-sm font-semibold text-gray-600 cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => handleSort(col.key)}
              >
                <div className="flex items-center">
                  {col.label}
                  {renderSortIcon(col.key)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.length > 0 ? (
            data.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-sm text-gray-700">
                    {row[col.key] || "-"}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="px-4 py-10 text-center text-gray-400">
                ไม่พบข้อมูลผู้ลงทะเบียน
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;