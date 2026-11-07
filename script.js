// JUNPL4Y — Demo estática para presentar al cliente.
// Todos los titulares son ilustrativos y no corresponden a noticias verificadas.
const stories = [
  {id:1,category:'cine',title:'Las historias que cambian las reglas del cine',description:'Un recorrido por las nuevas formas de contar historias y conectar con la audiencia.'},
  {id:2,category:'series',title:'El streaming nunca había estado tan intenso',description:'Las plataformas y los fans están transformando la manera de descubrir series.'},
  {id:3,category:'cine',title:'El poder de las películas que no podemos dejar de ver',description:'Hay películas que trascienden la pantalla y se convierten en conversación.'},
  {id:4,category:'series',title:'Los universos de ficción que dominan la conversación',description:'Historias, personajes y mundos que generan comunidades en todo el planeta.'},
  {id:5,category:'tendencias',title:'La creatividad digital está entrando en otra dimensión',description:'Nuevas herramientas y tendencias reescriben las reglas de la cultura digital.'},
  {id:6,category:'dinero',title:'El negocio detrás de tus franquicias favoritas',description:'Exploramos los modelos de negocio que convierten las historias en fenómenos globales.'},
  {id:7,category:'cine',title:'El cine no ha muerto. Está evolucionando.',description:'Del espectáculo visual a las historias que conectan con una nueva generación.'},
  {id:8,category:'cine',title:'¿Por qué seguimos fascinados con la ciencia ficción?',description:'Mundos imaginarios para pensar en nuestro propio futuro.'},
  {id:9,category:'cine',title:'Las experiencias de cine que vale la pena vivir',description:'La magia de la sala sigue teniendo algo especial.'},
  {id:10,category:'cine',title:'Así se construyen los mundos imposibles del cine',description:'Creatividad, tecnología y talento detrás de cámaras.'},
  {id:11,category:'series',title:'La era dorada de las series: ¿qué nos mantiene enganchados?',description:'Las claves de las historias que nos hacen esperar el próximo episodio.'},
  {id:12,category:'series',title:'Personajes que se convierten en parte de nuestra historia',description:'Por qué conectamos emocionalmente con personajes ficticios.'},
  {id:13,category:'series',title:'El fenómeno de ver un episodio más... y otro más',description:'El ritmo narrativo de las series y su relación con las audiencias.'}
];
const $=selector=>document.querySelector(selector);
const $$=selector=>document.querySelectorAll(selector);
const modal=$('#storyModal');
function showStory(id){const s=stories.find(item=>item.id===Number(id));if(!s)return;$('#modalCategory').textContent=s.category.toUpperCase();$('#modalTitle').textContent=s.title;$('#modalDescription').textContent=s.description;$('#categoryDrawer').hidden=true;modal.hidden=false;document.body.style.overflow='hidden';}
function closeOverlays(){modal.hidden=true;$('#categoryDrawer').hidden=true;document.body.style.overflow='';}
$$('.article-open').forEach(el=>{el.addEventListener('click',()=>showStory(el.dataset.id));el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showStory(el.dataset.id)}})});
$$('.modal-close,.modal-return,[data-close]').forEach(el=>el.addEventListener('click',closeOverlays));
$$('.see-all').forEach(button=>button.addEventListener('click',()=>{const category=button.dataset.category;const titles={cine:'TODO SOBRE CINE',series:'TODO SOBRE SERIES',dinero:'TODO SOBRE DINERO'};$('#drawerTitle').textContent=titles[category]||'TODAS LAS NOTICIAS';$('#drawerArticles').innerHTML='';stories.filter(s=>s.category===category).forEach(s=>{const item=document.createElement('button');item.className='drawer-item';const meta=document.createElement('span');meta.textContent=s.category.toUpperCase()+' / JUNPL4Y';const heading=document.createElement('strong');heading.textContent=s.title;item.append(meta,heading);item.addEventListener('click',()=>showStory(s.id));$('#drawerArticles').append(item)});$('#categoryDrawer').hidden=false;document.body.style.overflow='hidden'}));
$$('.drawer-close,[data-close-drawer]').forEach(el=>el.addEventListener('click',closeOverlays));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeOverlays();closeSearch()}});
const nav=$('.main-nav');const menu=$('.menu-button');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});$$('.main-nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');$$('.main-nav a').forEach(link=>link.classList.remove('active'));a.classList.add('active')}));
const searchPanel=$('.search-panel');function closeSearch(){searchPanel.hidden=true;$('#searchInput').value='';$('#searchResults').innerHTML=''}$('.search-button').addEventListener('click',()=>{searchPanel.hidden=!searchPanel.hidden;if(!searchPanel.hidden)$('#searchInput').focus()});$('.close-search').addEventListener('click',closeSearch);$('#searchInput').addEventListener('input',e=>{const q=e.target.value.trim().toLocaleLowerCase('es');const list=$('#searchResults');list.innerHTML='';if(q.length<2)return;const results=stories.filter(s=>s.title.toLocaleLowerCase('es').includes(q)||s.category.includes(q)).slice(0,6);if(!results.length){list.textContent='No se encontraron noticias de ejemplo.';return}results.forEach(s=>{const button=document.createElement('button');button.className='search-result';button.textContent=s.category.toUpperCase()+' · '+s.title;button.addEventListener('click',()=>{closeSearch();showStory(s.id)});list.append(button)})});
$('#newsletterForm').addEventListener('submit',e=>{e.preventDefault();$('#newsletterMessage').textContent='¡Gracias! Esta es una demostración: el formulario todavía no envía ni guarda datos.';$('#newsletterForm').reset()});
