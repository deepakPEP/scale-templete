'use client';

import { SubBanner, SupplierForm, Offices } from '@/components';

export default function Contact() {

  return (
    <div className="min-h-screen">

      <SubBanner title="Contact Us" description="Describe the Important features, pricing and other relevant info" />


      <SupplierForm />

      <Offices />
    </div>
  );
}
