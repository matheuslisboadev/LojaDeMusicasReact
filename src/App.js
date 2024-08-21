// src/App.js
import React from 'react';
import Title from './components/Title';
import Description from './components/Description';
import Products from './components/Products';

const products = [
  {
    id: 1,
    title: 'OG',
    description: 'Álbum MC Igu',
    imageUrl: 'https://lh3.googleusercontent.com/IF5qlAH1JKTsc6anYa8Jns7mpk7-GzWG4c6QdjfWTOi5kQmwjAGps2mBBs6tUHyQNMlfL-HYrYcQbnH1=w544-h544-l90-rj'
  },
  {
    id: 2,
    title: 'Zzz, Vol. 2',
    description: 'Álbum MC Igu',
    imageUrl: 'https://lh3.googleusercontent.com/wcO9LG7M_8d5iYu7i0co5bL6gWfftsOWGu0DICIUt4i-3ML1h0IgoIuJFZeWdVCjsbEmo7iLmh_W3L0=w544-h544-l90-rj'
  },
  {
    id: 3,
    title: 'SEMRÉH',
    description: 'Álbum Ryu, the runner',
    imageUrl: 'https://lh3.googleusercontent.com/IoXLSw4LoTOkW9Lf7AM1fb2f0aKozlRWKhTSg6XNMv5caZWQ_ObKFqamfUNmBOGbvP5Kmidmm2mfZVIT=w544-h544-l90-rj'
  },
  {
    id: 4,
    title: 'Prata',
    description: 'Single Pumapjl',
    imageUrl: 'https://lh3.googleusercontent.com/vx_YoRL1-IqwB0OIY9MFhkBF2KMz1Hy1815BBGHWXaJO6nDWf7QoEuA0t10EpqA2xOOvkIPobH72chvH=w544-h544-l90-rj'
  },
  {
    id: 5,
    title: 'Autodomínio',
    description: 'Álbum Pumapjl',
    imageUrl: 'https://lh3.googleusercontent.com/G2v_d_GcQOtJwnkrNHbfzJcBa1zucYeDLJH1wWFlWJ49CHNVEVFPVtDtd074uPSRv2u5MArzd4BJfEzl=w544-h544-l90-rj'
  },
  {
    id: 6,
    title: 'EVDC (Deluxe)',
    description: 'Álbum Ryu, The Runner',
    imageUrl: 'https://lh3.googleusercontent.com/yNS6m1Sa5ZN7Fow1tl2wdxlPrS6fzZX-R9j_s7DW0wuTELAndaFwL55Da2bEpwdJaIj_xY6PbzH8taxK=w544-h544-l90-rj'
  },
  {
    id: 7,
    title: 'TMOIG',
    description: 'Álbum Mc IG',
    imageUrl: 'https://lh3.googleusercontent.com/zLkjDCt9GJmj6YuDs2FL-UlTduf69uFP0gtyVXr8xkFgyhFdW7s7GAbQTlCBaZZhb3K4ZFW6R7svmDIQ=w544-h544-l90-rj'
  },
  {
    id: 8,
    title: 'No Idols',
    description: 'Álbum The Alchemist',
    imageUrl: 'https://lh3.googleusercontent.com/wEPU0DjFE3dxbJmP6tDfyVhjZXgCdalc6kqqBZBcSkZR9-j1kM7MXYUxrwVi4fRIh09nov9ar8eIOz3k3g=w544-h544-l90-rj'
  },
  {
    id: 9,
    title: 'Flow Deus',
    description: 'Álbum MC Igu',
    imageUrl: 'https://lh3.googleusercontent.com/IltL5OKyj7wqkvbrcBRMMzZUl0mXRVzmjloKX3L8bK0Tunp0hjvSyFNrW0suA2Bj2IQjYrPjRhW4VWD6-w=w544-h544-l90-rj'
  },
  {
    id: 10,
    title: 'Gengar',
    description: 'Single Jé Santiago',
    imageUrl: 'https://lh3.googleusercontent.com/nACJHk5jb6ztMps5jTrTkD04oUkZlUQyjh760qfASr5oeUsOFS3LJTO8bASQTrEBCwFvaWYgTMKthGoM=w544-h544-l90-rj'
  },
  {
    id: 11,
    title: 'Dia de Patrão',
    description: 'Single MC Igu, Ryu',
    imageUrl: 'https://lh3.googleusercontent.com/seOA0Wv-oNu343HP7DpBCtyeh9BRw-YwQXaTt3PGBHggyYXItcSmZXzt_kXh-lU6o9-MBG3ZvSjrgDGW=w544-h544-l90-rj'
  },
  {
    id: 12,
    title: 'PINK FLOYD',
    description: 'Single Cookin Soul',
    imageUrl: 'https://lh3.googleusercontent.com/RfDvfse25717p1UM_oAXuQJWgyMWyqn4IBxyNqtQ6U9X2I4g_O-xnIzgMMASpJXBhbX1TR9TM8JTA7dA=w544-h544-l90-rj'
  },
  {
    id: 13,
    title: 'Colapso',
    description: 'Álbum Leozin',
    imageUrl: 'https://lh3.googleusercontent.com/Z6fkJWh2pQ9hvR7VyrxAwZPeMvpAQrSFYOjAh69uqCc50ZnZNPdU8Ppw_L0uff44sqc43_VXNhY_E7M-=w544-h544-l90-rj'
  },
  {
    id: 14,
    title: 'Call me',
    description: 'Single Yunk Vino',
    imageUrl: 'https://lh3.googleusercontent.com/j92QxwYsjW7ICm-8e3NKeArgFtIJWOmPO7yb7DMZyslxOH_7Bv7-nkPTpgGyNOJeQO_WrYf0HOJplxMv=w544-h544-l90-rj'
  },
  {
    id: 15,
    title: 'Embalo',
    description: 'Single Ryu, The Runner',
    imageUrl: 'https://lh3.googleusercontent.com/pp1t37ZyGJRXII9IWsWc4Ur8O-8oqhEk7sdqKJvHUNYBTovPPu4bxOZ4Dq0Y1qkR-t7BB0mAs2usSDA=w544-h544-l90-rj'
  },
  {
    id: 16,
    title: '237 Deluxe',
    description: 'Álbum Yunk Vino',
    imageUrl: 'https://lh3.googleusercontent.com/VBGrFywQ-vvApgSyuwn6Aos51O_7umOQctOpgbEUtGshVQ0nZHAex0zs_-z7MQ_QX8sUO9q9xdIWrAZU=w544-h544-l90-rj'
  },
  {
    id: 17,
    title: 'Jordan Boy’z',
    description: 'EP Dudu, Leozin',
    imageUrl: 'https://lh3.googleusercontent.com/ZawZhk2HM7t7TZImy2cWFGxU7pj8EPDNfTwfBU5YCe1sl-nQO2AOdyUALVSjnzD3N23O7vcw1AALBzI=w544-h544-l90-rj'
  },
  {
    id: 18,
    title: 'Whateva, Vol. 5',
    description: 'Álbum Cookin Soul',
    imageUrl: 'https://lh3.googleusercontent.com/QjMhtAo5cSyPyBzSzOXSVPPsgBVKaGW-I-8gRopC8wFWmSGw5n29yZ6QEVMhLTlFj49yR8Kfgt_0dgU=w544-h544-l90-rj'
  }
];

const App = () => (
  <div>
    <Title>Loja de músicas</Title>
    <Description>Todas músicas à venda</Description>
    <Products products={products} />
  </div>
);

export default App;