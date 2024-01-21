import { Fragment } from "react";
import { useParams } from "react-router-dom";

export const Component = function CakeDetails(): JSX.Element {
  const { id } = useParams();

  return <Fragment>CakeDetails: {id}</Fragment>;
};
