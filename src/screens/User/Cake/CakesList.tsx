import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const DUMMY_CAKES = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Cake 1",
    description: "Cake 1 description",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Cake 2",
    description: "Cake 2 description",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    title: "Cake 3",
    description: "Cake 3 description",
  },
];

export const Component = function CakesList(): JSX.Element {
  return (
    <div className="space-y-14 mb-20">
      <div>
        <h3 className="text-3xl font-bold">Promotions</h3>
        <br />
        <ul className="flex gap-4">
          {DUMMY_CAKES.map((cake) => (
            <li className="w-full">
              <Card>
                <CardHeader>
                  <div className="rounded overflow-hidden">
                    <Link to={`${cake.id}`}>
                      <img
                        className="block mx-auto"
                        width={150}
                        height={150}
                        src={cake.image}
                        alt={cake.description}
                      />
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link to={`${cake.id}`}>
                    <CardTitle>{cake.title}</CardTitle>
                  </Link>
                  <CardDescription>{cake.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-3xl font-bold">Menu</h3>
        <br />
        <ul className="flex flex-col gap-4">
          {DUMMY_CAKES.map((cake) => (
            <li className="w-full">
              <Card>
                <CardHeader>
                  <div className="rounded overflow-hidden">
                    <Link to={`${cake.id}`}>
                      <img
                        width={150}
                        height={150}
                        src={cake.image}
                        alt={cake.description}
                      />
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link to={`${cake.id}`}>
                    <CardTitle>{cake.title}</CardTitle>
                  </Link>
                  <CardDescription>{cake.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
