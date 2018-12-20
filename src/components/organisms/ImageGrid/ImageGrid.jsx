import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

export const ImageGrid = ({ data }) => {
  console.log(data);
  return (
    <GridList cellHeight={1000} cellWidth={350} cols={2}>
      {data.map(image => (
        <GridListTile key={image.img} cols={image.cols || 1}>
          <img src={image.img} alt={image.title} />
        </GridListTile>
      ))}
    </GridList>
  );
};
