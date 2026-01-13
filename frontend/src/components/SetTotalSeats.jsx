import { useState } from "react";
import { Pencil, Check, X } from "lucide-react";
import { useRegistration } from "../contexts/RegistrationContext";

const SetTotalSeats = () => {
  const { stats, setTotalSeats } = useRegistration();

  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const startEdit = () => {
    setValue(stats.totalSeats);
    setEditing(true);
    setError("");
  };

  const cancelEdit = () => {
    setEditing(false);
    setError("");
  };

  const submit = async () => {
    setError("");

    if (!value || value <= 0) {
      setError("จำนวนที่นั่งต้องมากกว่า 0");
      return;
    }

    try {
      await setTotalSeats(Number(value));
      setEditing(false);
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "ไม่สามารถอัปเดตจำนวนที่นั่งได้";

      setError(message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      {!editing ? (
        <div className="flex items-center gap-3">
          <span className="text-5xl font-black text-yellow-500">
            {stats.totalSeats ?? "-"}
          </span>
          <button
            onClick={startEdit}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <Pencil size={18} />
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="1"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="border rounded-lg px-3 py-2 w-28 text-center"
            />
            <button
              onClick={submit}
              className="p-2 rounded-lg bg-green-500 text-white"
            >
              <Check size={18} />
            </button>
            <button
              onClick={cancelEdit}
              className="p-2 rounded-lg bg-gray-200"
            >
              <X size={18} />
            </button>
          </div>

          {error && (
            <p className="text-sm text-red-500 text-center">
              {error}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default SetTotalSeats;
