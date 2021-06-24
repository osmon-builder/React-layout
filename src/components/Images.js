import React from 'react'
import { RViewerTrigger, RViewer} from 'react-viewerjs';

let imgs = [
    require("../img/photo1.jpg"),
    require("../img/photo2.jpg"),
    require("../img/photo3.jpg"),
    require("../img/photo4.jpg"),
    require("../img/photo5.jpg"),
    require("../img/photo6.jpg"),
    require("../img/photo7.jpg"),
    require("../img/photo8.jpg"),
    require("../img/photo9.jpg"),
    require("../img/photo10.jpg"),
    require("../img/photo11.jpg"),
    require("../img/photo12.jpg"),
    require("../img/photo13.jpg"),
    require("../img/photo14.jpg"),
    require("../img/photo15.jpg"),
    require("../img/photo16.jpg"),
  ];

export const Images = () => {
    return (
        <div>
            <RViewer  imagesUrls= {imgs} >
        {imgs.map((imagen, index) =>{
          return(
            <RViewerTrigger className="card" index = {index} >
              <img src = {imagen.default} alt="Photos"/>
            </RViewerTrigger>
          )
        })}
      </RViewer>
        </div>
    )
}
