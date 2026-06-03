import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/ui/Container';

export default function CourseDetailPage() {
  const { id } = useParams();

  return (
    <div className="py-10">
      <Container>
        <div className="mb-6 p-3 bg-secondary-gray-dark rounded-md text-xs font-mono text-text-muted">
          Dynamic Content Instance Parameter Key ID Target Identifier: <span className="text-primary-blue font-bold">{id}</span>
        </div>

        {/* =====================================================================================
            INTEGRATION LANDMARK: AFREEN (COURSE DETAIL STRUCTURE FRAMEWORK)
            Requirements:
            - Course description layout view
            - Instructor Bio portfolio panels
            - Primary Enroll Action Button Callout Layout Frame
            - Note: Curriculum accordion shifted to unknown member due to exams availability constraint.
           ===================================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            {/* Primary Details Box Section */}
            <div className="p-6 border-2 border-dashed border-accent-purple/30 bg-secondary-white rounded-xl min-h-[250px]">
              <h2 className="text-xl font-bold text-accent-purple mb-2">Course Overview & Description Shell [Afreen Workspace]</h2>
              <p className="text-sm text-text-muted">Insert dynamic descriptive paragraphs, title data elements, tags, and instructor portfolio layout segments here.</p>
            </div>
            
            {/* Curriculum Accordion Block Reallocated Target Zone */}
            <div className="p-6 border-2 border-dashed border-gray-300 bg-secondary-gray-dark rounded-xl">
              <h3 className="text-md font-bold text-text-dark mb-1">Curriculum Segment [Reallocated Accordion Mount Target Zone]</h3>
              <p className="text-xs text-text-muted">Shared boundary marker element. The drop-down interactive layout mapping goes inside this container block layout frame.</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Action Checkout Component Area Block */}
            <div className="p-6 border-2 border-dashed border-accent-purple/30 bg-secondary-white rounded-xl text-center">
              <h3 className="font-bold text-text-dark mb-4">Action Container Area Panel</h3>
              <div className="w-full h-40 bg-secondary-gray rounded-lg mb-4 flex items-center justify-center text-xs text-text-muted">[Video Preview Structural Anchor Frame]</div>
              <div className="p-3 bg-primary-blue/10 text-primary-blue rounded-lg font-bold text-sm mb-2 cursor-pointer hover:bg-primary-blue/20 transition-colors">
                Enroll Now Placeholder Action
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}