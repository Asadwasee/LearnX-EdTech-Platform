import React, { useState } from 'react';
import Card from '../../components/ui/Card';

export default function Certificates({ certificates = [] }) {
  const [open, setOpen] = useState(false);

  function downloadCertificate(certificate) {
    const safeTitle = certificate.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
    const fileName = `${safeTitle || 'certificate'}.html`;
    const generatedAt = new Date().toLocaleDateString();

    const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${certificate.title} Certificate</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        background: linear-gradient(135deg, #f8fafc, #eef2ff);
        color: #0f172a;
        display: grid;
        place-items: center;
        min-height: 100vh;
      }
      .certificate {
        width: min(900px, 90vw);
        background: white;
        border: 12px solid #1d4ed8;
        border-radius: 24px;
        padding: 48px;
        box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
        text-align: center;
      }
      .eyebrow {
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #2563eb;
        font-weight: 700;
        font-size: 14px;
      }
      h1 {
        font-size: 42px;
        margin: 18px 0 10px;
      }
      .course {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 12px;
      }
      .meta {
        color: #475569;
        margin-top: 24px;
        font-size: 14px;
      }
      .signature {
        margin-top: 52px;
        display: flex;
        justify-content: space-between;
        gap: 24px;
        text-align: left;
      }
      .sig-block {
        flex: 1;
        border-top: 1px solid #cbd5e1;
        padding-top: 12px;
        color: #334155;
      }
    </style>
  </head>
  <body>
    <main class="certificate">
      <div class="eyebrow">Certificate of Completion</div>
      <h1>LearnX EdTech Platform</h1>
      <div>This certifies that the learner has successfully completed</div>
      <div class="course">${certificate.title}</div>
      <div>Issued on ${certificate.issued}</div>

      <div class="signature">
        <div class="sig-block">
          <strong>Instructor</strong><br />A. Khan
        </div>
        <div class="sig-block" style="text-align:right;">
          <strong>Generated</strong><br />${generatedAt}
        </div>
      </div>
    </main>
  </body>
</html>`;

    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-text-dark">Certificates</h3>
        <button onClick={() => setOpen(true)} className="text-sm text-primary-blue">View</button>
      </div>

      <div className="text-sm text-text-muted mb-4">You have {certificates.length} certificates.</div>

      {/* Inline certificate cards (visible immediately) */}
      <div className="grid gap-3">
        {certificates.length === 0 ? (
          <div className="text-sm text-text-muted">No certificates yet. Complete courses to earn certificates.</div>
        ) : (
          certificates.map((c) => (
            <Card key={c.id} className="p-4 flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="px-3 py-1 bg-secondary-gray-dark text-xs rounded-md font-medium">🏅</div>
              </div>

              <div className="flex-1">
                <div className="text-sm font-semibold text-text-dark">{c.title}</div>
                <div className="text-xs text-text-muted">Issued: {c.issued}</div>
              </div>

              <div className="flex-shrink-0">
                <button onClick={() => downloadCertificate(c)} className="text-primary-blue text-sm font-medium">Download</button>
              </div>
            </Card>
          ))
        )}
      </div>

      {/* Modal detail view (optional) */}
      {open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-lg p-6 bg-white rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-bold">Your Certificates</h4>
              <button onClick={() => setOpen(false)} className="text-text-muted">Close</button>
            </div>

            <div className="grid gap-3">
              {certificates.map((c) => (
                <Card key={c.id} className="p-4 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="px-3 py-1 bg-secondary-gray-dark text-xs rounded-md font-medium">🏅</div>
                  </div>

                  <div className="flex-1">
                    <div className="text-sm font-semibold text-text-dark">{c.title}</div>
                    <div className="text-xs text-text-muted">Issued: {c.issued}</div>
                  </div>

                  <div className="flex-shrink-0">
                    <button onClick={() => downloadCertificate(c)} className="text-primary-blue text-sm font-medium">Download</button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
