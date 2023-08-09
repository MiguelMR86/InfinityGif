import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function GifCard({ gif }) {
  const title = gif.title.split("by")[0];

  return (
    <Card id={gif.id} className="w-[350px] sm:w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={gif.url}
          alt={gif.title}
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => window.open(gif.url, "_blank")}
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              className="w-[60px] rounded-full border-2 border-gray-500"
              src={gif.avatar}
              alt="user gif"
            />
            <Typography color="blue-gray" className="font-medium flex">
              {gif.author}

              {title.length > 0 ? <> &#45; {title}</> : null}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default GifCard;
