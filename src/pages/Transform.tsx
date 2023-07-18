import DemoBox from '../components/DemoBox';
import Slider from '../components/Slider';
import { CssProperty } from '../enums';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Transform = () => {
   const [translateX, setTranslateX] = useState<string>('0');
   const [translateY, setTranslateY] = useState<string>('0');
   const [scaleX, setScaleX] = useState<string>('1');
   const [scaleY, setScaleY] = useState<string>('1');
   const [rotate, setRotate] = useState<string>('0');
   const [skewX, setSkewX] = useState<string>('0');
   const [skewY, setSkewY] = useState<string>('0');
   const [cssValue, setCssValue] = useState<string>('');

   const handleReset = () => {
      setTranslateX('0');
      setTranslateY('0');
      setScaleX('1');
      setScaleY('1');
      setRotate('0');
      setSkewX('0');
      setSkewY('0');
   };

   useEffect(() => {
      setCssValue(
         `translateX(${translateX}px);translateY(${translateY}px);scaleX(${scaleX});scaleY(${scaleY});rotate(${rotate}deg);skewX(${skewX}deg);skewY(${skewY}deg)`
      );
   }, [translateX, translateY, scaleX, scaleY, rotate, skewX, skewY]);

   return (
      <motion.main
         initial={{ opacity: 0.5, x: -500 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
         }}
      >
         <h2>transform</h2>
         <section className="container col-2">
            <form>
               <Slider
                  minSlider={-100}
                  maxSlider={100}
                  name="translate-x"
                  sliderValue={translateX}
                  setSliderValue={setTranslateX}
                  unit="px"
               />
               <Slider
                  minSlider={-100}
                  maxSlider={100}
                  name="translate-y"
                  sliderValue={translateY}
                  setSliderValue={setTranslateY}
                  unit="px"
               />
               <Slider
                  minSlider={0}
                  maxSlider={2}
                  name="scale-x"
                  sliderValue={scaleX}
                  setSliderValue={setScaleX}
                  step="0.01"
               />
               <Slider
                  minSlider={0}
                  maxSlider={2}
                  name="scale-y"
                  sliderValue={scaleY}
                  setSliderValue={setScaleY}
                  step="0.01"
               />
               <Slider
                  minSlider={0}
                  maxSlider={360}
                  name="rotate"
                  sliderValue={rotate}
                  setSliderValue={setRotate}
                  unit="deg"
               />
               <Slider
                  minSlider={0}
                  maxSlider={180}
                  name="skew-x"
                  sliderValue={skewX}
                  setSliderValue={setSkewX}
                  unit="deg"
               />
               <Slider
                  minSlider={0}
                  maxSlider={180}
                  name="skew-y"
                  sliderValue={skewY}
                  setSliderValue={setSkewY}
                  unit="deg"
               />
               <button
                  type="reset"
                  onClick={handleReset}
                  onMouseDown={(e) => {
                     e.currentTarget.classList.add('active');
                  }}
                  onMouseUp={(e) => {
                     e.currentTarget.classList.remove('active');
                     console.log('up');
                  }}
               >
                  Reset
               </button>
            </form>
            <DemoBox
               cssProperty={CssProperty.transform}
               cssValue={cssValue}
               text="This is the preview text."
            />
         </section>
      </motion.main>
   );
};

export default Transform;
