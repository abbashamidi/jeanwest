export default function BottomSlideModal({ isOpen, onClose, children }) {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col justify-end pointer-events-none">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative bg-white shadow-2xl border-t rounded-t-xl w-full transform transition-transform duration-300 ease-in-out pointer-events-auto ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ maxHeight: "85vh" }}
      >
        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[calc(85vh-60px)] p-4 text-xs">
          {children}
        </div>

        {/* Bottom button */}
        <div className="border-t p-3">
          <button
            onClick={onClose}
            className="w-full bg-black text-white rounded-md text-xs px-4 py-2"
          >
            متوجه شدم
          </button>
        </div>
      </div>
    </div>
  );
}
