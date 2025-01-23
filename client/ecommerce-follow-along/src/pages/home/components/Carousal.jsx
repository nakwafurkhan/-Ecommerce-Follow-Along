import { useState } from "react"
import '../styles/Carousal.css';

function Carousal() {
    const [index,setindex] = useState(0)

    const images = [
        "https://d32baadbbpueqt.cloudfront.net/Homepage/75ec7af2-2b60-4c0a-9d56-c9e12d328420.jpg",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/1a5a5848-f287-4da7-b122-23ccb9324c83.jpg",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/2938eed1-8d16-4dec-bab2-f6e484adb659.gif",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/0a0d2b46-e424-4f4c-baf3-da2d2fc14f88.jpg",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/2d934fad-8c2a-4f7d-85fc-ea1ed8f23673.jpg",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/87591a7c-d8f8-499c-9562-c89000ef7e4a.jpg",
        "https://d32baadbbpueqt.cloudfront.net/Homepage/1fa29c9d-b7b6-4aa9-ac54-a2195c10fc63.jpg",
      ];

    const prev = ()=>{
        setindex((previndex)=> (previndex == 0? images.length-1 : previndex-1))
    }
    
    const next = ()=>{
        setindex((previndex)=> (previndex == images.length-1? 0 : previndex+1))
    }

    return(
        <div className="custom-carousel">
            <div className="carousel-inner">
                <img className="carousel-item" src={images[index]} alt={`slide ${index+1}`} />
            </div>
            <button className="carousel-control prev" onClick={prev}>
                &#10094;
            </button>
            <button className="carousel-control next" onClick={next}>
                &#10095;
            </button>
        </div>  
    )
}

export default Carousal