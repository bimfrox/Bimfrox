import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchContacts = useCallback(async () => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      toast.error("⚠️ Please login first");
      navigate("/admin/login");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401 || res.status === 403) {
        toast.error("⚠️ Session expired. Please login again");
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
        return;
      }

      const data = await res.json();
      if (data.success && Array.isArray(data.contacts)) {
        setContacts(data.contacts);
      } else if (Array.isArray(data)) {
        setContacts(data);
      } else {
        toast.error("❌ Failed to fetch contacts");
        setContacts([]);
      }
    } catch (err) {
      console.error("Error fetching contacts:", err);
      toast.error("❌ Server error while fetching contacts");
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      toast.error("⚠️ Please login first");
      navigate("/admin/login");
    } else {
      fetchContacts();
    }
  }, [fetchContacts, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    toast.success("✅ Logged out successfully");
    navigate("/admin/login");
  };

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
        <h1 className="text-3xl font-bold">📊 Admin Dashboard</h1>
        <div className="space-x-3 flex flex-wrap gap-2">
          <button
            onClick={fetchContacts}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            🔄 Refresh
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            🚪 Logout
          </button>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 overflow-x-auto">
        {loading ? (
          <p className="text-gray-600 text-center">⏳ Loading contacts...</p>
        ) : contacts.length === 0 ? (
          <p className="text-gray-600 text-center">No contacts found.</p>
        ) : (
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-green-100">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Service</th>
                <th className="p-3">Budget</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="p-3">{c.fullName || "—"}</td>
                  <td className="p-3">{c.email || "—"}</td>
                  <td className="p-3">{c.number || "—"}</td>
                  <td className="p-3">{c.serviceType || "—"}</td>
                  <td className="p-3">{c.budget || "—"}</td>
                  <td className="p-3">
                    {c.createdAt ? new Date(c.createdAt).toLocaleDateString() : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
