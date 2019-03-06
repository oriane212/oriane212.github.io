import "./styles.css";
import "./styles_med.css";

// get bounding rect for #projects
const projectsDiv = document.getElementById('projects');
const projectsDiv_Rect = projectsDiv.getBoundingClientRect();

const rootRect = document.getElementById('root').getBoundingClientRect();

// offset for x
let ox = 2;
if (rootRect.width > 564 ) {
  ox = 50;
}

const rectObjs = [
  {
    x: ox,
    y: 50,
    width: 100,
    height: 100,
    type: 'project',
    id: 'coffee-map',
    title: 'Coffee Map',
    caption: 'Map of coffee places',
    tools: 'ReactJS, Mapbox GL JS',
    link: 'https://github.com/oriane212/coffee-map',
    icon: [
      { el: 'circle', attributes: [['cx', ox+50], ['cy', 50+40], ['r', '4']] },
      { el: 'polygon', attributes: [['points', `${ox+46},90 ${ox+54},90, ${ox+50.5},105 ${ox+49.5},105`]] },
      { el: 'circle', attributes: [['cx', ox+60], ['cy', 125], ['r', '4']] },
      { el: 'polygon', attributes: [['points', `${ox+56},125 ${ox+64},125, ${ox+60.5},140 ${ox+59.5},140`]] },
      { el: 'circle', attributes: [['cx', ox+80], ['cy', 75], ['r', '4']] },
      { el: 'polygon', attributes: [['points', `${ox+76},75 ${ox+84},75, ${ox+80.5},90 ${ox+79.5},90`]] }
    ]
  },
  {
    x: ox,
    y: 200,
    width: 100,
    height: 100,
    type: 'project',
    id: 'my-reads',
    title: 'My Reads',
    caption: 'Bookshelves app',
    tools: 'ReactJS, React-Bootstrap',
    link: 'https://github.com/oriane212/myReads',
    icon: [
      { el: 'rect', attributes: [['x', 10+ox], ['y', 230], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '25']] },
      { el: 'rect', attributes: [['x', 30+ox], ['y', 230], ['rx', "2"], ['ry', "2"],['width', '15'], ['height', '25']] },
      { el: 'rect', attributes: [['x', 50+ox], ['y', 230], ['rx', "2"], ['ry', "2"],['width', '15'], ['height', '25']] }
    ]
  },
  {
    x: ox,
    y: 350,
    width: 100,
    height: 100,
    type: 'project',
    id: 'frogger',
    title: 'Frogger Game',
    caption: 'Star Wars themed game',
    tools: 'HTML, CSS, JS',
    link: 'https://github.com/oriane212/frogger',
    icon: [
      { el: 'circle', attributes: [['cx', 50+ox], ['cy', 300+40], ['r', '30']] },
      { el: 'circle', attributes: [['cx', 50+ox], ['cy', 300+135], ['r', '5']] }
    ]
  },
  {
    x: ox,
    y: 500,
    width: 100,
    height: 100,
    type: 'project',
    id: 'language-learning',
    title: 'Personalized Language Learning',
    caption: 'UX design for mobile app',
    tools: 'Balsamiq, Sketch, Flinto',
    link: 'https://github.com/oriane212/personalized-language-learning',
    icon: [
      { el: 'rect', attributes: [['x', 40+ox], ['y', 540], ['rx', "2"], ['ry', "2"],['width', '5'], ['height', '20']] },
      { el: 'rect', attributes: [['x', 50+ox], ['y', 540], ['rx', "2"], ['ry', "2"],['width', '10'], ['height', '20']] },
      { el: 'rect', attributes: [['x', 65+ox], ['y', 540], ['rx', "2"], ['ry', "2"],['width', '20'], ['height', '20']] }
    ]
  },
  {
    x: ox,
    y: 650,
    width: 100,
    height: 100,
    type: 'project',
    id: 'memory',
    title: 'Memory Game',
    caption: 'Web game of matching cards',
    tools: 'HTML, CSS, JS',
    link: 'https://github.com/oriane212/memory-game',
    icon: [
      { el: 'rect', attributes: [['x', 30+ox], ['y', 680], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '15']] },
      { el: 'rect', attributes: [['x', 30+ox], ['y', 700], ['rx', "2"], ['ry', "2"],['width', '15'], ['height', '15']] },
      { el: 'rect', attributes: [['x', 50+ox], ['y', 680], ['rx', "2"], ['ry', "2"],['width', '15'], ['height', '15']] },
      { el: 'rect', attributes: [['x', 50+ox], ['y', 700], ['rx', "2"], ['ry', "2"],['width', '15'], ['height', '15']] }
    ]
  }
];

