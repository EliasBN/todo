const PopupOnFocus = () => (
  <Popup
    trigger={<input type="text" placeholder="start typing ... " />}
    on="focus"
    position="top left"
    closeOnDocumentClick
  >
    <span> On focus popup event </span>
  </Popup>
);

render(<PopupOnFocus />);
