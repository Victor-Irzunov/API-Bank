import React, {memo} from 'react'
import video from '../video/video.mov'
import './Video.scss'

const Video = memo(() => {
    return (
        <a href='https://egorovagency.by' target='_blank' rel="noreferrer">
            <div className='video-block'>
                <video className='video-video' autoPlay loop muted >
                    <source src={video} type="video/mp4"/>
                </video>
                <span className='video-title'>Egorov Agency</span>
                <span className="video-text ">eCommerce &amp; WebAR</span>
            </div>
        </a>
    )
})

export default Video