function createSectionTitle(title) {
  let svgSection = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgSection.setAttribute('id', `${title}-title`);
  let sectionLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  sectionLine.classList.add('section-line');
  let sectionTitle = document.createElementNS("http://www.w3.org/2000/svg", "text");
  sectionTitle.classList.add('text_section_title');
  sectionTitle.textContent = title;
  if (rootRect.width < 565) {
    // draw horizontal
    svgSection.setAttribute('width', projectsDiv_Rect.width);
    svgSection.setAttribute('height', 20);
    sectionLine.setAttribute('x1', projectsDiv_Rect.width);
    sectionLine.setAttribute('x2', 110);
    sectionLine.setAttribute('y1', 20);
    sectionLine.setAttribute('y2', 20);
    sectionLine.setAttribute('stroke-dasharray', projectsDiv_Rect.width-110);
    sectionLine.setAttribute('stroke-dashoffset', projectsDiv_Rect.width-110);
    sectionTitle.setAttribute('x', 110);
    sectionTitle.setAttribute('y', 20);
  } else {
    // draw vertical
    svgSection.setAttribute('width', 20);
    svgSection.setAttribute('height', 1000);
    sectionLine.setAttribute('x1', 20);
    sectionLine.setAttribute('x2', 20);
    sectionLine.setAttribute('y1', 0);
    sectionLine.setAttribute('y2', 1000);
    sectionLine.setAttribute('stroke-dasharray', 1000);
    sectionLine.setAttribute('stroke-dashoffset', 1000);
    sectionTitle.setAttribute('x', 20);
    sectionTitle.setAttribute('y', 100);
    sectionTitle.setAttribute('transform', 'rotate(270 50, 132)');
  }
  // append line and title to svg
  svgSection.append(sectionLine, sectionTitle);
  // insert before projectsDiv
  document.querySelector('.track3').insertBefore(svgSection, projectsDiv);
}

