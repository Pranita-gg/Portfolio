import React from 'react';


   
        function CustomButton({text,color,onClick}){

         return (
            <>
        <button className="p-4 text-white rounded-md " onClick={onClick}
        style={{backgroundColor:color}}>
            {text}
        </button>
       </>
    );
}


export default CustomButton;
