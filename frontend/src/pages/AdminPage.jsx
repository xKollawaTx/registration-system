import { useEffect } from "react";
import { useRegistration } from "../contexts/RegistrationContext";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import SearchSortBar from "../components/SearchSortBar";
import SetTotalSeats from "../components/SetTotalSeats";

const AdminPage = () => {
  const {
    registrations,
    pagination,
    stats,
    query,
    updateQuery,
    updateFilter,
    loadAdminRegistrations,
  } = useRegistration();

  useEffect(() => {
    loadAdminRegistrations(query);
  }, [query]);
  console.log(pagination.page);

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-black">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[150px]">
          <p className="text-black font-medium mb-2 uppercase tracking-wider">
            ลงทะเบียนเข้างานแล้ว
          </p>
          <p className="text-5xl font-black text-blue-600">
            {stats.registeredCount}
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[150px]">
          <p className="text-black font-medium mb-2 uppercase tracking-wider">
            จำนวนที่เหลือ
          </p>
          <p className="text-5xl font-black text-emerald-500">
            {stats.remainingSeats}
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[150px]">
          <p className="text-black font-medium mb-2 uppercase tracking-wider">
            จํานวนคนลงทะเบียนเข้างานทั้งหมด
          </p>
          <SetTotalSeats />
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
          <p className="font-semibold text-black">
            รายชื่อผู้ลงทะเบียนเข้างานแล้ว
          </p>
          <div className="mt-2 md:mt-0">
            <SearchSortBar onChange={updateFilter} />
          </div>
        </div>

        <Table
          columns={[
            { key: "firstName", label: "ชื่อ" },
            { key: "lastName", label: "นามสกุล" },
            { key: "phone", label: "เบอร์โทรศัพท์" },
          ]}
          data={registrations}
          onSort={updateFilter}
          currentQuery={query}
        />

        <Pagination
          page={pagination.page}
          totalPages={pagination.totalPages}
          onPageChange={(page) => updateQuery({ page })}
        />
      </div>
    </Layout>
  );
};

export default AdminPage;
