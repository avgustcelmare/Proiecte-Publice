const testimonials = [
  {
    name: "Sabina C.",
    photoUrl: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8fDA%3D",
    text: "Nu pot spune suficient despre Mara. Mara m-a ajutat cu adevărat să-mi recapăt încrederea în mine.",
  },
  {
    name: "Vlad M.",
    photoUrl: "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Întotdeauna am fost impresionat de dedicarea Mariei de a răspândi bunătatea și pozitivitatea. Prezența ei întruchipează cu adevărat căldură și compasiune, ceea ce face o bucurie să recomand o persoană atât de nobilă.",
  },
  {
    name: "Camelia I.",
    photoUrl: "https://images.unsplash.com/photo-1464863979621-258859e62245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHdvbWFufGVufDB8fDB8fHww",
    text: "Mara m-a ajutat să dobândesc liniștea sufletească. Acum pot să-mi parcurg sarcinile zilnice cu ușurință și eficiență. O recomand pe Mara tuturor celor care doresc să își eficientizeze procesele de lucru.",
  },
  {
    name: "Geroge L.",
    photoUrl: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    text: "Sunt extrem de impresionat de Mara pentru bunătatea ei excepțională față de cei din jur. Calitatea timpului petrecut cu ea și grija de care dă dovadă sunt cu adevărat remarcabile. O recomand călduros pe Mara oricui caută prezența unui om care prețuiește compasiunea și bunătatea.",
  },
  {
    name: "Cristina V.",
    photoUrl: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Sunt profund recunoscătoare pentru legăturile valoroase pe care le-am făcut prin intermediul Marei. Angajamentul ei de a promova prieteniile autentice este cu adevărat admirabil.",
  },
  {
    name: "Adriana D.",
    photoUrl: "https://images.unsplash.com/photo-1641044225007-225e8d892b6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0JTIwd29tYW58ZW58MHx8MHx8fDA%3D",
    text: "Capacitatea Mariei de a ajuta oamenii mi-a depășit așteptările. Strategiile practice pe care le-am învățat de la ea, au fost de neprețuit în dezvoltarea mea profesională. O recomand pe Mara tuturor celor care doresc să își îmbunătățească abilitățile de organizare.",
  }
];

const imgEl = document.querySelector("img");

const textEl = document.querySelector(".text");

const usernameEl = document.querySelector(".username");

let index = 0;

updateTestimonial();

function updateTestimonial () {
  const {name, photoUrl, text} = testimonials[index];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  index++;
  if (index === testimonials.length) {
    index = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 9000);
};