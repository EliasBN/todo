export default function sortItems(myitems) {
  myitems
    .sort(function(a, b) {
      if (
        a.content.toString().toLowerCase() > b.content.toString().toLowerCase()
      )
        return 1;
      if (
        a.content.toString().toLowerCase() < b.content.toString().toLowerCase()
      )
        return -1;
      return 0;
    })
    .map(
      item =>
        console.log(item.content) + "<div key={item.id}>{item.content}</div>"
    );
}
