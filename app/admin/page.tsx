"use client";
import { useState } from "react";

interface WebsiteBriefing {
  id: number;
  url: string;
  hosting: string;
  check_hosting: boolean;
  backup_old_site: boolean;
  pages: string;
  website_goal: string;
  booking: boolean;
  shop: boolean;
  content: string;
  design: string;
  location: string;
  project_scope: string;
  additional_comments: string;
  created_at: string; // or Date if you're parsing it
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<WebsiteBriefing[]>([]); // Use the defined type here

  const handlePasswordSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password === "your_secure_password") {
      setIsAuthenticated(true);
      fetchData();
    } else {
      alert("Incorrect password");
    }
  };

  const fetchData = async () => {
    const res = await fetch("/api/admin/data"); // API endpoint for fetching data
    const result = await res.json();
    setData(result.data);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Möchten Sie diesen Eintrag wirklich löschen?")) {
      const res = await fetch(`/api/admin/delete/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        // Remove the deleted entry from the state
        setData(data.filter((entry) => entry.id !== id));
      } else {
        alert("Fehler beim Löschen des Eintrags.");
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      {isAuthenticated ? (
        <div className="bg-white p-6 rounded shadow-md">
          <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
          {data.length > 0 ? (
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">URL</th>
                  <th className="py-2 px-4 border-b">Hosting</th>
                  <th className="py-2 px-4 border-b">Check Hosting</th>
                  <th className="py-2 px-4 border-b">Backup Old Site</th>
                  <th className="py-2 px-4 border-b">Pages</th>
                  <th className="py-2 px-4 border-b">Website Goal</th>
                  <th className="py-2 px-4 border-b">Booking</th>
                  <th className="py-2 px-4 border-b">Shop</th>
                  <th className="py-2 px-4 border-b">Content</th>
                  <th className="py-2 px-4 border-b">Design</th>
                  <th className="py-2 px-4 border-b">Location</th>
                  <th className="py-2 px-4 border-b">Project Scope</th>
                  <th className="py-2 px-4 border-b">Additional Comments</th>
                  <th className="py-2 px-4 border-b">Created At</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((entry) => (
                  <tr key={entry.id}>
                    <td className="py-2 px-4 border-b">{entry.id}</td>
                    <td className="py-2 px-4 border-b">{entry.url}</td>
                    <td className="py-2 px-4 border-b">{entry.hosting}</td>
                    <td className="py-2 px-4 border-b">{entry.check_hosting ? "Yes" : "No"}</td>
                    <td className="py-2 px-4 border-b">{entry.backup_old_site ? "Yes" : "No"}</td>
                    <td className="py-2 px-4 border-b">{entry.pages}</td>
                    <td className="py-2 px-4 border-b">{entry.website_goal}</td>
                    <td className="py-2 px-4 border-b">{entry.booking ? "Yes" : "No"}</td>
                    <td className="py-2 px-4 border-b">{entry.shop ? "Yes" : "No"}</td>
                    <td className="py-2 px-4 border-b">{entry.content}</td>
                    <td className="py-2 px-4 border-b">{entry.design}</td>
                    <td className="py-2 px-4 border-b">{entry.location}</td>
                    <td className="py-2 px-4 border-b">{entry.project_scope}</td>
                    <td className="py-2 px-4 border-b">{entry.additional_comments}</td>
                    <td className="py-2 px-4 border-b">{new Date(entry.created_at).toLocaleString()}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleDelete(entry.id)}
                        className="bg-red-500 text-white py-1 px-2 rounded"
                      >
                        Löschen
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data available</p>
          )}
        </div>
      ) : (
        <form onSubmit={handlePasswordSubmit} className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="p-2 mb-4 border rounded"
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Login
          </button>
        </form>
      )}
    </div>
  );
}
