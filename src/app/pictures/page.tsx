"use client";

import Masonry from '../components/Masonry';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DotGrid from '../components/DotGrid';
import '../styles/ScrollBar.css';

const PicturesPage = () => {

  const items = [
    {
      id: "1",
      img: `/images/climb.JPG`,
      url: `/images/climb.JPG`,
      height: 400,
    },
    {
      id: "2",
      img: `/images/IMG_0603.jpg`,
      url: `/images/IMG_0603.jpg`,
      height: 250,
    },
    {
      id: "3",
      img: `/images/climber.JPG`,
      url: `/images/climber.JPG`,
      height: 600,
    },
    {
      id: "4",
      img: `/images/colors.JPG`,
      url: `/images/colors.JPG`,
      height: 400,
    },
    {
      id: "5",
      img: `/images/friends.JPG`,
      url: `/images/friends.JPG`,
      height: 250,
    },
    {
      id: "6",
      img: `/images/kirbeter.jpg`,
      url: `/images/kirbeter.jpg`,
      height: 300,
    },
    {
      id: "7",
      img: `/images/guardsman.JPG`,
      url: `/images/guardsman.JPG`,
      height: 300,
    },
    {
      id: "8",
      img: `/images/no-park.JPG`,
      url: `/images/no-park.JPG`,
      height: 300,
    },
    {
      id: "9",
      img: `/images/old.JPG`,
      url: `/images/old.JPG`,
      height: 300,
    },
    {
      id: "10",
      img: `/images/sitting.JPG`,
      url: `/images/sitting.JPG`,
      height: 300,
    },
    {
      id: "11",
      img: `/images/telephone.JPG`,
      url: `/images/telephone.JPG`,
      height: 300,
    },
    {
      id: "12",
      img: `/images/vansire.JPG`,
      url: `/images/vansire.JPG`,
      height: 300,
    },
    {
      id: "13",
      img: `/images/yuna.JPG`,
      url: `/images/yuna.JPG`,
      height: 300,
    },
    {
      id: "14",
      img: `/images/vansire.JPG`,
      url: `/images/vansire.JPG`,
      height: 300,
    },
    {
      id: "15",
      img: `/images/yuna.JPG`,
      url: `/images/yuna.JPG`,
      height: 300,
    },
    {
      id: "16",
      img: `/images/vansire.JPG`,
      url: `/images/vansire.JPG`,
      height: 300,
    },
    {
      id: "17",
      img: `/images/yuna.JPG`,
      url: `/images/yuna.JPG`,
      height: 300,
    },
    {
      id: "18",
      img: `/images/vansire.JPG`,
      url: `/images/vansire.JPG`,
      height: 300,
    },
    {
      id: "19",
      img: `/images/yuna.JPG`,
      url: `/images/yuna.JPG`,
      height: 300,
    },
    {
      id: "20",
      img: `/images/vansire.JPG`,
      url: `/images/vansire.JPG`,
      height: 300,
    },
    {
      id: "21",
      img: `/images/yuna.JPG`,
      url: `/images/yuna.JPG`,
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
            className="scrollable-container relative flex-1 overflow-y-auto w-full relative flex-1 overflow-y-auto w-full"
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
