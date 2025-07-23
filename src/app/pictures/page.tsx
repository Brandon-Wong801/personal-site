"use client";

import Masonry from '../components/Masonry';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DotGrid from '../components/DotGrid';
import { basePath } from '../../constants';

const PicturesPage = () => {

  const items = [
    {
      id: "1",
      img: `${basePath}/images/climb.JPG`,
      url: `${basePath}/images/climb.JPG`,
      height: 400,
    },
    {
      id: "2",
      img: `${basePath}/images/IMG_0603.jpg`,
      url: `${basePath}/images/IMG_0603.jpg`,
      height: 250,
    },
    {
      id: "3",
      img: `${basePath}/images/climber.JPG`,
      url: `${basePath}/images/climber.JPG`,
      height: 600,
    },
    {
      id: "4",
      img: `${basePath}/images/colors.JPG`,
      url: `${basePath}/images/colors.JPG`,
      height: 400,
    },
    {
      id: "5",
      img: `${basePath}/images/friends.JPG`,
      url: `${basePath}/images/friends.JPG`,
      height: 250,
    },
    {
      id: "6",
      img: `${basePath}/images/kirbeter.jpg`,
      url: `${basePath}/images/kirbeter.jpg`,
      height: 300,
    },
    {
      id: "7",
      img: `${basePath}/images/guardsman.JPG`,
      url: `${basePath}/images/guardsman.JPG`,
      height: 300,
    },
    {
      id: "8",
      img: `${basePath}/images/no-park.JPG`,
      url: `${basePath}/images/no-park.JPG`,
      height: 300,
    },
    {
      id: "9",
      img: `${basePath}/images/old.JPG`,
      url: `${basePath}/images/old.JPG`,
      height: 300,
    },
    {
      id: "10",
      img: `${basePath}/images/sitting.JPG`,
      url: `${basePath}/images/sitting.JPG`,
      height: 300,
    },
    {
      id: "11",
      img: `${basePath}/images/telephone.JPG`,
      url: `${basePath}/images/telephone.JPG`,
      height: 300,
    },
    {
      id: "12",
      img: `${basePath}/images/vansire.JPG`,
      url: `${basePath}/images/vansire.JPG`,
      height: 300,
    },
    {
      id: "13",
      img: `${basePath}/images/yuna.JPG`,
      url: `${basePath}/images/yuna.JPG`,
      height: 300,
    },
    {
      id: "14",
      img: `${basePath}/images/vansire.JPG`,
      url: `${basePath}/images/vansire.JPG`,
      height: 300,
    },
    {
      id: "15",
      img: `${basePath}/images/yuna.JPG`,
      url: `${basePath}/images/yuna.JPG`,
      height: 300,
    },
    {
      id: "16",
      img: `${basePath}/images/vansire.JPG`,
      url: `${basePath}/images/vansire.JPG`,
      height: 300,
    },
    {
      id: "17",
      img: `${basePath}/images/yuna.JPG`,
      url: `${basePath}/images/yuna.JPG`,
      height: 300,
    },
    {
      id: "18",
      img: `${basePath}/images/vansire.JPG`,
      url: `${basePath}/images/vansire.JPG`,
      height: 300,
    },
    {
      id: "19",
      img: `${basePath}/images/yuna.JPG`,
      url: `${basePath}/images/yuna.JPG`,
      height: 300,
    },
    {
      id: "20",
      img: `${basePath}/images/vansire.JPG`,
      url: `${basePath}/images/vansire.JPG`,
      height: 300,
    },
    {
      id: "21",
      img: `${basePath}/images/yuna.JPG`,
      url: `${basePath}/images/yuna.JPG`,
      height: 300,
    },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor="#202020"
          activeColor="#7c98c9"
          proximity={70}
          shockRadius={100}
          shockStrength={3}
          resistance={750}
          returnDuration={1.5}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="grid grid-cols-[20%_60%_20%] min-h-screen">
        {/* Left column */}
        <div></div>

        {/* Center column */}
        <div className="relative flex flex-col items-center z-10">
          <Navbar />
          <div
            className="relative flex-1 overflow-y-auto w-full"
            style={{
              maxHeight: 'calc(100vh - 100px)', // Adjust height to fit within the viewport
            }}
          >
            <Masonry
              items={items}
              ease="power3.out"
              duration={1}
              stagger={0.25}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          </div>
          <Footer className="relative z-20" />
        </div>

        {/* Right column */}
        <div></div>
      </div>
    </div>
  );
};

export default PicturesPage;
