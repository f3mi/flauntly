import React from 'react';

const FontDemo = () => {
  const weights = {
    'Outfit': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Plus Jakarta Sans': [200, 300, 400, 500, 600, 700, 800],
    'JetBrains Mono': [100, 200, 300, 400, 500, 600, 700]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl font-bold text-gray-900 mb-8">Font System</h1>
        
        {/* Outfit - Main Sans Font */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-gray-800 mb-6">Outfit - Main Sans Font</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            {weights['Outfit'].map((weight) => (
              <div key={weight} className="font-sans" style={{ fontWeight: weight }}>
                <p className="text-sm text-gray-500 mb-1">Weight {weight}</p>
                <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
              </div>
            ))}
          </div>
        </section>

        {/* Plus Jakarta Sans - Display Font */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-gray-800 mb-6">Plus Jakarta Sans - Display Font</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            {weights['Plus Jakarta Sans'].map((weight) => (
              <div key={weight}>
                <div className="font-display" style={{ fontWeight: weight }}>
                  <p className="text-sm text-gray-500 mb-1">Weight {weight}</p>
                  <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
                </div>
                <div className="font-display italic" style={{ fontWeight: weight }}>
                  <p className="text-sm text-gray-500 mb-1">Weight {weight} (Italic)</p>
                  <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* JetBrains Mono - Monospace Font */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-gray-800 mb-6">JetBrains Mono - Monospace Font</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            {weights['JetBrains Mono'].map((weight) => (
              <div key={weight} className="font-mono" style={{ fontWeight: weight }}>
                <p className="text-sm text-gray-500 mb-1">Weight {weight}</p>
                <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-gray-800 mb-6">Usage Examples</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <div>
              <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">Headings</h3>
              <h1 className="font-display text-4xl font-bold text-gray-900 mb-2">Heading 1</h1>
              <h2 className="font-display text-3xl font-semibold text-gray-800 mb-2">Heading 2</h2>
              <h3 className="font-display text-2xl font-medium text-gray-700 mb-2">Heading 3</h3>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">Body Text</h3>
              <p className="font-sans text-base text-gray-600 mb-4">
                This is a paragraph using Outfit font. It's clean, modern, and highly readable, making it perfect for body text and general content.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">Code Example</h3>
              <pre className="font-mono text-sm bg-gray-50 p-4 rounded-lg">
                <code>{`function greet(name) {
  return \`Hello, \${name}!\`;
}`}</code>
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FontDemo; 