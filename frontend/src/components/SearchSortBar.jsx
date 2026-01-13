import { Search } from "lucide-react";

const SearchSortBar = ({ onChange }) => {
  return (
    <div className="w-full py-2">
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
        <div className="relative flex-1 md:flex-initial md:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="ค้นหาด้วยชื่อ"
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
            onChange={(e) => onChange({ search: e.target.value, page: 1 })}
          />
        </div>
        <div className="flex items-center gap-2">
          <select
            className="block w-full md:w-32 px-3 py-2.5 border border-gray-300 rounded-xl bg-white text-sm text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
            onChange={(e) =>
              onChange({ sortBy: "createdAt", order: e.target.value, page: 1 })
            }
          >
            <option value="desc">ล่าสุด</option>
            <option value="asc">เก่าสุด</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchSortBar;
