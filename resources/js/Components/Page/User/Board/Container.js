import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Context } from "./ContextProvider";
import CanvasBoard from "./CanvasBoard";
import ControlBoard from "./ControlBoard";

const styles = {
  board: { width: 800, height: 600 },
  control: { width: 250, height: 600 },
};

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    backgroundColor: "rgba(255,255,255,1)",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const Board = ({ data }) => {

  const { state, setState } = React.useContext(Context);

  React.useEffect(() => {
    setState({
      ...state,
      background: data.backgrounds[0],
      gameId: data.game.id,
      data
    });
  }, [data]);

  return (
    <div className="flex rounded-md" style={{ height: 600 }}>
      <Scrollbars
        className="flex-grow"
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
      >
        <div style={styles.board}>
          <CanvasBoard />
        </div>
      </Scrollbars>
      <Scrollbars
        className="flex-shrink-0 bg-gray-900 text-gray-100"
        style={styles.control}
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
      >
        <ControlBoard />
      </Scrollbars>
    </div>
  );
};

export default Board;
