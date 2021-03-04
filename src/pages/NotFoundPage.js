import React from "react";
import { Result, Button } from "antd";

const NotFoundPage = () => {
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Lo sentimos no encontramos la pelicula, intenta denuevo"
      />
      <Button type="link">Volver al inicio</Button>
    </>
  );
};
export default NotFoundPage;
