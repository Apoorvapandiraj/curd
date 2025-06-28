import React from 'react';

const AdminDashboard = () => {
  const token = localStorage.getItem('adminToken');

  if (!token) {
    return <p className="text-center mt-20 text-gold">Access Denied. Please log in as admin.</p>;
  }

  return (
    <section className="min-h-screen p-6 bg-black text-gold">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p>Welcome, Admin! This is where you’ll manage menu items and view orders.</p>
      {/* We will build features here next */}
    </section>
  );
};

export default AdminDashboard;