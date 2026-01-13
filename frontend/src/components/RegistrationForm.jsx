import { useState } from "react";
import { useRegistration } from "../contexts/RegistrationContext";

const RegistrationForm = () => {
  const { registerUser, loadUserRegistrations } = useRegistration();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      await loadUserRegistrations({ page: 1, limit: 5 });
      setForm({ firstName: "", lastName: "", phone: "" });
      setError("");
    } catch (err) {
      const data = err.response?.data;
      if (data?.details && Array.isArray(data.details)) {
        setError(data.details.join(", "));
      } else {
        setError(data?.message || "ลงทะเบียนไม่สำเร็จ");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-gray-600 text-lg">ชื่อ</label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="ใส่ชื่อของคุณ"
              className="text-black border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-gray-600 text-lg">นามสกุล</label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="ใส่นามสกุลของคุณ"
              className="text-black border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-600 text-lg">เบอร์โทรศัพท์</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="ใส่เบอร์โทรศัพท์ของคุณ"
            className="text-black border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}
        <div className="flex justify-center pt-7">
          <button
            type="submit"
            className="bg-blue-500 text-white px-12 py-2 text-xl font-medium hover:bg-blue-600 transition-colors rounded-md"
          >
            ลงทะเบียนเข้างาน
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
