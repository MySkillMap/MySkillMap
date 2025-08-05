import React, { useState } from 'react';
import ResourceItem from './ResourceItem';
import './ViewResources.css'; // We'll create this CSS file

interface Resource {
  id: string;
  status: 'Completed' | 'In Progress' | 'Not Started';
  name: string;
  type: string;
  url?: string;
}

const ViewResources: React.FC = () => {
  // Mock data for resources
  const [resources, setResources] = useState<Resource[]>([
    {
      id: '1',
      status: 'Completed',
      name: 'RESOURCE #1',
      type: 'Article',
      url: 'https://example.com/resource1'
    },
    {
      id: '2',
      status: 'In Progress',
      name: 'RESOURCE #2',
      type: 'Tutorial',
      url: 'https://example.com/resource2'
    }
  ]);

  const handleEditResource = (id: string) => {
    console.log(`Edit resource with id: ${id}`);
    // Implement edit functionality
  };

  const handleDeleteResource = (id: string) => {
    console.log(`Delete resource with id: ${id}`);
    // Implement delete functionality
    setResources(resources.filter(resource => resource.id !== id));
  };

  return (
    <div className="resources-page">
      {/* Header */}
      <div className="resources-header">
        <h2 className="path-title">Learning Path #1</h2>
        <p className="path-description">description</p>
      </div>

      {/* Divider - blue line */}
      <div className="divider-line"></div>

      {/* Resources Table Section */}
      <div className="resources-content">
        {/* Add Resource Button - right aligned */}
        <div className="add-resource-container">
          <button className="add-resource-btn">
            + Add Resource
          </button>
        </div>

        {/* Resources Table */}
        <div className="resources-table-container">
          <table className="resources-table">
            <thead>
              <tr>
                <th>STATUS</th>
                <th>RESOURCE</th>
                <th>TYPE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {resources.map(resource => (
                <ResourceItem 
                  key={resource.id}
                  resource={resource}
                  onEdit={() => handleEditResource(resource.id)}
                  onDelete={() => handleDeleteResource(resource.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewResources;