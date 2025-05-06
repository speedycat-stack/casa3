import React, { useState } from 'react';
import './Map.css'; 
import Nabeul from '../../assets/nabeul.png'; 
import manouba from '../../assets/manouba.png'; 
import Sousse from '../../assets/sousse.png'; 
import Sfax from '../../assets/sfax.png';
import Gabes from '../../assets/gabes.png'; 
import Beja from '../../assets/beja.png'; 
import Bizerte from '../../assets/bizerte.png'; 
import Gafsa from '../../assets/gafsa.png'; 
import Jendouba from '../../assets/jendouba.png'; 
import Kairouan from '../../assets/kairouan.png'; 
import Kasserine from '../../assets/kasserine.png'; 
import Kebili from '../../assets/kebili.png'; 
import Kef from '../../assets/kef.png'; 
import Mahdia from '../../assets/mahdia.png';
import Medenine from '../../assets/medenine.png'; 
import Monastir from '../../assets/monastir.png'; 
import SidiBouzid from '../../assets/sidibouzid.png';
import Siliana from '../../assets/siliana.png'; 
import Tataouine from '../../assets/tataouine.png'; 
import Tozeur from '../../assets/tozeur.png'; 
import Zaghouan from '../../assets/zaghouan.png';
import benArous from '../../assets/benArous.png';
import tunis from '../../assets/tunis.png';
import ariana from '../../assets/ariana.png';

const regions = [
  { name: 'Jendouba', img: Jendouba, style: { left: '15.44%', top: '4.16%' } },
  { name: 'Kef', img: Kef, style: { left: '16%', top: '14.4%' } },
  { name: 'Kasserine', img: Kasserine, style: { left: '16%', top: '26.5%' } },
  { name: 'Gafsa', img: Gafsa, style: { left: '14.70%', top: '44.5%' } },
  { name: 'Tozeur', img: Tozeur, style: { left: '11%', top: '48.8%' } },
  { name: 'Kebili', img: Kebili, style: { left: '12.6%', top: '54.5%' } },
  { name: 'Tataouine', img: Tataouine, style: { left: '16.9%', top: '71%' } },
  { name: 'Medenine', img: Medenine, style: { left: '26.3%', top: '60%' } },
  { name: 'Gabès', img: Gabes, style: { left: '23.2%', top: '52.7%' } },
  { name: 'Sfax', img: Sfax, style: { left: '26.3%', top: '35.99%' } },
  { name: 'Mahdia', img: Mahdia, style: { left: '29.8%', top: '30.1%' } },
  { name: 'Monastir', img: Monastir, style: { left: '32%', top: '26.3%' } },
  { name: 'Sousse', img: Sousse, style: { left: '29.7%', top: '15.7%' } },
  { name: 'Zaghouan', img: Zaghouan, style: { left: '25.68%', top: '10.8%' } },
  { name: 'Kairouan', img: Kairouan, style: { left: '23.5%', top: '19.91%' } },
  { name: 'Siliana', img: Siliana, style: { left: '20.83%', top: '14.5%' } },
  { name: 'Sidi Bouzid', img: SidiBouzid, style: { left: '20%', top: '31.5%' } },
  { name: 'Béja', img: Beja, style: { left: '20.7%', top: '2.2%' } },
  { name: 'Bizerte', img: Bizerte, style: { left: '22.1%', top: '-0.99%' } },
  { name: 'manouba', img: manouba, style: { left: '25.4%', top: '5.6%' } },
  { name: 'Nabeul', img: Nabeul, style: { left: '30.88%', top: '3.5%' } },
  { name: 'benArous', img: benArous, style: { left: '28.3%', top: '8.5%' } },
  { name: 'tunis', img: tunis, style: { left: '28.4%', top: '6.1%' } },
  { name: 'ariana', img: ariana, style: { left: '28.1%', top: '2.8%' } },
];

const StateCard = () => {
  return (
    <div className="state-card">
      <div className="state-item">
        <div className="circle red">
          75%
        </div>
        <span className="state-label red">Dangerous State</span>
      </div>
      <div className="state-item">
        <div className="circle blue">
          75%
        </div>
        <span className="state-label blue">Average State</span>
      </div>
      <div className="state-item">
        <div className="circle indigo">
          10%
        </div>
        <span className="state-label indigo">Stable State</span>
      </div>
    </div>
  );
};

const Map = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  return (
    <div className="map-container">
 
      <div className="state-card-container">
        <StateCard />
      </div>

      {regions.map((region, index) => (
        <img
          key={index}
          src={region.img}
          alt={region.name}
          className={`map-region ${selectedRegion === region.name ? 'selected' : ''}`}
          style={region.style}
          onClick={() => handleRegionClick(region.name)}
        />
      ))}
    </div>
  );
};

export default Map;
