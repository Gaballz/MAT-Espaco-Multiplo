// menu mobile
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// marca visualmente o dia de hoje no horário de funcionamento
(function markToday(){
  const rows = document.querySelectorAll('#hoursList .hours-row');
  const day = new Date().getDay(); // 0 = domingo, 6 = sábado
  let index;
  if (day === 0) index = 2;        // domingo
  else if (day === 6) index = 1;   // sábado
  else index = 0;                  // seg-sex
  if (rows[index]) {
    rows[index].classList.add('today');
    rows[index].querySelector('span').insertAdjacentHTML('afterbegin', '<span class="dot"></span>');
  }
})();

// ilustração de "constelação" no hero — pontos coloridos ligados por linhas,
// remetendo à ideia de multiplicidade e vínculos
(function drawConstellation(){
  const svg = document.getElementById('constellation');
  const ns = 'http://www.w3.org/2000/svg';
  const colors = ['#d0503a', '#d99c2b', '#4c8a63', '#3b6f9e', '#c15b83'];
  const points = [
    {x:150, y:60}, {x:230, y:110}, {x:210, y:200},
    {x:110, y:230}, {x:60, y:140}, {x:150, y:150}
  ];
  const edges = [[0,5],[1,5],[2,5],[3,5],[4,5],[0,1],[1,2],[3,4]];

  edges.forEach(([a,b]) => {
    const line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', points[a].x);
    line.setAttribute('y1', points[a].y);
    line.setAttribute('x2', points[b].x);
    line.setAttribute('y2', points[b].y);
    line.setAttribute('stroke', '#ccc7bf');
    line.setAttribute('stroke-width', '1.5');
    svg.appendChild(line);
  });

  points.forEach((p, i) => {
    const circle = document.createElementNS(ns, 'circle');
    circle.setAttribute('cx', p.x);
    circle.setAttribute('cy', p.y);
    circle.setAttribute('r', i === points.length - 1 ? 10 : 8);
    circle.setAttribute('fill', i === points.length - 1 ? '#2b2a28' : colors[i % colors.length]);
    svg.appendChild(circle);
  });
})();
