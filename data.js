// ANBU Marbles catalog — real products from the showroom's Instagram (dealer catalogue imagery).
// Prices are indicative ₹/sq.ft — confirm with ANBU before quoting. Edit freely.
const WHATSAPP_NUMBER = "919842435061"; // ANBU Marble World Exports — A. Anburaja

const CATEGORIES = [
  { key: "Marble Look",     tag: "TIMELESS ELEGANCE",  img: "assets/img/burkina-gold.jpg" },
  { key: "Granite Look",    tag: "STRENGTH & STYLE",   img: "assets/img/mercury-galaxy.jpg" },
  { key: "Statement Gloss", tag: "BOLD STATEMENTS",    img: "assets/img/buralo-aqua.jpg" },
  { key: "Wall Cladding",   tag: "ELEVATION & FACADE", img: "assets/img/monolith-fossil.jpg" },
  { key: "Terrazzo",        tag: "MODERN LIVING",      img: "assets/img/art-cube-black.jpg" },
  { key: "Sanitaryware",    tag: "EVERYDAY COMFORT",   img: "assets/img/creta-closet.jpg" },
];

const PRODUCTS = [
  { id:"p1",  name:"Burkina Gold",      type:"Marble Look",     finish:"Glossy",     price:85, unit:"sq.ft", size:"600×1200", use:"Flooring · Walls",     img:"assets/img/burkina-gold.jpg" },
  { id:"p2",  name:"Roven Grey",        type:"Marble Look",     finish:"Glossy",     price:80, unit:"sq.ft", size:"600×1200", use:"Flooring · Feature",   img:"assets/img/roven-grey.jpg" },
  { id:"p3",  name:"Midnight Sapphire", type:"Marble Look",     finish:"Glossy",     price:95, unit:"sq.ft", size:"600×1200", use:"Feature walls",        img:"assets/img/midnight-sapphire.jpg" },
  { id:"p4",  name:"Charle Slate Blue", type:"Marble Look",     finish:"Glossy",     price:85, unit:"sq.ft", size:"600×1200", use:"Flooring · Walls",     img:"assets/img/charle-slate-blue.jpg" },
  { id:"p5",  name:"Bergos Ivory",      type:"Marble Look",     finish:"Glossy",     price:75, unit:"sq.ft", size:"600×1200", use:"Flooring",             img:"assets/img/bergos-ivory.jpg" },
  { id:"p6",  name:"French Copper",     type:"Marble Look",     finish:"Glossy",     price:85, unit:"sq.ft", size:"600×1200", use:"Flooring · Walls",     img:"assets/img/french-copper.jpg" },
  { id:"p7",  name:"Mercury Galaxy",    type:"Granite Look",    finish:"Matte",      price:65, unit:"sq.ft", size:"600×600",  use:"Flooring · Outdoor",   img:"assets/img/mercury-galaxy.jpg" },
  { id:"p8",  name:"Forest Green",      type:"Granite Look",    finish:"Matte",      price:70, unit:"sq.ft", size:"600×1200", use:"Flooring · Outdoor",   img:"assets/img/forest-green.jpg" },
  { id:"p9",  name:"Lakingo Black",     type:"Statement Gloss", finish:"High Gloss", price:95, unit:"sq.ft", size:"600×1200", use:"Feature · Flooring",   img:"assets/img/lakingo-black.jpg" },
  { id:"p10", name:"Buralo Aqua",       type:"Statement Gloss", finish:"High Gloss", price:95, unit:"sq.ft", size:"600×1200", use:"Feature walls",        img:"assets/img/buralo-aqua.jpg" },
  { id:"p11", name:"Art Cube Black",    type:"Terrazzo",        finish:"High Gloss", price:75, unit:"sq.ft", size:"600×600",  use:"Flooring · Retail",    img:"assets/img/art-cube-black.jpg" },
  { id:"p12", name:"Monolith Fossil",   type:"Wall Cladding",   finish:"Matte",      price:60, unit:"sq.ft", size:"300×600",  use:"Elevation · Facade",   img:"assets/img/monolith-fossil.jpg" },
  { id:"p13", name:"Linea Wenge",       type:"Wall Cladding",   finish:"Fluted",     price:65, unit:"sq.ft", size:"300×600",  use:"Elevation · Accent",   img:"assets/img/linea-wenge.jpg" },
  { id:"p14", name:"Creta One-Piece Closet", type:"Sanitaryware", finish:"Ceramic White", price:4500, unit:"piece", size:"One-piece", use:"Bathroom", img:"assets/img/creta-closet.jpg" },
];
