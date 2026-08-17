import React from 'react';

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl text-center">
      <h1 className="text-3xl font-bold uppercase tracking-tighter mb-8">My Account</h1>
      <p className="text-gray-600 mb-8">
        This is a headless-ready frontend. To implement user accounts (login, register, order history), 
        this would be connected to the WooCommerce REST API using a library like NextAuth.js or custom JWT authentication.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
        <div className="bg-gray-50 p-8">
          <h2 className="text-xl font-bold uppercase mb-4">Login</h2>
          <form className="space-y-4">
            <input type="email" placeholder="Email Address" className="w-full border p-3" disabled />
            <input type="password" placeholder="Password" className="w-full border p-3" disabled />
            <button type="button" className="w-full bg-black text-white py-3 font-semibold uppercase opacity-50 cursor-not-allowed">Sign In</button>
          </form>
        </div>
        <div className="bg-gray-50 p-8">
          <h2 className="text-xl font-bold uppercase mb-4">Register</h2>
          <p className="text-sm text-gray-500 mb-4">Create an account to track orders and checkout faster.</p>
          <form className="space-y-4">
            <input type="email" placeholder="Email Address" className="w-full border p-3" disabled />
            <input type="password" placeholder="Password" className="w-full border p-3" disabled />
            <button type="button" className="w-full bg-black text-white py-3 font-semibold uppercase opacity-50 cursor-not-allowed">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
