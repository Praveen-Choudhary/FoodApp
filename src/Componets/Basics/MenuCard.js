import React from 'react';

function MenuCard({menuData}) {
    // console.log(menuData)
    const style = {color : "crimson"}
  return <div>
      <section className="main-card--cointainer">
          {menuData.map((currentElement) =>{

            const {id, category, name, description, image} = currentElement;

              return(
                  <div>
                    
                    <div className="card-container" key = {id}>
                        <div className="card">
                            <div className="card-body">
                                <span className="card-number card-circle subtle">{id}</span>
                                <span className="card-author subtle" style={style}>{category}</span>
                                <h2 className="card-title">{name}</h2>
                                <span className="card-description subtle">{description}</span>
                                <div className="card-read">Read</div>
                            </div>
                            <img src={image} alt="Image" className='card-media' /><br />
                            
                            <div className="card-tag subtle">Order Now</div>
                        </div>
                    </div>
                  </div>
              )
          })}
      </section>
  </div>;
}

export default MenuCard;
