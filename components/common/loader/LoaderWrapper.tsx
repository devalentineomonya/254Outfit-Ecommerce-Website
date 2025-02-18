import React from 'react';
import Loader from './Loader';

interface LoaderWrapperProps {
  isLoading: boolean;
  height?:string;
  children: React.ReactNode;
}

const LoaderWrapper = ({ isLoading, children, height }: LoaderWrapperProps) => {
  return (
    <div className={`relative ${height} w-full isolate`}>
      {isLoading && <Loader />}
      <figure className={`h-full w-full group absolute ${isLoading ? 'opacity-50  pointer-events-none' : ''}`}>
        {children}
      </figure>
    </div>
  );
};

export default LoaderWrapper;
