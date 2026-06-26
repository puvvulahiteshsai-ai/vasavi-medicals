export const svcItems = [
  { icon:'fa-prescription-bottle-medical', ic:'#1B5EAB', ib:'#EBF3FB', title:'Prescription Medicines',    desc:'Dispensing of doctor-prescribed medicines. Bring your prescription for accurate, prompt service.' },
  { icon:'fa-pills',                        ic:'#16763E', ib:'#E8F5EE', title:'Over-the-Counter Products', desc:'Common medicines for pain, fever, cough, cold, digestion, and first aid.' },
  { icon:'fa-leaf',                         ic:'#0B7FA8', ib:'#E4F4FA', title:'Health Supplements',        desc:'Vitamins, minerals, protein supplements, and nutritional products from established brands.' },
  { icon:'fa-pump-soap',                    ic:'#6B3DB0', ib:'#F1ECFA', title:'Personal Care',             desc:'Skin care, hair care, oral hygiene, baby care, and daily wellness products.' },
  { icon:'fa-kit-medical',                  ic:'#B83030', ib:'#FAECEC', title:'Medical Devices',           desc:'BP monitors, glucometers, thermometers, bandages, and home healthcare equipment.' },
  { icon:'fa-eye',                          ic:'#B86A0A', ib:'#FAF3E6', title:'Specialty Categories',      desc:'Eye drops, ear drops, injections, skin lotions, creams, and specialty pharmaceuticals.' },
]

export const galItems = [
  { src:'/images/storefront.jpg',    alt:'Sri Vasavi Medical Hall storefront sign on Habsiguda Main Road near the metro',  cap:'Storefront',          cls:'gal-wide' },
  { src:'/images/counter.jpg',       alt:'Pharmacist at the dispensing counter with fully stocked medicine shelves',        cap:'Dispensing Counter',  cls:'' },
  { src:'/images/interior-wide.jpg', alt:'Wide interior view showing medicine aisles with labeled category bins',          cap:'Store Interior',      cls:'' },
  { src:'/images/shelves-tall.jpg',  alt:'Customers browsing the medicine shelves at Sri Vasavi Medical Hall',             cap:'Customers & Shelves', cls:'gal-tall' },
  { src:'/images/staff-working.jpg', alt:'Staff and customers inside the pharmacy with ceiling stock storage visible',     cap:'Staff at Work',       cls:'gal-tall' },
]

export const cdItems = [
  { ic:'#1B5EAB', ib:'#EBF3FB', icon:'fa-phone',        label:'Phone',   val:'9849665224',           href:'tel:09849665224', note:'[ADDITIONAL_CONTACT_INFO]' },
  { ic:'#16763E', ib:'#E8F5EE', icon:'fa-location-dot', label:'Address', val:'Near Whitus Hospitals', href:null,             note:'Main Road, Habsiguda, Hyderabad — 500 007' },
  { ic:'#0B7FA8', ib:'#E4F4FA', icon:'fa-clock',        label:'Hours',   val:'8:30 AM – 11:30 PM',   href:null,             note:'Open every day including Sundays and public holidays' },
]

export const reviews = [
  {
    name: 'Sai Jasim',
    initials: 'SJ',
    color: '#4285F4',
    date: '3 months ago',
    stars: 5,
    text: "Recently I discovered Sri Vasavi Medical Pharmacy that has opened near Habsiguda X road. I have had the opportunity to use their service and I just wanted to say how delighted I am. Not only is the Pharmacist knowledgeable and helpful — but he is also extremely caring and kind! I'm so happy to live in a community that attracts this kind of business owner! And also thank you Mohsin!",
    verified: true,
  },
  {
    name: 'Ravi Prakash Jamalpur',
    initials: 'RJ',
    color: '#16763E',
    date: '3 months ago',
    stars: 5,
    text: 'I have been visiting this shop for the past 20 years to purchase medicines, and even today I continue to rely on them for my medical needs. It has been a trustworthy and reliable pharmacy for over 25 years. The service provided is excellent, and the staff are courteous, professional, and supportive. Their commitment and teamwork truly reflect the strong efforts of the Vasavi team. I strongly recommend this shop to everyone in the nearby area for their medical requirements.',
    verified: true,
  },
  {
    name: 'Golla Mani',
    initials: 'GM',
    color: '#B86A0A',
    date: '3 months ago',
    stars: 5,
    text: 'Easily the most affordable medical shop in the area. They offer consistent discounts on most brands and always suggest high-quality medicines with good discount. Transparent billing and no hidden costs. Thank you Mohsin!',
    verified: true,
  },
]
