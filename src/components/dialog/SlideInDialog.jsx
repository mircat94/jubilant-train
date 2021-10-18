import Dialog from "@material-ui/core/Dialog";

import Slide from "@material-ui/core/Slide";

import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  children,

  isOpen,

  handleClose,
}) {
  console.log(isOpen);

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {children}
      </Dialog>
    </div>
  );
}
