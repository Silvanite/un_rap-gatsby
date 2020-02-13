import React from 'react'

const ImageGrid = () => {

    return (
        <div class="flex flex-wrap w-full">
            <div class="p-2 w-1/2">
                <img class="w-full zoomable" src="../../assets/hannah-un_rap.jpg" alt="" />
            </div>
            <div class="p-2 w-1/2">
                <img class="w-full zoomable" src="../../assets/shop-window.jpg" alt="" />
            </div>
            <div class="p-2 w-1/2">
                <img class="w-full zoomable" src="../../assets/sunflower-jars-13.jpg" alt="" />
            </div>
            <div class="p-2 w-1/2 flex flex-col justify-between">
                <img class="w-full zoomable" src="../../assets/staff-refill.jpg" alt="" />
                <img class="w-full zoomable" src="../../assets/customer-jar.jpg" alt="" />
            </div>
        </div>
    )
}

export default ImageGrid
