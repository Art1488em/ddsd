import React from 'react'


const CategoryWrap = () => {
  return (
    <>
    <h3 className={s.zaebal}>Casual</h3>
    <div className={s.categoryWrap}>
        
      <div className={s.filters}>
        <h3>Filters</h3>
        <ul>
          <li>Price</li>
          <li>Colors</li>
          <li>Size</li>
          <li>Dress Style</li>
        </ul>
      </div>
      
      
      <div className={s.products}>
        
        <div className={s.product}>
            
          <img src="/public/Frame 33.png" alt="" />
          <p>Gradient Graphic T-shirt</p>
          <p>$145</p>
        </div>
        
        <div className={s.product}>
          <img src="/public/Frame 34.png" alt="" />
          <p>Polo with Tipping Details</p>
          <p>$180</p>
        </div>

        <div className={s.product}>
          <img src="/public/Frame 38.png" alt="" />
          <p>Black Striped T-shirt</p>
          <p>$120</p>
        </div>
        

        
      </div>
    </div>
    </>
  )
}

export default CategoryWrap
  