export default function openNewNoteModal() {
  const newNoteBtn = document.querySelector(".opennewnotemodal");
  newNoteBtn.onclick = () => {
    document.querySelector(".menu").style.display = "block";
    document.querySelector(".closeNewNoteDialog").onclick = () => {
      document.querySelector(".menu").style.display = "none";
    };
  };
}
