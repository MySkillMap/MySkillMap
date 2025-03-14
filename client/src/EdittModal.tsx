import React from "react";

interface ModalProps1 {
  isOpen: boolean;
  onClose: () => void;
}

const Modal1: React.FC<ModalProps1> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="PathCard">
      <div className="NPcard">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>

        {/* Modal Header */}
        <h2 className="Ptitle">Edit New Learning Path</h2>

        {/* Description Input */}
        <div className="dDiv">
          <label className="descW">Description</label>
          <textarea
            placeholder="Edit the purpose of this learning path"
            className="desc"
            rows={3}
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="cancelbtn">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-black rounded-lg"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-lg">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal1;
