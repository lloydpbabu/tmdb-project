import Image from "next/image";
//Helpers
import { calcTime, convertMoney } from "../../helpers";
//components
import Thumb from "../Thumb/Thumb";
import Pill from "../Pill/Pill";
//Types
import { Crew } from "../../api/types";

type Props = {
  thumbUrl: string;
  backgroundImgUrl: string;
  title: string;
  year: string;
  summary: string;
  rating: number;
  directors: Crew[];
  time: number;
  budget: number;
  revenue: number;
};

const MovieInfo = ({
  thumbUrl,
  backgroundImgUrl,
  title,
  year,
  summary,
  rating,
  directors,
  time,
  budget,
  revenue,
}: Props) => {

  return (
    <div className="relative w-full h-auto p-4">
      <div className="relative h-full min-h-128 flex flex-col md:flex-row max-w-7xl p-4 m-auto z-10 rounded-xl bg-zinc-800 bg-opacity-90">
        <div className="relative w-full h-96 md:h-auto md:w-1/3">
          <Thumb imgUrl={thumbUrl} />
          <div className="absolute top-4 left-4 rounded-full bg-white w-10 h-10 flex justify-center items-center text-black text-sm font-bold">
            {rating}
          </div>
        </div>
        <div className="text-white px-0 py-4 md:py-0 text-center md:text-left md:px-8 w-full md:w-2/3 ">
          <h2 className="text-2xl md:text-4xl font-bold pb-4">
            {title} ({year})
          </h2>
          <h3 className="text-lg font-bold">Summary</h3>
          <p className="mb-8 text-sm md:text-lg">{summary}</p>
          <div>
            <div>
              <h3 className="text-lg font-bold">
                Directors{directors.length > 1 ? "s" : ""}
              </h3>
              <div>
                {directors.map((director) => (
                  <p key={director.credit_id}>{director.name}</p>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold">Movie data</h3>
              <Pill className="ml-0" text={`Running time: ${calcTime(time)}`} />
              <Pill text={`Budget: ${convertMoney(budget)}`} />
              <Pill text={`Revenue: ${convertMoney(revenue)}`} />
            </div>
            <div className="mt-8 flex flex-col space-y-4 space-x-0 md:flex-row md:space-y-0 md:space-x-4 items-center">
              <a href={thumbUrl} download={`${title}.jpg`}><button className="w-52 bg-amber-600 text-white p-3 rounded-full">
                Download Poster
              </button></a>
              <a href={backgroundImgUrl} download={`${title}.jpg`}><button className="w-52 bg-sky-600 text-white p-3 rounded-full">
                Download Backdrop
              </button></a>
            </div>
          </div>
        </div>
      </div>
      <Image
        priority
        placeholder="blur"
        blurDataURL="/placeholder.jpg"
        objectFit="cover"
        objectPosition="center"
        layout="fill"
        src={backgroundImgUrl}
        alt="thumb"
        unoptimized={true}
      />
    </div>
  );
};

export default MovieInfo;
