"use client";

export default function DeleteProjectModal({
  isOpen,
  projectName,
  onClose,
  onConfirm,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#0b2545] p-6 rounded-2xl w-full max-w-sm shadow-lg">
        <h3 className="text-lg font-semibold text-[#0b2545] dark:text-white mb-4">
          Delete Project
        </h3>
        <p className="text-gray-700 dark:text-gray-200 mb-6">
          Are you sure you want to delete <strong>{projectName}</strong>?
        </p>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
