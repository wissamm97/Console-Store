import { Carousel } from "react-carousel-minimal";

function Slider() {
  const data = [
    {
      image:
        "https://now.estarland.com/images/products/91/52091/PS4-PlayStation-4-500GB-Batman-Arkham-Knight-LE-System-Trade-In-large-image.jpg",
    },
    {
      image: "https://now.estarland.com/images/products/51/51051/127100.jpg",
    },
    {
      image: "https://now.estarland.com/images/products/28/48728/164521.jpg",
    },
    {
      image: "https://now.estarland.com/images/products/58/54358/164340.jpg",
    },
    {
      image: "https://now.estarland.com/images/products/89/53789/162207.jpg",
    },
    {
      image: "https://now.estarland.com/images/products/91/45091/127279.jpg",
    },
    {
      image:
        "https://now.estarland.com/images/products/24/58824/XB1-Microsoft-Xbox-One-1TB-CoD-Advanced-Warfare-LE-System-Refurbished-large-image.jpg",
    },
    {
      image:
        "https://now.estarland.com/images/products/67/58767/XB1-Microsoft-Xbox-One-1TB-Forza-Motorsport-6-LE-Refurbished-System-Grade-A-large-image.jpg",
    },
    {
      image: "https://now.estarland.com/images/products/14/53414/155329.jpg",
    },
    {
      image:
        "https://now.estarland.com/images/products/24/61524/XB1-Assassins-Creed-Valhalla-rating-update-large-image.jpg",
    },
    {
      image:
        "https://now.estarland.com/images/products/70/69270/Xbox-Series-X-A-Plague-Tale-Requiem-large-image.jpg",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 0px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            showNavBtn={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "95%",
              maxHeight: "500px",
              margin: "20px auto",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Slider;
