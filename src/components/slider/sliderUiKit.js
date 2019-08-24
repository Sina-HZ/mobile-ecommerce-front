import React from 'react';
import '../../assets/styles/App.css';

export default function SlidShow(){
    return(

        <div>

            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" data-uk-slideshow="animation: pull; autoplay: true">

                <ul className="uk-slideshow-items">
                    <li>
                    <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                        <img src="https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80" alt="" data-uk-cover />
                    </div>
                    <div className="uk-overlay Gradient-overly uk-position-bottom uk-text-center" style={{height : '11rem'}} dir="rtl">
                            <h3 id="slider-header" className="uk-margin-remove uk-animation-scale-up uk-transform-origin-bottom-righ">آیفون x با قیمت جدید</h3>
                            <p id="slider-text" className="uk-margin-remove uk-animation-scale-up uk-transform-origin-bottom-righ">قیمت های جدید آیفون در آخرین همایش شرکت همه را متعجب کرد</p>
                        </div>
                    </li>
                    <li>
                    <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                        <img src="https://images.unsplash.com/photo-1544509417-8cf23b2233e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" data-uk-cover />
                    </div>
                    <div className="uk-overlay Gradient-overly uk-position-bottom uk-text-center" style={{height : '11rem'}}>
                            <h3 id="slider-header" className="uk-margin-remove uk-animation-scale-up uk-transform-origin-bottom-righ">Overlay Bottom</h3>
                            <p id="slider-text" className="uk-margin-remove uk-animation-scale-up uk-transform-origin-bottom-righ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </li>
                    <li>
                    <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                        <img src="https://images.unsplash.com/photo-1558562805-4bf1e2a724eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" data-uk-cover />
                    </div>
                    <div className="uk-overlay Gradient-overly uk-position-bottom uk-text-center" style={{height : '11rem'}}>
                            <h3 id="slider-header" className="uk-margin-remove uk-animation-scale-up uk-transform-origin-bottom-righ">Overlay Bottom</h3>
                            <p id="slider-text" className="uk-margin-remove uk-animation-scale-up uk-transform-origin-bottom-righ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </li>
                </ul>

                <button className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></button>
                <button className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></button>

            </div>

        </div> 
        
    

    )
}