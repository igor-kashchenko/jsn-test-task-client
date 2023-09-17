import React from 'react';
import { NavigateHomeBtn } from '@/components/NavigateHomeBtn';
import { AddHeroForm } from '@/components/AddHeroForm';

export const AddHeroPage: React.FC = () => {
  return (
    <>
      <NavigateHomeBtn />

      <AddHeroForm />
    </>
  )
}
