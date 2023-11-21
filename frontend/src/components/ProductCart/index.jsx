import { useNavigate, Outlet } from "react-router-dom";

const ProductCart = ({ image, name, price, id }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative overflow-hidden min-h-screen">
        <div className="flex flex-col w-80 h-96 m-4 p-8 justify-center text-center items-center rounded-3xl backdrop-blur-xl bg-white/30  group">
          {/* <h5 className='text-red-500 font-bold undline flex-wrap'>{name}</h5> */}
          {/* <p className='product-price'>{price}</p> */}
          <img
            src={image}
            alt=""
            srcSet=""
            className="overflow-hidden  mix-blend-soft-light	rounded-3xl"
            sizes="(max-width: 479px) 41vw, (max-width: 767px) 44vw, (max-width: 991px) 21vw, 20vw"
          />
          <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0  rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button
              className="bg-black text-white py-2 px-5"
              onClick={() => {
                navigate(`/product/${id}`);
              }}
            >
              View Product
            </button>
          </div>

          <div className="m-5">
            <h5 className="font-bold flex-wrap text-slate-600 ">{name?.slice(0,10)}</h5>
            <p className="product-price text-blue-700 font-bold">{`${price}$`}</p>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default ProductCart;
