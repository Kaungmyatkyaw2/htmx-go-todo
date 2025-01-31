import Sortable from "sortablejs";

htmx.onLoad(function (content) {
  const sortables = content.querySelectorAll("#items");

  for (let i = 0; i < sortables.length; i++) {
    const sortable = sortables[i];
    new Sortable(sortable, {
      draggable: ".draggable",
      handle: ".handle",
    });
  }
});
