import React from 'react';
import Container from '../components/ui/Container';
import Certificates from '../components/dashboard/Certificates';
import Sidebar from '../components/dashboard/Sidebar';

const sample = [
  { id: 'cert-1', title: 'MERN Development Bootcamp', issued: '2026-05-10' },
];

export default function CertificatesPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <Container className="py-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          <div className="md:col-span-1">
            <Sidebar />
          </div>

          <main className="md:col-span-3">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold mb-3">Certificates</h2>
              <p className="text-sm text-text-muted mb-6">View and download certificates you have earned.</p>

              <Certificates certificates={sample} />
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}