function createProjects(rectObjs) {
  // map over the rectangle objects
  for (let ro of rectObjs) {

    // create group of SVG elements
    let svgGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgGroup.setAttribute('role', 'listitem');

    // create xml link
    let linkEl = document.createElementNS("http://www.w3.org/2000/svg", "a");
    linkEl.setAttribute('href', ro.link);
    linkEl.setAttribute('tabindex', '0');
    linkEl.setAttribute('id', ro.id);
    linkEl.classList.add('project');

    // create empty rect for smoother mouseenter styling
    let rect_empty = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect_empty.setAttribute('height', 120);
    rect_empty.setAttribute('width', 300)
    rect_empty.setAttribute('x', ox);
    rect_empty.setAttribute('y', ro.y-20);
    rect_empty.classList.add('project-rect');

    // create text for project
    // title
    let pTitle = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    pTitle.classList.add('text_title');
    
    if (ro.title.length > 20 && ox !== 50) {
      let title_split = ro.title.split(' ');
      // line 1
      let tspan1 = document.createElementNS("http://www.w3.org/2000/svg", 'tspan');
      tspan1.setAttribute('x', ro.x + ro.width + 10);
      tspan1.setAttribute('y', ro.y-15);
      tspan1.textContent = title_split[0];
      // line 2
      let tspan2 = document.createElementNS("http://www.w3.org/2000/svg", 'tspan');
      tspan2.setAttribute('x', ro.x + ro.width + 10);
      tspan2.setAttribute('y', ro.y);
      tspan2.textContent = `${title_split[1]} ${title_split[2]}`;
      pTitle.append(tspan1, tspan2);
    } else {
      pTitle.setAttribute('x', ro.x + ro.width + 10);
      pTitle.setAttribute('y', ro.y);
      pTitle.textContent = ro.title;
    }


    // caption
    let pCaption = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    pCaption.setAttribute('x', ro.x + ro.width + 10);
    pCaption.setAttribute('y', ro.y + 20);
    pCaption.classList.add('text_caption');
    pCaption.textContent = ro.caption;

    // tools
    let pTools = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    pTools.setAttribute('x', ro.x + ro.width + 10);
    pTools.setAttribute('y', ro.y + 40);
    pTools.classList.add('text_tools');
    pTools.textContent = ro.tools;

    // create rectangle
    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.classList.add("rect");
    rect.setAttribute("x", ro.x);
    rect.setAttribute("y", ro.y);
    rect.setAttribute("width", ro.width);
    rect.setAttribute("height", ro.height);

    /*
    // create image
    let image = document.createElementNS("http://www.w3.org/2000/svg", "image");
    image.setAttribute('href', 'profileHighContrast.jpeg');
    image.setAttribute('width', '100');
    image.setAttribute('height', '100');
    */

  let projectIcon = document.createElementNS("http://www.w3.org/2000/svg", "g");
  projectIcon.setAttribute('role', 'img');
  projectIcon.setAttribute('fill', 'white');
  
  if (ro.icon != null) {
    for (let icon of ro.icon) {
      let iconEl = document.createElementNS("http://www.w3.org/2000/svg", icon.el);
      for (let attribute of icon.attributes) {
        iconEl.setAttribute(attribute[0], attribute[1]);
      }
      projectIcon.appendChild(iconEl);
    }
  }

    // Construction lines
    // create the left vertical line
    let left = document.createElementNS("http://www.w3.org/2000/svg", "line");
    left.classList.add("v-line");
    left.setAttribute("x1", ro.x);
    left.setAttribute("x2", ro.x);
    left.setAttribute("y1", ro.y - 50);
    left.setAttribute("y2", ro.y + ro.height);
    // create the right vertical line
    let right = document.createElementNS("http://www.w3.org/2000/svg", "line");
    right.classList.add("v-line");
    right.setAttribute("x1", ro.x + ro.width);
    right.setAttribute("x2", ro.x + ro.width);
    right.setAttribute("y1", ro.y + ro.height + 50);
    right.setAttribute("y2", ro.y);
    // create the top horizontal line
    let top = document.createElementNS("http://www.w3.org/2000/svg", "line");
    top.classList.add("h-line");
    top.setAttribute("x1", ro.x - 50);
    top.setAttribute("x2", ro.x + ro.width + 300);
    top.setAttribute("y1", ro.y);
    top.setAttribute("y2", ro.y);
    // create the bottom horizontal line
    let bottom = document.createElementNS("http://www.w3.org/2000/svg", "line");
    bottom.classList.add("h-line");
    bottom.setAttribute("x1", ro.x + ro.width + 300);
    bottom.setAttribute("x2", ro.x);
    bottom.setAttribute("y1", ro.y + ro.height);
    bottom.setAttribute("y2", ro.y + ro.height);

    // Corner lines
    // create the top left corner vertical line
    /*
    let TLcorner_v = document.createElementNS("http://www.w3.org/2000/svg", "line");
    TLcorner_v.classList.add("corner");
    TLcorner_v.setAttribute("x1", ro.x);
    TLcorner_v.setAttribute("x2", ro.x);
    TLcorner_v.setAttribute("y1", ro.y);
    TLcorner_v.setAttribute("y2", ro.y + 20);
    // create the top left corner horiztonal line
    let TLcorner_h = document.createElementNS("http://www.w3.org/2000/svg", "line");
    TLcorner_h.classList.add("corner");
    TLcorner_h.setAttribute("x1", ro.x);
    TLcorner_h.setAttribute("x2", ro.x + 20);
    TLcorner_h.setAttribute("y1", ro.y);
    TLcorner_h.setAttribute("y2", ro.y);
    // create the bottom right corner vertical line
    let BRcorner_v = document.createElementNS("http://www.w3.org/2000/svg", "line");
    BRcorner_v.classList.add("corner");
    BRcorner_v.setAttribute("x1", ro.x + ro.width);
    BRcorner_v.setAttribute("x2", ro.x + ro.width);
    BRcorner_v.setAttribute("y1", ro.y + ro.height);
    BRcorner_v.setAttribute("y2", ro.y + ro.width - 20);
    // create the bottom right corner horiztonal line
    let BRcorner_h = document.createElementNS("http://www.w3.org/2000/svg", "line");
    BRcorner_h.classList.add("corner");
    BRcorner_h.setAttribute("x1", ro.x + ro.width);
    BRcorner_h.setAttribute("x2", ro.x + ro.width - 20);
    BRcorner_h.setAttribute("y1", ro.y + ro.height);
    BRcorner_h.setAttribute("y2", ro.y + ro.height);
  */

    // add event listeners to each project link for focus styling
    rect_empty.addEventListener('mouseenter', onProjectFocus);
    rect_empty.addEventListener('mouseout', offProjectFocus);

    linkEl.addEventListener('focus', onProjectFocus);
    linkEl.addEventListener('focusout', offProjectFocus);

    // append all SVG elements to link el
    linkEl.append(pTitle, pCaption, pTools, rect, projectIcon, rect_empty);
    
    // note: not included above: TLcorner_v, TLcorner_h, BRcorner_v, BRcorner_h
    svgGroup.append(linkEl, left, right, top, bottom);
    gList.append(svgGroup);
  }
}

