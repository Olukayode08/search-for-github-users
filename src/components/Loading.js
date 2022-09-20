import React from 'react'
 import { Oval } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='loading-img'>
      <Oval
        height={80}
        width={80}
        color='#000'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor='#000'
        strokeWidth={2}
        strokeWidthSecondary={2}
        
      />
    </div>
  );
}

export default Loading
