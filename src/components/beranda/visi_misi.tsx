import { useState } from "react";

type Item = {
  title: string;
  content: string;
};

const data: Item[] = [
  //   {
  //     title: "Sambutan",
  //     content:
  //       "Pemerintah Provinsi Kalimantan Timur berkomitmen untuk menghadirkan pelayanan yang transparan dan inovatif...",
  //   },
  {
    title: "Visi Papua Tengah",
    content:
      "Sejarah panjang Kalimantan Timur dimulai dari..dddddddddddddddddddddddddddddddd.",
  },
  {
    title: "Misi Papua Tengah",
    content: "Bagian hubungan masyarakat pemerintah...",
  },
];

const VisiMisiSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="bg-gray-100 py-10 px-4 md:px-16">
      <div className="max-w-5xl mx-auto bg-gray-200 rounded-2xl pl-6 pt-6 md:pl-10 md:pt-6 flex flex-col md:flex-row gap-8 items-center">
        {/* LEFT */}
        <div className="flex-1 w-full">
          {data.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div key={index} className="border-b border-gray-300 py-4">
                <div
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <div className="w-8 h-8 flex items-center justify-center rounded-full border">
                    {isActive ? "-" : "+"}
                  </div>
                </div>

                {isActive && (
                  <div className="mt-4 text-gray-700 text-sm leading-relaxed">
                    {item.content}

                    {/* {index === 0 && (
                      <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-full">
                        Baca Selengkapnya
                      </button>
                    )} */}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {/* IMAGE */}
            <img
              src="/foto_gubernur.png"
              alt="Gubernur"
              className="object-contain"
            />

            {/* NAMA (OVERLAY) */}
            {/* <div className="absolute bottom-0 ml-4 flex gap-14">
              <div className="bg-white/90 backdrop-blur px-3 py-2 rounded-lg shadow text-center">
                <h4 className="font-semibold text-gray-900 text-xs md:text-sm">
                  MEKI NAWIPA, S.H
                </h4>
                <p className="text-gray-500 text-[10px] md:text-xs">
                  Gubernur Papua Tengah
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur px-3 py-2 rounded-lg shadow text-center">
                <h4 className="font-semibold text-gray-900 text-xs md:text-sm">
                  DEINAS GELEY, S.Sos., M.Si
                </h4>
                <p className="text-gray-500 text-[10px] md:text-xs">
                  Wakil Gubernur Papua Tengah
                </p>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="flex-1 flex flex-col items-center">
          <img
            src="/foto_gubernur.png"
            alt="Gubernur"
            className=" object-contain"
          />

          <div className="mt-6 flex gap-10 text-center">
            <div className="bg-white p-2 rounded-lg shadow">
              <h4 className="font-semibold text-gray-900 text-sm md:text-base ">
                MEKI NAWIPA, S.H
              </h4>
              <p className="text-gray-500 text-xs md:text-sm">
                Gubernur Papua Tengah
              </p>
            </div>

            <div className="bg-white p-2 rounded-lg shadow">
              <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                DEINAS GELEY, S.Sos., M.Si
              </h4>
              <p className="text-gray-500 text-xs md:text-sm">
                Wakil Gubernur Papua Tengah
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default VisiMisiSection;
