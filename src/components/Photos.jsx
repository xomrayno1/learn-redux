import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Photos({fetch}) {
    console.log("Photo render")
    const [photos, setPhotos] = useState({
        data : [],
        isLoading: false
    });

    useEffect(async  ()=>{
       setPhotos({...photos, isLoading: true});
       const response =  await  fetch();
       setPhotos({data: response.data, isLoading : false});
    },[fetch])

    return (
        <div>
            {
                photos.isLoading && 'Loading...'
            }
           {
               photos.data.map(photo => (
                   <div>
                       <h2>{photo.title}</h2>
                       <h3>{photo.url}</h3>
                   </div>
               ))
           }
        </div>
    );
}

export default React.memo(Photos);