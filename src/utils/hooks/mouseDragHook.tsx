"client side";

export default function mouseDragHook(
  onDragChange: (deltaX: number) => void,
  onDragEnd: () => void,
  setResizing: (resizing: boolean) => void,
) {
  return {
    onMouseDown: (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
      // 2️⃣
      clickEvent.stopPropagation();
      setResizing(true);

      // 3️⃣
      const mouseMoveHandler = (moveEvent: MouseEvent) => {
        // 4️⃣
        const deltaX = moveEvent.screenX - clickEvent.screenX;
        onDragChange(deltaX);
      };

      // 5️⃣
      const mouseUpHandler = () => {
        document.removeEventListener("mousemove", mouseMoveHandler);
        setResizing(false);
        onDragEnd();
      };

      // 1️⃣
      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler, { once: true });
    },
  };
}
