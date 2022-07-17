import React from 'react';
import { Navigate } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Navigate to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary' ></i> Edit Profile
      </Navigate>
      <Navigate to='/add-experience' className='btn btn-light'>
        <i className='fab fa-black-tie text-primary' /> Add Experience
      </Navigate>
      <Navigate to='/add-education' className='btn btn-light'>
        <i className='fas fa-graduation-cap text-primary' /> Add Education
      </Navigate>
    </div>
  );
};

export default DashboardActions;