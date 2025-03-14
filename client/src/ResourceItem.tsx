import React from 'react';

interface Resource {
  id: string;
  status: 'Completed' | 'In Progress' | 'Not Started';
  name: string;
  type: string;
  url?: string;
}

interface ResourceItemProps {
  resource: Resource;
  onEdit: () => void;
  onDelete: () => void;
}

const ResourceItem: React.FC<ResourceItemProps> = ({ resource, onEdit, onDelete }) => {
  // Helper function to get the appropriate CSS class for status
  const getStatusClass = (status: string): string => {
    switch(status) {
      case 'Completed': return 'status-completed';
      case 'In Progress': return 'status-in-progress';
      case 'Not Started': return 'status-not-started';
      default: return '';
    }
  };

  return (
    <tr>
      <td className={getStatusClass(resource.status)}>
        {resource.status}
      </td>
      <td>{resource.name}</td>
      <td>{resource.type}</td>
      <td>
        <button 
          onClick={onEdit}
          className="action-button"
        >
          Edit
        </button>
        {' | '}
        <button 
          onClick={onDelete}
          className="action-button delete"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ResourceItem;