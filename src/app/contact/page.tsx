'use client';

import { Company, SubBanner, SupplierForm } from '@/components';

export default function Contact() {

  return (
    <div className="min-h-screen">

      <SubBanner title="Contact Us" description="Describe the Important features, pricing and other relevant info" />

      <Company />

      <SupplierForm />
    </div>
  );
}
