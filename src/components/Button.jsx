export default function Button({ children }) {
  return (
    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
      {children}
    </button>
  );
}