import React from "react";
import "./Project.css";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          Here are some of my projects on which
        </p>
        <p className="heading p__color">
          I had worked.
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src="https://images.pexels.com/photos/2652986/pexels-photo-2652986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Airlines Reservation website</h5>
                     <h6 className="project__text">Made with HTML,CSS<br/> and Javascript</h6>
                      <br/><br/>

                     <a href="https://ritika600.github.io/Airlines-reservation-website/iwt.html" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src="https://images.pexels.com/photos/2695392/pexels-photo-2695392.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Chess</h5>
                     <h6 className="project__text">React project using <br/>dnd library.</h6><br/><br/>
                     <a href="https://ritika600.github.io/Chess/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src="https://images.pexels.com/photos/3025562/pexels-photo-3025562.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Weather Report</h5>
                     <h6 className="project__text">Gives weather report according<br/> to city using React</h6><br/><br/>
                     <a href="https://ritika600.github.io/Weather-Report/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src="https://images.unsplash.com/photo-1618097426722-af771b3fa152?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG11c2ljfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Ritika's Studio</h5>
                     <h6 className="project__text">Music player by HTML,CSS  <br/>and Javascript only. </h6><br/><br/>
                     <a href="https://ritika600.github.io/Music-Player/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src="https://images.unsplash.com/photo-1514782831304-632d84503f6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG8lMjBkbyUyMGxpc3R8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Todo List</h5>
                     <h6 className="project__text">React app for keeping notes </h6><br/><br/>
                     <a href="https://ritika600.github.io/Todo-react-app/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src="https://images.unsplash.com/photo-1574154399733-34f1639fd88b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGlwb2R8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Ipod</h5>
                     <h6 className="project__text">Made with React for entertainment</h6><br/><br/>
                     <a href="https://ritika600.github.io/Ipod-React-Project/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
             
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <a href="https://github.com/ritika600"> <button className="view__more pointer btn">View more</button></a>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;
