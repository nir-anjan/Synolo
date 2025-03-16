import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const SlideThing = () => {
  const products = [
    {
      id: 1,
      image: "https://th.bing.com/th/id/R.bfc3dd78b847ce1091e0e59e9561902d?rik=kE0cYaXuoD0ECg&riu=http%3a%2f%2frukmini1.flixcart.com%2fimage%2f300%2f300%2fposter%2fa%2ff%2fv%2fnaruto-square-art-artist-swaganusaar-pgftcd065973-medium-original-imaedp3btkbqhdx4.jpeg&ehk=XE2a2BIdZbnvTK%2bxIRwzim9bZLKnBi%2fibeX0zVaBdys%3d&risl=&pid=ImgRaw&r=0", // Replace with actual image URL
      title: "Naruto Usumaki",
      description:
        "Welcome to Discount Shoes! We offer a wide range of shoes at unbeatable prices...",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150/000000", // Replace with actual image URL
      title: "PREMIUM PERFUMES",
      description:
        "We offer a wide range of premium perfumes at unbeatable prices...",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150/CCCCCC", // Replace with actual image URL
      title: "PREMIUM PERFUMES",
      description:
        "We offer a wide range of premium perfumes at unbeatable prices...",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 mx-auto"
              />
              <h2 className="text-lg font-bold mt-4">{product.title}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideThing;
