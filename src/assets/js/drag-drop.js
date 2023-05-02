document.addEventListener('DOMContentLoaded', function () {
  const tableBody = document.getElementById('table-body');
  let dragSrcElement = null;

  function handleDragStart(e) {
    dragSrcElement = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', ''); // Set an empty data to make it draggable in Firefox
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (this === dragSrcElement) return;
    this.classList.add('over');
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  function handleDragLeave() {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (dragSrcElement === this) return;

    const targetRowRect = this.getBoundingClientRect();
    const dropPosition = e.clientY - targetRowRect.top;

    // Remove the dragged row from its current position
    dragSrcElement.parentNode.removeChild(dragSrcElement);

    // Check if the drop position is in the lower half of the row
    if (dropPosition > targetRowRect.height / 2) {
      // Insert the dragged row after the row it was dropped on
      this.parentNode.insertBefore(dragSrcElement, this.nextSibling);
    } else {
      // Insert the dragged row before the row it was dropped on
      this.parentNode.insertBefore(dragSrcElement, this);
    }

    return false;
  }

  function handleDragEnd() {
    this.classList.remove('over');
  }

  function addDraggableEvents(element) {
    element.addEventListener('dragstart', handleDragStart, false);
    element.addEventListener('dragover', handleDragOver, false);
    element.addEventListener('dragleave', handleDragLeave, false);
    element.addEventListener('drop', handleDrop, false);
    element.addEventListener('dragend', handleDragEnd, false);
  }

  const rows = tableBody.querySelectorAll('.draggable');
  [].forEach.call(rows, addDraggableEvents);
});
