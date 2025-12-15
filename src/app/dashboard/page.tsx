'use client';

import { useAuthStore } from '@/stores/useAuthStore';
import { Package, DoorOpen, DollarSign, Archive, Book, Users, Settings, File } from 'lucide-react';
import { HookahIcon } from '../login/page';

export default function Dashboard() {
  const { user, logout } = useAuthStore();

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <header className="bg-orange-600 text-white p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard - {user?.name}</h1>
        <button onClick={() => { logout(); window.location.href = '/login'; }} className="text-xl">Logout</button>
      </header>

      <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 p-12">
        <button className="bg-white rounded-3xl shadow-2xl p-12 flex flex-col items-center gap-6 hover:shadow-xl active:bg-gray-100 transition">
                     <HookahIcon size={80} className="w-12 h-12 text-orange-600" />
                       {/* size={80} className="text-orange-600" /> */}
          <span className="text-3xl font-semibold">Products</span>
        </button>

        <button className="bg-white rounded-3xl shadow-2xl p-12 flex flex-col items-center gap-6 hover:shadow-xl active:bg-gray-100 transition">
          <DoorOpen size={80} className="text-orange-600" />
          <span className="text-3xl font-semibold">Rooms</span>
        </button>

        <button className="bg-white rounded-3xl shadow-2xl p-12 flex flex-col items-center gap-6 hover:shadow-xl active:bg-gray-100 transition">
          <DollarSign size={80} className="text-orange-600" />
          <span className="text-3xl font-semibold">Invoices / Register</span>
        </button>

        <button className="bg-white rounded-3xl shadow-2xl p-12 flex flex-col items-center gap-6 hover:shadow-xl active:bg-gray-100 transition">
          <Archive size={80} className="text-orange-600" />
          <span className="text-3xl font-semibold">Inventory</span>
        </button>
           <button className="bg-white rounded-3xl shadow-2xl p-12 flex flex-col items-center gap-6 hover:shadow-xl active:bg-gray-100 transition">
          <Book size={80} className="text-orange-600" />
          <span className="text-3xl font-semibold">Orders</span>
        </button>
           <button className="bg-white rounded-3xl shadow-2xl p-12 flex flex-col items-center gap-6 hover:shadow-xl active:bg-gray-100 transition">
          <Users size={80} className="text-orange-600" />
          <span className="text-3xl font-semibold">Employees</span>
        </button>
           <button className="bg-white rounded-3xl shadow-2xl p-12 flex flex-col items-center gap-6 hover:shadow-xl active:bg-gray-100 transition">
          <File size={80} className="text-orange-600" />
          <span className="text-3xl font-semibold">Reports</span>
        </button>
           <button className="bg-white rounded-3xl shadow-2xl p-12 flex flex-col items-center gap-6 hover:shadow-xl active:bg-gray-100 transition">
          <Settings size={80} className="text-orange-600" />
          <span className="text-3xl font-semibold">Settings</span>
        </button>
      </div>
    </div>
  );
}