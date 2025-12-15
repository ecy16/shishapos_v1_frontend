export function PinKeypad({ onKeyPress, onDelete }: { onKeyPress: (key: string) => void; onDelete: () => void }) {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'Delete'];

  return (
    <div className="grid grid-cols-3 gap-2 max-w-xs">
      {keys.map((key) => (
        <button
          key={key}
          onClick={() => (key === 'Delete' ? onDelete() : key && onKeyPress(key))}
          className={`
            h-14 lg:h-16 text-2xl lg:text-3xl font-bold rounded-lg 
            ${key ? 'bg-white shadow-md hover:bg-gray-200 active:bg-gray-300' : 'pointer-events-none'} 
            ${key === 'Delete' ? 'text-red-600' : 'text-gray-800'}
          `}
          disabled={!key && key !== 'Delete'}
        >
          {key || ''}
        </button>
      ))}
    </div>
  );
}
