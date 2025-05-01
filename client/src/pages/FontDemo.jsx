import React from 'react';

const FontDemo = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Cabinet Grotesk Font Showcase</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Font Weights</h2>
          
          <div className="space-y-4">
            <div>
              <p className="font-cabinet font-black text-xl">Black (900): Cabinet Grotesk</p>
              <p className="font-cabinet font-black">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-cabinet font-black">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-cabinet font-black">0123456789</p>
            </div>
            
            <div>
              <p className="font-cabinet font-extrabold text-xl">Extra Bold (800): Cabinet Grotesk</p>
              <p className="font-cabinet font-extrabold">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-cabinet font-extrabold">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-cabinet font-extrabold">0123456789</p>
            </div>
            
            <div>
              <p className="font-cabinet font-bold text-xl">Bold (700): Cabinet Grotesk</p>
              <p className="font-cabinet font-bold">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-cabinet font-bold">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-cabinet font-bold">0123456789</p>
            </div>
            
            <div>
              <p className="font-cabinet font-semibold text-xl">Semi Bold (600): Cabinet Grotesk</p>
              <p className="font-cabinet font-semibold">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-cabinet font-semibold">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-cabinet font-semibold">0123456789</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">More Font Weights</h2>
          
          <div className="space-y-4">
            <div>
              <p className="font-cabinet font-medium text-xl">Medium (500): Cabinet Grotesk</p>
              <p className="font-cabinet font-medium">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-cabinet font-medium">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-cabinet font-medium">0123456789</p>
            </div>
            
            <div>
              <p className="font-cabinet font-normal text-xl">Regular (400): Cabinet Grotesk</p>
              <p className="font-cabinet font-normal">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-cabinet font-normal">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-cabinet font-normal">0123456789</p>
            </div>
            
            <div>
              <p className="font-cabinet font-light text-xl">Light (300): Cabinet Grotesk</p>
              <p className="font-cabinet font-light">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-cabinet font-light">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-cabinet font-light">0123456789</p>
            </div>
            
            <div>
              <p className="font-cabinet font-thin text-xl">Thin (100): Cabinet Grotesk</p>
              <p className="font-cabinet font-thin">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-cabinet font-thin">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-cabinet font-thin">0123456789</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Sample Text</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-cabinet font-bold text-xl mb-2">Heading Example</h3>
            <p className="font-cabinet font-normal">
              Cabinet Grotesk is a modern sans-serif typeface with unique character details that give it personality while maintaining excellent readability. It works great for both headlines and body text.
            </p>
          </div>
          
          <div>
            <h3 className="font-cabinet font-medium text-xl mb-2">UI Elements</h3>
            <div className="space-y-4">
              <button className="font-cabinet font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg">Primary Button</button>
              <button className="font-cabinet font-medium bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-lg ml-4">Secondary Button</button>
              <div className="font-cabinet font-bold bg-gray-100 text-gray-800 px-3 py-1 rounded-full inline-block ml-4">Badge</div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Typography Scale</h2>
        
        <div className="space-y-4">
          <h1 className="font-cabinet font-bold text-5xl">Heading 1 (3rem)</h1>
          <h2 className="font-cabinet font-bold text-4xl">Heading 2 (2.25rem)</h2>
          <h3 className="font-cabinet font-bold text-3xl">Heading 3 (1.875rem)</h3>
          <h4 className="font-cabinet font-bold text-2xl">Heading 4 (1.5rem)</h4>
          <h5 className="font-cabinet font-medium text-xl">Heading 5 (1.25rem)</h5>
          <p className="font-cabinet font-normal text-base">Paragraph text (1rem)</p>
          <p className="font-cabinet font-normal text-sm">Small text (0.875rem)</p>
          <p className="font-cabinet font-normal text-xs">Extra small text (0.75rem)</p>
        </div>
      </div>
    </div>
  );
};

export default FontDemo; 