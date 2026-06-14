(function () {
  const mkdocsShortcutKeys = new Set(["/", "?", "s", "n", "p"]);

  function isEditableTarget(target) {
    if (!(target instanceof Element)) {
      return false;
    }

    return Boolean(
      target.closest("input, textarea, select, [contenteditable='true']")
    );
  }

  document.addEventListener(
    "keydown",
    function (event) {
      if (
        event.isComposing ||
        event.ctrlKey ||
        event.altKey ||
        event.metaKey ||
        isEditableTarget(event.target)
      ) {
        return;
      }

      if (!mkdocsShortcutKeys.has(event.key.toLowerCase())) {
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();
    },
    true
  );
})();
