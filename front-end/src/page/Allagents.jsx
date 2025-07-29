import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const AllAgents = () => {
  const [agents, setAgents] = useState([]);

  const fetchAgents = async () => {
    try {
      const res = await axios.get("https://mern-token-distribution.onrender.com/api/admin/all", {});

      setAgents(res.data); // Assuming it's an array of agents
    } catch (error) {
      console.error("Error fetching agents:", error);
      toast.error("Failed to fetch agents.");
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  return (
    <div className="p-6 m-auto justify-center items-center">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">All Agents</h2>
      {agents.length === 0 ? (
        <p className="text-center text-gray-500">No agents found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
            <thead>
              <tr className="bg-blue-100 text-left">
                <th className="py-3 px-4 border-b">#</th>
                <th className="py-3 px-4 border-b">Name</th>
                <th className="py-3 px-4 border-b">Email</th>
                <th className="py-3 px-4 border-b">Phone</th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent, index) => (
                <tr key={agent._id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{agent.firstName}</td>
                  <td className="py-2 px-4 border-b">{agent.assignedTo.email}</td>
                  <td className="py-2 px-4 border-b">{agent.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllAgents;
