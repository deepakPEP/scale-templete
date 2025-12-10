'use client';

import { SubBanner, SupplierForm, Offices } from '@/components';

export default function Contact() {

  return (
    <div className="min-h-screen">

      <SubBanner title="Contact Us" description="Home /" />


      <SupplierForm />

      <Offices />
    </div>
  );
}
