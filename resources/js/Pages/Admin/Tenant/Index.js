import React from 'react';
import { usePage } from '@inertiajs/inertia-react';

const Index = () => {
  const { tenants } = usePage().props;
  console.log('tenants', tenants);

  return (
    <div>
      Tenants
    </div>
  );
};


export default Index;
