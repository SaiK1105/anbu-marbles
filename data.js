// Product catalog — edit freely; images hotlinked from Unsplash for MVP.
const WHATSAPP_NUMBER = "919999999999"; // TODO: replace with AnbuMarbels' real number

const CATEGORIES = [
  { key: "Italian Marble", tag: "TIMELESS ELEGANCE", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop" },
  { key: "Indian Marble",  tag: "RICH HERITAGE",     img: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=900&auto=format&fit=crop" },
  { key: "Granite",        tag: "STRENGTH & STYLE",  img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=900&auto=format&fit=crop" },
  { key: "Tiles",          tag: "MODERN LIVING",     img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=900&auto=format&fit=crop" },
  { key: "Onyx & Exotics", tag: "BOLD STATEMENTS",   img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=900&auto=format&fit=crop" },
  { key: "Quartz",         tag: "EVERYDAY LUXURY",   img: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=900&auto=format&fit=crop" },
];

const PRODUCTS = [
  { id:"p1",  name:"Statuario Bianco",   type:"Italian Marble", finish:"Glossy", price:485, unit:"sq.ft", size:'8" slab', use:"Flooring · Walls",   img:"https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=900&auto=format&fit=crop" },
  { id:"p2",  name:"Carrara Mist",       type:"Italian Marble", finish:"Matte",  price:395, unit:"sq.ft", size:'6" slab', use:"Flooring · Vanity",  img:"https://images.unsplash.com/photo-1615971677499-5467cbab01c0?q=80&w=900&auto=format&fit=crop" },
  { id:"p3",  name:"Makrana White",      type:"Indian Marble",  finish:"Glossy", price:180, unit:"sq.ft", size:'6" slab', use:"Flooring · Temples", img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop" },
  { id:"p4",  name:"Rajasthan Green",    type:"Indian Marble",  finish:"Glossy", price:145, unit:"sq.ft", size:'5" slab', use:"Accent walls",       img:"https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=900&auto=format&fit=crop" },
  { id:"p5",  name:"Black Galaxy",       type:"Granite",        finish:"Glossy", price:220, unit:"sq.ft", size:'¾" slab', use:"Kitchen counters",   img:"https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=900&auto=format&fit=crop" },
  { id:"p6",  name:"Tan Brown",          type:"Granite",        finish:"Matte",  price:160, unit:"sq.ft", size:'¾" slab', use:"Counters · Stairs",  img:"https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?q=80&w=900&auto=format&fit=crop" },
  { id:"p7",  name:"Kashmir White",      type:"Granite",        finish:"Glossy", price:195, unit:"sq.ft", size:'¾" slab', use:"Counters · Floors",  img:"https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=900&auto=format&fit=crop" },
  { id:"p8",  name:"Calacatta Gold Tile",type:"Tiles",          finish:"Glossy", price:95,  unit:"sq.ft", size:"600×1200", use:"Floors · Walls",    img:"https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=900&auto=format&fit=crop" },
  { id:"p9",  name:"Slate Grey Matte",   type:"Tiles",          finish:"Matte",  price:68,  unit:"sq.ft", size:"600×600",  use:"Bath · Outdoor",    img:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=900&auto=format&fit=crop" },
  { id:"p10", name:"Terrazzo Ivory",     type:"Tiles",          finish:"Matte",  price:82,  unit:"sq.ft", size:"600×600",  use:"Floors · Café",     img:"https://images.unsplash.com/photo-1615800002234-05c4d488696c?q=80&w=900&auto=format&fit=crop" },
  { id:"p11", name:"Onyx Amber Backlit", type:"Onyx & Exotics", finish:"Glossy", price:850, unit:"sq.ft", size:"Custom",   use:"Feature walls",     img:"https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?q=80&w=900&auto=format&fit=crop" },
  { id:"p12", name:"Quartz Arctic",      type:"Quartz",         finish:"Matte",  price:310, unit:"sq.ft", size:"Custom",   use:"Counters",          img:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=900&auto=format&fit=crop" },
];
