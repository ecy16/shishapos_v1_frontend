import { User } from 'lucide-react';

type MockUser = { id: string; name: string; pin: string };

export function UserList({ users, onSelect }: { users: MockUser[]; onSelect: (user: MockUser) => void }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {users.map((user) => (
        <button
          key={user.id}
          onClick={() => onSelect(user)}
          className="bg-white rounded-xl shadow-lg p-2 flex items-center gap-4 hover:bg-orange-50 transition text-left"
        >
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
            <User size={48} className="text-gray-600" />
          </div>
          <h3 className="text-3xl font-semibold">{user.name}</h3>
        </button>
      ))}
    </div>
  );
}