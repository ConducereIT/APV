import React, { useState } from 'react';
import RegulamentAPV2023 from "../assets/RegulamentAPV2023.pdf";
import pin from "../assets/pin.webp";
import flyingImg4 from "../assets/flyingImg4.png";

export default function CurseHome() {
  const [selectedCategory, setSelectedCategory] = useState('All for one');
  const [startTime, setStartTime] = useState('Ora de start: 11:10');
  const [distance, setDistance] = useState('Distanță: 400m');
  const [minimumDonation, setMinimumDonation] = useState('Donatie minima: 20 RON');
  const [mapSrc, setMapSrc] = useState("https://www.google.com/maps/embed?pb=!1m42!1m12!1m3!1d1051.7564164316468!2d26.050924936618955!3d44.43943916368305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m27!3e2!4m5!1s0x40b201c187a44aeb%3A0x776c5045f461c6b0!2sBucure%C5%9Fti%20Sectorul%206%2C%20Bucure%C8%99ti%20061344!3m2!1d44.4396542!2d26.052221199999998!4m3!3m2!1d44.439018999999995!2d26.0515156!4m3!3m2!1d44.4397981!2d26.051081699999997!4m3!3m2!1d44.4400312!2d26.0518355!4m3!3m2!1d44.4399332!2d26.0523311!4m3!3m2!1d44.4396554!2d26.052215!5e0!3m2!1sro!2sro!4v1679949014977!5m2!1sro!2sro");
  const [allForOneText1, setAllForOneText1] = useState("Cursa All For One este o tură populară, necompetitivă, perfectă pentru cei care vor să facă mișcare în natură pe o distanță accesibilă. Aceasta se adresează tuturor persoanelor, de orice vârstă sau gen, chiar și persoanelor cu dizabilități.");
  const [allForOneText2, setAllForOneText2] = useState("Tocmai în spiritul caritabil din care s-a și născut Aleargă Pentru Viață, participanții sunt încurajați să ofere drept donație pentru Florin cât consideră.");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    switch (category) {
      case 'All for one':
        setStartTime('Ora de start: 11:30');
        setDistance('DISTANȚĂ: 400M');
        setMinimumDonation(
          'Donatie minima: OPŢIONAL');
        setAllForOneText1("Cursa All For One este o tură populară, necompetitivă, perfectă pentru cei care vor să facă mișcare în natură pe o distanță accesibilă. Aceasta se adresează tuturor persoanelor, de orice vârstă sau gen, chiar și persoanelor cu dizabilități.");
        setAllForOneText2("Tocmai în spiritul caritabil din care s-a și născut Aleargă Pentru Viață, participanții sunt încurajați să ofere drept donație pentru Florin cât consideră.");  
        setMapSrc("https://www.google.com/maps/embed?pb=!1m42!1m12!1m3!1d1051.7564164316468!2d26.050924936618955!3d44.43943916368305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m27!3e2!4m5!1s0x40b201c187a44aeb%3A0x776c5045f461c6b0!2sBucure%C5%9Fti%20Sectorul%206%2C%20Bucure%C8%99ti%20061344!3m2!1d44.4396542!2d26.052221199999998!4m3!3m2!1d44.439018999999995!2d26.0515156!4m3!3m2!1d44.4397981!2d26.051081699999997!4m3!3m2!1d44.4400312!2d26.0518355!4m3!3m2!1d44.4399332!2d26.0523311!4m3!3m2!1d44.4396554!2d26.052215!5e0!3m2!1sro!2sro!4v1679949014977!5m2!1sro!2sro");
        break;
      case 'Copii':
        setStartTime('Ora de start: 11:10');
        setDistance('DISTANȚĂ: 400M');
        setMinimumDonation('Donatie minima: 20 RON');
        setAllForOneText1("");
        setAllForOneText2("");
        setMapSrc("https://www.google.com/maps/embed?pb=!1m42!1m12!1m3!1d1051.7564164316468!2d26.050924936618955!3d44.43943916368305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m27!3e2!4m5!1s0x40b201c187a44aeb%3A0x776c5045f461c6b0!2sBucure%C5%9Fti%20Sectorul%206%2C%20Bucure%C8%99ti%20061344!3m2!1d44.4396542!2d26.052221199999998!4m3!3m2!1d44.439018999999995!2d26.0515156!4m3!3m2!1d44.4397981!2d26.051081699999997!4m3!3m2!1d44.4400312!2d26.0518355!4m3!3m2!1d44.4399332!2d26.0523311!4m3!3m2!1d44.4396554!2d26.052215!5e0!3m2!1sro!2sro!4v1679949014977!5m2!1sro!2sro");
        break;
      case 'Fete':
        setStartTime('Ora de start: 11:30');
        setDistance('DISTANȚĂ: 400M');
        setMinimumDonation('Donatie minima: 20 RON');
        setMapSrc('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.878166115072!2d26.051764615851956!3d44.43970637910117!2m3!1f0!2f0!3f0!3m2!1d44.43998527916441!2d26.051764615851956!4f0!5f0.7820865974627469');
        break;
      case 'Băieți':
        setStartTime('Ora de start: 12:00');
        setDistance('DISTANȚĂ: 4KM (2 x 2KM)');
        setMinimumDonation('Donatie minima: 40 RON');
        setMapSrc('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.878166115072!2d26.051764615851956!3d44.43970637910117!2m3!1f0!2f0!3f0!3m2!1d44.43998527916441!2d26.051764615851956!4f0!5f0.7820865974627469');
        break;
        case 'FEMININ1':
            setStartTime('Ora de start: 12:00');
            setDistance('DISTANȚĂ: 4KM (2 x 2KM)');
            setMinimumDonation('Donatie minima: 40RON');
            setMapSrc('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.878166115072!2d26.051764615851956!3d44.43970637910117!2m3!1f0!2f0!3f0!3m2!1d44.43998527916441!2d26.051764615851956!4f0!5f0.7820865974627469');
            break;  
    case 'MASCULIN1':
        setStartTime('Ora de start: 13:00');
        setDistance('DISTANȚĂ: 6KM (3 x 2KM)');
        setMinimumDonation('Donatie minima: 40RON');
        setMapSrc('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.878166115072!2d26.051764615851956!3d44.43970637910117!2m3!1f0!2f0!3f0!3m2!1d44.43998527916441!2d26.051764615851956!4f0!5f0.7820865974627469');
        break;
    case 'FEMININ2':
        setStartTime('Ora de start: 14:10');
        setDistance('DISTANȚĂ: 2KM');
        setMinimumDonation('Donatie minima: 40RON');
        setMapSrc('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.878166115072!2d26.051764615851956!3d44.43970637910117!2m3!1f0!2f0!3f0!3m2!1d44.43998527916441!2d26.051764615851956!4f0!5f0.7820865974627469');
        break;
    case 'MASCULIN2':
        setStartTime('Ora de start: 15:00');
        setDistance('DISTANȚĂ: 4KM (2 x 2KM)');
        setMinimumDonation('Donatie minima: 40RON');
        setMapSrc('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.878166115072!2d26.051764615851956!3d44.43970637910117!2m3!1f0!2f0!3f0!3m2!1d44.43998527916441!2d26.051764615851956!4f0!5f0.7820865974627469');
        break;                
      default:
        break;
    }
  };

  return (
    <div className='w-full px-[var(--bs-gutter-x,.75rem)]   bg-customBackground  '>
        {/* <img src={flyingImg4} className='float-right top-0 right-0 h-full md:w-1/2 lg:w-1/3 xl:w-1/4 z-0' alt='Imagine de fundal' ></img>  */}
    <div className='flex justify-center '>    
    <div className="container  md:pt-32  lg:px-32 mx-auto  " >
        <h1 className="lg:text-52 text-36 font-bold text-center mb-8 sm:mb-16 text-black">CURSE</h1>
        <div className="md:flex">
            
                <div className="md:w-1/4 mb-4 md:mb-0 md:mr-4 overflow-x-auto">
                    <div className="flex sm:flex-row md:flex-col">
                        <button
                        className="bg-[#006470] hover:bg-teal-500  rounded-md md:text-right sm:text-center lg:px-35 lg:py-33 md:px-20 md:py-20 px-20 py-8 "
                        onClick={() => handleCategoryChange('All for one')}
                        >
                            <span className="font-bold lg:text-24 md:text-20 sm:text-20 text-white  whitespace-nowrap">ALL FOR ONE</span>
                            <br/>
                            <span className="lg:text-16 md:text-14 text-white ">TOATE VÂRSTELE</span>
                        </button>
                        <button
                        className="bg-[#006470] hover:bg-teal-500  rounded-md md:text-right sm:text-center lg:px-35 lg:py-33 md:px-20 md:py-20 px-20 py-8"
                        onClick={() => handleCategoryChange('Copii')}
                        >
                        <span className="font-bold lg:text-24 md:text-20 sm:text-20 text-white  whitespace-nowrap">COPII</span>
                            <br/>
                        <span className="lg:text-16 md:text-14 text-white whitespace-nowrap">&lt; 10 ANI</span>
                        </button>
                        <button
                        className="bg-[#006470] hover:bg-teal-500  rounded-md md:text-right sm:text-center lg:px-35 lg:py-33 md:px-20 md:py-20 px-20 py-8"
                        onClick={() => handleCategoryChange('Fete')}
                        >
                        <span className="font-bold lg:text-24 md:text-20 sm:text-20 text-white  whitespace-nowrap">FETE</span>
                            <br/>
                        <span className="lg:text-16 md:text-14 text-white whitespace-nowrap">10-16 ANI</span>
                        </button>
                        <button
                        className="bg-[#006470] hover:bg-teal-500  rounded-md md:text-right sm:text-center lg:px-35 lg:py-33 md:px-20 md:py-20 px-20 py-8"
                        onClick={() => handleCategoryChange('Băieți')}
                        >
                        <span className="font-bold lg:text-24 md:text-20 sm:text-20 text-white  whitespace-nowrap">BAIETI</span>
                            <br/>
                        <span className="lg:text-16 md:text-14 text-white whitespace-nowrap">10-16 ANI</span>
                        </button>
                        <button
                        className="bg-[#006470] hover:bg-teal-500  rounded-md md:text-right sm:text-center lg:px-35 lg:py-33 md:px-20 md:py-20 px-20 py-8"
                        onClick={() => handleCategoryChange('FEMININ1')}
                        >
                        <span className="font-bold lg:text-24 md:text-20 sm:text-20 text-white  whitespace-nowrap">FEMININ</span>
                            <br/>
                        <span className="lg:text-16 md:text-14 text-white whitespace-nowrap">17-35 ANI</span>
                        </button>
                        <button
                        className="bg-[#006470] hover:bg-teal-500  rounded-md md:text-right sm:text-center lg:px-35 lg:py-33 md:px-20 md:py-20 px-20 py-8"
                        onClick={() => handleCategoryChange('MASCULIN1')}
                        >
                        <span className="font-bold lg:text-24 md:text-20 sm:text-20 text-white  whitespace-nowrap">MASCULIN</span>
                            <br/>
                        <span className="lg:text-16 md:text-14 text-white whitespace-nowrap">17-35 ANI</span>
                        </button>
                        <button
                        className="bg-[#006470] hover:bg-teal-500  rounded-md md:text-right sm:text-center lg:px-35 lg:py-33 md:px-20 md:py-20 px-20 py-8"
                        onClick={() => handleCategoryChange('FEMININ2')}
                        >
                        <span className="font-bold lg:text-24 md:text-20 sm:text-20 text-white  whitespace-nowrap">FEMININ</span>
                            <br/>
                        <span className="lg:text-16 md:text-14 text-white whitespace-nowrap">35+ ANI</span>
                        </button>
                        <button
                        className="bg-[#006470] hover:bg-teal-500  rounded-md md:text-right sm:text-center lg:px-35 lg:py-33 md:px-20 md:py-20 px-20 py-8"
                        onClick={() => handleCategoryChange('MASCULIN2')}
                        >
                        <span className="font-bold lg:text-24 md:text-20 sm:text-20 text-white  whitespace-nowrap">MASCULIN</span>
                            <br/>
                        <span className="lg:text-16 md:text-14 text-white whitespace-nowrap">35+ ANI</span>
                        </button>
                    </div>
                </div>
                <div className="md:w-3/4 border-4 border-white pr-8 pb-15">
                    <div className="text-left">
                        {/* <h2 className="text-3xl font-bold">{selectedCategory}</h2> */}
                        <p className="event-info md:text-28 text-2xl font-bold text-black">{startTime}</p>
                        <p className="event-info md:text-28 text-2xl font-bold text-black">{distance}</p>
                        <p className="event-info md:text-28 text-2xl font-bold text-black">{minimumDonation}</p>
                        <p className='text-16 md:text-20 mt-4'>{allForOneText1}</p>
                        <p className='text-16 md:text-20 mt-4'>{allForOneText2}</p>
                        <p className="text-16 md:text-20 mt-4 ">
                        Vezi mai jos harta traseului!
                        </p>
                        <p className="text-16 md:text-20 mt-4 ">
                        Pentru mai multe informații consultați <a href={RegulamentAPV2023} className='font-bold text-black target="_blank" rel="noopener noreferrer"'>regulamentul</a>
                        </p>
                        <div className='flex items-center'>
                             <img src={pin} className='w-5 h-5 mt-4 mx-4' alt='Pin'/> 
                            <span className="font-bold text-20  mt-4 text-black">Rectoratul UPB</span>
                        </div>
                        
                    </div>
                
            
                    <div className="flex justify-center  mt-4">
                        <iframe
                        title="Harta traseului"
                        className="mt-8 w-full h-[350px] md:h-[450px] lg:h-[650px] "
                        src={mapSrc}
                        allowFullScreen={true}
                        loading="lazy"
                        //style={{ width: '100%', height: 'calc(100vh - 600px)' }}
                        ></iframe>
                    </div>
                </div>
        </div>
    </div>
    </div>
    </div>
  );
}