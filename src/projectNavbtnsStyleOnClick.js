export default function projectNavBtnColor(){
    const projectBtns = document.querySelectorAll('.projectBtn');
    projectBtns.forEach(btn => {
        btn.style.backgroundColor = '#dfdada';
        btn.style.fontSize = '12px';
        btn.style.fontWeight = '400';
        btn.style.borderBottom = '2px solid black';
        btn.addEventListener('click', (e) => {
            projectBtns.forEach(btn => {
                btn.style.backgroundColor = '#dfdada'
                btn.style.fontSize = '12px';
                btn.style.fontWeight = '400';
                btn.style.borderBottom = '2px solid black';
            })
            e.target.style.backgroundColor = 'white';
            e.target.style.fontSize = '14px';
            e.target.style.fontWeight = '800';
            e.target.style.borderBottom = '2px solid white'
        })
    })
};