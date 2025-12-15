export function PinDisplay({ length, pin }: { length: number; pin: string }) {
  return (
    <div className="flex gap-3 mb-4 lg:mb-6">
      {Array.from({ length }).map((_, i) => (
        <div
          key={i}
          className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full border-4 border-orange-600 ${
            pin[i] ? 'bg-orange-600' : 'bg-white'
          }`}
        />
      ))}
    </div>
  );
}
