import React from 'react'
import "./Footer.css"
import { BsFillSkipStartFill } from "react-icons/bs";
import { BsSkipEndFill } from "react-icons/bs";
import { BsPlayCircle } from "react-icons/bs";
import { BsShuffle } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { CgPlayList } from "react-icons/cg";
import { BsMusicPlayer } from "react-icons/bs";


import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';




function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>

                {/* <img
                    className="footer__albumLogo"
                    src={item?.album.images[0].url}
                    alt={item?.name}
                /> */}



            </div>
            <div className='footer__center'>
                <BsShuffle size={30} className='footer__green' />
                <BsFillSkipStartFill size={30} className='footer__icon' />
                <BsPlayCircle size={30} className='footer__icon' />
                <BsSkipEndFill size={30} className='footer__icon' />
                <BsArrowRepeat size={30} className='footer__green' />


            </div>
            <div className='footer__right'>

                <Grid container spacing={2}>
                    <Grid item>
                        <CgPlayList size={24} />

                    </Grid>
                    <Grid item>
                        <BsMusicPlayer size={24} />

                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>

            </div>

        </div>
    )
}

export default Footer