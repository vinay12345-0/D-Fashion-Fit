import React from 'react';

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const titleMap: Record<string, string> = {
    'shipping': 'Shipping Policy',
    'returns': 'Returns & Refunds Policy',
    'privacy': 'Privacy Policy',
    'terms': 'Terms & Conditions',
  };

  const title = titleMap[slug] || 'Policy Document';

  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl text-left">
      <h1 className="text-3xl font-bold uppercase tracking-tighter mb-8">{title}</h1>
      <div className="prose prose-sm text-gray-600">
        <p>This is a placeholder for the {title}. In a production WordPress headless setup, this content would be fetched dynamically from WordPress Pages using the WP REST API or WPGraphQL.</p>
        <p>Example of content that would appear here:</p>
        <ul>
          <li>Detailed terms regarding the specific policy.</li>
          <li>Contact information for support.</li>
          <li>Legal disclaimers required by your jurisdiction.</li>
        </ul>
        <p>To edit this content, you would log into your WordPress admin dashboard, navigate to Pages, edit the "{title}" page, and save. The changes would immediately reflect here on the headless frontend.</p>
      </div>
    </div>
  );
}