function onProjectFocus() {
  if (event.type === 'mouseenter') {
    event.target.parentNode.classList.add('project-focus');
  } else {
    event.target.classList.add('project-focus');
  }
}

function offProjectFocus() {
  console.log(event.target);
  if (event.type === 'mouseout') {
    event.target.parentNode.classList.remove('project-focus');
  } else {
    event.target.classList.remove('project-focus');
  }
}

let svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// make svg traversable
svgEl.setAttribute('role', 'group');
// set title
svgEl.setAttribute('aria-labelledby', 'projects-title');


// store width and height of projectsDiv to set size for canvas
svgEl.setAttribute('width', projectsDiv_Rect.width);
const calc_height = 200*(rectObjs.length);
svgEl.setAttribute('height', calc_height);

let gList = document.createElementNS("http://www.w3.org/2000/svg", "g");
gList.setAttribute('role', 'list');


function addToDOM(container) {
  createHeaderLines();
  createSectionTitle('projects');
  setTimeout(function(){ 
    createSVGelements(rectObjs); 
  }, 3000);
}

function createSVGelements(rectObjs) {
  createProjects(rectObjs);
  svgEl.append(gList);
  projectsDiv.append(svgEl);
}

function createHeaderLines() { 
  const header = document.querySelector('header');

  // insert a line before track2
  const track2 = document.querySelector('.track2');
  let svgLine2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgLine2.setAttribute('width', rootRect.width);
  svgLine2.setAttribute('height', '2');
  let line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line2.classList.add("header-line");
  line2.setAttribute("x1", (rootRect.width-100));
  line2.setAttribute("x2", '0');
  line2.setAttribute("y1", '0');
  line2.setAttribute("y2", '0');
  line2.setAttribute('stroke-dasharray', rootRect.width-100);
  line2.setAttribute('stroke-dashoffset', rootRect.width-100);
  svgLine2.append(line2);

  header.appendChild(svgLine2);

  // insert a line before toptrack
  let svgLine1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgLine1.setAttribute('width', rootRect.width);
  svgLine1.setAttribute('height', '2');
  let line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line1.classList.add("header-line");
  line1.setAttribute("x1", '100');
  line1.setAttribute("x2", (rootRect.width));
  line1.setAttribute("y1", '0');
  line1.setAttribute("y2", '0');
  line1.setAttribute('stroke-dasharray', rootRect.width-100);
  line1.setAttribute('stroke-dashoffset', rootRect.width-100);
  svgLine1.append(line1);

  header.insertBefore(svgLine1, track2);
}

addToDOM(rectObjs);
