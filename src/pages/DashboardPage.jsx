import React from 'react';
import Container from '../components/ui/Container';

export default function DashboardPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <Container className="py-8 flex-grow flex flex-col">
        
        {/* ====================================================================================
            INTEGRATION LANDMARK: ALIYAN (STUDENT DASHBOARD PANEL ARCHITECTURE & LOGIC)
            Requirements:
            - Split Responsive Panel Layout Structure
            - Side Menu Controls (My Courses navigation list, Progress monitors, Certificate modals)
            - Main Display view containing course list cards tracking progress bar fill indicators
            - Dynamic layout implementation mapping current lesson indices
           ==================================================================================== */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
          
          {/* Side Menu Action Bar Module Grid */}
          <aside className="md:col-span-1 p-5 border-2 border-dashed border-primary-blue/30 bg-primary-blue/5 rounded-xl flex flex-col gap-3">
            <h3 className="font-bold text-sm text-primary-blue uppercase tracking-wider mb-2">🧭 Dashboard Menu [Aliyan]</h3>
            <div className="h-10 bg-secondary-white rounded-md border border-gray-200 flex items-center px-3 text-xs text-text-muted">My Courses Menu Link</div>
            <div className="h-10 bg-secondary-white rounded-md border border-gray-200 flex items-center px-3 text-xs text-text-muted">Progress Statistics</div>
            <div className="h-10 bg-secondary-white rounded-md border border-gray-200 flex items-center px-3 text-xs text-text-muted">Certificates Archive</div>
          </aside>

          {/* Main Content Workspace Layout Display Area Frame */}
          <main className="md:col-span-3 p-6 border-2 border-dashed border-primary-blue/30 bg-secondary-white rounded-xl flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-text-dark mb-2">Student Activity Panel Center Shell Workspace [Aliyan]</h2>
              <p className="text-sm text-text-muted mb-6">Incorporate tracking dashboard states mapping, current progress visual indicators, and recently viewed modules within this area block panel framework.</p>
              
              {/* Architectural Progress Indicator Component Frame Placeholder */}
              <div className="mb-6 p-4 bg-secondary-gray rounded-lg border border-gray-100">
                <div className="flex justify-between text-xs font-bold text-text-dark mb-1">
                  <span>MERN Development Framework Progress Monitor UI Shell</span>
                  <span>75% Complete</span>
                </div>
                {/* Visual outer gauge containment structure */}
                <div className="w-full h-2.5 bg-secondary-gray-dark rounded-full overflow-hidden">
                  <div className="w-[75%] h-full bg-primary-green rounded-full transition-all duration-1000 ease-out" />
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-secondary-gray text-center text-xs text-text-muted font-mono rounded-md">
               Aliyan Workspace Boundary: Interface database response arrays parsing user modules cleanly right here.
            </div>
          </main>

        </div>
      </Container>
    </div>
  );
}