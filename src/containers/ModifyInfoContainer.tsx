import React from 'react';
import NameSection from '../views/ModifyInfo/NameSection';
import ImageField from '../views/ModifyInfo/ImageField';
import MainContentSection from '../views/Main/MainContentSection';

const ModifyInfoContainer: React.FC = () => {
  return (
    <>
      <ImageField />
      <NameSection />
      <h2>helloooo</h2>
    </>
  );
};

export default ModifyInfoContainer;
