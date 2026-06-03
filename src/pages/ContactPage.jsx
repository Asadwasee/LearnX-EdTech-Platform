import React from 'react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';

export default function ContactPage() {
  return (
    <div className="py-10">
      <Container>
        <SectionTitle 
          title="Connect With Our Support Team" 
          subtitle="Have questions about the platform or technical tracks? Drop your query details inside the module workspace below." 
        />

        {/* ===================================================================================
            INTEGRATION LANDMARK: TAYYABA (SUPPORT CONTACT COMPONENT CONFIGURATION & FAQS)
            Requirements:
            - Contact application input elements structure (Name, Email account parsing, text message box)
            - Complete form evaluation data handlers ensuring full client field validations
            - FAQ accordions drop down system components structure mapping responses cleanly
           =================================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Functional User Processing Input Form Block Element */}
          <div className="p-6 border-2 border-dashed border-primary-blue/30 bg-secondary-white rounded-xl">
            <h3 className="text-lg font-bold text-primary-blue mb-4">Contact Request Gateway Form Workspace [Tayyaba]</h3>
            <div className="space-y-4 opacity-40 pointer-events-none">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">Full Name Field</label>
                <div className="h-10 bg-secondary-gray border border-gray-200 rounded-md" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">Email Coordinates</label>
                <div className="h-10 bg-secondary-gray border border-gray-200 rounded-md" />
              </div>
              <div className="w-full h-10 bg-primary-blue rounded-md" />
            </div>
          </div>

          {/* Information Frequently Asked Questions Framework Grid List */}
          <div id="faq" className="p-6 border-2 border-dashed border-primary-blue/30 bg-secondary-white rounded-xl space-y-4">
            <h3 className="text-lg font-bold text-text-dark mb-2">Platform FAQ Accordion Directory Framework [Tayyaba]</h3>
            <p className="text-xs text-text-muted font-mono mb-4">Mount drop-down accordion lists mapping technical tracking questions cleanly inside this structural wrapper frame zone.</p>
            
            <div className="space-y-2 opacity-50 pointer-events-none">
              <div className="p-3 bg-secondary-gray rounded-md border border-gray-100 text-xs font-semibold">FAQ Toggle Element 1 Structure Framework</div>
              <div className="p-3 bg-secondary-gray rounded-md border border-gray-100 text-xs font-semibold">FAQ Toggle Element 2 Structure Framework</div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}