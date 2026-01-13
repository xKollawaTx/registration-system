const Pagination = ({ page, totalPages, onPageChange }) => {
  if (totalPages <= 0) return null;

  return (
    <div className="flex justify-center sm:justify-end mt-4 gap-3 items-center">
      {page > 1 && (
        <button
          onClick={() => onPageChange(page - 1)}
          className="px-4 py-2 bg-black text-white rounded-lg transition-hover hover:bg-gray-800"
        >
          หน้าก่อนหน้า
        </button>
      )}

      <span className="px-3 py-2 text-sm font-medium text-black bg-gray-100 rounded-md">
        {page} / {totalPages}
      </span>

      {page < totalPages && (
        <button
          onClick={() => onPageChange(page + 1)}
          className="px-4 py-2 bg-black text-white rounded-lg transition-hover hover:bg-gray-800"
        >
          หน้าถัดไป
        </button>
      )}
    </div>
  );
};

export default Pagination;