import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BananaIcon, HeartIcon } from "@/constants/iconsData";
import { FaQuestionCircle } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CardContainer, CardBody } from "./ui/3d-card";

export const HowToPlay = () => {
  const router = useRouter();

  return (
    <div className="bg-white w-3/4 min-h-1/2 bg-opacity-10 backdrop-blur-lg shadow-xl p-8 rounded-2xl gap-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaQuestionCircle className="text-green-500 w-6 h-6" />
          <h1 className="text-xl font-bold">How To Play</h1>
        </div>
        <BananaIcon className="text-yellow-200 rounded-full w-10 h-10" />
      </div>

      <div className="flex items-center justify-center gap-4">
        {[
          {
            front: (
              <>
                <div className="bg-pink-200 p-4 rounded-lg h-80 shadow-xl flex items-center justify-center">
                  <BananaIcon className="text-pink-500 w-24 h-24" />
                </div>
                <div className="text-center mt-4">
                  <Badge className="mb-1" variant="secondary">
                    01
                  </Badge>
                  <p className="font-bold">Select a pink card.</p>
                  <p>It has images.</p>
                </div>
              </>
            )
          },
          {
            front: (
              <>
                <div className="bg-blue-200 p-4 rounded-lg h-80 shadow-xl flex items-center justify-center">
                  <HeartIcon className="text-blue-500 w-24 h-24" />
                </div>
                <div className="text-center mt-4">
                  <Badge className="mb-1" variant="secondary">
                    02
                  </Badge>
                  <p className="font-bold">Select a blue card.</p>
                  <p>It has alphabets.</p>
                </div>
              </>
            )
          },
          {
            front: (
              <>
                <div className="bg-white p-4 rounded-lg h-80 shadow-xl flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center w-96 h-96 rounded-full">
                    <Image
                      src="/images/htp3.png"
                      width={290}
                      height={290}
                      alt="htp3"
                    />
                    <Image
                      src="/images/match.png"
                      width={120}
                      height={120}
                      alt="match"
                    />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Badge className="mb-1" variant="secondary">
                    03
                  </Badge>
                  <p className="font-bold">If they&apos;re same</p>
                  <p>It&apos;s a match! Otherwise, retry :(</p>
                </div>
              </>
            )
          }
        ].map((content, index) => (
          <CardContainer
            key={index}
            className="flex flex-col items-center space-y-2 w-60 h-96 cursor-pointer"
          >
            <CardBody className="w-full h-full relative">
              <div className="absolute w-full h-full">{content.front}</div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <div
        className="flex justify-center"
        onClick={() => {
          router.push("/game");
        }}
      >
        <Button className="bg-yellow-300 hover:bg-yellow-400 text-white hover:text-gray-400 font-bold py-2 px-4 rounded-full shadow-lg">
          PLAY
        </Button>
      </div>
    </div>
  );
};
