'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/useAuthStore';
import { UserList } from '@/components/UserList';
import { PinKeypad } from '@/components/pinKeyboard';
import { PinDisplay } from '@/components/pinDisplay';
// Mock users
const mockUsers = [
    { id: '1', name: 'Ahmed', pin: '1234' },
    { id: '2', name: 'Sara', pin: '5678' },
    { id: '3', name: 'Omar', pin: '9012' },
];
export const HookahIcon = ({ className = 'w-10 h-10 text-white' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="currentColor"
        className={className}
    >
        {/* Hookah base */}
        <ellipse cx="32" cy="52" rx="12" ry="6" />
        <rect x="28" y="20" width="8" height="32" />

        {/* Hookah bowl */}
        <ellipse cx="32" cy="16" rx="8" ry="4" />
        <rect x="30" y="12" width="4" height="4" />

        {/* Hose (stylized) */}
        <path d="M40 24 C48 24, 48 36, 40 36" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="40" cy="36" r="2" fill="currentColor" />
    </svg>
);

export default function LoginPage() {
    const [selectedUser, setSelectedUser] = useState<typeof mockUsers[0] | null>(null);
    const [pin, setPin] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuthStore();
    const router = useRouter();

    const handlePinComplete = () => {
        // For now, bypass PIN checking
        if (selectedUser) {
            login({ id: selectedUser.id, name: selectedUser.name });
            router.push('/dashboard');
        }
    };

    const reset = () => {
        setSelectedUser(null);
        setPin('');
        setError('');
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-orange-600 text-white p-6 text-center">
                <div className="flex items-center justify-center gap-3">
                    <HookahIcon className="w-12 h-12" />
                    <h1 className="text-3xl font-bold">Shisha Lounge POS</h1>
                </div>
                <p className="text-xl mt-2">Welcome! Please log in</p>
            </header>



            <div className="flex-1 flex flex-col lg:flex-row">
                {/* Left: User List */}
                <div className={`w-full lg:w-1/2 p-4 lg:p-6 transition-all duration-300 ${selectedUser ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                    <UserList users={mockUsers} onSelect={setSelectedUser} />
                </div>

                {/* Right: PIN keyboard */}
                {selectedUser && (
                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 lg:p-6 bg-white shadow-lg rounded-lg">
                        <button onClick={reset} className="mb-2 text-orange-600 text-base self-start">← Back</button>

                        {/* Avatar */}
                        <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-300 rounded-full mb-2 lg:mb-4" />

                        {/* User name */}
                        <h2 className="text-xl lg:text-2xl font-semibold mb-2 lg:mb-4">{selectedUser.name}</h2>

                        {/* PIN prompt */}
                        <h3 className="text-lg lg:text-xl mb-2 lg:mb-4">Enter your PIN</h3>

                        {/* PIN display */}
                        <PinDisplay length={4} pin={pin}  />

                        {/* Error */}
                        {error && <p className="text-red-600 text-base mb-2">{error}</p>}

                        {/* Keypad */}
                        <PinKeypad
                            onKeyPress={(key) => {
                                if (pin.length < 4) setPin(pin + key);
                                if (pin.length === 3) setTimeout(handlePinComplete, 300);
                            }}
                            onDelete={() => setPin(pin.slice(0, -1))}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
