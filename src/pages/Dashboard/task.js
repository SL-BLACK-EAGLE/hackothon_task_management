import React from "react";

import {Card, CardHeader, CardBody, Avatar} from "@nextui-org/react";

const CardDiv =() => {

  return (
    <Card className="w-[350px] h-[150px] mt-[1rem]">
      <CardHeader className="justify-start">
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
       
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
        </p>
        <span className="pt-2">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      
    </Card>
  );
}

export default CardDiv;