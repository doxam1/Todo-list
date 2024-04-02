export default function openNewNoteModal() {
  const newNoteBtn = document.querySelector(".opennewnotemodal");
  newNoteBtn.onclick = () => {
    document.querySelector(".menu").style.left = "5%";
    document.querySelector(".closeNewNoteDialog").onclick = () => {
      document.querySelector(".menu").style.left = "-400px";
    };
  };
}
