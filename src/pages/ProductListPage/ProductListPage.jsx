import React from 'react'
import { Navigation } from '../../Components/Navigation/naviagtion'

function ProductListPage() {
  return (
    <div>
        <Navigation/>
        <div className='flex'>
          <div className='w-[300px] border rounded-lg  m-[20px]'>
            <div className='pl-[20px] pr-[20px] pt-[20px] pb-[5px]'>
              {/* filters */}
              <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold text-gray-500'>Filter</h1>
                <i class="fa-solid fa-filter text-2xl text-gray-500 font-semibold "></i>
              </div>
            </div>
            <hr/>
            <div className='pl-[20px] pr-[20px] pt-[10px] pb-[20px]'>
              <div>
                <p className='text-black font-bold mt-[10px]'>CATEGORIES</p>
              </div>
            </div>
          </div>


          <div>
              {/* product list */}
              <h2>Product List</h2>
          </div>
        </div>
    </div>
  )
}

export default ProductListPage